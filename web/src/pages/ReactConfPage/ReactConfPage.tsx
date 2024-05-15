import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import Accordion from 'src/components/Accordion/Accordion'
import BlogCard from 'src/components/BlogCard/BlogCard'
import BentoOpenSource from 'src/components/Home/WhatsIncluded/BentoOpenSource/BentoOpenSource'
import BentoTech from 'src/components/Home/WhatsIncluded/BentoTech/BentoTech'
import Icon from 'src/components/Icon/Icon'
import ConnectWithUs from 'src/components/ReactConf/ConnectWithUs/ConnectWithUs'
import GetInvolved from 'src/components/ReactConf/GetInvolved/GetInvolved'
import Newsletter from 'src/components/ReactConf/Newsletter/Newsletter'
import RoadmapDetails from 'src/components/RoadmapDetails/RoadmapDetails'
import { Constants } from 'src/helpers/Constants'

const ReactConfPage = () => {
  return (
    <>
      <Metadata
        title="React Conf"
        description="Hello, from React Conf 2024!"
        og={{ image: `${location.origin}/images/og.png` }}
      />

      <div className="page-content">
        <header className="grid grid-cols-10 gap-5">
          <div className="col-span-12 mr-12 lg:col-span-5">
            {/* Heading and logo */}
            <div className="mb-20">
              <h1 className="mb-5 font-serif text-5xl font-bold text-maiTai md:text-7xl">
                Hello from
              </h1>
              <img
                src="/images/react-conf-logo.svg"
                alt="React Conf 2024"
                className="dark:hidden"
              />
              <img
                src="/images/react-conf-logo--dark.svg"
                alt="React Conf 2024"
                className="hidden dark:block"
              />
            </div>

            {/* Newsletter Form */}
            <Newsletter />
          </div>
          <div className="col-span-12 hidden lg:col-span-5 lg:block">
            <img src="/images/react-conf-art.png" alt="" />
          </div>
        </header>
      </div>

      <hr />

      <div className="page-content grid-cols-10 gap-5 lg:grid">
        <div className="col-span-8">
          <h1 className="mb-10 font-serif text-5xl leading-none text-maiTai md:text-[72px]">
            What are you looking for?
            <br /> How can we help?
          </h1>
          <p className="mb-10 text-2xl font-light md:text-4xl">
            We could dump our <Link to={routes.blog()}>latest content</Link>,{' '}
            <Link to={routes.home()}>upcoming events</Link>, and{' '}
            <Link to={routes.home()}>roadmap</Link>, here. 🤪 But, is that
            really what you’re looking for?
          </p>
          <p className="text-2xl font-bold md:text-4xl">
            We invite you to Choose Your Own Adventure.
          </p>
        </div>
      </div>

      <hr />

      <Accordion
        heading="Why is Redwood special?"
        subheading="What are some of the key differences between Redwood, Remix, and NextJS?"
      >
        <div className="bento">
          <div className="col-span-6 lg:col-span-3">
            <BlogCard
              post={{
                id: '1',
                author: {
                  id: '1',
                  name: 'Amy Dutton',
                  profilePicture:
                    'https://cdn.hashnode.com/res/hashnode/image/upload/v1602294993756/ty1hu5VU2.jpeg',
                },
                title:
                  "What's Different? Comparing the Router in Next.js App API, Next.js Pages API, Remix, and RedwoodJS",
                slug: 'whats-different-comparing-the-router-in-nextjs-app-api-nextjs-pages-api-remix-and-redwoodjs',
                brief:
                  'Right now, there are a few key players in the React space: Next.js, Remix, and RedwoodJS. If I stack them next to each other, there are a few key differences. It’s helpful to recognize these, so you can make informed decisions about the tooling and y...',
                publishedAt: '2024-03-27T07:59:20.092Z',
              }}
            />
          </div>
          <div className="col-span-6 lg:col-span-3">
            <BlogCard
              post={{
                id: '1',
                author: {
                  id: '1',
                  name: 'Amy Dutton',
                  profilePicture:
                    'https://cdn.hashnode.com/res/hashnode/image/upload/v1602294993756/ty1hu5VU2.jpeg',
                },
                title:
                  'Techniques for Fetching Data: Comparing Next.js (app and pages API), Remix, and RedwoodJS',
                slug: '/something',
                brief:
                  'All SaaS applications involve CRUD – Creating, Reading, Updating, and Deleting. Therefore, the way we fetch data naturally becomes a major piece of the developer experience and one of the many problems that a framework is able to solve. Next.js app ...',
                publishedAt: '2024-04-08T07:59:20.092Z',
              }}
            />
          </div>
          <div className="col-span-6 grid grid-cols-3 gap-5">
            <div className="col-span-3 lg:col-span-2">
              <BentoTech className="h-full" />
            </div>
            <div className="col-span-3 lg:col-span-1">
              <BentoOpenSource className="h-full" />
            </div>
          </div>
        </div>
      </Accordion>
      <Accordion
        heading="Tell me more about RedwoodJS, where should I start?"
        subheading="We have several resources to make learning easy."
      >
        <div className="grid grid-cols-1 gap-x-5 gap-y-16 md:grid-cols-2">
          <div>
            <a href={Constants.YOUTUBE_SERIES} target="_blank" rel="noreferrer">
              <img
                src="/images/youtube-playlist.png"
                alt="YouTube Playlist: Building a Full-Stack Application in RedwoodJS"
              />
            </a>
          </div>
          <div>
            <h3 className="mb-5 text-2xl font-thin hover:text-sulu">
              <a
                href={Constants.YOUTUBE_SERIES}
                target="_blank"
                rel="noreferrer"
              >
                Building a Full-Stack Application in RedwoodJS
              </a>
            </h3>
            <p className="mb-5">
              This is a multi-part series that core Team Member, Amy Dutton, has
              been working on. She builds a Hacker News Clone and covers React,
              GraphQL, Apollo, Storybook, Prisma, TypeScript, and Jest.
            </p>
            <p>
              <a
                href={Constants.YOUTUBE_SERIES}
                className="group/link inline-flex cursor-pointer items-center uppercase"
                target="_blank"
                rel="noreferrer"
              >
                <span className="border-b-1 border-b-black text-sm font-bold group-hover/link:border-b-alienArmpit dark:border-b-white dark:group-hover/link:border-b-sulu">
                  Watch the Playlist
                </span>{' '}
                <Icon id="doubleChevronRight" />
              </a>
            </p>
          </div>

          <div>
            <a href={Constants.TUTORIAL}>
              <img
                src="/images/redwood-tutorial.png"
                alt="RedwoodJS Tutorial"
              />
            </a>
          </div>
          <div>
            <h3 className="mb-5 text-2xl font-thin">
              <a href={Constants.TUTORIAL} className="hover:text-sulu">
                RedwoodJS Tutorial
              </a>
            </h3>
            <p className="mb-5">
              If you prefer reading instead of watching, this is for you! This
              tutorial is really a master class in building a full-stack
              application. It covers GraphQL, Apollo, Storybook, Prisma,
              TypeScript, and Jest. At the end, you should have everything you
              need to build full-stack applications within Redwood.
            </p>
            <p>
              <a
                href={Constants.TUTORIAL}
                className="group/link inline-flex cursor-pointer items-center uppercase"
                target="_blank"
                rel="noreferrer"
              >
                <span className="border-b-1 border-b-black text-sm font-bold group-hover/link:border-b-alienArmpit dark:border-b-white dark:group-hover/link:border-b-sulu">
                  Read the Tutorial
                </span>{' '}
                <Icon id="doubleChevronRight" />
              </a>
            </p>
          </div>
        </div>
      </Accordion>
      <Accordion
        heading="React Server Components is the future. How is RedwoodJS implementing them?"
        subheading="We’ve named our next epoch of development, Big Horn, entirely focused on implemented React Server Components and SSR."
      >
        <div className="col-span-2 grid gap-5">
          <BlogCard
            post={{
              id: '1',
              author: {
                id: '1',
                name: 'Rob Cameron',
                profilePicture:
                  'https://cdn.hashnode.com/res/hashnode/image/upload/v1711036438023/VTHdKJskw.jpg',
              },
              title: 'React Server Components Now in RedwoodJS',
              slug: 'rsc-now-in-redwoodjs',
              brief:
                'Welcome to the preview of RedwoodJS Bighorn! You may not have realized it, but you’ve been living in the Arapahoe epoch since Redwood v1.0. Bighorn is the next epoch, and will bring a massive change to how apps are built with Redwood: React Server Co...',
              publishedAt: '2024-04-24T07:59:20.092Z',
            }}
          />
          <BlogCard
            post={{
              id: '2',
              author: {
                id: '1',
                name: 'Rob Cameron',
                profilePicture:
                  'https://cdn.hashnode.com/res/hashnode/image/upload/v1711036438023/VTHdKJskw.jpg',
              },
              title: 'Building a new docs site with RSC',
              slug: 'building-a-new-docs-site-with-rsc',
              brief:
                "As big fans of the dog fooding principle, we want to put RSC through its paces by using it to build more than just a demo app. As Redwood's support for RSC becomes more mature we are going to need to document it with the same attention we pay to the ...",
              publishedAt: '2024-04-24T07:59:20.092Z',
            }}
          />
          <BlogCard
            post={{
              id: '3',
              author: {
                id: '2',
                name: 'Danny Choudhury',
                profilePicture:
                  'https://cdn.hashnode.com/res/hashnode/image/upload/v1715618460173/IpqHQvSWS.jpeg',
              },
              title: 'Middleware in RedwoodJS',
              slug: 'middleware-in-redwoodjs',
              brief:
                "An Introduction to Middleware What is middleware? It's a function that runs before your request is routed and rendered – giving you the ability to: a) Intercept and modify the response b) Enrich the request “context” (e.g. add auth details) c) Enrich...",
              publishedAt: '2024-05-10T07:59:20.092Z',
            }}
          />
          <BlogCard
            post={{
              id: '4',
              author: {
                id: '1',
                name: 'Rob Cameron',
                profilePicture:
                  'https://cdn.hashnode.com/res/hashnode/image/upload/v1711036438023/VTHdKJskw.jpg',
              },
              title: 'New Feature: og:image Middleware',
              slug: 'new-feature-ogimage-middleware',
              brief:
                "og:image Middleware is only available in the latest canaries of Redwood! The code snippets below assume you're on at least 8.0.0-canary.570 If you've spent any time around the marketing department of your company/startup, you're probably familia...",
              publishedAt: '2024-05-13T07:59:20.092Z',
            }}
          />
        </div>
      </Accordion>
      <Accordion
        heading="What does the future of Redwood look like?"
        subheading="Short answer: Bright! Long answer: We have a roadmap for that!"
      >
        <RoadmapDetails />
      </Accordion>

      <GetInvolved />

      <ConnectWithUs />
    </>
  )
}

export default ReactConfPage
