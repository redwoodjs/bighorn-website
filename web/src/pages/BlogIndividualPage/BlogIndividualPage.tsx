import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const BlogIndividualPage = () => {
  return (
    <>
      <Metadata title="BlogIndividual" description="BlogIndividual page" />

      <h1>BlogIndividualPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/BlogIndividualPage/BlogIndividualPage.tsx</code>
      </p>
      <p>
        My default route is named <code>blogIndividual</code>, link to me with `
        <Link to={routes.blogIndividual()}>BlogIndividual</Link>`
      </p>
    </>
  )
}

export default BlogIndividualPage
