import { Link } from 'react-router'
import { motion } from 'motion/react'

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  Handshake,
  Home,
  KeyRound,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users
} from 'lucide-react'


const services = [
  {
    id: 1,
    icon: Search,
    number: '01',
    title: 'Property Search',
    description:
      'Discover homes, apartments, villas and investment properties that match your lifestyle, budget and goals.',
    features: [
      'Advanced property search',
      'Location-based discovery',
      'Verified property listings'
    ]
  },

  {
    id: 2,
    icon: Home,
    number: '02',
    title: 'Buy a Property',
    description:
      'Get expert support throughout your buying journey, from finding the right property to completing the purchase.',
    features: [
      'Property recommendations',
      'Market insights',
      'Purchase guidance'
    ]
  },

  {
    id: 3,
    icon: KeyRound,
    number: '03',
    title: 'Rent a Property',
    description:
      'Find comfortable and quality rental properties with flexible options for homes, apartments and commercial spaces.',
    features: [
      'Rental property matching',
      'Verified listings',
      'Move-in assistance'
    ]
  },

  {
    id: 4,
    icon: TrendingUp,
    number: '04',
    title: 'Property Investment',
    description:
      'Explore investment opportunities and make informed property decisions with market-focused guidance.',
    features: [
      'Investment opportunities',
      'Market research',
      'Investment planning'
    ]
  },

  {
    id: 5,
    icon: Building2,
    number: '05',
    title: 'Sell Your Property',
    description:
      'Present your property to the right audience and receive professional support throughout the selling process.',
    features: [
      'Property valuation',
      'Professional listing',
      'Buyer connections'
    ]
  },

  {
    id: 6,
    icon: Handshake,
    number: '06',
    title: 'Property Consulting',
    description:
      'Get personalized advice from experienced property professionals for your next real estate decision.',
    features: [
      'Expert consultation',
      'Market analysis',
      'Personalized strategy'
    ]
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description:
      'Share your property goals, preferred location, budget and requirements with our team.',
    icon: MessageCircle
  },

  {
    number: '02',
    title: 'We Find the Right Options',
    description:
      'Our experts search through verified listings and opportunities that match your requirements.',
    icon: Search
  },

  {
    number: '03',
    title: 'Review & Decide',
    description:
      'Compare your options, ask questions and get professional guidance before making a decision.',
    icon: FileCheck2
  },

  {
    number: '04',
    title: 'Move Forward',
    description:
      'We support you through the final steps and help make your property journey smooth.',
    icon: KeyRound
  }
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Verified Properties',
    description:
      'We focus on reliable and carefully reviewed property listings.'
  },

  {
    icon: Users,
    title: 'Experienced Experts',
    description:
      'Work with professionals who understand local property markets.'
  },

  {
    icon: BadgeCheck,
    title: 'Transparent Process',
    description:
      'Clear information and straightforward communication at every step.'
  },

  {
    icon: Handshake,
    title: 'Personal Support',
    description:
      'Our team stays connected from your first search to final decision.'
  }
]

// ======================================================
// ANIMATION
// ======================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: 'easeOut'
    }
  }
}

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

// ======================================================
// COMPONENT
// ======================================================

