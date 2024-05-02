import { useLocation } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/dist/toast'

import Footer from 'src/components/Footer/Footer'
// import ChangelogSummary from 'src/components/Home/ChangelogSummary/ChangelogSummary'
import EventSummary from 'src/components/Home/EventSummary/EventSummary'
import HomeHero from 'src/components/Home/HomeHero/HomeHero'
import RecentBlogPostsCell from 'src/components/Home/RecentBlogPostsCell'
import RedwoodIs from 'src/components/Home/RedwoodIs/RedwoodIs'
import RoadmapSummary from 'src/components/Home/RoadmapSummary/RoadmapSummary'
import WhatsIncluded from 'src/components/Home/WhatsIncluded/WhatsIncluded'
import Newsletter from 'src/components/Newsletter/Newsletter'

const HomePage = () => {
  const { origin } = useLocation()
  return (
    <>
      <Metadata
        title="RedwoodJS: The App Framework for Startups"
        description="Grow from side project to startup with RedwoodJS. Combines React, GraphQL, and Prisma for a full-stack app framework."
        og={{
          image: `${origin}/images/og.png`,
          url: 'https://redwoodjs.com',
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

      {/* ROADMAP */}
      <RoadmapSummary />

      {/* CHANGELOG */}
      {/* <ChangelogSummary /> */}

      {/* BLOG */}
      <RecentBlogPostsCell />

      {/* UPCOMING-EVENTS */}
      <EventSummary />

      {/* NEWSLETTER */}
      <div className="mb-[270px]">
        <Newsletter />
      </div>

      <Footer />
    </>
  )
}

export default HomePage
