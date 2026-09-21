import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  FaMapMarkerAlt,
  FaHome,
  FaDollarSign,
  FaSearch,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaGlobeAmericas,
  FaPhoneAlt,
  FaArrowRight,
  FaUsers
} from 'react-icons/fa'
import { Reveal, Btn, Head, PropertyCard } from '../components/ui'
import {
  u,
  IMG,
  props,
  cats,
  collections,
  why,
  trust,
  services,
  reviews,
  agents,
  posts
} from '../data'
const Sel = ({ icon: I, label, opts }) => (
  <label className="flex items-center gap-3 px-4 py-2">
    <I className="text-brand-800" />
    <span className="w-full">
      <span className="block text-[11px] text-slate-400">{label}</span>
      <select className="w-full bg-transparent text-sm font-medium text-brand-900 outline-none">
        {opts.map(o => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </span>
  </label>
)
export default function Home() {
  const go = useNavigate(),
    [cat, setCat] = useState('All'),
    [ri, setRi] = useState(0),
    r = reviews[ri]
  const list = props.filter(p => cat === 'All' || p.type === cat)
  return (
    <>
      <section className="relative overflow-hidden bg-brand-900 pb-16 pt-32 lg:min-h-screen lg:pt-36">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm text-gold">Luxury Homes. Better Lives.</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl xl:text-6xl">
              Find Your <span className="text-gold">Dream Property</span> Today
            </h1>
            <p className="mt-5 max-w-md text-sm text-white/70">
              Discover the perfect home, investment, or commercial property with
              Realestate.com. Your trusted partner in real estate, worldwide.
            </p>
            <form
              onSubmit={e => {
                e.preventDefault()
                go('/properties')
              }}
              className="mt-8 grid gap-1 rounded-3xl bg-white p-2 shadow-2xl sm:grid-cols-[1fr_1fr_1fr_auto] sm:rounded-full"
            >
              <Sel
                icon={FaMapMarkerAlt}
                label="Location"
                opts={['Any Location', 'New York', 'Miami', 'Los Angeles']}
              />
              <Sel
                icon={FaHome}
                label="Property Type"
                opts={['Any Type', ...cats.slice(1)]}
              />
              <Sel
                icon={FaDollarSign}
                label="Price Range"
                opts={['Any Price', 'Under $1M', '$1M – $2M', '$2M+']}
              />
              <button
                aria-label="Search"
                className="grid h-12 place-items-center rounded-full bg-gold px-5 text-brand-900 max-sm:rounded-2xl"
              >
                <FaSearch />
              </button>
            </form>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {trust.map(([I, t, s]) => (
                <div key={t} className="flex items-center gap-2 text-white">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/40 text-gold">
                    <I className="text-xs" />
                  </span>
                  <span className="text-[11px] leading-tight">
                    <b className="block text-xs">{t}</b>
                    <span className="text-white/60">{s}</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={u(IMG.hero, 1200)}
              alt="Modern luxury home"
              className="h-72 w-full rounded-tl-[4rem] rounded-br-[4rem] object-cover shadow-2xl sm:h-96 lg:h-[30rem]"
            />
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-full border border-gold/40 bg-brand-900/90 px-5 py-3 text-white backdrop-blur">
              <FaGlobeAmericas className="text-xl text-gold" />
              <span className="text-xs">
                <b className="block">Premium Properties</b>Worldwide
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-20">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Head
              tag="Featured properties"
              title="Handpicked Properties Just for You"
            />
            <Link
              to="/properties"
              className="flex items-center gap-2 text-sm font-medium text-brand-800 hover:text-gold"
            >
              View Properties <FaArrowRight className="text-xs" />
            </Link>
          </div>
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            {cats.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`shrink-0 rounded-full px-5 py-2 text-xs font-medium transition ${cat === c ? 'bg-brand-800 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <PropertyCard key={cat + p.id} p={p} i={i} />
            ))}
          </div>
          {!list.length && (
            <p className="mt-8 text-center text-slate-500">
              No properties in this category yet.
            </p>
          )}
        </div>
      </section>
      <section className="relative overflow-hidden bg-brand-900 py-20">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Head
              light
              tag="Why choose us"
              title="Your Trusted Real Estate Partner Worldwide"
              sub="From finding your dream home to securing the best investment opportunities, we make real estate simple, safe, and successful."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {why.map(([I, t, s], i) => (
                <Reveal key={t} delay={i * 0.08}>
                  <div className="flex gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold">
                      <I />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{t}</h3>
                      <p className="text-xs text-white/60">{s}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8">
              <Btn to="/about">Learn More</Btn>
            </div>
          </div>
          <Reveal x={40}>
            <img
              src={u(IMG.beach, 1000)}
              alt="Coastal property"
              className="h-72 w-full rounded-tl-[4rem] rounded-br-[4rem] object-cover sm:h-96"
            />
          </Reveal>
        </div>
      </section>
      <section className="py-20">
        <div className="wrap">
          <Head
            tag="Our services"
            title="More Than Just Properties. We Offer Complete Solutions"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([I, t, s], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <Link
                  to="/services"
                  className="block h-full rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/20 text-lg text-gold">
                    <I />
                  </span>
                  <h3 className="mt-4 font-semibold text-brand-900">{t}</h3>
                  <p className="mt-2 text-xs text-slate-500">{s}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl bg-brand-900 p-8">
            <p className="text-xs font-semibold tracking-widest text-gold">
              Our featured collection
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white">
              Explore Premium Property Collections
            </h2>
            <p className="mt-3 text-sm text-white/70">
              From luxury villas to modern apartments, we bring you the best
              properties in the most sought-after locations.
            </p>
            <div className="mt-6 space-y-4">
              {collections.map(([I, t, s]) => (
                <div key={t} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-gold">
                    <I />
                  </span>
                  <div>
                    <b className="block text-sm text-white">{t}</b>
                    <span className="text-xs text-white/60">{s}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Btn to="/properties">View All Collections</Btn>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            <img
              src={u(props[1].img, 1000)}
              alt="Luxury villa"
              className="col-span-2 h-56 w-full rounded-3xl object-cover"
            />
            <img
              src={u(IMG.interior, 600)}
              alt="Interior"
              className="h-40 w-full rounded-2xl object-cover sm:h-48"
            />
            <img
              src={u(IMG.city, 600)}
              alt="City skyline"
              className="h-40 w-full rounded-2xl object-cover sm:h-48"
            />
          </Reveal>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Head
              tag="What our clients say"
              title="Real Stories. Real Satisfaction."
              sub="Our clients trust us, and here's what they have to say about their experience."
            />
            <div className="mt-6 min-h-52 rounded-2xl border border-slate-100 p-6 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={ri}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={u(r.i, 150)}
                      alt={r.n}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <b className="block text-sm">{r.n}</b>
                      <span className="text-xs text-slate-500">{r.r}</span>
                    </div>
                  </div>
                  <div className="mt-2 flex text-xs text-gold">
                    {[...Array(5)].map((_, k) => (
                      <FaStar key={k} />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{r.t}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-4 flex gap-2">
              {[
                [FaChevronLeft, -1],
                [FaChevronRight, 1]
              ].map(([I, d], k) => (
                <button
                  key={k}
                  aria-label={d < 0 ? 'Previous' : 'Next'}
                  onClick={() =>
                    setRi((ri + d + reviews.length) % reviews.length)
                  }
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-brand-800 transition hover:bg-brand-800 hover:text-white"
                >
                  <I className="text-xs" />
                </button>
              ))}
            </div>
          </div>
          <Reveal x={40} className="relative">
            <img
              src={u(props[0].img, 1000)}
              alt="Happy home"
              className="h-72 w-full rounded-tl-[4rem] rounded-br-[4rem] object-cover sm:h-96"
            />
            <div className="absolute -bottom-4 right-4 flex items-center gap-3 rounded-2xl bg-brand-800 px-5 py-3 text-white shadow-xl">
              <FaUsers className="text-gold" />
              <span className="text-xs">
                <b className="block text-base">Trusted by 10,000+</b>Happy
                Clients
              </span>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="py-20">
        <div className="wrap">
          <Head
            tag="Meet our experts"
            title="Professional Agents. Real Support."
            sub="Our experienced real estate agents are here to guide you every step of the way."
          />
          <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {agents.map((a, i) => (
              <Reveal key={a.n} delay={i * 0.08}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-md">
                  <img
                    src={u(a.i, 500)}
                    alt={a.n}
                    loading="lazy"
                    className="h-48 w-full object-cover object-top sm:h-60"
                  />
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <b className="block text-sm text-brand-900">{a.n}</b>
                      <span className="text-xs text-slate-500">{a.r}</span>
                    </div>
                    <a
                      href={`tel:${a.p}`}
                      aria-label={`Call ${a.n}`}
                      className="grid h-8 w-8 place-items-center rounded-full bg-brand-800 text-xs text-white"
                    >
                      <FaPhoneAlt />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="wrap">
          <Head tag="Latest news" title="Real Estate Insights & Tips" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.1}>
                <Link
                  to="/blog"
                  className="group block overflow-hidden rounded-2xl bg-white shadow-md"
                >
                  <img
                    src={u(p.i, 700)}
                    alt={p.t}
                    loading="lazy"
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <p className="text-xs text-slate-400">
                      {p.d} • {p.c}
                    </p>
                    <h3 className="mt-2 font-semibold text-brand-900">{p.t}</h3>
                    <span className="mt-3 inline-block text-xs font-medium text-gold">
                      Read More
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="wrap">
          <Reveal className="relative overflow-hidden rounded-3xl bg-brand-900 p-8 sm:p-12">
            <img
              src={u(IMG.beach, 1400)}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />
            <div className="relative max-w-lg">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Your Dream Property Is Just a Click Away!
              </h2>
              <p className="mt-3 text-sm text-white/70">
                Contact us today and let our experts help you find the perfect
                property for your future.
              </p>
              <div className="mt-6">
                <Btn to="/contact">Get in Touch</Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
