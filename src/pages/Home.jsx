import { Link } from 'react-router-dom'
import { CONTENT } from '../content'
import { Reveal } from '../components/Reveal'
import { Icon } from '../components/Icon'

export default function Home() {
  const { candidate, election, hero, homeCtas, pollingReminder } = CONTENT

  return (
    <div>
      {/* Hero — one composition */}
      <section className="relative min-h-[min(92dvh,780px)] overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <img
            src={hero.image}
            alt=""
            className="h-full w-full object-cover object-[center_20%] opacity-45"
            width={1026}
            height={576}
            fetchPriority="high"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(184,150,62,0.22),transparent_55%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[min(92dvh,780px)] max-w-5xl flex-col justify-end px-4 pb-10 pt-16 sm:px-6 sm:pb-14">
          <p className="font-display text-xs font-bold tracking-[0.28em] text-gold uppercase sm:text-sm">
            {election.datePunchy} · {candidate.party}
          </p>

          <h1 className="mt-3 font-display">
            <span className="block text-[clamp(3.25rem,14vw,6.5rem)] font-extrabold leading-[1.1] tracking-[0.02em] text-gold">
              {hero.voteLabel}
            </span>
            <span className="mt-1 block text-[clamp(1.75rem,7.5vw,3.75rem)] font-extrabold leading-[1.15] tracking-[0.015em] text-cream">
              {hero.headline}
            </span>
          </h1>

          <p className="mt-4 max-w-md text-lg font-medium leading-relaxed text-cream/90 sm:text-xl">
            {hero.hook}
          </p>
          <p className="mt-2 text-sm font-semibold tracking-wide text-cream/55 uppercase">
            {hero.forLine}
          </p>

          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
            {homeCtas.map((cta) => (
              <Link
                key={cta.to}
                to={cta.to}
                className={
                  cta.style === 'primary'
                    ? 'inline-flex items-center justify-center gap-2 bg-gold px-5 py-3.5 text-sm font-bold tracking-wide text-ink transition hover:bg-gold-bright'
                    : cta.style === 'secondary'
                      ? 'inline-flex items-center justify-center gap-2 border-2 border-cream/80 bg-transparent px-5 py-3.5 text-sm font-bold tracking-wide text-cream transition hover:bg-cream hover:text-ink'
                      : 'inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold tracking-wide text-cream/80 underline-offset-4 transition hover:text-gold hover:underline'
                }
              >
                {cta.label}
                {cta.style === 'primary' && <Icon name="arrow" className="h-4 w-4" />}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Election reminder strip */}
      <Reveal>
        <section className="bg-gold px-4 py-5 sm:px-6">
          <div className="mx-auto flex max-w-5xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="font-display text-lg font-extrabold tracking-wide text-ink uppercase sm:text-xl">
              {election.datePunchy}
            </p>
            <p className="text-sm font-semibold leading-relaxed text-ink/90 sm:text-base">
              {pollingReminder}
            </p>
          </div>
        </section>
      </Reveal>

      {/* Quick jump cards */}
      <section className="bg-cream px-4 py-12 text-ink sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="font-display text-xs font-bold tracking-[0.22em] text-gold-dark uppercase">
              Jump in
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-wide uppercase sm:text-4xl">
              Three ways to dig in
            </h2>
          </Reveal>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              {
                to: '/points',
                title: 'Key Points',
                text: 'Swipe topics. Two–four sentences. Done.',
                tone: 'bg-ink text-cream',
              },
              {
                to: '/manifesto',
                title: 'Full Manifesto',
                text: 'Turn the pages. Full policy, no shortcuts.',
                tone: 'bg-gold text-ink',
              },
              {
                to: '/about',
                title: 'About Steve',
                text: 'Castletown roots. Why he is standing again.',
                tone: 'bg-charcoal text-cream',
              },
            ].map((card, i) => (
              <Reveal key={card.to} delay={i * 80}>
                <li>
                  <Link
                    to={card.to}
                    className={`group flex h-full flex-col justify-between p-5 transition sm:min-h-[11rem] ${card.tone} hover:brightness-110`}
                  >
                    <div>
                      <p className="font-display text-xl font-extrabold tracking-wide uppercase">
                        {card.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed opacity-85">{card.text}</p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold tracking-wider uppercase opacity-80 group-hover:opacity-100">
                      Open <Icon name="arrow" className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Photo band */}
      <div className="grid grid-cols-2 md:grid-cols-3">
        <img
          src="/images/castletown.jpg"
          alt="Castletown rooftops and church steeple"
          className="aspect-[4/3] h-full w-full object-cover md:col-span-2 md:aspect-[21/9]"
          loading="lazy"
        />
        <img
          src="/images/woodland.jpg"
          alt="Woodland in the South of the Island"
          className="aspect-[4/3] h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  )
}
