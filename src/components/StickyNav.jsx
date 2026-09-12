import { NavLink } from 'react-router-dom'
import { CONTENT } from '../content'
import { Icon } from './Icon'

export function StickyNav() {
  const { nav } = CONTENT

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-label="Primary"
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-around px-1 pt-1.5 pb-1.5">
        {nav.map((item) => (
          <li key={item.to} className="flex-1">
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 rounded-lg px-1 py-1.5 text-[0.65rem] font-semibold tracking-wide transition ${
                  isActive ? 'text-gold' : 'text-cream/55 hover:text-cream'
                }`
              }
            >
              <Icon name={item.icon} className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
