export const schema = gql`
  type Like {
    id: Int!
    comment: Comment!
    commentId: String!
    user: User!
    userId: String!
    createdAt: DateTime!
  }

  type Query {
    likes: [Like!]! @requireAuth
    like(id: Int!): Like @requireAuth
  }

  input CreateLikeInput {
    commentId: String!
    userId: String!
  }

  input UpdateLikeInput {
    commentId: String
    userId: String
  }

  type Mutation {
    createLike(input: CreateLikeInput!): Like! @requireAuth
    updateLike(id: Int!, input: UpdateLikeInput!): Like! @requireAuth
    deleteLike(id: Int!): Like! @requireAuth
  }
`
