import type {
  QueryResolvers,
  MutationResolvers,
  LikeRelationResolvers,
} from "types/graphql";

import { db } from "src/lib/db";

export const likes: QueryResolvers["likes"] = () => {
  return db.like.findMany();
};

export const like: QueryResolvers["like"] = ({ id }) => {
  return db.like.findUnique({
    where: { id },
  });
};

export const createLike: MutationResolvers["createLike"] = ({ input }) => {
  return db.like.create({
    data: input,
  });
};

export const updateLike: MutationResolvers["updateLike"] = ({ id, input }) => {
  return db.like.update({
    data: input,
    where: { id },
  });
};

export const deleteLike: MutationResolvers["deleteLike"] = ({ id }) => {
  return db.like.delete({
    where: { id },
  });
};

export const Like: LikeRelationResolvers = {
  comment: (_obj, { root }) => {
    return db.like.findUnique({ where: { id: root?.id } }).comment();
  },
  user: (_obj, { root }) => {
    return db.like.findUnique({ where: { id: root?.id } }).user();
  },
};
