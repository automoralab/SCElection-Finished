import { useCallback, useMemo, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { CONTENT } from '../content'
import { Icon } from '../components/Icon'

/** One PDF page image — no text overlay / rebuilt layout */
function ImagePage({ src, alt, pageNumber }) {
  return (
    <div className="flip-page h-full w-full bg-cream">
      <img
        src={src}
        alt={alt || `Manifesto page ${pageNumber}`}
        className="h-full w-full object-contain object-top"
        draggable={false}
        loading={pageNumber <= 2 ? 'eager' : 'lazy'}
      />
    </div>
  )
}

export default function ManifestoFlipbook() {
  const { manifestoPages } = CONTENT
  const bookRef = useRef(null)
  const [pageIndex, setPageIndex] = useState(0)
  const [tocOpen, setTocOpen] = useState(false)

  const total = manifestoPages.length

  const toc = useMemo(
    () =>
      manifestoPages.map((p, i) => ({
        index: i,
        label: p.tocLabel || `Page ${i + 1}`,
      })),
    [manifestoPages],
  )

  const onFlip = useCallback((e) => {
    setPageIndex(e.data)
  }, [])

  const goTo = (index) => {
    const api = bookRef.current?.pageFlip?.()
    if (api) {
      api.turnToPage(index)
      setPageIndex(index)
      setTocOpen(false)
    }
  }

  const prev = () => bookRef.current?.pageFlip?.()?.flipPrev()
  const next = () => bookRef.current?.pageFlip?.()?.flipNext()

  return (
    <div className="relative">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 pb-4 sm:px-6">
        <button
          type="button"
          onClick={() => setTocOpen((v) => !v)}
          className="inline-flex items-center gap-2 border border-white/20 bg-ink-soft px-3 py-2 text-xs font-bold tracking-wide text-cream uppercase transition hover:border-gold hover:text-gold"
        >
          <Icon name="book" className="h-4 w-4" />
          Contents
        </button>

        <p className="text-sm font-medium text-cream/70" aria-live="polite">
          Page {pageIndex + 1} / {total}
        </p>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            disabled={pageIndex <= 0}
            className="inline-flex items-center justify-center border border-white/20 bg-ink-soft p-2 text-cream transition hover:border-gold hover:text-gold disabled:opacity-30"
            aria-label="Previous page"
          >
            <Icon name="chevron-left" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            disabled={pageIndex >= total - 1}
            className="inline-flex items-center justify-center border border-white/20 bg-ink-soft p-2 text-cream transition hover:border-gold hover:text-gold disabled:opacity-30"
            aria-label="Next page"
          >
            <Icon name="chevron-right" className="h-5 w-5" />
          </button>
        </div>
      </div>

      {tocOpen ? (
        <div className="mx-auto mb-4 max-w-5xl px-4 sm:px-6">
          <nav
            aria-label="Manifesto table of contents"
            className="max-h-56 overflow-y-auto border border-white/15 bg-ink-soft p-3"
          >
            <ul className="grid gap-1 sm:grid-cols-2">
              {toc.map((item) => (
                <li key={item.index}>
                  <button
                    type="button"
                    onClick={() => goTo(item.index)}
                    className={`w-full truncate px-2 py-1.5 text-left text-sm transition hover:bg-gold/15 hover:text-gold ${
                      item.index === pageIndex
                        ? 'bg-gold/20 font-semibold text-gold'
                        : 'text-cream/80'
                    }`}
                  >
                    <span className="mr-2 text-cream/40">{item.index + 1}.</span>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}

      <div className="flex justify-center px-2 sm:px-4">
        <HTMLFlipBook
          ref={bookRef}
          width={400}
          height={568}
          size="stretch"
          minWidth={280}
          maxWidth={520}
          minHeight={400}
          maxHeight={740}
          showCover
          mobileScrollSupport
          onFlip={onFlip}
          className="shadow-2xl"
          style={{}}
          startPage={0}
          drawShadow
          flippingTime={650}
          usePortrait
          startZIndex={0}
          autoSize
          maxShadowOpacity={0.45}
          showPageCorners
          disableFlipByClick={false}
        >
          {manifestoPages.map((page) => (
            <div key={page.id} data-density="hard">
              <ImagePage
                src={page.image}
                alt={page.alt}
                pageNumber={page.pdfPage}
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      <p className="mt-4 px-4 text-center text-xs text-cream/45">
        Swipe or use arrows to turn pages
      </p>
    </div>
  )
}
