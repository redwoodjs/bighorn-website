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
        darkMode ? 'bg-white' : ''
      }`}
      onMouseEnter={showDownloadButtons}
      onFocus={showDownloadButtons}
      onBlur={hideDownloadButtons}
      onMouseLeave={hideDownloadButtons}
    >
      <img src={src} alt={alt} />

      <AnimatePresence>
        {isButtonsShowing && (
          <motion.div
            className="absolute bottom-4 right-4 flex items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            <a href={png} className="button !border-1 outline">
              .png
            </a>
            <a href={svg} className="button !border-1 outline">
              .svg
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AssetCard
