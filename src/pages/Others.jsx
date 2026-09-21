import { Link } from 'react-router'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { PageHero, Reveal, Head, Btn } from '../components/ui'
import { u, IMG, stats, services, agents, posts, why } from '../data'
export const About = () => (
  <>
    <PageHero
      title="About Us"
      sub="We make real estate simple, safe and successful for everyone."
    />
    <section className="py-16">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <img
            src={u(IMG.interior, 1000)}
            alt="Interior"
            className="h-80 w-full rounded-tl-[4rem] rounded-br-[4rem] object-cover"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <Head
            tag="Our story"
            title="Two decades of helping people come home"
          />
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Realestate.com started as a small local agency and grew into a
            worldwide network of verified listings and trusted agents. We
            publish clear pricing, explain every fee and stay with you until the
            keys are in your hand.
          </p>
          <div className="mt-6">
            <Btn to="/contact">Talk to an agent</Btn>
          </div>
        </Reveal>
      </div>
    </section>
    <section className="bg-brand-900 py-14">
      <div className="wrap grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map(([n, l], i) => (
          <Reveal key={l} delay={i * 0.08} className="text-center">
            <b className="text-3xl text-gold sm:text-4xl">{n}</b>
            <p className="mt-1 text-sm text-white/70">{l}</p>
          </Reveal>
        ))}
      </div>
    </section>
    <section className="py-16">
      <div className="wrap">
        <Head center tag="Our values" title="What we stand for" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.map(([I, t, s], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-md">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/20 text-gold">
                  <I />
                </span>
                <h3 className="mt-4 font-semibold">{t}</h3>
                <p className="mt-1 text-xs text-slate-500">{s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <section className="pb-16">
      <div className="wrap">
        <Head tag="Our team" title="People you can rely on" />
        <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {agents.map((a, i) => (
            <Reveal key={a.n} delay={i * 0.08}>
              <div className="overflow-hidden rounded-2xl bg-white shadow-md">
                <img
                  src={u(a.i, 500)}
                  alt={a.n}
                  className="h-52 w-full object-cover object-top"
                />
                <div className="p-4">
                  <b className="block text-sm">{a.n}</b>
                  <span className="text-xs text-slate-500">{a.r}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </>
)
export const Services = () => (
  <>
    <PageHero
      title="Our Services"
      sub="Complete real estate solutions under one roof."
    />
    <section className="py-16">
      <div className="wrap grid gap-6 md:grid-cols-2">
        {services.map(([I, t, s], i) => (
          <Reveal key={t} delay={(i % 2) * 0.1}>
            <div className="flex h-full gap-5 rounded-2xl bg-white p-7 shadow-md">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-800 text-xl text-gold">
                <I />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-brand-900">{t}</h3>
                <p className="mt-2 text-sm text-slate-500">{s}</p>
                <Link
                  to="/contact"
                  className="mt-3 inline-block text-xs font-semibold text-gold"
                >
                  Ask about this service
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  </>
)
export const Blog = () => (
  <>
    <PageHero
      title="Insights & Tips"
      sub="Market news, buying guides and expert advice."
    />
    <section className="py-16">
      <div className="wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...posts, ...posts].map((p, i) => (
          <Reveal key={i} delay={(i % 3) * 0.1}>
            <article className="overflow-hidden rounded-2xl bg-white shadow-md">
              <img
                src={u(p.i, 700)}
                alt={p.t}
                loading="lazy"
                className="h-48 w-full object-cover"
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
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  </>
)
export const Contact = () => (
  <>
    <PageHero
      title="Contact Us"
      sub="Tell us what you're looking for and an agent will call you back."
    />
    <section className="py-16">
      <div className="wrap grid gap-8 lg:grid-cols-5">
        <Reveal className="space-y-5 rounded-3xl bg-brand-900 p-8 text-white lg:col-span-2">
          {[
            [FaPhoneAlt, '+880 1783 542294'],
            [FaEnvelope, 'info@realestate.com'],
            [FaMapMarkerAlt, 'Dhaka, Bangladesh']
          ].map(([I, t]) => (
            <div key={t} className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-gold">
                <I />
              </span>
              {t}
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          <form
            onSubmit={e => {
              e.preventDefault()
              alert('Message sent!')
            }}
            className="grid gap-4 rounded-3xl bg-white p-6 shadow-lg sm:grid-cols-2"
          >
            {['Full name', 'Email', 'Phone', 'Subject'].map(f => (
              <input
                key={f}
                required
                placeholder={f}
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-gold"
              />
            ))}
            <textarea
              rows="5"
              placeholder="Your message"
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-gold sm:col-span-2"
            />
            <button className="rounded-full bg-gold py-3 font-semibold text-brand-900 sm:col-span-2">
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  </>
)
export const NotFound = () => (
  <div className="grid min-h-screen place-items-center bg-brand-900 px-4 text-center">
    <div>
      <b className="text-8xl text-gold">404</b>
      <h1 className="mt-2 text-2xl font-bold text-white">
        This page doesn't exist
      </h1>
      <div className="mt-6">
        <Btn to="/">Back to home</Btn>
      </div>
    </div>
  </div>
)
