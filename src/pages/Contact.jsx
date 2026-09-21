import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { PageHero, Reveal } from "../components/ui"
import ModernFeatureCard from "../components/ModernFeatureCard"
import { Helmet } from "react-helmet-async"

export const Contact = () => (
  <>
    <Helmet>
      <title>Contact | Real Estate</title>

      <meta
        name="description"
        content="Explore our collection of premium properties, homes, apartments and investment opportunities."
      />

      <link rel="canonical" href="https://yourwebsite.com/properties" />
    </Helmet>
    <PageHero
      title="Contact Us"
      sub="Tell us what you're looking for and an agent will call you back."
    />
    <section className="py-16">
      <div className="wrap grid gap-8 lg:grid-cols-5">
        <Reveal className="space-y-5 rounded-3xl bg-brand-900 p-8 text-white lg:col-span-2">
          {[
            [FaPhoneAlt, '+880 1234567890'],
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
    <ModernFeatureCard />
  </>
)
