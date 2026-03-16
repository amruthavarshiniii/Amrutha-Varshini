import data from '../../data/data.json'
import './Projects.css'

function Projects() {
  const { projects } = data

  return (
    <div>
      <div className="page-hero">
        <h1>Projects</h1>
        <div className="page-divider" />
        <p>A showcase of what I have built and shipped</p>
      </div>

      <section className="projects-content">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div className="project-card fade-up" key={idx}>
                <div className="project-header">
                  <span className="project-num">0{idx + 1}</span>
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noreferrer">GitHub</a>
                    {project.live && project.live !== '#' && (
                      <a href={project.live} className="project-link" target="_blank" rel="noreferrer">Live</a>
                    )}
                  </div>
                </div>

                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span className="tag" key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {project.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
