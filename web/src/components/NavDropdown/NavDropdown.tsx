import { Constants } from 'src/helpers/Constants'

import Icon from '../Icon/Icon'

const NavDropdown = () => {
  return (
    <div className="nav-dropdown">
      <ul>
        <li>
          <a href={Constants.DISCORD} target="_blank" rel="noreferrer">
            <Icon size={32} id="discord" />
            <div>
              <strong>Discord</strong>
              <p>
                Watercooler, relationship building, quick discussion and help
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href={Constants.DISCOURSE} target="_blank" rel="noreferrer">
            <Icon size={32} id="discourse" />
            <div>
              <strong>Discourse</strong>
              <p>
                Long-form discussions about Redwood, troubleshooting, show &
                tell
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href={Constants.X} target="_blank" rel="noreferrer">
            <Icon size={32} id="x" />
            <div>
              <strong>Twitter / X</strong>
              <p>
                Follow @redwoodjs for updates, new releases and community meetup
                announcements
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavDropdown
