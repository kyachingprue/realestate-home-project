import { Helmet } from "react-helmet-async";
import BlogFeature from "../components/BlogFeature";
import { PageHero, Reveal } from "../components/ui";
import { posts, u } from "../data";

export const Blog = () => (
  <>
    <Helmet>
      <title>Blog | Real Estate</title>

      <meta
        name="description"
        content="Explore our collection of premium properties, homes, apartments and investment opportunities."
      />

      <link rel="canonical" href="https://yourwebsite.com/properties" />
    </Helmet>
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
    <BlogFeature />
  </>
)
