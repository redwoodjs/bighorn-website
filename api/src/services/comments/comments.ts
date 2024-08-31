import type {
  CommentRelationResolvers,
  CommentThreadRelationResolvers,
  MutationResolvers,
  QueryResolvers,
} from 'types/graphql'

import { ForbiddenError, ValidationError } from '@redwoodjs/graphql-server'

import { ROLES } from 'src/lib/auth'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { mailer } from 'src/lib/mailer'
import { sendNewCommentSlackNotification } from 'src/lib/slack'
import { CommentAcknowledged } from 'src/mail/CommentAcknowledged/CommentAcknowledged'
import { NewReply } from 'src/mail/NewReply/NewReply'

export const commentThreads: QueryResolvers['commentThreads'] = async ({
  upgradeGuide,
}) => {
  return db.commentThread.findMany({
    where: {
      upgradeGuide,
    },
  })
}

export const createComment: MutationResolvers['createComment'] = async ({
  input,
}) => {
  // Confirm the author
  if (!input.authorId) {
    throw new ForbiddenError('You must be logged in to comment')
  }
  const author = await db.user.findUnique({
    where: {
      id: input.authorId,
    },
    select: {
      id: true,
      name: true,
      role: {
        select: {
          id: true,
        },
      },
      email: true,
    },
  })
  if (!author) {
    throw new ForbiddenError('You must be logged in to comment')
  }

  // Confirm the thread
  let threadId = input.threadId
  let isReply = false
  if (!threadId) {
    // If no threadId is provided, create a new thread
    const thread = await db.commentThread.create({
      data: {
        upgradeGuide: input.upgradeGuide,
      },
      select: {
        id: true,
      },
    })
    threadId = thread.id
  } else {
    // Validate the threadId
    const thread = await db.commentThread.findUnique({
      where: {
        id: threadId,
      },
      select: {
        id: true,
        upgradeGuide: true,
      },
    })
    if (!thread) {
      throw new ValidationError('Invalid thread')
    }
    if (thread.upgradeGuide !== input.upgradeGuide) {
      throw new ValidationError('Invalid thread')
    }
    isReply = true
  }

  // Create the comment
  const comment = await db.comment.create({
    data: {
      comment: input.comment,
      authorId: input.authorId,
      commentThreadId: threadId,
    },
  })

  // Subscribe the author to updates if requested
  if (input.subscribeAuthorToUpdates) {
    await db.subscribeUserToCommentThread.create({
      data: {
        userId: input.authorId,
        threadId,
      },
    })
  }

  const commentLink = `https://redwoodjs.com/upgrade/${input.upgradeGuide}#comment_${comment.id}`

  try {
    await sendNewCommentSlackNotification({
      isReply,
      commentLink,
      comment: input.comment,
      upgradeGuide: input.upgradeGuide,
    })
  } catch (error) {
    logger.error('Failed to send slack notification', error)
  }

  try {
    await mailer.send(CommentAcknowledged({ comment: comment.comment }), {
      to: {
        name: author.name,
        address: author.email,
      },
      subject: 'RedwoodJS Comment Acknowledged',
    })
  } catch (error) {
    logger.error('Failed to send email acknowledgement', error)
  }

  if (isReply) {
    const usersToNotify = await db.subscribeUserToCommentThread.findMany({
      where: {
        threadId,
        userId: {
          not: input.authorId,
        },
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    })
    const uniqueUsersToNotify = []
    for (const user of usersToNotify) {
      if (!uniqueUsersToNotify.some((u) => u.id === user.user.id)) {
        uniqueUsersToNotify.push(user.user)
      }
    }

    await Promise.allSettled(
      uniqueUsersToNotify.map(async (user) => {
        try {
          await mailer.send(NewReply({ commentLink }), {
            to: {
              name: user.name,
              address: user.email,
            },
            subject: 'RedwoodJS New Reply',
          })
        } catch (error) {
          logger.error('Failed to send email notification', error)
        }
      })
    )
  }

  return {
    authorId: author.id,
    authorName: author.name,
    authorRole: author.role.id,
    ...comment,
  }
}

export const updateCommentContent: MutationResolvers['updateCommentContent'] =
  async ({ id, content }) => {
    // Restrict editing to only the author or an admin
    const admins = await db.user.findMany({
      where: {
        role: {
          id: ROLES.admin.id,
        },
      },
      select: {
        id: true,
      },
    })
    const commentAuthor = await db.comment.findUniqueOrThrow({
      where: {
        id,
      },
      select: {
        authorId: true,
      },
    })

    const currentUserId = context.currentUser?.id
    const canEdit =
      currentUserId === commentAuthor.authorId ||
      admins.some((admin) => admin.id === currentUserId)
    if (!canEdit) {
      throw new ForbiddenError('You are not authorized to edit this comment')
    }

    const comment = await db.comment.update({
      where: { id },
      data: {
        comment: content,
      },
      include: {
        author: {
          include: {
            role: {
              select: {
                id: true,
              },
            },
          },
        },
      },
    })

    return {
      authorId: comment.authorId,
      authorName: comment.author.name,
      authorRole: comment.author.role.id,
      ...comment,
    }
  }

export const addLike: MutationResolvers['addLike'] = async ({ commentId }) => {
  // Confirm the author
  if (!context.currentUser) {
    throw new ForbiddenError('You must be logged in to like a comment')
  }

  // Confirm user exists
  const user = await db.user.findUnique({
    where: {
      id: context.currentUser.id,
    },
    select: {
      id: true,
    },
  })
  if (!user) {
    throw new ForbiddenError('You must be logged in to like a comment')
  }

  // Confirm the comment
  const comment = await db.comment.findUnique({
    where: {
      id: commentId,
    },
    select: {
      id: true,
    },
  })
  if (!comment) {
    throw new ValidationError('Invalid comment')
  }

  // Confirm the like does not already exist
  const likeExists = await db.like.findFirst({
    where: {
      commentId,
      userId: user.id,
    },
  })
  if (likeExists) {
    throw new ValidationError('You have already liked this comment')
  }

  // Create the like
  const like = await db.like.create({
    data: {
      commentId,
      userId: user.id,
    },
  })

  return like
}

export const removeLike: MutationResolvers['removeLike'] = async ({
  commentId,
}) => {
  // Confirm the author
  if (!context.currentUser) {
    throw new ForbiddenError('You must be logged in to like a comment')
  }

  // Confirm user exists
  const user = await db.user.findUnique({
    where: {
      id: context.currentUser.id,
    },
    select: {
      id: true,
    },
  })
  if (!user) {
    throw new ForbiddenError('You must be logged in to like a comment')
  }

  // Confirm the comment
  const comment = await db.comment.findUnique({
    where: {
      id: commentId,
    },
    select: {
      id: true,
    },
  })
  if (!comment) {
    throw new ValidationError('Invalid comment')
  }

  // Delete the like
  const like = await db.like.deleteMany({
    where: {
      commentId,
      userId: user.id,
    },
  })

  return like[0]
}

export const CommentThread: CommentThreadRelationResolvers = {
  comments: async (_obj, { root }) => {
    const comments = await db.comment.findMany({
      where: {
        commentThreadId: root.id,
      },
      orderBy: {
        createdAt: 'asc',
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            role: {
              select: {
                id: true,
              },
            },
          },
        },
      },
    })

    return comments.map((comment) => {
      return {
        authorId: comment.author.id,
        authorName: comment.author.name,
        authorRole: comment.author.role.id,
        ...comment,
      }
    })
  },
}

export const Comment: CommentRelationResolvers = {
  CommentThread: async (_obj, { root }) => {
    return db.commentThread.findUnique({
      where: {
        id: root.commentThreadId,
      },
    })
  },
  Like: async (_obj, { root }) => {
    return db.like.findMany({
      where: {
        commentId: root.id,
      },
    })
  },
}
