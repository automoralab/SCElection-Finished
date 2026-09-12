import { CONTENT } from '../content'
import { Reveal } from '../components/Reveal'

export default function About() {
  const { about, standingAgain } = CONTENT

  return (
    <div className="bg-ink">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/community.jpg"
            alt=""
            className="h-full w-full object-cover opacity-30"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/85 to-ink" />
        </div>

        <div className="relative mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[280px_1fr] lg:items-end">
          <Reveal>
            <img
              src={about.image}
              alt={about.imageAlt}
              className="mx-auto w-full max-w-xs border-2 border-gold object-cover shadow-lg lg:max-w-none"
              width={330}
              height={317}
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="font-display text-xs font-bold tracking-[0.22em] text-gold uppercase">
              {about.eyebrow}
            </p>
            <h1 className="mt-2 font-display text-4xl font-extrabold tracking-wide text-cream uppercase sm:text-5xl">
              {about.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream px-4 py-12 text-ink sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed sm:text-lg">
          {about.paragraphs.map((p, i) => (
            <Reveal key={p.slice(0, 36)} delay={i * 60}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink-soft px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-display text-xs font-bold tracking-[0.22em] text-gold uppercase">
              2016 · 2021 · 2026
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-wide text-cream uppercase sm:text-4xl">
              {standingAgain.title}
            </h2>
            <p className="mt-4 text-lg font-medium italic leading-relaxed text-cream/90">
              {standingAgain.lead}
            </p>
          </Reveal>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-cream/80">
            {standingAgain.paragraphs.map((p) => (
              <Reveal key={p.slice(0, 36)}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="mt-10 font-display text-sm font-bold tracking-[0.18em] text-gold uppercase">
              {standingAgain.commitmentsTitle}
            </h3>
          </Reveal>

          <ol className="mt-6 space-y-4">
            {standingAgain.commitments.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <li className="flex gap-4 border-l-2 border-gold bg-ink/40 px-4 py-4">
                  <span
                    className="font-display text-3xl font-extrabold leading-tight text-gold"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-cream">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-cream/75">{item.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <div className="grid grid-cols-2">
        <img
          src="/images/waterfall.jpg"
          alt="Local woodland waterfall"
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
        <img
          src="/images/town-square.jpg"
          alt="Castletown square"
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  )
}
