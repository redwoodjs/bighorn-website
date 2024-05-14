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
        className="grid grid-cols-[54px_1fr] gap-10"
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          className="h-[54px] w-[54px]"
        >
          <img src="/images/plus.svg" alt="" />
        </motion.div>
        <div>
          <div className="mb-2 text-left text-2xl font-thin text-white">
            {heading}
          </div>
          <div className="text-silverSand text-left text-lg text-white">
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
            <div className="pl-[94px] pt-8">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion
