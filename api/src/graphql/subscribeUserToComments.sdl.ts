export const schema = gql`
  type SubscribeUserToComment {
    id: Int!
    comment: Comment!
    commentId: String!
    user: User!
    userId: String!
    createdAt: DateTime!
  }

  type Query {
    subscribeUserToComments: [SubscribeUserToComment!]! @requireAuth
    subscribeUserToComment(id: Int!): SubscribeUserToComment @requireAuth
  }

  input CreateSubscribeUserToCommentInput {
    commentId: String!
    userId: String!
  }

  input UpdateSubscribeUserToCommentInput {
    commentId: String
    userId: String
  }

  type Mutation {
    createSubscribeUserToComment(
      input: CreateSubscribeUserToCommentInput!
    ): SubscribeUserToComment! @requireAuth
    updateSubscribeUserToComment(
      id: Int!
      input: UpdateSubscribeUserToCommentInput!
    ): SubscribeUserToComment! @requireAuth
    deleteSubscribeUserToComment(id: Int!): SubscribeUserToComment! @requireAuth
  }
`;
