import { Link, routes } from '@redwoodjs/router'

import { Constants } from 'src/helpers/Constants'

const Nav = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start gap-1">
        <Link to={routes.home()}>
          <img src="/images/logo.svg" alt="RedwoodJS" />
        </Link>
        <div className="inline-block rounded-md bg-darkPastelRed px-2 py-1 text-sm font-bold leading-none text-white">
          v6.6.62
        </div>
      </div>

      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <a href={Constants.DOCS} target="_blank" rel="noreferrer">
              Docs
            </a>
          </li>
          <li>
            <Link to={routes.blog()}>Blog</Link>
          </li>
          <li>Community</li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
