export const schema = gql`
  type Role {
    id: Int!
    name: String!
    createdAt: DateTime!
    User: [User]!
  }

  type Query {
    roles: [Role!]! @requireAuth
    role(id: Int!): Role @requireAuth
  }

  input CreateRoleInput {
    name: String!
  }

  input UpdateRoleInput {
    name: String
  }

  type Mutation {
    createRole(input: CreateRoleInput!): Role! @requireAuth
    updateRole(id: Int!, input: UpdateRoleInput!): Role! @requireAuth
    deleteRole(id: Int!): Role! @requireAuth
  }
`;
