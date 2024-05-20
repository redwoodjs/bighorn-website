import { Link, routes, useLocation } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ChangelogPage = () => {
  const { origin } = useLocation()
  return (
    <>
      <Metadata
        title="Changelog"
        description="Changelog page"
        og={{ image: `${origin}/images/og.png` }}
      />

      <h1>ChangelogPage</h1>
      <p>
        Find me in <code>./web/src/pages/ChangelogPage/ChangelogPage.tsx</code>
      </p>
      <p>
        My default route is named <code>changelog</code>, link to me with `
        <Link to={routes.changelog()}>Changelog</Link>`
      </p>
    </>
  )
}

export default ChangelogPage
