import { Link, routes, useLocation } from '@redwoodjs/router'
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
import { getPostBySlug } from 'src/content/posts'
import { Constants } from 'src/helpers/Constants'

const ReactConfPage = () => {
  const { origin } = useLocation()
  return (
    <>
      <Metadata
        title="React Conf"
        description="Hello, from React Conf 2024!"
        og={{ image: `${origin}/images/og.png` }}
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
              post={getPostBySlug(
                'whats-different-comparing-the-router-in-nextjs-app-api-nextjs-pages-api-remix-and-redwoodjs'
              )}
            />
          </div>
          <div className="col-span-6 lg:col-span-3">
            <BlogCard post={getPostBySlug('techniques-for-fetching-data')} />
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
          <BlogCard post={getPostBySlug('rsc-now-in-redwoodjs')} />
          <BlogCard post={getPostBySlug('building-a-new-docs-site-with-rsc')} />
          <BlogCard post={getPostBySlug('middleware-in-redwoodjs')} />
          <BlogCard post={getPostBySlug('new-feature-ogimage-middleware')} />
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
