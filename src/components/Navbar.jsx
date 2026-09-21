import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import { FaBars, FaTimes, FaHome } from 'react-icons/fa'
import { nav } from '../data'
export const Logo = () => (
  <Link to="/" className="flex items-center gap-2 text-white">
    <FaHome className="text-2xl text-gold" />
    <span className="text-lg font-bold leading-none">
      Real
      <br />
      <span className="text-xs font-medium text-white/80">estate.com</span>
    </span>
  </Link>
)
export default function Navbar() {
  const [open, setOpen] = useState(false),
    [sc, setSc] = useState(false),
    { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const f = () => setSc(window.scrollY > 20)
    f()
    window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])
  const cls = ({ isActive }) =>
    `text-sm font-medium transition hover:text-gold ${isActive ? 'text-gold' : 'text-white/90'}`
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${sc ? 'bg-brand-900/95 py-3 shadow-lg backdrop-blur' : 'bg-transparent py-5'}`}
    >
      <div className="wrap flex items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map(([n, to]) => (
            <NavLink key={to} to={to} className={cls}>
              {n}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden rounded-full bg-gold px-5 py-2 text-sm font-semibold text-brand-900 lg:block"
        >
          Schedule a Call
        </Link>
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-xl text-white lg:hidden"
        >
          <FaBars />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="bg"
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              className="fixed right-0 top-0 z-50 flex h-dvh w-72 max-w-[85%] flex-col bg-brand-900 p-6 shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            >
              <div className="mb-8 flex items-center justify-between">
                <Logo />
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="text-2xl text-white"
                >
                  <FaTimes />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {nav.map(([n, to], i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `block rounded-lg px-4 py-3 font-medium ${isActive ? 'bg-white/10 text-gold' : 'text-white/90'}`
                      }
                    >
                      {n}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <Link
                to="/contact"
                className="mt-auto rounded-full bg-gold py-3 text-center font-semibold text-brand-900"
              >
                Schedule a Call
              </Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
