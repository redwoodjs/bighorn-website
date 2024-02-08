import { useRef, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'

import { Constants } from 'src/helpers/Constants'
import { useOutsideClick } from 'src/hooks/useClickoutside'
import { useEscapeKey } from 'src/hooks/useEscapeKey'

import Icon from '../Icon/Icon'
import NavDropdown from '../NavDropdown/NavDropdown'

const Nav = () => {
  const [isCommunityDropdownShowing, setIsCommunityDropdownShowing] =
    useState(false)
  const communityMenu = useRef(null)

  useOutsideClick(() => setIsCommunityDropdownShowing(false), communityMenu)

  useEscapeKey(() => setIsCommunityDropdownShowing(false))

  const toggleCommunityDropdown = () => {
    setIsCommunityDropdownShowing((prevValue) => !prevValue)
  }

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
          <li>
            <button
              className="relative hover:text-sulu"
              onClick={toggleCommunityDropdown}
              ref={communityMenu}
            >
              <div className="flex items-center gap-1">
                Community
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{
                    rotate: isCommunityDropdownShowing ? -180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon id="chevronDown" size={16} />
                </motion.div>
              </div>
              <AnimatePresence>
                {isCommunityDropdownShowing && (
                  <motion.div
                    className="absolute right-0 top-10 text-left"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <NavDropdown />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
