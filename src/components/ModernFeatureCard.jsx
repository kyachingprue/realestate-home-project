import { motion } from 'motion/react'
import {
  FiArrowUpRight,
  FiCheck,
  FiMapPin,
  FiHome,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiKey
} from 'react-icons/fi'

const features = [
  {
    id: 1,
    title: 'Premium Properties',
    description:
      'Discover carefully selected properties designed for modern living, comfort and long-term value.',
    icon: FiHome,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    tag: '01',
    accent: 'bg-emerald-500',
    points: ['Modern architecture', 'Premium locations', 'Quality construction']
  },
  {
    id: 2,
    title: 'Prime Locations',
    description:
      'Find properties in desirable neighborhoods close to essential amenities, transportation and lifestyle destinations.',
    icon: FiMapPin,
    image:
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=85',
    tag: '02',
    accent: 'bg-blue-500',
    points: [
      'Connected neighborhoods',
      'Nearby amenities',
      'Growing communities'
    ]
  },
  {
    id: 3,
    title: 'Trusted & Secure',
    description:
      'We focus on transparent property information and a smooth experience throughout your real-estate journey.',
    icon: FiShield,
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
    tag: '03',
    accent: 'bg-violet-500',
    points: ['Verified properties', 'Transparent process', 'Dedicated support']
  },
  {
    id: 4,
    title: 'Smart Investment',
    description:
      'Explore opportunities with strong potential for growth, rental income and long-term property value.',
    icon: FiTrendingUp,
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85',
    tag: '04',
    accent: 'bg-orange-500',
    points: ['Market insights', 'Growth potential', 'Investment opportunities']
  }
]

const ModernFeatureCard = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-slate-950 sm:py-24 lg:py-28">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            <FiStar className="text-emerald-500" />
            Why Choose Us
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Everything You Need to Find
            <span className="block text-emerald-600 dark:text-emerald-400">
              Your Perfect Property
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            From premium homes to smart investment opportunities, we make
            finding the right property simple, transparent and stress-free.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.article
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-black/30"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-semibold text-white backdrop-blur-md">
                    {feature.tag}
                  </div>

                  {/* Icon */}
                  <div
                    className={`absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl ${feature.accent} text-xl text-white shadow-lg`}
                  >
                    <Icon />
                  </div>

                  {/* Arrow */}
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-white group-hover:text-slate-900"
                  >
                    <FiArrowUpRight />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </p>

                  {/* Points */}
                  <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5 dark:border-slate-800">
                    {feature.points.map(point => (
                      <div
                        key={point}
                        className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                          <FiCheck />
                        </span>

                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Link */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      Explore feature
                    </span>

                    <FiArrowUpRight className="text-lg text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald-500" />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 md:flex-row dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-xl text-white">
              <FiKey />
            </div>

            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                Ready to find your next property?
              </h3>

              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Explore our latest properties and find a place that feels like
                home.
              </p>
            </div>
          </div>

          <motion.a
            href="/properties"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600 dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-500 dark:hover:text-white"
          >
            View Properties
            <FiArrowUpRight className="text-lg" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernFeatureCard
