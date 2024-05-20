import { Link, routes, useLocation } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const SecurityPage = () => {
  const { origin } = useLocation()

  return (
    <>
      <Metadata
        title="Security"
        description="Security page"
        og={{ image: `${origin}/images/og.png` }}
      />

      <h1>Security Page</h1>
      <p>
        Find me in <code>./web/src/pages/SecurityPage/SecurityPage.tsx</code>
      </p>
      <p>
        My default route is named <code>security</code>, link to me with `
        <Link to={routes.security()}>Security</Link>`
      </p>
    </>
  )
}

export default SecurityPage
