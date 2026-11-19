const rows = [
  ['Nature of light', 'Heterogeneous mixture of spectral rays', 'Simple, homogeneous, and uncomposed'],
  ['Role of darkness', 'Absence of light rays', 'Active polar force opposing light'],
  ['Origin of colour', 'Refractive separation of pre-existing rays', 'Interplay of light and dark at boundaries'],
  ['Function of the prism', 'Separates rays according to refrangibility', 'Acts as a turbid refractive medium'],
  ['Role of the eye', 'Passive sensory detector', 'Active organ producing complementary response'],
]

export default function ComparisonMatrix() {
  return (
    <section className="comparison">
      <p class="eyebrow">Historical dialogue</p>
      <h1>Newton <em>vs.</em> Goethe</h1>
      <div className="matrix">
        <div className="matrix-head"><span /><b><small>ISAAC NEWTON</small>1704</b><b><small>JOHANN W. V. GOETHE</small>1810</b></div>
        {rows.map(row => <div className="matrix-row" key={row[0]}><strong>{row[0]}</strong><span>{row[1]}</span><span>{row[2]}</span></div>)}
      </div>
    </section>
  )
}
