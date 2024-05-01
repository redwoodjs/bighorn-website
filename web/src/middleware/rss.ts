import type {
  MiddlewareRequest,
  MiddlewareResponse,
} from '@redwoodjs/vite/dist/middleware'

export async function middleware(
  req: MiddlewareRequest,
  mwResponse: MiddlewareResponse
) {
  const url = new URL(req.url)
  if (url.pathname !== '/rss.xml') {
    return mwResponse
  }

  console.log('RSS request is being handled by middleware')

  mwResponse.headers.set('Content-Type', 'application/xml')

  // TODO(jgmw): Generate the rss.xml content
  mwResponse.body = `
  <rss version="2.0">
    <channel>
      <title>RedwoodJS</title>
      <link>https://redwoodjs.com</link>
      <description>The most awesome of all the sites of the web</description>
      <item>
        <title>Some Post</title>
        <link>https://redwoodjs.com/blog/some-post</link>
        <description>Some post description goes here</description>
      </item>
    </channel>
  </rss>
  `

  return mwResponse
}
