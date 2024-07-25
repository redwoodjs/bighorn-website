import * as authors from './authors'
import type { Author } from './authors'

export type Post = {
  slug: string
  title: string
  brief: string
  tags: string[]
  publishedAt: Date
  author: Author
}

const posts: Post[] = [
  {
    slug: 'bighorn-update',
    title: 'Bighorn Update',
    brief:
      "Nine months ago, the RedwoodJS team decided to go all-in on React Server Components. The first version of Redwood that fully supports RSC will begin the Bighorn epoch. Today I'm excited to bring you an update on our work towards that goal.",
    tags: ['redwoodjs'],
    publishedAt: new Date('2024-03-24T05:00:00.000Z'),
    author: authors.TomPrestonWerner,
  },
  {
    slug: 'rsc-now-in-redwoodjs',
    title: 'React Server Components Now in RedwoodJS',
    brief:
      "Redwood's preview of React Server Component support is now available! Follow this walkthrough to find out what's new and how to covert an app from GraphQL.",
    tags: ['reactjs', 'rsc', 'bighorn', 'canary'],
    publishedAt: new Date('2024-03-24T07:00:00.000Z'),
    author: authors.RobCameron,
  },
  {
    slug: 'whats-different-comparing-the-router-in-nextjs-app-api-nextjs-pages-api-remix-and-redwoodjs',
    title:
      "What's Different? Comparing the Router in Next.js App API, Next.js Pages API, Remix, and RedwoodJS",
    brief:
      "Right now, there are a few key players in the React space: Next.js, Remix, and RedwoodJS. If I stack them next to each other, there are a few key differences. It's helpful to recognize these, so you can make informed decisions about the tooling and y...",
    tags: ['nextjs', 'redwoodjs', 'remix'],
    publishedAt: new Date('2024-03-27T12:00:00.000Z'),
    author: authors.AmyDutton,
  },
  {
    slug: 'techniques-for-fetching-data',
    title:
      'Techniques for Fetching Data: Comparing Next.js (app and pages API), Remix, and RedwoodJS',
    brief:
      'All SaaS applications involve CRUD - Creating, Reading, Updating, and Deleting. Therefore, the way we fetch data naturally becomes a major piece of the developer experience and one of the many problems that a framework is able to solve.',
    tags: ['reactjs', 'nextjs', 'redwoodjs', 'remix'],
    publishedAt: new Date('2024-04-08T12:00:00.000Z'),
    author: authors.AmyDutton,
  },
  {
    slug: 'building-a-new-docs-site-with-rsc',
    title: 'Building a new docs site with RSC',
    brief:
      "As big fans of the dog fooding principle, we want to put RSC through its paces by using it to build more than just a demo app. As Redwood's support for RSC becomes more mature we are going to need to document it with the same attention we pay to the ...",
    tags: ['documentation', 'rsc', 'example-app'],
    publishedAt: new Date('2024-04-23T12:00:00.000Z'),
    author: authors.RobCameron,
  },
  {
    slug: 'middleware-in-redwoodjs',
    title: 'Middleware in RedwoodJS',
    brief: 'An introduction to the new middleware in RedwoodJS',
    tags: ['middleware', 'redwoodjs'],
    publishedAt: new Date('2024-05-10T12:00:00.000Z'),
    author: authors.DannyChoudhury,
  },
  {
    slug: 'new-feature-ogimage-middleware',
    title: 'New Feature: og:image Middleware',
    brief:
      '💡 og:image Middleware is only available in the latest canaries of Redwood!',
    tags: ['seo', 'reactjs', 'middleware', 'redwoodjs'],
    publishedAt: new Date('2024-05-13T12:00:00.000Z'),
    author: authors.RobCameron,
  },
  {
    slug: 'using-middleware-rss-and-sitemap',
    title: 'Using Middleware: RSS and Sitemap',
    brief:
      'We recently redesigned our website for the new "Bighorn" epoch of Redwood. This included starting this series of blog posts which had a fun side effect of giving us an exercise to solve. How do we implement an RSS feed when our blog is built into a R...',
    tags: ['javascript', 'middleware', 'redwoodjs'],
    publishedAt: new Date('2024-05-21T12:00:00.000Z'),
    author: authors.JoshGMWalker,
  },
  {
    slug: 'experiments-rails-like-form-helpers',
    title: 'Experiments: Rails-like Form Helpers',
    brief:
      'After ReactConf 2024 I was inspired by this tweet: https://x.com/chantastic/status/1791531154212033004 In it, Sam Selikoff says that the JS ecosystem has yet to demonstrate the same kind of powerful forms that have been available in Rails since jus...',
    tags: ['forms', 'reactjs', 'rsc'],
    publishedAt: new Date('2024-06-04T12:00:00.000Z'),
    author: authors.RobCameron,
  },
  {
    slug: 'love-reloaded-a-dx-story',
    title: '"Love reloaded": A DX Story',
    brief:
      "Redwood aims is to provide a fast, robust and comprehensible React Server Component experience. We're iterating towards improving that experience by adding a RSC development server that supports live reload. What is Live Reload? Live reload is a feat...",
    tags: ['web-development', 'dx', 'developer-experience', 'redwoodjs'],
    publishedAt: new Date('2024-06-18T12:00:00.000Z'),
    author: authors.PeterPistorius,
  },
  {
    slug: 'moving-our-site-from-netlify-to-flyio',
    title: 'Moving our site from Netlify to Fly.io',
    brief:
      "We recently switched our main website from Netlify to Fly.io. This was a pretty smooth process and we're happy with the results. Here's a quick overview of our experience.",
    tags: [
      'hosting',
      'javascript',
      'javascript-framework',
      'redwoodjs',
      'flyio',
    ],
    publishedAt: new Date('2024-07-02T12:00:00.000Z'),
    author: authors.JoshGMWalker,
  },
]

export function getPosts(): Post[] {
  return posts
    .filter((post) => {
      return post.publishedAt <= new Date()
    })
    .sort((a, b) => {
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
    })
    .map((post, index) => {
      return {
        ...post,
        id: index,
      }
    })
}
