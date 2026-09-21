import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FaArrowUp } from 'react-icons/fa'
export default function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > window.innerHeight * 0.8)
    f()
    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.4, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.4, y: 30 }}
          whileHover={{ y: -4 }}
          className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-gold text-brand-900 shadow-xl sm:bottom-8 sm:right-8"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
