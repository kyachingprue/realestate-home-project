import { useState } from 'react'
import { Link, useParams } from 'react-router'
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaSearch
} from 'react-icons/fa'
import { PageHero, PropertyCard, Reveal, Btn } from '../components/ui'
import { props, cats, u } from '../data'
export function Properties() {
  const [cat, setCat] = useState('All'),
    [q, setQ] = useState('')
  const list = props.filter(
    p =>
      (cat === 'All' || p.type === cat) &&
      (p.title + p.loc).toLowerCase().includes(q.toLowerCase())
  )
  return (
    <>
      <PageHero
        title="Our Properties"
        sub="Browse verified homes, apartments, land and commercial spaces."
      />
      <section className="py-16">
        <div className="wrap">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {cats.map(c => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`shrink-0 rounded-full px-5 py-2 text-xs font-medium ${cat === c ? 'bg-brand-800 text-white' : 'bg-white text-slate-600'}`}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <FaSearch className="text-slate-400" />
              <input
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Search by name or city"
                className="text-sm outline-none"
              />
            </label>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <PropertyCard key={p.id} p={p} i={i} />
            ))}
          </div>
          {!list.length && (
            <p className="mt-10 text-center text-slate-500">
              No matches. Try a different category or search term.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
export function PropertyDetails() {
  const p = props.find(x => x.id === +useParams().id)
  if (!p)
    return (
      <div className="wrap py-40 text-center">
        <h1 className="text-3xl font-bold">Property not found</h1>
        <div className="mt-6">
          <Btn to="/properties">Back to properties</Btn>
        </div>
      </div>
    )
  return (
    <>
      <PageHero title={p.title} sub={p.loc} />
      <section className="py-16">
        <div className="wrap grid gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <img
              src={u(p.img, 1400)}
              alt={p.title}
              className="h-72 w-full rounded-3xl object-cover sm:h-[28rem]"
            />
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-3xl font-bold text-brand-800">{p.price}</h2>
              <span className="rounded-full bg-brand-800 px-4 py-1 text-xs text-white">
                {p.tag}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gold" />
                {p.loc}
              </span>
              {p.beds > 0 && (
                <>
                  <span className="flex items-center gap-2">
                    <FaBed className="text-gold" />
                    {p.beds} Beds
                  </span>
                  <span className="flex items-center gap-2">
                    <FaBath className="text-gold" />
                    {p.baths} Baths
                  </span>
                </>
              )}
              <span className="flex items-center gap-2">
                <FaRulerCombined className="text-gold" />
                {p.area}
              </span>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              A well-located {p.type.toLowerCase()} property with quality
              finishes, easy neighbourhood access and strong long-term value.
              Book a viewing to see it in person and speak with one of our
              agents.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <form
              onSubmit={e => {
                e.preventDefault()
                alert('Request sent!')
              }}
              className="space-y-3 rounded-3xl bg-white p-6 shadow-lg lg:sticky lg:top-28"
            >
              <h3 className="text-lg font-bold text-brand-900">
                Book a viewing
              </h3>
              {['Full name', 'Email', 'Phone'].map(f => (
                <input
                  key={f}
                  required
                  placeholder={f}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-gold"
                />
              ))}
              <textarea
                rows="3"
                placeholder="Message"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-gold"
              />
              <button className="w-full rounded-full bg-gold py-3 font-semibold text-brand-900">
                Request viewing
              </button>
              <Link
                to="/properties"
                className="block text-center text-xs text-slate-500"
              >
                Back to all properties
              </Link>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
