import data from '../../data/data.json'
import './StrengthsInterests.css'

function Interests() {
  const { interests } = data

  return (
    <div>
      <div className="page-hero">
        <h1>Interests</h1>
        <div className="page-divider" />
        <p>Things I am passionate about beyond code</p>
      </div>

      <section className="interests-content">
        <div className="container">
          <div className="interests-grid">
            {interests.map((item, idx) => (
              <div className="interest-card fade-up" key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
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

export default Interests
