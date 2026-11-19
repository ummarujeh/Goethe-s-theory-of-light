import { useState } from 'react'

export default function TurbidMedium() {
  const [density, setDensity] = useState(55)
  const [brightness, setBrightness] = useState(72)
  const lightness = 22 + density * .35

  return (
    <section className="workspace split-view">
      <aside className="controls">
        <p className="eyebrow">Experiment 02</p>
        <h1>Turbid <em>medium</em></h1>
        <p className="lede">Density transforms transmitted and scattered light in opposite directions.</p>
        <label>Particle density <output>{density}%</output><input type="range" min="0" max="100" value={density} onChange={e => setDensity(+e.target.value)} /></label>
        <label>Source brightness <output>{brightness}%</output><input type="range" min="10" max="100" value={brightness} onChange={e => setBrightness(+e.target.value)} /></label>
      </aside>
      <div className="medium-stage">
        <div className="medium-panel sunset">
          <div className="medium-label"><span>Transmission</span><b>{density > 70 ? 'Ruby-red' : density > 35 ? 'Orange' : 'Pale yellow'}</b></div>
          <div className="sun-disk" style={{ filter: `brightness(${brightness / 80})`, boxShadow: `0 0 ${density / 2}px #ffab45` }} />
          <div className="medium-glass" style={{ opacity: .25 + density / 180, background: `linear-gradient(90deg, #f7e29a, hsl(${25 - density * .14}, 90%, ${lightness}%), #2a1005)` }} />
        </div>
        <div className="medium-panel sky" style={{ background: `linear-gradient(180deg, hsl(${205 + density * .12}, ${35 + density * .35}%, ${12 + density * .28}%), #090a0c)` }}>
          <div className="medium-label"><span>Scattering</span><b>{density > 65 ? 'Deep blue' : 'Atmospheric blue'}</b></div>
        </div>
      </div>
    </section>
  )
}
