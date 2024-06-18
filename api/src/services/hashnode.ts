import { request } from 'graphql-request'
import type { Connection } from 'types/connections'
import type {
  Post,
  Publication,
  Query,
  QueryrecentPostsArgs as QueryRecentPostsArgs,
  QuerypostArgs as QueryPostArgs,
} from 'types/graphql'

import { logger } from 'src/lib/logger'
type RecentPostsResponse = {
  publication: {
    isTeam: Publication['isTeam']
    title: Publication['title']
    posts: Connection<Post>
  }
}

type AllPostsResponse = {
  publication: {
    isTeam: Publication['isTeam']
    title: Publication['title']
    posts: {
      edges: {
        node: Post
        cursor: string
      }[]
    }
  }
}

/**
 * Fetches a Publication with latest posts from Hashnode.
 *
 * Note: This resolver is cached for a specified amount of time
 * defined in the GraphQL Handler in ttlPerSchemaCoordinate.
 **/
export const recentPosts = async ({
  first = 3,
}: QueryRecentPostsArgs): Promise<Query['recentPosts']> => {
  const RECENT_POSTS = `
    {
      publication(host: "redwoodjs.com") {
        isTeam
        title
        posts(first: ${first}) {
          edges {
            node {
              id
              slug
              title
              subtitle
              brief
              content {
                markdown
                html
                text
              }
              ogMetaData {
                image
              },
              coverImage {
                url
              }
              publishedAt
              seo {
                title
                description
              }
              url
              canonicalUrl
              author {
                id
                name
                profilePicture
              }
            }
          }
        }
      }
    }
  `

  try {
    const { publication } = await request<RecentPostsResponse>(
      'https://gql.hashnode.com',
      RECENT_POSTS
    )

    if (!publication) {
      throw new Error('Failed to fetch recent posts')
    }

    // logger.debug(publication, 'Recent posts response from hashnode')

    return {
      isTeam: publication.isTeam,
      title: publication.title,
      posts: publication.posts?.edges?.map((edge) => edge.node),
    }
  } catch (error) {
    logger.error(error, 'Failed to fetch recent posts')
    throw new Error('Failed to fetch recent posts')
  }
}

type PostResponse = {
  publication: {
    post?: Post
  }
}

export const post = async ({ slug }: QueryPostArgs): Promise<Query['post']> => {
  const POST = `
    {
      publication(host: "redwoodjs.com") {
        post(slug: "${slug}") {
          id
          slug
          title
          subtitle
          brief
          content {
            markdown
            html
            text
          }
          ogMetaData {
            image
          },
          coverImage {
            url
          }
          publishedAt
          seo {
            title
            description
          }
          url
          canonicalUrl
          author {
            id
            name
            profilePicture
            bio {
              markdown
              html
              text
            }
          }
        }
      }
    }
  `

  // logger.debug(slug, 'Fetching post from hashnode')
  // logger.debug(POST, 'Fetching post query')

  try {
    const { publication } = await request<PostResponse>(
      'https://gql.hashnode.com',
      POST
    )

    // logger.debug(publication.post, 'Post response from hashnode')

    if (!publication || !publication.post) {
      throw new Error('Failed to fetch post')
    }

    // logger.debug(post, 'Post response from hashnode')

    return publication.post
  } catch (error) {
    logger.error(error, 'Failed to fetch post')
    throw new Error('Failed to fetch post')
  }
}

export const posts = async (): Promise<Query['posts']> => {
  const POSTS = (after: string) => `
    {
      publication(host: "redwoodjs.com") {
        posts(first: 20 ${after ? `, after: "${after}"` : ''}) {
          edges {
            cursor
            node {
              id
              slug
              title
              subtitle
              brief
              content {
                markdown
                html
                text
              }
              ogMetaData {
                image
              },
              coverImage {
                url
              }
              publishedAt
              seo {
                title
                description
              }
              url
              canonicalUrl
              author {
                id
                name
                profilePicture
              }
            }
          }
        }
      }
    }
  `

  try {
    const posts: Post[] = []
    let lastCursor = ''

    let i = 0
    while (i < 1_000_000) {
      logger.warn(`Fetching posts from hashnode (cursor: "${lastCursor}")`)
      i += 1

      const { publication } = await request<AllPostsResponse>(
        'https://gql.hashnode.com',
        POSTS(lastCursor)
      )

      if (!publication) {
        throw new Error('Failed to fetch posts')
      }

      const edges = publication.posts.edges
      if (!edges || edges.length === 0) {
        // No more posts to fetch
        break
      }

      posts.push(...edges.map((edge) => edge.node))
      lastCursor = edges[edges.length - 1].cursor

      if (edges.length < 20) {
        // We didn't get a full collection of posts, so we're done
        break
      }
    }

    return posts
  } catch (error) {
    logger.error(error, 'Failed to fetch recent posts')
    throw new Error('Failed to fetch recent posts')
  }
}
