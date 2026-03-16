import data from '../../data/data.json'
import './StrengthsInterests.css'

function Strengths() {
  const { strengths } = data

  return (
    <div>
      <div className="page-hero">
        <h1>Strengths</h1>
        <div className="page-divider" />
        <p>The qualities and traits that define how I work</p>
      </div>

      <section className="strengths-content">
        <div className="container">
          <div className="strengths-grid">
            {strengths.map((item, idx) => (
              <div className="strength-card fade-up" key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="strength-num">0{idx + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Strengths
