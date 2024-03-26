import { Link, routes } from '@redwoodjs/router'

import { Constants } from 'src/helpers/Constants'

import Icon from '../Icon/Icon'

const Footer = () => {
  const currentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <footer>
      <hr />
      <div className="grid grid-cols-1 gap-y-8 px-5 py-18 md:grid-cols-3 lg:px-page xl:grid-cols-5">
        <div>
          <h4>About</h4>
          <ul>
            <li>
              <a href={Constants.README} target="_blank" rel="noreferrer">
                README
                <Icon id="arrowUpRight" />
              </a>
            </li>
            <li>
              <a href={Constants.CORE_TEAM} target="_blank" rel="noreferrer">
                Core Team <Icon id="arrowUpRight" />
              </a>
            </li>
            <li>
              <a
                href={Constants.ALL_CONTRIBUTORS}
                target="_blank"
                rel="noreferrer"
              >
                All Contributors <Icon id="arrowUpRight" />
              </a>
            </li>
            <li>
              <a href={Constants.SHOP} target="_blank" rel="noreferrer">
                Shop <Icon id="arrowUpRight" />
              </a>
            </li>
            <li>
              <Link to={routes.brand()}>Brand and Logos</Link>
            </li>
            <li>
              <a href={Constants.SECURITY} target="_blank" rel="noreferrer">
                Security <Icon id="arrowUpRight" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>COMMUNITY</h4>
          <ul>
            <li>
              <a href={Constants.COMMUNITY} target="_blank" rel="noreferrer">
                Join the Community
                <Icon id="arrowUpRight" />
              </a>
            </li>
            <li>
              <a href={Constants.MAKER_HOUR} target="_blank" rel="noreferrer">
                Maker Hour
                <Icon id="arrowUpRight" />
              </a>
            </li>
            {/* <li>
              <a href={Constants.STARTUP_CLUB} target="_blank" rel="noreferrer">
                Redwood Startup Club
                <Icon id="arrowUpRight" />
              </a>
            </li> */}
            <li>
              <a
                href={Constants.CODE_OF_CONDUCT}
                target="_blank"
                rel="noreferrer"
              >
                Code of Conduct
                <Icon id="arrowUpRight" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>ANNOUNCEMENTS</h4>
          <ul>
            <li>
              <a href={Constants.EVENTS} target="_blank" rel="noreferrer">
                Events
                <Icon id="arrowUpRight" />
              </a>
            </li>
            <li>
              <a href={Constants.RELEASES} target="_blank" rel="noreferrer">
                Releases
                <Icon id="arrowUpRight" />
              </a>
            </li>
            <li>
              <a href={Constants.STARTUP_FUND} target="_blank" rel="noreferrer">
                Redwood Startup Fund
                <Icon id="arrowUpRight" />
              </a>
            </li>
            <li>
              <a href={Constants.NEWSLETTER} target="_blank" rel="noreferrer">
                Newsletter
                <Icon id="arrowUpRight" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>RESOURCES</h4>
          <ul>
            <li>
              <a href={Constants.DOCS} rel="noreferrer">
                Docs
              </a>
            </li>
            <li>
              <Link to={routes.blog()}>Blog</Link>
            </li>
            <li>
              <a href={Constants.CONFERENCE} target="_blank" rel="noreferrer">
                Conference
                <Icon id="arrowUpRight" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>&nbsp;</h4>
          <ul className="social">
            <li>
              <a href={Constants.GITHUB} target="_blank" rel="noreferrer">
                <Icon id="github" />
                GitHub
              </a>
            </li>
            <li>
              <a href={Constants.DISCORD} target="_blank" rel="noreferrer">
                <Icon id="discord" />
                Discord
              </a>
            </li>
            <li>
              <a href={Constants.DISCOURSE} target="_blank" rel="noreferrer">
                <Icon id="discourse" />
                Discourse
              </a>
            </li>
            <li>
              <a href={Constants.YOUTUBE} target="_blank" rel="noreferrer">
                <Icon id="youtube" />
                YouTube
              </a>
            </li>
            <li>
              <a href={Constants.X} target="_blank" rel="noreferrer">
                <Icon id="x" />X
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="px-5 py-12 lg:px-page">
        <p className="text-sm text-maiTai">
          Copyright &copy; {currentYear()}.{' '}
          <a
            href={Constants.PRESTON_WERNER_VENTURES}
            className="no-underline hover:underline"
          >
            Tom Preston-Werner
          </a>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
