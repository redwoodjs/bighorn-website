import type {
  QueryResolvers,
  MutationResolvers,
  CommentRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

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

export const createComment: MutationResolvers['createComment'] = ({
  input,
}) => {
  return db.comment.create({
    data: input,
  })
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
