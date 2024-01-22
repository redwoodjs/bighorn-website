import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const CoreTeamPage = () => {
  return (
    <>
      <Metadata title="CoreTeam" description="CoreTeam page" />

      <h1>CoreTeamPage</h1>
      <p>
        Find me in <code>./web/src/pages/CoreTeamPage/CoreTeamPage.tsx</code>
      </p>
      <p>
        My default route is named <code>coreTeam</code>, link to me with `
        <Link to={routes.coreTeam()}>CoreTeam</Link>`
      </p>
    </>
  )
}

export default CoreTeamPage
