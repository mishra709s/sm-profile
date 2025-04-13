'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const PageTransition = ({ children }) => {
  const pathName = usePathname()
  return (
    <AnimatePresence>
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="bg-primary top-0"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
