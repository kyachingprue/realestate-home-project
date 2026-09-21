import AboutFeature from "../components/AboutFeature";
import { Btn, Head, PageHero, Reveal } from "../components/ui";
import { agents, IMG, stats, u, why } from "../data";

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
    <AboutFeature/>
  </>
)
