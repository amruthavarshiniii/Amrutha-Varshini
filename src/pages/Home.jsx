import { Link } from 'react-router-dom'
import data from '../../data/data.json'
import mainPhoto from '../assets/mainphoto.jpeg'
import './Home.css'

const quickLinks = [
  { label: 'About Me', desc: 'My story and goals', path: '/about', icon: '👤' },
  { label: 'Skills', desc: 'Technologies I use', path: '/skills', icon: '⚡' },
  { label: 'Projects', desc: 'What I have built', path: '/projects', icon: '🗂️' },
  { label: 'Education', desc: 'My academic journey', path: '/education', icon: '🎓' },
  { label: 'Certifications', desc: 'Courses completed', path: '/certifications', icon: '📜' },
  { label: 'Coding Profiles', desc: 'Where I practice', path: '/coding-profiles', icon: '💻' },
  { label: 'Strengths', desc: 'What drives me', path: '/strengths', icon: '💪' },
  { label: 'Contact', desc: 'Get in touch', path: '/contact', icon: '✉️' },
]

function Home() {
  const { personal } = data

  return (
    <div className="home">
      {/* Hero */}
      <section className="home-hero" aria-label="Introduction">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">Available for Opportunities</div>

            <h1 className="hero-title">
              Hi, I am<br />
              <span>{personal.name}</span>
            </h1>

            <p className="hero-role">{personal.title}</p>

            <p className="hero-summary">{personal.subtitle}</p>

            <div className="hero-actions">
              <a href={personal.resume} className="btn btn-primary" download>
                Download Resume
              </a>
              <Link to="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>

            <div className="hero-socials">
              <span>Find me on</span>
              <a href={personal.github} className="social-link" target="_blank" rel="noreferrer">GitHub</a>
              <a href={personal.linkedin} className="social-link" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={personal.leetcode} className="social-link" target="_blank" rel="noreferrer">LeetCode</a>
            </div>
          </div>

          <div className="hero-photo-wrapper">
            <div className="hero-photo-ring">
              <img src={mainPhoto} alt={personal.name} />
            </div>
            <div className="hero-photo-badge">
              <strong>B.Tech</strong>
              <span>CSE · Vignan institute of information technology</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="home-quicklinks">
        <div className="container">
          <div className="section-header">
            <h2>Explore My Portfolio</h2>
            <p>Navigate through different sections to learn more about me</p>
          </div>
          <div className="quicklinks-grid">
            {quickLinks.map(link => (
              <Link to={link.path} className="quicklink-card" key={link.path}>
                <div className="ql-icon">{link.icon}</div>
                <div>
                  <h3>{link.label}</h3>
                  <p>{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
