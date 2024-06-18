import type { TagDescriptor } from '@redwoodjs/web'

import App from './App'
import { Document } from './Document'
import Routes from './Routes'

interface Props {
  css: string[]
  meta?: TagDescriptor[]
}

export const ServerEntry: React.FC<Props> = ({ css, meta }) => {
  return (
    <Document css={css} meta={meta}>
      <App>
        <Routes />
      </App>
    </Document>
  )
}

export async function registerMiddleware() {
  const { middleware: sitemapMw } = await import('./middleware/sitemap')
  const { middleware: rssMw } = await import('./middleware/rss')
  const { middleware: redirectMw } = await import('./middleware/redirects')

  return [sitemapMw, rssMw, redirectMw]
}
