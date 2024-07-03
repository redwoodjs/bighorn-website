import { useState } from 'react'

import Icon from 'src/components/Icon/Icon'
import { Constants } from 'src/helpers/Constants'

const RedwoodIs = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    // copy text to clipboard
    navigator.clipboard.writeText(Constants.CREATE_REDWOOD_SCRIPT)

    // change icon
    setIsCopied(true)

    // change the icon back
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <section className="px-5 md:px-page">
      <h2 className="mb-7 font-serif text-6xl leading-none text-maiTai md:text-18 md:leading-[74px]">
        Redwood is the
        <br />
        full-stack JavaScript
        <br />
        application framework.
      </h2>
      <h3 className="mb-14 font-sans text-3xl font-extralight text-battleshipGray md:text-4xl">
        Batteries, backend, React, conventions, and opinions included.
      </h3>

      <div className="flex flex-col gap-9 md:flex-row">
        <a href={Constants.GET_STARTED} className="button">
          Get Started on our Established Base
        </a>
        <div className="flex h-[53px] items-center justify-between gap-7 rounded-[4px] border-2 border-maiTai px-7">
          <div
            contentEditable={true}
            className="font-white font-mono text-base leading-none md:text-lg"
          >
            {Constants.CREATE_REDWOOD_SCRIPT}
          </div>
          <button onClick={copyToClipboard} aria-label="copy install command">
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
    </section>
  )
}

export default RedwoodIs
