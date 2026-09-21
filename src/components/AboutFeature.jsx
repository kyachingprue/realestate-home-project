import { useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'

import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe2,
  HeartHandshake,
  Home,
  House,
  KeyRound,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users
} from 'lucide-react'


const stats = [
  {
    number: '20+',
    label: 'Years Experience'
  },
  {
    number: '10K+',
    label: 'Properties Listed'
  },
  {
    number: '2.5K+',
    label: 'Trusted Agents'
  },
  {
    number: '35+',
    label: 'Global Cities'
  }
]

const values = [
  {
    icon: ShieldCheck,
    title: 'Trust & Transparency',
    description:
      'We believe every property decision should be based on clear information, honest pricing and complete transparency.'
  },
  {
    icon: HeartHandshake,
    title: 'People First',
    description:
      'Our clients are at the heart of everything we do. We listen carefully and build solutions around their needs.'
  },
  {
    icon: Sparkles,
    title: 'Better Experiences',
    description:
      'From discovering a property to receiving the keys, we create a simple and enjoyable real estate experience.'
  },
  {
    icon: Globe2,
    title: 'Global Perspective',
    description:
      'Our growing network connects buyers, sellers, renters and investors with opportunities around the world.'
  }
]

const services = [
  {
    number: '01',
    icon: Home,
    title: 'Discover',
    description:
      'Explore thousands of carefully selected homes, villas, apartments and investment properties.'
  },
  {
    number: '02',
    icon: Users,
    title: 'Connect',
    description:
      'Meet verified local agents who understand your market, preferences and property goals.'
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Decide',
    description:
      'Compare properties, understand pricing and make confident decisions with transparent information.'
  },
  {
    number: '04',
    icon: KeyRound,
    title: 'Move In',
    description:
      'Our team stays with you through the final steps until your property journey is complete.'
  }
]

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'Chief Executive Officer',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'David Wilson',
    role: 'Head of Operations',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'Emily Carter',
    role: 'Senior Property Advisor',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85'
  },
  {
    name: 'Michael Brown',
    role: 'Investment Consultant',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85'
  }
]

const testimonials = [
  {
    name: 'James Carter',
    role: 'Home Buyer',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    text: 'The entire experience felt completely different from traditional real estate. Everything was transparent, simple and professional.',
    rating: 5
  },
  {
    name: 'Sophia Williams',
    role: 'Property Investor',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    text: 'Their team helped me understand the market and find an investment property that matched my long-term goals.',
    rating: 5
  },
  {
    name: 'Daniel Anderson',
    role: 'Property Seller',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    text: 'From listing the property to completing the sale, their support was excellent. I always knew what was happening.',
    rating: 5
  }
]


const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}


