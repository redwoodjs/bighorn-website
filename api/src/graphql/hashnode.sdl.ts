export const schema = gql`
  "Publication is derived from https://apidocs.hashnode.com/#definition-Publication"
  type Publication {
    isTeam: Boolean
    title: String!
    posts: [Post!]
  }

  "Content is derived from https://apidocs.hashnode.com/#definition-Content"
  type Content {
    markdown: String!
    html: String!
    text: String!
  }

  "OpenGraphMetaData is derived from https://apidocs.hashnode.com/#definition-OpenGraphMetaData"
  type OpenGraphMetaData {
    image: String
  }

  "PostCoverImage is derived from https://apidocs.hashnode.com/#definition-PostCoverImage"
  type PostCoverImage {
    url: String!
  }

  "SEO is derived from https://apidocs.hashnode.com/#definition-SEO"
  type SEO {
    title: String
    description: String
  }

  "Post is derived from https://apidocs.hashnode.com/#definition-Post"
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

  "Author is derived from https://apidocs.hashnode.com/#definition-User"
  type Author {
    id: String!
    name: String!
    profilePicture: String!
  }

  type Query {
    "Fetches a Publication with latest posts from Hashnode."
    recentPosts(first: Int): Publication! @skipAuth

    "Fetches a single post by its slug."
    post(id: String!): Post! @skipAuth
  }
`
