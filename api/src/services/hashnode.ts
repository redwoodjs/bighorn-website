import { request } from 'graphql-request'
import type { Post, Publication } from 'types/graphql'

import { logger } from 'src/lib/logger'

type PublicationResponse = {
  isTeam: boolean
  title: string
  posts: {
    edges: Array<{
      node: Post
    }>
  }
}

type RecentPostsResponse = {
  publication: PublicationResponse
}

export const recentPosts = async () => {
  const RECENT_POSTS = `
    {
      publication(host: "selfteach.me") {
        isTeam
        title
        posts(first: 10) {
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
      posts: publication.posts?.edges?.map((edge) => edge.node as Post),
    } as Publication
  } catch (error) {
    logger.error(error, 'Failed to fetch recent posts')
    throw new Error('Failed to fetch recent posts')
  }
}
