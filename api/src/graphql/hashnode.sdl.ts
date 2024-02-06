export const schema = gql`
  type Publication {
    isTeam: Boolean
    title: String!
    posts: [Post!]
  }

  type Content {
    markdown: String!
    html: String!
    text: String!
  }

  type OpenGraphMetaData {
    image: String
  }

  type PostCoverImage {
    url: String!
  }

  type SEO {
    title: String
    description: String
  }

  type Post {
    id: String!
    slug: String!
    title: String!
    subtitle: String
    brief: String!
    content: Content!
    coverImage: PostCoverImage
    author: Author!
    publishedAt: DateTime!
    seo: SEO!
    url: String!
    canonicalUrl: String
    ogMetaData: OpenGraphMetaData
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
