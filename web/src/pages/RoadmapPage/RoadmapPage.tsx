import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const RoadmapPage = () => {
  return (
    <>
      <Metadata title="Roadmap" description="Roadmap page" />

      <h1>RoadmapPage</h1>
      <p>
        Find me in <code>./web/src/pages/RoadmapPage/RoadmapPage.tsx</code>
      </p>
      <p>
        My default route is named <code>roadmap</code>, link to me with `
        <Link to={routes.roadmap()}>Roadmap</Link>`
      </p>
    </>
  )
}

export default RoadmapPage
