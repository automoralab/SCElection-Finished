import { Link, NavLink } from 'react-router-dom'
import { CONTENT } from '../content'
import { Icon } from './Icon'

export function Header() {
  const { candidate, hero, nav } = CONTENT

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="min-w-0 font-display leading-tight">
          <span className="block text-[0.6rem] font-bold tracking-[0.28em] text-gold uppercase">
            {hero.voteLabel}
          </span>
          <span className="block truncate text-sm font-extrabold tracking-wide text-cream sm:text-base">
            {candidate.nameUpper}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Desktop">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-semibold tracking-wide transition ${
                  isActive
                    ? 'bg-gold/15 text-gold'
                    : 'text-cream/70 hover:bg-white/5 hover:text-cream'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export function Footer() {
  const { candidate, election, hero, contact } = CONTENT

  return (
    <footer className="border-t border-white/10 bg-ink-soft text-cream">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <p className="font-display text-xs font-bold tracking-[0.22em] text-gold uppercase">
          Get in touch
        </p>
        <h2 className="mt-2 font-display text-2xl font-extrabold tracking-wide uppercase">
          Contact
        </h2>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/85">
          {contact.pollingHelp}
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-[0.65rem] font-bold tracking-wider text-gold uppercase">
              Phone
            </p>
            <a
              href={contact.telHref}
              className="mt-1.5 inline-flex items-center gap-2 text-sm font-semibold text-cream hover:text-gold"
            >
              <Icon name="phone" className="h-4 w-4" />
              {contact.tel}
            </a>
          </div>
          <div>
            <p className="text-[0.65rem] font-bold tracking-wider text-gold uppercase">
              Email
            </p>
            <a
              href={contact.emailHref}
              className="mt-1.5 inline-flex items-center gap-2 break-all text-sm font-semibold text-cream hover:text-gold"
            >
              <Icon name="mail" className="h-4 w-4 shrink-0" />
              {contact.email}
            </a>
          </div>
          <div>
            <p className="text-[0.65rem] font-bold tracking-wider text-gold uppercase">
              Facebook
            </p>
            <a
              href={contact.facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-flex items-center gap-2 text-sm font-semibold text-cream hover:text-gold"
            >
              <Icon name="facebook" className="h-4 w-4" />
              {contact.facebook}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <p className="font-display text-xl font-extrabold tracking-wide text-gold uppercase sm:text-2xl">
            {hero.voteLabel} {candidate.nameUpper}
          </p>
          <p className="mt-1 text-sm text-cream/70">
            {candidate.constituency} · {election.dateShort}
          </p>
          <p className="mt-5 text-sm font-semibold leading-relaxed text-cream sm:text-base">
            {contact.imprint}
          </p>
        </div>
      </div>
    </footer>
  )
}
