import { AnimatePresence, motion } from 'framer-motion'

interface TooltipProps {
  children: React.ReactNode
  direction?: 'top' | 'bottom' | 'left' | 'right'
  showing?: boolean
}

const Tooltip = ({
  children,
  direction = 'top',
  showing = false,
}: TooltipProps) => {
  return (
    <AnimatePresence>
      {showing && (
        <motion.div
          initial={{
            opacity: 0,
            y: direction === 'top' ? 10 : direction === 'bottom' ? -10 : 0,
            x: direction === 'left' ? 10 : direction === 'right' ? -10 : 0,
          }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{
            opacity: 0,
            y: direction === 'top' ? 10 : direction === 'bottom' ? -10 : 0,
            x: direction === 'left' ? 10 : direction === 'right' ? -10 : 0,
          }}
          className={`tooltip tooltip-${direction}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Tooltip
