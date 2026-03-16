import data from '../../data/data.json'
import './Skills.css'

const sections = [
  { key: 'frontend', label: 'Frontend Development', variant: '' },
  { key: 'backend', label: 'Backend Development', variant: 'accent' },
  { key: 'database', label: 'Databases', variant: 'green' },
  { key: 'tools', label: 'Tools and Platforms', variant: '' },
  { key: 'cs_concepts', label: 'Core CS Concepts', variant: 'accent' },
]

function Skills() {
  const { skills } = data

  return (
    <div>
      <div className="page-hero">
        <h1>Skills</h1>
        <div className="page-divider" />
        <p>Technologies and concepts I have worked with</p>
      </div>

      <section className="skills-content">
        <div className="container">
          <div className="skills-grid">
            {sections.map(sec => (
              <div className="skills-section fade-up" key={sec.key}>
                <h2 className="skills-section-title">{sec.label}</h2>
                <div className="skill-tags">
                  {skills[sec.key].map(skill => (
                    <span className={`skill-chip ${sec.variant}`} key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
