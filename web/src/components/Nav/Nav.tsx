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
    useState(false) // this is used to store the state of the nav dropdown for table =>
  const communityMenu = useRef(null)
  const [isNavShowing, setIsNavShowing] = useState() // this is used to control he state of the mobile nav

  useOutsideClick(() => setIsCommunityDropdownShowing(false), communityMenu)

  useEscapeKey(() => setIsCommunityDropdownShowing(false))

  const toggleCommunityDropdown = () => {
    setIsCommunityDropdownShowing((prevValue) => !prevValue)
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start gap-1">
        <Link to={routes.home()} className="mr-10 md:mr-0">
          <img src="/images/logo.svg" alt="RedwoodJS" />
        </Link>
        <div className="hidden rounded-md bg-darkPastelRed px-2 py-1 text-sm font-bold leading-none text-white md:inline-block">
          v6.6.62
        </div>
      </div>

      <nav>
        {/* hamburger */}
        <button
          className="flex flex-col gap-[6px]"
          onClick={() => {
            setIsNavShowing((prevValue) => !prevValue)
          }}
        >
          <motion.div
            className="h-1 w-8 bg-white"
            initial={{ y: 0 }}
            animate={
              isNavShowing
                ? { y: [0, 10, 10], rotate: [0, 0, 45] }
                : { y: [10, 10, 0], rotate: [45, 0, 0] }
            }
            exit={{ y: 0, rotate: [45, 0, 0] }}
            transition={{ duration: 0.35 }}
          />
          <motion.div
            className="h-1 w-8 bg-white"
            initial={{ opacity: 0 }}
            animate={
              isNavShowing ? { opacity: [1, 0, 0] } : { opacity: [0, 0, 1] }
            }
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          />
          <motion.div
            className="h-1 w-8 bg-white"
            initial={{ y: 0 }}
            animate={
              isNavShowing
                ? { y: [0, -10, -10], rotate: [0, 0, -45] }
                : { y: [-10, -10, 0], rotate: [-45, 0, 0] }
            }
            exit={{ y: 0, rotate: [45, 0, 0] }}
            transition={{ duration: 0.35 }}
          />
        </button>

        {/* mobile nav */}
        <ul>
          <li>Home</li>
          <li>Docs</li>
          <li>Blog</li>
          <li>
            <div className="flex items-center">
              Community <Icon id="chevronDown" size={16} />
            </div>
            <ul>
              <li></li>
            </ul>
          </li>
        </ul>
      </nav>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          <li>
            <a href={Constants.DOCS} target="_blank" rel="noreferrer">
              Docs
            </a>
          </li>
          <li>
            <Link to={routes.blogIndividual({ slug: 'bighorn-update' })}>
              Blog
            </Link>
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
