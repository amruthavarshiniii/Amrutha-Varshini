import { NavLink } from 'react-router-dom'
import data from '../../data/data.json'
import './Footer.css'

function Footer() {
  const { personal } = data

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">

          <div className="footer-brand">
            <h3>Amrutha Varshini</h3>
            <p>Full Stack Developer · CSE Student</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {[
                { label: 'About', path: '/about' },
                { label: 'Projects', path: '/projects' },
                { label: 'Skills', path: '/skills' },
                { label: 'Contact', path: '/contact' },
              ].map(link => (
                <li key={link.path}>
                  <NavLink to={link.path}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 'var(--fs-sm)', fontWeight: 600, color: '#fff', marginBottom: 'var(--space-md)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Connect</h4>
            <div className="footer-social">
              <a href={`mailto:${personal.email}`} aria-label="Email">
                Email
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href={personal.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
                LeetCode
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                GitHub
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>Made with <span>&#9825;</span> by Amrutha Varshini &copy; {new Date().getFullYear()}</p>
          <p>{personal.email}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
