import type {
  MiddlewareRequest,
  MiddlewareResponse,
} from '@redwoodjs/vite/dist/middleware'

export async function middleware(
  req: MiddlewareRequest,
  mwResponse: MiddlewareResponse
) {
  const url = new URL(req.url)
  if (url.pathname !== '/sitemap.xml') {
    return mwResponse
  }

  console.log('Sitemap request is being handled by middleware')

  mwResponse.headers.set('Content-Type', 'application/xml')

  // TODO(jgmw): Generate the sitemap.xml content
  mwResponse.body = `
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
      <loc>https://redwoodjs.com/</loc>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>
  </urlset>
  `

  return mwResponse
}