const ServiceFeature = () => {
  return (
    <section className="overflow-hidden bg-[#f7f9f7] text-slate-900">
      {/* ==================================================
          INTRODUCTION
      ================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          {/* Heading */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#08745e]">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              What We Offer
            </div>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Real estate services
              <span className="block text-[#08745e]">designed around you.</span>
            </h2>
          </motion.div>

          {/* Description */}

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-md text-sm leading-7 text-slate-500 lg:pb-1"
          >
            Whether you're buying your first home, looking for an investment,
            renting a new place or selling a property, our services are designed
            to make every step easier.
          </motion.p>
        </div>

        {/* ==================================================
            SERVICE CARDS
        ================================================== */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(service => {
            const Icon = service.icon

            return (
              <motion.article
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -7 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:border-emerald-100 hover:shadow-xl"
              >
                {/* Number */}

                <div className="absolute right-5 top-5 text-5xl font-bold text-slate-100 transition group-hover:text-emerald-50">
                  {service.number}
                </div>

                {/* Icon */}

                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#063f35] text-yellow-300 transition duration-300 group-hover:bg-yellow-300 group-hover:text-[#063f35]">
                  <Icon size={24} />
                </div>

                <h3 className="relative mt-7 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                {/* Features */}

                <div className="mt-5 space-y-2.5">
                  {service.features.map(feature => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs font-medium text-slate-600"
                    >
                      <CheckCircle2
                        size={15}
                        className="shrink-0 text-[#08745e]"
                      />

                      {feature}
                    </div>
                  ))}
                </div>

                {/* Link */}

                <Link
                  to="/contact"
                  className="group/link mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#08745e]"
                >
                  Learn more
                  <ArrowRight
                    size={16}
                    className="transition group-hover/link:translate-x-1"
                  />
                </Link>
              </motion.article>
            )
          })}
        </motion.div>
      </section>

      {/* ==================================================
          FEATURED SERVICE
      ================================================== */}

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85"
                  alt="Premium real estate consultation"
                  className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Floating card */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="absolute -bottom-6 left-5 rounded-2xl bg-[#063f35] p-5 text-white shadow-2xl sm:left-8"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-yellow-300 text-[#063f35]">
                    <ShieldCheck size={22} />
                  </div>

                  <div>
                    <p className="text-lg font-bold">100% Trusted</p>

                    <p className="text-xs text-white/60">
                      Verified service experience
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#08745e]">
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                Property Advisory
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                More than listings.
                <span className="block text-[#08745e]">Real guidance.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                Finding a property is only one part of the journey. Our
                experienced advisors help you understand your options, compare
                opportunities and move forward with confidence.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  {
                    title: 'Understand the market',
                    text: 'Get relevant market information before making important property decisions.'
                  },

                  {
                    title: 'Compare your options',
                    text: 'Review properties based on location, pricing, features and long-term value.'
                  },

                  {
                    title: 'Make confident decisions',
                    text: 'Get professional support whenever you need help navigating the process.'
                  }
                ].map((item, index) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-emerald-50 text-[#08745e]">
                      <span className="text-xs font-bold">0{index + 1}</span>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold">{item.title}</h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#063f35] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#08745e]"
              >
                Speak with an Expert
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          BENEFITS
      ================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#08745e]">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Why Choose Us
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Service that goes
              <span className="block text-[#08745e]">beyond expectations.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
              We combine technology, market knowledge and human expertise to
              create a better property experience.
            </p>

            <Link
              to="/about"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#08745e]"
            >
              Learn about our company
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {benefits.map(benefit => {
              const Icon = benefit.icon

              return (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-100 hover:shadow-lg"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-yellow-300/20 text-[#08745e]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 font-bold">{benefit.title}</h3>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          PROCESS
      ================================================== */}

      <section className="bg-[#063f35] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Header */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-yellow-300">
              <span className="h-2 w-2 rounded-full bg-yellow-300" />
              Simple Process
              <span className="h-2 w-2 rounded-full bg-yellow-300" />
            </div>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              From your idea
              <span className="text-yellow-300"> to your property.</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-emerald-50/60">
              We've made the process simple so you can focus on finding the
              right opportunity.
            </p>
          </motion.div>

          {/* Steps */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="relative"
                >
                  {/* Connector */}

                  {index !== processSteps.length - 1 && (
                    <div className="absolute left-[calc(100%+8px)] top-7 hidden w-[calc(100%-16px)] border-t border-dashed border-white/15 lg:block" />
                  )}

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-yellow-300">
                        <Icon size={23} />
                      </div>

                      <span className="text-sm font-bold text-white/20">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-bold text-white">{step.title}</h3>

                    <p className="mt-3 text-xs leading-6 text-emerald-50/60">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          SERVICE CTA
      ================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-yellow-300 px-7 py-12 sm:px-10 lg:px-16 lg:py-14"
        >
          {/* Decoration */}

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/30 blur-3xl" />

          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-emerald-900/5 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#063f35]/60">
                <Sparkles size={15} />
                Let's Get Started
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#063f35] sm:text-4xl">
                Have a property goal?
                <span className="block">Let's make it happen.</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#063f35]/60">
                Tell us what you're looking for and our team will help you find
                the right path forward.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group flex items-center gap-2 rounded-xl bg-[#063f35] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#08745e]"
              >
                Talk to an Expert
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/properties"
                className="flex items-center gap-2 rounded-xl border border-[#063f35]/15 bg-white/40 px-6 py-3.5 text-sm font-bold text-[#063f35] transition hover:bg-white/60"
              >
                Browse Properties
                <ChevronRight size={17} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  )
}

export default ServiceFeature
