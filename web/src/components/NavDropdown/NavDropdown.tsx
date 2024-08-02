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
                Our &quot;watercooler&quot; for relationship building and
                community help
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
                Long-form discussions, show & tell, and troubleshooting with the
                Core Team
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
                Follow @redwoodjs for updates about releases, initiatives, and
                events
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavDropdown
