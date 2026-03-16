import data from '../../data/data.json'
import './Education.css'

function Education() {
  const { education } = data

  return (
    <div>
      <div className="page-hero">
        <h1>Education</h1>
        <div className="page-divider" />
        <p>My academic journey and qualifications</p>
      </div>

      <section className="education-content">
        <div className="container">
          <div className="timeline">
            {education.map((edu, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot" />
                <div className="edu-card">
                  <div className="edu-header">
                    <h3>{edu.level}</h3>
                    <span className="edu-year">{edu.year}</span>
                  </div>
                  <p className="edu-institution">{edu.institution} &mdash; {edu.location}</p>
                  <span className="edu-score">{edu.score}</span>
                  <p className="edu-desc">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education
