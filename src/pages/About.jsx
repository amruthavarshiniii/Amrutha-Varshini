import data from '../../data/data.json'
import './About.css'

function About() {
  const { personal, about } = data

  return (
    <div>
      <div className="page-hero">
        <h1>About Me</h1>
        <div className="page-divider" />
        <p>Who I am, what drives me, and where I am headed</p>
      </div>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            {/* Bio */}
            <div className="about-bio">
              <div className="card fade-up">
                <h2>My Story</h2>
                <p>{about.bio}</p>
              </div>
            </div>

            {/* Personal Info */}
            <div>
              <div className="card fade-up personal-info">
                <h2>Personal Details</h2>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Name</span>
                    <span className="info-value">{personal.name}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Role</span>
                    <span className="info-value">{personal.title}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Email</span>
                    <span className="info-value">
                      <a href={`mailto:${personal.email}`}>{personal.email}</a>
                    </span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Phone</span>
                    <span className="info-value">{personal.phone}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Location</span>
                    <span className="info-value">{personal.location}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">LinkedIn</span>
                    <span className="info-value">
                      <a href={personal.linkedin} target="_blank" rel="noreferrer">View Profile</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div className="card fade-up about-objective">
            <h2>Career Objective</h2>
            <p>{about.objective}</p>
          </div>

          {/* Hobbies */}
          <div className="card fade-up personal-info">
            <h2>Hobbies &amp; Interests</h2>
            <div className="hobbies-list">
              {about.hobbies.map(h => (
                <span className="tag" key={h}>{h}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
