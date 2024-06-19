import { Feed } from 'feed'

import type {
  MiddlewareRequest,
  MiddlewareResponse,
} from '@redwoodjs/vite/dist/middleware'

import { getAllPosts } from './util'

export async function middleware(
  req: MiddlewareRequest,
  mwResponse: MiddlewareResponse
) {
  const url = new URL(req.url)
  if (url.pathname !== '/rss.xml') {
    return mwResponse
  }
  console.log('RSS request is being handled by middleware')

  const posts = await getAllPosts()
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
    // Hashnode does not automatically populate SEO or meta tag data so here
    // we use a simple check to fallback to the basic post data if they are
    // not provided.
    const title = post.seo?.title || post.title
    const description = post.seo?.description || post.brief
    const image = post.ogMetaData?.image || post.coverImage?.url
    const link = process.env.DEPLOY_URL + '/blog/' + post.slug

    feed.addItem({
      title,
      link,
      date: new Date(post.publishedAt),
      description,
      published: new Date(post.publishedAt),
      id: link,
      image,
    })
  }

  mwResponse.headers.set('Content-Type', 'application/xml')
  mwResponse.body = feed.rss2()

  return mwResponse
}
