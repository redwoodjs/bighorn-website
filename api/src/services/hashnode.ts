import { request } from 'graphql-request'
import type { Connection } from 'types/connections'
import type {
  Post,
  Publication,
  Query,
  QueryrecentPostsArgs as QueryRecentPostsArgs,
} from 'types/graphql'

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
      publication(host: "selfteach.me") {
        isTeam
        title
        posts(first: ${first}) {
          edges {
            node {
              id
              title
              brief
              url
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

    logger.debug(publication, 'Recent posts response from hashnode')

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
