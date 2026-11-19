import { useMemo, useState } from 'react'

const stages = ['Cotyledon', 'Stem leaf', 'Calyx', 'Corolla', 'Stamen', 'Carpel']

export default function UrpflanzeEngine() {
  const [progress, setProgress] = useState(46)
  const [cycles, setCycles] = useState(3)
  const leaves = useMemo(() => Array.from({ length: stages.length * cycles }, (_, i) => i), [cycles])

  return (
    <section className="workspace split-view">
      <aside className="controls">
        <p className="eyebrow">Morphology 01</p>
        <h1>The <em>Urpflanze</em></h1>
        <p className="lede">Follow successive expansion and contraction through the plant's lateral organs.</p>
        <label>Metamorphosis <output>{progress}%</output><input type="range" min="0" max="100" value={progress} onChange={e => setProgress(+e.target.value)} /></label>
        <label>Rhythmic cycles <output>{cycles}</output><input type="range" min="2" max="5" value={cycles} onChange={e => setCycles(+e.target.value)} /></label>
        <div className="stages">{stages.map((stage, i) => <span className={progress / 100 * 5 >= i ? 'active' : ''} key={stage}>{i + 1}<b>{stage}</b></span>)}</div>
      </aside>
      <div className="plant-stage">
        <svg viewBox="0 0 700 520" role="img" aria-label="Parametric plant metamorphosis">
          <defs>
            <linearGradient id="stem" x1="0" y1="1" x2="0" y2="0"><stop stopColor="#4d5b31"/><stop offset="1" stopColor="#86965d"/></linearGradient>
          </defs>
          <path d="M350 500 C350 390 346 280 350 125" fill="none" stroke="url(#stem)" strokeWidth="12" strokeLinecap="round"/>
          {leaves.map((i) => {
            const y = 430 - i * (330 / Math.max(1, leaves.length - 1))
            const phase = i / Math.max(1, leaves.length - 1)
            const size = 32 + progress * .32 + Math.sin(phase * Math.PI) * 24
            const side = i % 2 ? -1 : 1
            const angle = side * (18 + phase * 38)
            return <g key={i} transform={`translate(${350 + side * 3} ${y}) rotate(${angle})`}>
              <path d={`M0 0 C${side * size} ${-size * .35}, ${side * size * 1.45} ${-size}, ${side * size * 1.7} ${-size * 1.25} C${side * size * 1.2} ${-size * 1.7}, ${side * size * .35} ${-size * 1.1}, 0 0Z`} fill="#7d8d56" opacity={.55 + phase * .35}/>
            </g>
          })}
          <g transform="translate(350 100)">
            {Array.from({ length: 8 }).map((_, i) => <ellipse key={i} cx="0" cy={-30 - progress * .08} rx={18 + progress * .12} ry={42 + progress * .18} fill="#d6b75c" opacity=".78" transform={`rotate(${i * 45})`} />)}
            <circle r={18 + progress * .12} fill="#9b6b3b"/>
          </g>
        </svg>
      </div>
    </section>
  )
}
