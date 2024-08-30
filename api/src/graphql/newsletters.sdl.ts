export const schema = gql`
  type Newsletter {
    id: Int!
    email: String!
    createdAt: DateTime!
  }

  type Query {
    newsletters: [Newsletter!]! @requireAuth(roles: ["admin"])
    newsletter(id: Int!): Newsletter @requireAuth(roles: ["admin"])
  }

  input CreateNewsletterInput {
    email: String!
  }

  input UpdateNewsletterInput {
    email: String
  }

  type Mutation {
    createNewsletter(input: CreateNewsletterInput!): Newsletter! @skipAuth
    updateNewsletter(id: Int!, input: UpdateNewsletterInput!): Newsletter!
      @requireAuth(roles: ["admin"])
    deleteNewsletter(id: Int!): Newsletter! @requireAuth(roles: ["admin"])
  }
`
