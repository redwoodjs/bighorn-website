export const schema = gql`
  type Newsletter {
    id: Int!
    email: String!
    createdAt: DateTime!
  }

  type Query {
    newsletters: [Newsletter!]! @requireAuth
    newsletter(id: Int!): Newsletter @requireAuth
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
      @requireAuth
    deleteNewsletter(id: Int!): Newsletter! @requireAuth
  }
`
