import type {
  QueryResolvers,
  MutationResolvers,
  CommentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { mailer } from 'src/lib/mailer'
import { sendNewCommentSlackNotification } from 'src/lib/slack'
import { CommentAcknowledged } from 'src/mail/CommentAcknowledged/CommentAcknowledged'

export const comments: QueryResolvers['comments'] = () => {
  return db.comment.findMany()
}

export const comment: QueryResolvers['comment'] = ({ id }) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const commentsByUpgrade: QueryResolvers['commentsByUpgrade'] = ({
  upgradeGuide,
}) => {
  return db.comment.findMany({
    where: {
      upgradeGuide,
      parentCommentId: null, // Exclude comments with a parentCommentId
    },
  })
}

export const createComment: MutationResolvers['createComment'] = async ({
  input,
  subscribeToUpdates,
}) => {
  const createdComment = await db.comment.create({
    data: input,
  })
  const isReply = input.parentCommentId ? true : false

  if (subscribeToUpdates) {
    await db.subscribeUserToComment.create({
      data: {
        user: { connect: { id: input.authorId } },
        comment: { connect: { id: createdComment.id } },
      },
    })

    // Send an email to the user
    try {
      const author = await db.user.findUniqueOrThrow({
        where: { id: input.authorId },
        select: {
          email: true,
        },
      })
      await mailer.send(CommentAcknowledged({ comment: input.comment }), {
        to: author.email,
        subject: 'RedwoodJS Comment Acknowledged',
      })
    } catch (error) {
      logger.error('Failed to send email', error)
    }
  }

  // Send a slack notification to the core team
  try {
    await sendNewCommentSlackNotification({
      isReply,
      comment: input.comment,
      upgradeGuide: input.upgradeGuide,
      commentLink: `https://redwoodjs.com/upgrade/${input.upgradeGuide}#comment_${createdComment.id}`,
    })
  } catch (error) {
    logger.error('Failed to send slack message', error)
  }

  // We send emails to any users who wanted to be notified of replies
  if (isReply) {
    //
  }

  return createdComment
}

export const updateComment: MutationResolvers['updateComment'] = ({
  id,
  input,
}) => {
  return db.comment.update({
    data: input,
    where: { id },
  })
}

export const deleteComment: MutationResolvers['deleteComment'] = ({ id }) => {
  return db.comment.delete({
    where: { id },
  })
}

export const Comment: CommentRelationResolvers = {
  author: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).author()
  },
  parentComment: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).parentComment()
  },
  Comments: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).Comments()
  },
  Like: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).Like()
  },
}
