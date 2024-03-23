import { Link, routes } from '@redwoodjs/router'

import Icon from '../Icon/Icon'

const RightClickLogoMenu = () => {
  return (
    <div className="right-click-menu">
      <ul>
        <li>
          <a
            href="/"
            className="group/openLink flex items-center gap-2 font-bold"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              id="arrowUpRight"
              className="text-battleshipGray group-hover/openLink:text-sulu"
            />
            Open Link in New Tab
          </a>
        </li>
        <li>
          <div className="mb-3 flex items-center gap-2">
            <button className="group/copyLogo flex items-center gap-2 font-bold">
              <Icon
                id="copy"
                className="text-battleshipGray group-hover/copyLogo:text-sulu"
              />
              Copy Logo as SVG
            </button>
          </div>
          <div>
            <Link
              to={routes.brand()}
              className="group/brandKit flex items-center gap-2 font-bold"
            >
              <Icon
                id="brand"
                className="text-battleshipGray group-hover/brandKit:text-sulu"
              />
              Go to Brand Kit
            </Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default RightClickLogoMenu
