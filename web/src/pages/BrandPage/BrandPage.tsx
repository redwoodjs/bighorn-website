import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const BrandPage = () => {
  return (
    <>
      <Metadata title="Brand" description="Brand page" />

      <h1>BrandPage</h1>
      <p>
        Find me in <code>./web/src/pages/BrandPage/BrandPage.tsx</code>
      </p>
      <p>
        My default route is named <code>brand</code>, link to me with `
        <Link to={routes.brand()}>Brand</Link>`
      </p>
    </>
  )
}

export default BrandPage
