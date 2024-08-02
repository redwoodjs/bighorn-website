import { Feed } from 'feed'

import type {
  MiddlewareRequest,
  MiddlewareResponse,
} from '@redwoodjs/web/middleware'

import { getPosts } from 'src/content/posts'

export async function middleware(
  req: MiddlewareRequest,
  mwResponse: MiddlewareResponse
) {
  const url = new URL(req.url)
  if (url.pathname !== '/rss.xml') {
    return mwResponse
  }
  console.log('RSS request is being handled by middleware')

  const posts = getPosts()
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
    favicon: `${process.env.DEPLOY_URL}/favicon.png`,
    image: `${process.env.DEPLOY_URL}/favicon.png`,
    copyright: 'Copyright © 2024. Tom Preston-Werner. All Rights Reserved.',
    updated: new Date(latestPost.publishedAt),
    generator: 'RedwoodJS: RSS Middleware',
  })
  for (const post of posts) {
    const link = process.env.DEPLOY_URL + '/blog/' + post.slug
    feed.addItem({
      title: post.title,
      link,
      date: post.publishedAt,
      description: post.brief,
      published: post.publishedAt,
      id: link,
      image: post.imageUrl,
    })
  }

  mwResponse.headers.set('Content-Type', 'application/xml')
  mwResponse.body = feed.rss2()

  return mwResponse
}
