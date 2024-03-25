import { request } from 'graphql-request'
import type { Connection } from 'types/connections'
import type {
  Post,
  Publication,
  Mutation,
  Query,
  QueryrecentPostsArgs as QueryRecentPostsArgs,
  QuerypostArgs as QueryPostArgs,
  MutationinvalidatePostArgs as MutationInvalidatePostArgs,
} from 'types/graphql'

import { cache } from 'src/functions/graphql'
import { logger } from 'src/lib/logger'
type RecentPostsResponse = {
  publication: {
    isTeam: Publication['isTeam']
    title: Publication['title']
    posts: Connection<Post>
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
  logger.debug(slug, 'Fetching post from hashnode')
  logger.debug(POST, 'Fetching post query')

  try {
    const { publication } = await request<PostResponse>(
      'https://gql.hashnode.com',
      POST
    )

    logger.debug(publication.post, 'Post response from hashnode')

    if (!publication || !publication.post) {
      throw new Error('Failed to fetch post')
    }

    logger.debug(post, 'Post response from hashnode')

    return publication.post
  } catch (error) {
    logger.error(error, 'Failed to fetch post')
    throw new Error('Failed to fetch post')
  }
}

/**
 * Invalidates all posts from the GraphQL Response Cache.
 */

export const invalidatePosts = async (): Promise<
  Mutation['invalidatePosts']
> => {
  cache.invalidate([{ typename: 'Post' }])
  return true
}

/**
 * Invalidates a single post from the GraphQL Response Cache by its slug.
 */
export const invalidatePost = async ({
  slug,
}: MutationInvalidatePostArgs): Promise<Mutation['invalidatePost']> => {
  try {
    const originalPost = await post({ slug })
    cache.invalidate([{ typename: 'Post', id: originalPost.id }])
    return true
  } catch (error) {
    logger.error(error, `Failed to invalidate post with slug: ${slug}`)
    throw new Error(`Failed to invalidate post with slug: ${slug}`)
  }
}
