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
  const response = await fetch('http://localhost:8911/graphql', {
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
  })

  const { data } = await response.json()
  const rssItems = data.posts.map((post: Post) => {
    const title = post.seo?.title || post.title
    const description = post.seo?.description || post.brief
    return `
      <item>
        <title>${title}</title>
        <link>${post.url}</link>
        <description>${description}</description>
        <pubDate>${post.publishedAt}</pubDate>
      </item>
    `
  })

  // Map the posts to the RSS format

  mwResponse.headers.set('Content-Type', 'application/xml')

  // TODO(jgmw): Generate the rss.xml content
  mwResponse.body = `
  <rss version="2.0">
    <channel>
      <title>RedwoodJS: The App Framework for Startups</title>
      <link>https://redwoodjs.com</link>
      <description>Grow from side project to startup with RedwoodJS. Combines React, GraphQL, and Prisma for a full-stack app framework.</description>
      ${rssItems.join('\n')}
    </channel>
  </rss>
  `

  return mwResponse
}
