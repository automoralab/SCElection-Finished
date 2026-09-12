import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'

const ManifestoFlipbook = lazy(() => import('./ManifestoFlipbook'))

function FlipbookFallback() {
  return (
    <div
      className="mx-auto flex h-[420px] max-w-sm items-center justify-center border border-white/10 bg-ink-soft"
      role="status"
      aria-live="polite"
    >
      <p className="text-sm font-semibold tracking-wide text-cream/60 uppercase">
        Loading flipbook…
      </p>
    </div>
  )
}

export default function Manifesto() {
  return (
    <div className="bg-ink min-h-[70vh]">
      <section className="border-b border-white/10 bg-ink-soft px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-5xl">
          <p className="font-display text-xs font-bold tracking-[0.22em] text-gold uppercase">
            Full document
          </p>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-wide text-cream uppercase sm:text-5xl">
            Manifesto
          </h1>
          <p className="mt-3 max-w-lg text-base text-cream/70">
            Turn the pages — full text, page by page. Prefer the short version?{' '}
            <Link to="/points" className="font-semibold text-gold underline-offset-2 hover:underline">
              Key Points
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-0 py-8 sm:py-12">
        <Suspense fallback={<FlipbookFallback />}>
          <ManifestoFlipbook />
        </Suspense>
      </section>
    </div>
  )
}
