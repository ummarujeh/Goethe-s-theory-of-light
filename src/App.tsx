import { useState } from 'react'
import BoundarySpectrum from './components/BoundarySpectrum'
import TurbidMedium from './components/TurbidMedium'
import RetinalAfterimage from './components/RetinalAfterimage'
import UrpflanzeEngine from './components/UrpflanzeEngine'
import ComparisonMatrix from './components/ComparisonMatrix'

const views = ['Boundary Spectrum', 'Turbid Media', 'Retinal Dynamics', 'Urpflanze', 'Comparison'] as const
type View = (typeof views)[number]

export default function App() {
  const [view, setView] = useState<View>('Boundary Spectrum')

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => setView('Boundary Spectrum')} aria-label="Go to simulator">
          <span className="brand-mark"><i /><i /><i /><i /><i /></span>
          <span><strong>GOETHE</strong><small>Phenomenological optics</small></span>
        </button>
        <nav aria-label="Simulation views">
          {views.map((item) => (
            <button key={item} className={view === item ? 'active' : ''} onClick={() => setView(item)}>
              {item}
            </button>
          ))}
        </nav>
      </header>

      <main>
        {view === 'Boundary Spectrum' && <BoundarySpectrum />}
        {view === 'Turbid Media' && <TurbidMedium />}
        {view === 'Retinal Dynamics' && <RetinalAfterimage />}
        {view === 'Urpflanze' && <UrpflanzeEngine />}
        {view === 'Comparison' && <ComparisonMatrix />}
      </main>

      <footer><span>Zur Farbenlehre · 1810</span><span>Observational colour laboratory</span></footer>
    </div>
  )
}
