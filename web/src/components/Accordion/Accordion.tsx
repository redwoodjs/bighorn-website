import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  heading: string
  subheading: string
}

const Accordion = ({ children, heading, subheading }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="page-content border-b-1 border-maiTai py-[72px]">
      <button
        onClick={() => setIsExpanded((prevValue) => !prevValue)}
        className="grid grid-cols-[32px_1fr] gap-5 md:grid-cols-[54px_1fr] md:gap-10"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          className="h-8 w-8 md:h-[54px] md:w-[54px]"
        >
          <img src="/images/plus.svg" alt="" />
        </motion.div>
        <div>
          <div className="mb-2 text-left text-xl font-thin text-white md:text-2xl">
            {heading}
          </div>
          <div className="text-silverSand text-left text-base text-white md:text-lg">
            {subheading}
          </div>
        </div>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="pl-[52px] pt-8 md:pl-[94px]">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion
