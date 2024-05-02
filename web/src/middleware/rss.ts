import { Feed } from 'feed'

import type {
  MiddlewareRequest,
  MiddlewareResponse,
} from '@redwoodjs/vite/dist/middleware'

interface Post {
  id: string
  slug: string
  title: string
  brief: string
  coverImage: {
    url: string
  }
  publishedAt: string
  seo: {
    title: string
    description: string
  }
  url: string
}

export async function middleware(
  req: MiddlewareRequest,
  mwResponse: MiddlewareResponse
) {
  const url = new URL(req.url)
  if (url.pathname !== '/rss.xml') {
    return mwResponse
  }

  console.log('RSS request is being handled by middleware')

  // Make a request to the api side for all the posts
  const response = await fetch(
    `${process.env.DEPLOY_URL}/.netlify/functions/graphql`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query {
          posts {
            id
            slug
            title
            brief
            coverImage {
              url
            }
            publishedAt
            seo {
              title
              description
            }
            url
          }
        }
      `,
      }),
    }
  )

  const { data } = await response.json()
  const posts = data.posts as Post[]

  const latestPost = posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )[0]

  const feed = new Feed({
    title: 'RedwoodJS',
    description: 'Redwood is the full-stack JavaScript application framework.',
    id: process.env.DEPLOY_URL,
    link: process.env.DEPLOY_URL,
    language: 'en',
    // image: 'http://example.com/image.png', // ???
    favicon: `${process.env.DEPLOY_URL}/favicon.png`,
    copyright: 'All rights reserved 2013, John Doe',
    updated: new Date(latestPost.publishedAt),
    generator: 'RedwoodJS: RSS Middleware',
    // feedLinks: {
    //   json: 'https://example.com/json',
    //   atom: 'https://example.com/atom',
    // },
    // author: {
    //   name: 'John Doe',
    //   email: 'johndoe@example.com',
    //   link: 'https://example.com/johndoe',
    // },
  })
  for (const post of data.posts as Post[]) {
    feed.addItem({
      title: post.title,
      link: post.url,
      date: new Date(post.publishedAt),
    })
  }

  mwResponse.headers.set('Content-Type', 'application/xml')
  // TODO: Consider adding cache-control headers to the response
  mwResponse.body = feed.rss2()

  return mwResponse
}
