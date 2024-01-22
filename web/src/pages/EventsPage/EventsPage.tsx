import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const EventsPage = () => {
  return (
    <>
      <Metadata title="Events" description="Events page" />

      <h1>EventsPage</h1>
      <p>
        Find me in <code>./web/src/pages/EventsPage/EventsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>events</code>, link to me with `
        <Link to={routes.events()}>Events</Link>`
      </p>
    </>
  )
}

export default EventsPage
