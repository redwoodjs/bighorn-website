import { Metadata } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/dist/toast'

import Footer from 'src/components/Footer/Footer'
// import ChangelogSummary from 'src/components/Home/ChangelogSummary/ChangelogSummary'
import EventSummary from 'src/components/Home/EventSummary/EventSummary'
import HomeHero from 'src/components/Home/HomeHero/HomeHero'
import RedwoodIs from 'src/components/Home/RedwoodIs/RedwoodIs'
import RoadmapSummary from 'src/components/Home/RoadmapSummary/RoadmapSummary'
import WhatsIncluded from 'src/components/Home/WhatsIncluded/WhatsIncluded'
import Newsletter from 'src/components/Newsletter/Newsletter'

const HomePage = () => {
  return (
    <>
      <Metadata
        title="Home"
        description="Redwood is the full-stack JavaScript application framework."
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

      {/* UPCOMING-EVENTS */}
      <EventSummary />

      {/* NEWSLETTER */}
      <Newsletter />

      <Footer />
    </>
  )
}

export default HomePage
