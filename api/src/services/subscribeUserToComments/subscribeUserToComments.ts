import type {
  QueryResolvers,
  MutationResolvers,
  SubscribeUserToCommentRelationResolvers,
} from "types/graphql";

import { db } from "src/lib/db";

export const subscribeUserToComments: QueryResolvers["subscribeUserToComments"] =
  () => {
    return db.subscribeUserToComment.findMany();
  };

export const subscribeUserToComment: QueryResolvers["subscribeUserToComment"] =
  ({ id }) => {
    return db.subscribeUserToComment.findUnique({
      where: { id },
    });
  };

export const createSubscribeUserToComment: MutationResolvers["createSubscribeUserToComment"] =
  ({ input }) => {
    return db.subscribeUserToComment.create({
      data: input,
    });
  };

export const updateSubscribeUserToComment: MutationResolvers["updateSubscribeUserToComment"] =
  ({ id, input }) => {
    return db.subscribeUserToComment.update({
      data: input,
      where: { id },
    });
  };

export const deleteSubscribeUserToComment: MutationResolvers["deleteSubscribeUserToComment"] =
  ({ id }) => {
    return db.subscribeUserToComment.delete({
      where: { id },
    });
  };

export const SubscribeUserToComment: SubscribeUserToCommentRelationResolvers = {
  comment: (_obj, { root }) => {
    return db.subscribeUserToComment
      .findUnique({ where: { id: root?.id } })
      .comment();
  },
  user: (_obj, { root }) => {
    return db.subscribeUserToComment
      .findUnique({ where: { id: root?.id } })
      .user();
  },
};
