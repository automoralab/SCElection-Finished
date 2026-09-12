import { useEffect, useId, useRef, useState } from 'react'
import { CONTENT } from '../content'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'

export default function KeyPoints() {
  const { keyPoints } = CONTENT
  const [activeId, setActiveId] = useState(keyPoints[0].id)
  const panelId = useId()
  const stripRef = useRef(null)

  const active = keyPoints.find((p) => p.id === activeId) ?? keyPoints[0]

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return
    const btn = strip.querySelector(`[data-topic="${activeId}"]`)
    btn?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [activeId])

  return (
    <div className="bg-ink min-h-[70vh]">
      <section className="border-b border-white/10 bg-ink-soft px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-5xl">
          <p className="font-display text-xs font-bold tracking-[0.22em] text-gold uppercase">
            Short-form
          </p>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-wide text-cream uppercase sm:text-5xl">
            Key Points
          </h1>
          <p className="mt-3 max-w-lg text-base text-cream/70">
            Tap a topic. Get the gist. Full detail lives in the manifesto flipbook.
          </p>
        </div>
      </section>

      {/* Swipeable topic chips */}
      <div className="sticky top-[3.25rem] z-30 border-b border-white/10 bg-ink/95 backdrop-blur-md">
        <div
          ref={stripRef}
          className="no-scrollbar mx-auto flex max-w-5xl gap-2 overflow-x-auto px-4 py-3 sm:px-6"
          role="tablist"
          aria-label="Policy topics"
        >
          {keyPoints.map((topic) => {
            const selected = topic.id === activeId
            return (
              <button
                key={topic.id}
                type="button"
                role="tab"
                data-topic={topic.id}
                aria-selected={selected}
                aria-controls={panelId}
                id={`tab-${topic.id}`}
                onClick={() => setActiveId(topic.id)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold transition ${
                  selected
                    ? 'border-gold bg-gold text-ink'
                    : 'border-white/15 bg-ink-soft text-cream/80 hover:border-gold/50 hover:text-cream'
                }`}
              >
                <Icon name={topic.icon} className="h-4 w-4" />
                {topic.title}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="overflow-hidden"
        >
          <Reveal key={active.id}>
            <article className="border-l-4 border-gold bg-cream p-5 text-ink sm:p-8">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center bg-ink text-gold"
                  aria-hidden="true"
                >
                  <Icon name={active.icon} className="h-6 w-6" />
                </div>
                <h2 className="font-display text-2xl font-extrabold tracking-wide uppercase sm:text-3xl">
                  {active.title}
                </h2>
              </div>
              <p className="mt-5 text-base leading-relaxed text-ink/90 sm:text-lg">
                {active.summary}
              </p>
            </article>
          </Reveal>

          {/* Topic grid — desktop secondary browse */}
          <ul className="mt-8 hidden gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {keyPoints.map((topic) => (
              <li key={topic.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(topic.id)}
                  className={`flex w-full items-center gap-2 border px-3 py-3 text-left text-sm font-semibold transition ${
                    topic.id === activeId
                      ? 'border-gold bg-gold/15 text-gold'
                      : 'border-white/10 bg-ink-soft text-cream/75 hover:border-gold/40 hover:text-cream'
                  }`}
                >
                  <Icon name={topic.icon} className="h-4 w-4 shrink-0" />
                  {topic.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
