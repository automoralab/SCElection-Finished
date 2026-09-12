import { lazy, Suspense, useEffect } from 'react'
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Header, Footer } from './components/Layout'
import { StickyNav } from './components/StickyNav'
import Home from './pages/Home'
import KeyPoints from './pages/KeyPoints'
import About from './pages/About'

const Manifesto = lazy(() => import('./pages/Manifesto'))

function ManifestoRoute() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center bg-ink">
          <p className="text-sm font-semibold tracking-wide text-cream/60 uppercase">
            Loading manifesto…
          </p>
        </div>
      }
    >
      <Manifesto />
    </Suspense>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppShell() {
  return (
    <div className="flex min-h-dvh flex-col bg-ink text-cream">
      <Header />
      <main className="flex-1 pb-nav">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/points" element={<KeyPoints />} />
          <Route path="/manifesto" element={<ManifestoRoute />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <StickyNav />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AppShell />
    </HashRouter>
  )
}
