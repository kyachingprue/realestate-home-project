import { Link } from "react-router";
import { PageHero, Reveal } from "../components/ui";
import { services } from "../data";
import ServiceFeature from "../components/ServiceFeature";

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
    <ServiceFeature/>
  </>
)
