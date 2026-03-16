import data from '../../data/data.json'
import './Certifications.css'

function Certifications() {
  const { certifications } = data

  return (
    <div>
      <div className="page-hero">
        <h1>Certifications</h1>
        <div className="page-divider" />
        <p>Courses and credentials I have earned</p>
      </div>

      <section className="certs-content">
        <div className="container">
          <div className="certs-grid">
            {certifications.map((cert, idx) => (
              <div className="cert-card fade-up" key={idx} style={{ animationDelay: `${idx * 0.1}s` }}>
                <span className="cert-year">{cert.year}</span>
                <h3>{cert.title}</h3>
                <span className="cert-provider">{cert.provider}</span>
                <p className="cert-desc">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Certifications
