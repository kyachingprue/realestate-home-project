import { motion } from 'motion/react'
import { Link } from 'react-router'
import {
  FaArrowRight,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt
} from 'react-icons/fa'
import { u } from '../data'
export const Reveal = ({ children, delay = 0, x = 0, className = '' }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 28, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)
export const Btn = ({ to, children }) => (
  <Link
    to={to}
    className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-brand-900 shadow-lg transition hover:brightness-110"
  >
    {children}
    <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
  </Link>
)
export const Head = ({ tag, title, sub, light, center }) => (
  <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
    <p className="text-xs font-semibold tracking-widest text-gold">{tag}</p>
    <h2
      className={`mt-2 text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-brand-900'}`}
    >
      {title}
    </h2>
    {sub && (
      <p
        className={`mt-3 text-sm ${light ? 'text-white/70' : 'text-slate-500'}`}
      >
        {sub}
      </p>
    )}
  </Reveal>
)
export const PageHero = ({ title, sub }) => (
  <section className="bg-brand-900 pb-20 pt-36 text-center">
    <div className="wrap">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white sm:text-5xl"
      >
        {title}
      </motion.h1>
      <p className="mx-auto mt-4 max-w-xl text-white/70">{sub}</p>
    </div>
  </section>
)
export const PropertyCard = ({ p, i = 0 }) => (
  <Reveal delay={(i % 3) * 0.1}>
    <Link
      to={`/properties/${p.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={u(p.img, 700)}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-800 px-3 py-1 text-xs font-medium text-white">
          {p.tag}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-brand-900">{p.title}</h3>
        <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
          <FaMapMarkerAlt className="text-gold" />
          {p.loc}
        </p>
        <div className="mt-3 flex gap-4 text-xs text-slate-500">
          {p.beds > 0 && (
            <>
              <span className="flex items-center gap-1">
                <FaBed />
                {p.beds} Beds
              </span>
              <span className="flex items-center gap-1">
                <FaBath />
                {p.baths} Baths
              </span>
            </>
          )}
          <span className="flex items-center gap-1">
            <FaRulerCombined />
            {p.area} {p.area.includes('acre') ? '' : 'sq ft'}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="font-bold text-brand-800">{p.price}</span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-800 text-white transition group-hover:bg-gold group-hover:text-brand-900">
            <FaArrowRight className="text-xs" />
          </span>
        </div>
      </div>
    </Link>
  </Reveal>
)
