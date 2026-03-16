import data from '../../data/data.json'
import './CodingProfiles.css'

function CodingProfiles() {
  const { codingProfiles } = data

  return (
    <div>
      <div className="page-hero">
        <h1>Coding Profiles</h1>
        <div className="page-divider" />
        <p>Platforms where I practice and compete</p>
      </div>

      <section className="coding-content">
        <div className="container">
          <div className="coding-grid">
            {codingProfiles.map((profile, idx) => (
              <a
                href={profile.url}
                className="coding-card fade-up"
                key={idx}
                target="_blank"
                rel="noreferrer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="coding-card-header">
                  <h3>{profile.platform}</h3>
                  <span className="coding-arrow">&#8599;</span>
                </div>
                <span className="coding-username">@{profile.username}</span>
                <span className="coding-stat">{profile.stats}</span>
                <p className="coding-desc">{profile.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CodingProfiles
