import { useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import Icon from 'src/components/Icon/Icon'
import { Constants } from 'src/helpers/Constants'

const ServerComponentsPage = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    // copy text to clipboard
    navigator.clipboard.writeText(Constants.RSC_QUICKSTART)

    // change icon
    setIsCopied(true)

    // change the icon back
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <>
      <Metadata
        title="Server Components"
        description="The fastest way to get started with Redwood Server Components"
      />

      <div className="page-content">
        <header className="grid grid-cols-10 gap-5 py-[100px]">
          <div className="col-span-10">
            <h1 className="mb-5 font-serif text-5xl font-bold text-maiTai md:text-7xl">
              Quick Start
            </h1>
            <h2 className="mb-10 font-sans text-4xl font-thin text-battleshipGray">
              The easiest way to get started with Redwood Server Components
            </h2>
            <div className="inline-flex h-[53px] items-center justify-between gap-7 rounded-[4px] border-2 border-maiTai px-7">
              <div
                contentEditable={true}
                className="font-white font-mono text-base leading-none md:text-lg"
              >
                {Constants.RSC_QUICKSTART}
              </div>
              <button
                onClick={copyToClipboard}
                aria-label="copy install command"
              >
                {isCopied ? (
                  <span className="text-sulu">
                    <Icon id="check" />
                  </span>
                ) : (
                  <span className="text-battleshipGray hover:text-christi dark:hover:text-white">
                    <Icon id="clipboard" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default ServerComponentsPage
