export const schema = gql`
  type Publication {
    isTeam: Boolean
    title: String!
    posts: [Post!]
  }

  type Post {
    id: String!
    title: String!
    brief: String!
    url: String!
    author: Author!
  }

  type Author {
    id: String!
    name: String!
    profilePicture: String!
  }

  type Query {
    recentPosts(first: Int): Publication! @skipAuth
  }
`
