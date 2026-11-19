import { useMemo, useState } from 'react'

export default function BoundarySpectrum() {
  const [aperture, setAperture] = useState(48)
  const [density, setDensity] = useState(62)
  const [distance, setDistance] = useState(50)

  const overlap = 100 - Math.abs(aperture - 50) * .9 - distance * .12
  const colors = useMemo(() => {
    const strength = density / 100
    return {
      outer: `hsl(${235 - strength * 25}, 72%, ${48 + strength * 8}%)`,
      inner: `hsl(${278 - strength * 18}, 70%, ${52 + strength * 5}%)`,
      green: `hsl(${118 + distance * .2}, 58%, ${42 + overlap * .12}%)`,
      red: `hsl(${8 + aperture * .12}, 78%, ${50 + strength * 4}%)`,
    }
  }, [aperture, density, distance, overlap])

  return (
    <section className="workspace">
      <aside className="controls">
        <p className="eyebrow">Experiment 01</p>
        <h1>Prismatic<br/><em>edge spectrum</em></h1>
        <p className="lede">Observe how colour appears at boundaries where light and darkness meet.</p>
        <label>Aperture width <output>{aperture}%</output><input type="range" min="10" max="90" value={aperture} onChange={e => setAperture(+e.target.value)} /></label>
        <label>Glass density <output>{density}%</output><input type="range" min="10" max="100" value={density} onChange={e => setDensity(+e.target.value)} /></label>
        <label>Screen distance <output>{distance}%</output><input type="range" min="10" max="100" value={distance} onChange={e => setDistance(+e.target.value)} /></label>
        <div className="legend"><span><i className="dot blue"/>Light over dark</span><span><i className="dot red"/>Dark over light</span></div>
      </aside>

      <div className="canvas-boundary">
        <div className="beam" style={{ width: `${aperture}%` }}>
          <div className="beam-edge left" style={{ background: `linear-gradient(90deg, ${colors.outer}, ${colors.inner}, transparent)` }} />
          <div className="beam-core" style={{ filter: `saturate(${.7 + density / 180})` }} />
          <div className="beam-edge right" style={{ background: `linear-gradient(90deg, transparent, ${colors.red}, #d9a13d)` }} />
        </div>
        {overlap > 58 && <div className="overlap green" style={{ left: `${aperture * .43}%`, width: `${overlap * .32}%`, background: colors.green }} />}
        {overlap < 58 && <div className="overlap magenta" style={{ left: `${aperture * .43}%`, width: `${(58 - overlap) * .42}%`, background: `linear-gradient(90deg, ${colors.inner}, ${colors.red})` }} />}
      </div>
    </section>
  )
}
