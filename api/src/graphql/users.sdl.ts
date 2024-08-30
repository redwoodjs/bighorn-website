export const schema = gql`
  type User {
    id: String!
    name: String!
    email: String!
    # hashedPassword: String!
    # salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    role: Role!
    roleId: Int!
    Comment: [Comment]!
    Like: [Like]!
    createdAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth
  }

  input CreateUserInput {
    name: String!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    roleId: Int!
  }

  input UpdateUserInput {
    name: String
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    roleId: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
