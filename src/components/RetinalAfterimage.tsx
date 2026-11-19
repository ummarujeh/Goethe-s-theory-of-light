import { useEffect, useState } from 'react'

const colors = [
  { name: 'Red', hex: '#d83a32', complement: 'Green', complementHex: '#66a768' },
  { name: 'Yellow', hex: '#e9bd45', complement: 'Purple', complementHex: '#8a62a4' },
  { name: 'Blue', hex: '#355f91', complement: 'Orange', complementHex: '#db883a' },
]

export default function RetinalAfterimage() {
  const [index, setIndex] = useState(0)
  const [seconds, setSeconds] = useState(20)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running || seconds <= 0) return
    const timer = window.setInterval(() => setSeconds(v => v - 1), 1000)
    return () => window.clearInterval(timer)
  }, [running, seconds])

  useEffect(() => {
    if (seconds === 0) setRunning(false)
  }, [seconds])

  const start = () => { setSeconds(20); setRunning(true) }
  const color = colors[index]

  return (
    <section className="workspace split-view">
      <aside className="controls">
        <p className="eyebrow">Experiment 03</p>
        <h1>Retinal <em>dynamics</em></h1>
        <p className="lede">Fix your gaze on the centre. When the timer ends, look at the pale field.</p>
        <div className="color-choice">{colors.map((c, i) => <button key={c.name} className={index === i ? 'active' : ''} style={{ background: c.hex }} onClick={() => { setIndex(i); setSeconds(20); setRunning(false) }} aria-label={c.name} />)}</div>
        <button className="primary" onClick={start}>{running ? `Fix gaze · ${seconds}s` : 'Begin exercise'}</button>
      </aside>
      <div className="afterimage-stage">
        <div className="stimulus-card" style={{ background: running ? color.hex : '#ebe7dc', transition: 'background .25s' }}>
          {running && <div className="fixation">+</div>}
        </div>
        <div className="afterimage-card"><span>Expected response</span><div style={{ background: running && seconds === 0 ? color.complementHex : '#d6d1c4' }}><i>+</i></div></div>
      </div>
    </section>
  )
}