const AboutFeature = () => {
  const [testimonial, setTestimonial] = useState(0)

  const currentTestimonial = testimonials[testimonial]

  const nextTestimonial = () => {
    setTestimonial(prev => (prev + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setTestimonial(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9f7] text-slate-900">

      {/* Hero section */}

      <section className="relative overflow-hidden bg-[#063f35]">
        {/* Decorative circles */}

        <div className="absolute -left-32 -top-32 h-[450px] w-[450px] rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-yellow-300/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT CONTENT */}

            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.div
                variants={fadeUp}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-100 backdrop-blur"
              >
                <Sparkles size={14} className="text-yellow-300" />
                About RealEstate.com
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                We're building a
                <span className="block text-yellow-300">better way home.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-base leading-7 text-emerald-50/70 sm:text-lg"
              >
                Real estate should feel exciting, not complicated. We connect
                people with exceptional properties, trusted professionals and
                better opportunities around the world.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  to="/properties"
                  className="group flex items-center gap-2 rounded-xl bg-yellow-300 px-6 py-3.5 text-sm font-bold text-[#063f35] transition hover:bg-yellow-200 hover:shadow-xl"
                >
                  Explore Properties
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Talk to Our Team
                </Link>
              </motion.div>

              {/* Mini trust */}

              <motion.div
                variants={fadeUp}
                className="mt-9 flex items-center gap-4"
              >
                <div className="flex -space-x-3">
                  {[
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80'
                  ].map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      className="h-9 w-9 rounded-full border-2 border-[#063f35] object-cover"
                    />
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(item => (
                      <Star
                        key={item}
                        size={13}
                        className="fill-yellow-300 text-yellow-300"
                      />
                    ))}
                  </div>

                  <p className="mt-1 text-xs text-white/60">
                    Trusted by 10,000+ happy clients
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE COLLAGE */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 0.8
              }}
              className="relative"
            >
              <div className="grid grid-cols-5 gap-4">
                {/* Main image */}

                <div className="col-span-3 pt-8">
                  <div className="relative overflow-hidden rounded-[2rem]">
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                      alt="Luxury modern home"
                      className="h-[440px] w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#063f35]/70 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5">
                      <p className="text-xs text-white/70">Our vision</p>

                      <p className="mt-1 text-lg font-bold text-white">
                        Better homes.
                        <br />
                        Better lives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Side images */}

                <div className="col-span-2 space-y-4">
                  <div className="overflow-hidden rounded-[2rem]">
                    <img
                      src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=85"
                      alt="Luxury interior"
                      className="h-[200px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="relative overflow-hidden rounded-[2rem]">
                    <img
                      src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=700&q=85"
                      alt="Beautiful house"
                      className="h-[240px] w-full object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 p-3 backdrop-blur">
                      <div className="flex items-center gap-2">
                        <Award size={20} className="text-[#08745e]" />

                        <div>
                          <p className="text-xs font-bold text-slate-900">
                            20+ Years
                          </p>

                          <p className="text-[10px] text-slate-500">
                            Industry Experience
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================
          STATS
      ================================================== */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.08
              }}
              className="px-4 py-7 text-center sm:py-9"
            >
              <p className="text-3xl font-bold text-[#063f35] sm:text-4xl">
                {stat.number}
              </p>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================================================
          OUR STORY
      ================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
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
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85"
                alt="Modern interior"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating card */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.4
              }}
              className="absolute -bottom-7 -right-4 rounded-2xl bg-[#063f35] p-5 text-white shadow-2xl sm:-right-7"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-yellow-300 text-[#063f35]">
                  <House size={22} />
                </div>

                <div>
                  <p className="text-2xl font-bold">2004</p>

                  <p className="text-xs text-white/60">Founded</p>
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
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#08745e]">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Our Story
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              From a local agency to
              <span className="block text-[#08745e]">
                a global property network.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-500 sm:text-base">
              RealEstate.com began with a simple idea: buying, selling and
              renting a property should be easier. What started as a small local
              real estate agency has grown into a global network connecting
              people with exceptional properties and trusted professionals.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Today, our platform brings together property discovery, expert
              advice and a carefully verified network in one seamless
              experience.
            </p>

            <div className="mt-7 space-y-3">
              {[
                'Verified property listings',
                'Experienced local professionals',
                'Clear and transparent pricing',
                'Support from discovery to closing'
              ].map(item => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 size={19} className="shrink-0 text-[#08745e]" />

                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/properties"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#08745e]"
            >
              Explore our properties
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          VALUES
      ================================================== */}

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#08745e]">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              What We Believe
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
            </div>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              The values behind
              <span className="text-[#08745e]"> everything we do.</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Our principles guide every property we list, every client we serve
              and every relationship we build.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map(value => {
              const Icon = value.icon

              return (
                <motion.div
                  key={value.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8
                  }}
                  className="group rounded-2xl border border-slate-100 bg-[#f7f9f7] p-6 transition hover:border-emerald-100 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-yellow-300/20 text-[#08745e] transition group-hover:bg-[#063f35] group-hover:text-yellow-300">
                      <Icon size={23} />
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-slate-300 transition group-hover:text-[#08745e]"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">{value.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          MISSION / VISION
      ================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* MISSION */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="relative overflow-hidden rounded-[2rem] bg-[#063f35] p-8 sm:p-10"
          >
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-emerald-300/10 blur-2xl" />

            <div className="relative">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-yellow-300 text-[#063f35]">
                <Target size={25} />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.15em] text-yellow-300">
                Our Mission
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Make real estate
                <br />
                simple for everyone.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-emerald-50/65">
                We use technology, local expertise and transparent information
                to remove unnecessary complexity from the property journey.
              </p>
            </div>
          </motion.div>

          {/* VISION */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="relative overflow-hidden rounded-[2rem] bg-yellow-300 p-8 sm:p-10"
          >
            <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-white/30 blur-2xl" />

            <div className="relative">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#063f35] text-yellow-300">
                <Globe2 size={25} />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.15em] text-[#063f35]/60">
                Our Vision
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#063f35] sm:text-3xl">
                A world where
                <br />
                everyone finds their place.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#063f35]/65">
                We want to create the most trusted global property ecosystem
                where every person can discover better opportunities and
                confidently make their next move.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          HOW IT WORKS
      ================================================== */}

      <section className="bg-[#063f35] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 25
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-yellow-300">
                <span className="h-2 w-2 rounded-full bg-yellow-300" />
                How It Works
              </div>

              <h2 className="mt-4 max-w-xl text-3xl font-bold text-white sm:text-4xl">
                A simpler journey from
                <span className="text-yellow-300"> search to keys.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-emerald-50/60">
              We've designed every step to make your property journey easier,
              clearer and more enjoyable.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {services.map(service => {
              const Icon = service.icon

              return (
                <motion.div
                  key={service.number}
                  variants={fadeUp}
                  className="group relative border-t border-white/10 pt-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-yellow-300">
                      {service.number}
                    </span>

                    <Icon
                      size={21}
                      className="text-white/40 transition group-hover:text-yellow-300"
                    />
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-emerald-50/60">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          TEAM
      ================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#08745e]">
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              Meet The Team
            </div>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              People behind
              <span className="text-[#08745e]"> the properties.</span>
            </h2>
          </div>

          <Link
            to="/contact"
            className="group flex items-center gap-2 text-sm font-semibold text-[#08745e]"
          >
            Meet our team
            <ArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map(person => (
            <motion.div
              key={person.name}
              variants={fadeUp}
              whileHover={{
                y: -6
              }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-64 w-full object-cover object-top transition duration-700 group-hover:scale-105 sm:h-72"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="font-bold">{person.name}</h3>

                <p className="mt-1 text-xs text-slate-500">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ==================================================
          TESTIMONIAL
      ================================================== */}

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#f7f9f7] p-7 sm:p-10 lg:p-14">
            {/* Quote decoration */}

            <div className="absolute right-8 top-2 text-[130px] font-serif leading-none text-[#063f35]/5">
              "
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map(item => (
                  <Star
                    key={item}
                    size={17}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-7 max-w-3xl text-xl font-medium leading-9 text-slate-700 sm:text-2xl">
                "{currentTestimonial.text}"
              </p>

              <div className="mt-8 flex items-center gap-3">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div className="text-left">
                  <p className="text-sm font-bold">{currentTestimonial.name}</p>

                  <p className="text-xs text-slate-500">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>

              {/* Controls */}

              <div className="mt-8 flex items-center gap-2">
                <button
                  onClick={previousTestimonial}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-[#063f35] hover:bg-[#063f35] hover:text-white"
                >
                  <ChevronLeft size={18} />
                </button>

                <div className="flex gap-1.5 px-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setTestimonial(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        testimonial === index
                          ? 'w-7 bg-[#063f35]'
                          : 'w-1.5 bg-slate-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-[#063f35] hover:bg-[#063f35] hover:text-white"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CTA
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
          viewport={{
            once: true
          }}
          className="relative overflow-hidden rounded-[2rem] bg-[#063f35] px-7 py-12 sm:px-10 lg:px-16 lg:py-16"
        >
          {/* Decorative */}

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />

          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-yellow-300">
                <Building2 size={15} />
                Your Next Chapter
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Let's find a place
                <span className="text-yellow-300"> you'll love.</span>
              </h2>

              <p className="mt-4 text-sm leading-6 text-emerald-50/65 sm:text-base">
                Whether you're buying your first home, investing in property or
                searching for your next destination, we're here to help.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/properties"
                className="group flex items-center gap-2 rounded-xl bg-yellow-300 px-6 py-3.5 text-sm font-bold text-[#063f35] transition hover:bg-yellow-200"
              >
                Browse Properties
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default AboutFeature
