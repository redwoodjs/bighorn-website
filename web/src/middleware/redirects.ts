import type {
  MiddlewareRequest,
  MiddlewareResponse,
} from '@redwoodjs/web/middleware'

const REDIRECTS = [
  {
    from: '/cookbook',
    to: 'https://docs.redwoodjs.com/docs/how-to/index',
    status: 301,
  },
  {
    from: '/cookbook/*',
    to: 'https://docs.redwoodjs.com/docs/how-to/:splat',
    status: 301,
  },
  {
    from: '/tutorial',
    to: 'https://docs.redwoodjs.com/docs/tutorial/welcome-to-redwood',
    status: 301,
  },
  {
    from: '/tutorial/*',
    to: 'https://docs.redwoodjs.com/docs/tutorial/:splat',
    status: 301,
  },
  {
    from: '/contributing',
    to: 'https://docs.redwoodjs.com/docs/contributing',
    status: 301,
  },
  {
    from: '/reference/command-line-interface',
    to: 'https://docs.redwoodjs.com/docs/cli-commands',
    status: 301,
  },
  {
    from: '/quick-start',
    to: 'https://docs.redwoodjs.com/docs/quick-start',
    status: 301,
  },
  {
    from: '/quickstart',
    to: 'https://docs.redwoodjs.com/docs/quick-start',
    status: 301,
  },
  {
    from: '/newsletter',
    to: 'https://mailchi.mp/redwoodjs/redwoodjs-newsletter',
    status: 301,
  },
  {
    from: '/community',
    to: 'https://community.redwoodjs.com/t/welcome-to-the-redwoodjs-community/2416',
    status: 301,
  },
  {
    from: '/events',
    to: 'https://community.redwoodjs.com/t/redwood-events-you-re-invited/3853',
    status: 301,
  },
  {
    from: '/startup-club',
    to: 'https://forms.gle/fYsacoY4uKQmP24o8',
    status: 301,
  },
  {
    from: '/good-first-issue',
    to: 'https://github.com/orgs/redwoodjs/projects/11',
    status: 301,
  },
  {
    from: '/roadmap',
    to: '/#roadmap',
    status: 301,
  },
  {
    from: '/jobs',
    to: 'https://community.redwoodjs.com/c/jobs/29',
    status: 301,
  },
  {
    from: '/blog/bighorn-walkthrough',
    to: '/blog/rsc-now-in-redwoodjs',
    status: 301,
  },
]

export async function middleware(
  req: MiddlewareRequest,
  mwResponse: MiddlewareResponse
) {
  const url = new URL(req.url)

  // Dynamic redirect
  if (url.pathname.startsWith('/docs')) {
    const to = `https://docs.redwoodjs.com${url.pathname}`
    mwResponse.status = 301
    mwResponse.headers.set('Location', to)
    mwResponse.body = ''
    return mwResponse
  }

  // Static redirects
  const froms = REDIRECTS.map((r) => r.from)
  const index = froms.indexOf(url.pathname)
  if (index !== -1) {
    const { to, status } = REDIRECTS[index]
    mwResponse.status = status
    mwResponse.headers.set('Location', to)
    mwResponse.body = ''
    return mwResponse
  }

  return mwResponse
}
