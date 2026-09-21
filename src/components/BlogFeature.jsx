import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'

import { postsData } from '../data'

import {
  FiArrowRight,
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiSearch,
  FiUser,
  FiX
} from 'react-icons/fi'

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  'All',
  'Buying',
  'Selling',
  'Investment',
  'Market',
  'Lifestyle'
]

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30
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
      staggerChildren: 0.08
    }
  }
}

/* =========================================================
   COMPONENT
========================================================= */

export default function BlogFeature() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  /* =======================================================
     NORMALIZE POSTS DATA
  ======================================================= */

  const allPosts = useMemo(() => {
    return Array.isArray(postsData) ? postsData : []
  }, [])

  /* =======================================================
     FEATURED POST
  ======================================================= */

  const featuredPost = useMemo(() => {
    return allPosts.find(post => post?.featured === true)
  }, [allPosts])

  /* =======================================================
     FILTER POSTS
  ======================================================= */

  const filteredPosts = useMemo(() => {
    const selectedCategory = activeCategory.trim().toLowerCase()
    const searchValue = search.trim().toLowerCase()

    return allPosts.filter(post => {
      if (!post) return false

      const postCategory =
        typeof post.category === 'string'
          ? post.category.trim().toLowerCase()
          : ''

      const title =
        typeof post.title === 'string' ? post.title.toLowerCase() : ''

      const excerpt =
        typeof post.excerpt === 'string' ? post.excerpt.toLowerCase() : ''

      /* Category filter */
      const categoryMatch =
        selectedCategory === 'all' || postCategory === selectedCategory

      /* Search filter */
      const searchMatch =
        searchValue === '' ||
        title.includes(searchValue) ||
        excerpt.includes(searchValue)

      return categoryMatch && searchMatch
    })
  }, [allPosts, activeCategory, search])

  /* =======================================================
     REMOVE FEATURED POST FROM GRID
  ======================================================= */

  const visiblePosts = useMemo(() => {
    return filteredPosts.filter(post => post?.featured !== true)
  }, [filteredPosts])

  /* =======================================================
     RESET FILTER
  ======================================================= */

  const resetFilters = () => {
    setActiveCategory('All')
    setSearch('')
  }

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <div className="bg-slate-50">
      {/* ===================================================
          INTRO
      =================================================== */}

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="wrap">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2
            }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Real Estate Journal
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Ideas, insights &{' '}
              <span className="text-emerald-700">property stories</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              Stay informed with practical real-estate advice, market insights,
              buying guides, investment ideas and inspiration for your next
              property journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================================================
          FEATURED ARTICLE
      =================================================== */}

      {featuredPost && (
        <section className="pb-16">
          <div className="wrap">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15
              }}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="grid lg:grid-cols-2">
                {/* IMAGE */}

                <div className="relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[500px]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  <span className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-bold text-emerald-700 shadow-lg">
                    Featured Article
                  </span>

                  <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 text-xs text-white">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar />
                      {featuredPost.date}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-white/70" />

                    <span className="flex items-center gap-1.5">
                      <FiClock />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <span className="w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    {featuredPost.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
                    {featuredPost.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
                    {featuredPost.excerpt}
                  </p>

                  {/* AUTHOR */}

                  <div className="mt-6 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                      {featuredPost.author?.charAt(0)}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        {featuredPost.author}
                      </p>

                      <p className="text-xs text-slate-400">
                        Real Estate Expert
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/blog"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
                  >
                    Read featured article
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ===================================================
          FILTER TOOLBAR
      =================================================== */}

      <section className="pb-8">
        <div className="wrap">
          <div className="flex flex-col gap-5 rounded-2xl bg-white p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between">
            {/* CATEGORY BUTTONS */}

            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map(category => {
                const isActive = activeCategory === category

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition ${
                      isActive
                        ? 'bg-emerald-700 text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                    }`}
                  >
                    {category}
                  </button>
                )
              })}
            </div>

            {/* SEARCH */}

            <div className="relative w-full lg:max-w-xs">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="Search articles..."
                className="h-11 w-full rounded-full border border-slate-200 bg-slate-50 pl-11 pr-10 text-sm text-slate-700 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
                  aria-label="Clear search"
                >
                  <FiX />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          BLOG GRID
      =================================================== */}

      <section className="pb-20 sm:pb-24">
        <div className="wrap">
          {/* HEADER */}

          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Latest articles
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Explore our latest insights
              </h2>
            </div>

            <span className="hidden rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-500 shadow-sm sm:block">
              {visiblePosts.length}{' '}
              {visiblePosts.length === 1 ? 'article' : 'articles'}
            </span>
          </div>

          {/* =================================================
              POSTS
          ================================================= */}

          {visiblePosts.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${search}`}
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visiblePosts.map(post => (
                <motion.article
                  key={post.id}
                  variants={fadeUp}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* IMAGE */}

                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* CATEGORY */}

                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-emerald-700 shadow-md">
                      {post.category}
                    </span>

                    {/* READ TIME */}

                    <span className="absolute bottom-4 right-4 rounded-full bg-black/40 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                      {post.readTime}
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div className="p-5">
                    {/* META */}

                    <div className="flex items-center gap-3 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar />
                        {post.date}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-slate-300" />

                      <span className="flex items-center gap-1.5">
                        <FiUser />
                        {post.author}
                      </span>
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-4 line-clamp-2 text-lg font-bold leading-snug text-slate-900 transition group-hover:text-emerald-700">
                      {post.title}
                    </h3>

                    {/* EXCERPT */}

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                      {post.excerpt}
                    </p>

                    {/* READ MORE */}

                    <Link
                      to="/blog"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700"
                    >
                      Read article
                      <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            /* =================================================
               EMPTY STATE
            ================================================= */

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-2xl text-emerald-700">
                <FiSearch />
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                No articles found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                We couldn't find any articles matching your current category or
                search.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 rounded-full bg-emerald-700 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-800"
              >
                Show all articles
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ===================================================
          NEWSLETTER
      =================================================== */}

      <section className="pb-20">
        <div className="wrap">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] bg-emerald-900 px-6 py-12 sm:px-10 lg:px-16 lg:py-14"
          >
            {/* DECORATION */}

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-700/40" />

            <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-emerald-800/60" />

            {/* CONTENT */}

            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Stay updated
                </span>

                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  Get real estate insights in your inbox
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
                  Subscribe to receive useful property tips, market updates,
                  investment ideas and new articles.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50"
              >
                Subscribe now
                <FiArrowUpRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================
          BOTTOM CTA
      =================================================== */}

      <section className="border-t border-slate-200 bg-white py-16">
        <div className="wrap text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Need expert advice?
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold text-slate-900 sm:text-3xl">
              Have a property question? Let's talk.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Our experienced property team is ready to help you understand your
              options and make your next move with confidence.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800"
            >
              Talk to an expert
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
