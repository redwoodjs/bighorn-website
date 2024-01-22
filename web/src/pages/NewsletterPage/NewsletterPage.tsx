import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const NewsletterPage = () => {
  return (
    <>
      <Metadata title="Newsletter" description="Newsletter page" />

      <h1>NewsletterPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/NewsletterPage/NewsletterPage.tsx</code>
      </p>
      <p>
        My default route is named <code>newsletter</code>, link to me with `
        <Link to={routes.newsletter()}>Newsletter</Link>`
      </p>
    </>
  )
}

export default NewsletterPage
