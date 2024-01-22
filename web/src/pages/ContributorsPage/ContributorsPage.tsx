import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ContributorsPage = () => {
  return (
    <>
      <Metadata title="Contributors" description="Contributors page" />

      <h1>ContributorsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ContributorsPage/ContributorsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>contributors</code>, link to me with `
        <Link to={routes.contributors()}>Contributors</Link>`
      </p>
    </>
  )
}

export default ContributorsPage
