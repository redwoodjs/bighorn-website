export const schema = gql`
  type CommentThread {
    id: Int!
    upgradeGuide: String!
    comments: [Comment]!
    createdAt: DateTime!
  }

  type Comment {
    id: String!
    authorId: String!
    authorName: String!
    authorRole: Int!
    comment: String!
    visible: Boolean!
    flagged: Boolean!
    bookmarked: Boolean!
    editCount: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    Like: [Like]!
    CommentThread: CommentThread
    commentThreadId: Int
  }

  type Like {
    id: Int!
    comment: Comment!
    commentId: String!
    userId: String!
    createdAt: DateTime!
  }

  type Query {
    commentThreads(upgradeGuide: String!): [CommentThread!]! @skipAuth
  }

  input CreateCommentInput {
    threadId: Int
    upgradeGuide: String!
    authorId: String!
    comment: String!
    subscribeAuthorToUpdates: Boolean!
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth
    updateCommentContent(id: String!, content: String!): Comment! @requireAuth

    addLike(commentId: String!): Like! @requireAuth
    removeLike(commentId: String!): Like! @requireAuth
  }
`
