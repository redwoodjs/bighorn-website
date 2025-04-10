import { useLocation } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import Footer from 'src/components/Footer/Footer'
import EventSummary from 'src/components/Home/EventSummary/EventSummary'
import HomeHero from 'src/components/Home/HomeHero/HomeHero'
import RedwoodIs from 'src/components/Home/RedwoodIs/RedwoodIs'
import RoadmapSummary from 'src/components/Home/RoadmapSummary/RoadmapSummary'
import WhatsIncluded from 'src/components/Home/WhatsIncluded/WhatsIncluded'
import Newsletter from 'src/components/Newsletter/Newsletter'
import RecentBlogPosts from 'src/components/RecentBlogPosts/RecentBlogPosts'

const HomePage = () => {
  const { origin } = useLocation()
  return (
    <div className="pt-10">
      <Metadata
        title="RedwoodJS: The App Framework for Startups"
        description="Grow from side project to startup with RedwoodJS. Combines React, GraphQL, and Prisma for a full-stack app framework."
        og={{
          image: `${origin}/images/og-new.png`,
          url: 'https://redwoodjs.com',
          type: 'website',
          title: 'RedwoodSDK is here. RedwoodJS is not going anywhere.',
          twitter: {
            card: 'summary_large_image',
            site: '@redwoodjs',
            title: 'RedwoodSDK is here. RedwoodJS is not going anywhere.',
            description: 'RedwoodSDK represents our commitment to the future we want to build - a software ecosystem designed for personal and modular software creation, distribution, and ownership. But RedwoodJS is not going anywhere.',
            image: `${origin}/images/og-new.png`,
          },
        }}
      />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      {/* HERO */}
      <HomeHero />

      {/* REDWOOD IS... */}
      <RedwoodIs />

      {/* VIDEO */}

      {/* WHAT'S INCLUDED */}
      <WhatsIncluded />

      {/* NEWSLETTER */}
      <div className="mb-[270px]">
        <Newsletter />
      </div>

      <Footer />
    </div>
  )
}

export default HomePage
