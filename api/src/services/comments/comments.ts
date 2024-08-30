import type {
  QueryResolvers,
  MutationResolvers,
  CommentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { sendNewCommentSlackNotification } from 'src/lib/slack'

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
  // is subscribeUserToComment set? (should be a boolean)
  const createdComment = await db.comment.create({
    data: input,
  })

  if (subscribeToUpdates) {
    await db.subscribeUserToComment.create({
      data: {
        user: { connect: { id: input.authorId } },
        comment: { connect: { id: createdComment.id } },
      },
    })
    // Send an email to the user
  }

  // Send a slack notification to the core team
  try {
    await sendNewCommentSlackNotification({
      isReply: input.parentCommentId ? true : false,
      comment: input.comment,
      upgradeGuide: input.upgradeGuide,
      commentLink: `https://redwoodjs.com/upgrade/${input.upgradeGuide}#comment_${createdComment.id}`,
    })
  } catch (error) {
    logger.error('Failed to send slack message', error)
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
