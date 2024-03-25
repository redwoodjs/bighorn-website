import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  alt: string
  darkMode?: boolean
  png: string
  svg: string
  src: string
}

const AssetCard = ({ alt, darkMode = false, png, svg, src }: Props) => {
  const [isButtonsShowing, setIsButtonsShowing] = useState(false)

  const showDownloadButtons = () => {
    setIsButtonsShowing(true)
  }

  const hideDownloadButtons = () => {
    setIsButtonsShowing(false)
  }

  return (
    <div
      className={`center relative min-h-[300px] w-full overflow-hidden rounded-[4px] border-1 border-maiTai p-7 pb-5 ${
        darkMode ? 'bg-licorice' : 'bg-white'
      }`}
      onMouseEnter={showDownloadButtons}
      onFocus={showDownloadButtons}
      onBlur={hideDownloadButtons}
      onMouseLeave={hideDownloadButtons}
    >
      <img src={src} alt={alt} className="max-h-[100px] max-w-[360px]" />

      <AnimatePresence>
        {isButtonsShowing && (
          <motion.div
            className={`absolute bottom-4 right-4 flex items-center gap-4 ${
              darkMode ? 'dark-mode' : 'light-mode'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            <a href={png} className="asset-button">
              .png
            </a>
            <a href={svg} className="asset-button">
              .svg
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AssetCard
