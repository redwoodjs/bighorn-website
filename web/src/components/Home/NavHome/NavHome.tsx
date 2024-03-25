import { useEffect, useRef, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { Link, routes } from '@redwoodjs/router'

import { Constants } from 'src/helpers/Constants'
import { useOutsideClick } from 'src/hooks/useClickoutside'
import { useEscapeKey } from 'src/hooks/useEscapeKey'

import Icon from '../../Icon/Icon'
import NavDropdown from '../../NavDropdown/NavDropdown'
import RightClickLogoMenu from '../../RightClickLogoMenu/RightClickLogoMenu'
import ThemeDropdown from '../../ThemeDropdown/ThemeDropdown'

const Nav = () => {
  const [isCommunityDropdownShowing, setIsCommunityDropdownShowing] =
    useState(false) // this is used to store the state of the nav dropdown for table =>
  const [isRightClickLogoMenu, setIsRightClickLogoMenu] = useState(false)
  const communityMenu = useRef(null)
  const logoRef = useRef(null)
  const themeSwitcherWrapperRef = useRef(null)
  const logoWrapperRef = useRef(null)
  const [isNavShowing, setIsNavShowing] = useState(false) // this is used to control he state of the mobile nav
  const [isThemeDropdownShowing, setIsThemeDropdownShowing] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>('system')

  // set up right click on the logo
  useEffect(() => {
    logoRef.current.addEventListener(
      'contextmenu',
      function (e) {
        e.preventDefault()
        setIsRightClickLogoMenu(true)
      },
      false
    )
  }, [logoRef])

  // when the user clicks outside
  useOutsideClick(() => setIsCommunityDropdownShowing(false), communityMenu)
  useOutsideClick(() => setIsRightClickLogoMenu(false), logoWrapperRef)
  useOutsideClick(
    () => setIsThemeDropdownShowing(false),
    themeSwitcherWrapperRef
  )

  // when the user hits the escape key (close all the dropdown menus)
  useEscapeKey(() => {
    setIsCommunityDropdownShowing(false)
    setIsRightClickLogoMenu(false)
    setIsThemeDropdownShowing(false)
  })

  // initialize - get the theme from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('bighorn-theme') || 'system'
    setSelectedTheme(savedTheme as ThemeType)
  }, [])

  // when the selected theme changes within the state, update the class list and local storage
  useEffect(() => {
    // update class list
    // clear out the existing class list
    document.documentElement.classList.remove('dark', 'light', 'system')

    // if the class name is 'system'
    if (
      selectedTheme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.add(selectedTheme)
    }

    // update local storage
    localStorage.setItem('bighorn-theme', selectedTheme)
  }, [selectedTheme])

  const toggleCommunityDropdown = () => {
    setIsCommunityDropdownShowing((prevValue) => !prevValue)
  }

  // switch the theme
  const switchTheme = (theme: ThemeType) => {
    setSelectedTheme(theme) // update the selected theme
    setIsThemeDropdownShowing(false) // close the theme dropdown
  }

  return (
    <div className="flex items-center justify-between">
      <div
        className="relative flex items-center justify-start gap-1"
        ref={logoWrapperRef}
      >
        <Link to={routes.home()} className="mr-16 md:mr-0">
          <img src="/images/logo--dark.svg" alt="RedwoodJS" ref={logoRef} />
        </Link>

        {/* right click logo menu */}
        {isRightClickLogoMenu && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="right-click-menu absolute left-6 top-[64px]"
            >
              <RightClickLogoMenu
                callback={() => {
                  setIsRightClickLogoMenu(false)
                }}
              />
            </motion.div>
          </AnimatePresence>
        )}

        <div className="hidden rounded-md bg-darkPastelRed px-2 py-1 text-sm font-bold leading-none text-white md:inline-block">
          {Constants.VERSION}
        </div>
      </div>

      <nav>
        {/* hamburger */}
        <button
          className="fixed right-4 top-4 z-50 flex flex-col gap-[6px] md:hidden"
          onClick={() => {
            setIsNavShowing((prevValue) => !prevValue)
          }}
        >
          <motion.div
            className="h-[2px] w-8 bg-white"
            initial={{ y: 0 }}
            animate={
              isNavShowing
                ? { y: [0, 8, 8], rotate: [0, 0, 45] }
                : { y: [8, 8, 0], rotate: [45, 0, 0] }
            }
            exit={{ y: 0, rotate: [45, 0, 0] }}
            transition={{ duration: 0.35 }}
          />
          <motion.div
            className="h-[2px] w-8 bg-white"
            initial={{ opacity: 0 }}
            animate={
              isNavShowing ? { opacity: [1, 0, 0] } : { opacity: [0, 0, 1] }
            }
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          />
          <motion.div
            className="h-[2px] w-8 bg-white"
            initial={{ y: 0 }}
            animate={
              isNavShowing
                ? { y: [0, -8, -8], rotate: [0, 0, -45] }
                : { y: [-8, -8, 0], rotate: [-45, 0, 0] }
            }
            exit={{ y: 0, rotate: [45, 0, 0] }}
            transition={{ duration: 0.35 }}
          />
        </button>

        {/* mobile nav */}
        <motion.ul
          className="fixed inset-0 -top-[100vh] z-40 flex h-screen w-screen flex-col gap-3 bg-[#111] px-5 py-4"
          initial={{ y: '0' }}
          animate={{ y: isNavShowing ? '100vh' : '0' }}
          exit={{ y: '0' }}
          transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
        >
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <a href={Constants.DOCS}>Docs</a>
          </li>
          <li>
            <Link to={routes.blog()}>Blog</Link>
          </li>
          <li>
            <a href={Constants.DISCORD} className="flex items-center gap-1">
              Community <Icon id="chevronDown" size={16} />
            </a>
            <ul className="flex flex-col gap-2 py-2 pl-4">
              <li className="font-normal">
                <a href={Constants.DISCORD}>Discord</a>
              </li>
              <li className="font-normal">
                <a href={Constants.DISCOURSE}>Discourse</a>
              </li>
              <li className="font-normal">
                <a href={Constants.X}>Twitter</a>
              </li>
            </ul>
          </li>
        </motion.ul>
      </nav>

      {/* desktop nav */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6">
          {/* THEME SWITCHER */}
          <li className="relative" ref={themeSwitcherWrapperRef}>
            <button
              onClick={() => {
                setIsThemeDropdownShowing((prevValue) => !prevValue)
              }}
            >
              <Icon
                id={selectedTheme}
                className="relative top-1 text-battleshipGray hover:text-sulu"
              />
            </button>
            <div>
              <AnimatePresence>
                {isThemeDropdownShowing && (
                  <motion.div
                    className="absolute -right-6 top-12 text-left"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <ThemeDropdown
                      selected={selectedTheme}
                      onClick={switchTheme}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </li>
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
                    className="absolute right-0 top-12 text-left"
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
