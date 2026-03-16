import { useState } from 'react'
import data from '../../data/data.json'
import './Contact.css'

function Contact() {
  const { personal } = data
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock form submission
    setStatus('Sending...')
    setTimeout(() => {
      setStatus('Message sent successfully! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div>
      <div className="page-hero">
        <h1>Contact Me</h1>
        <div className="page-divider" />
        <p>Let's connect and build something amazing together</p>
      </div>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            
            <div className="contact-info fade-up">
              <div>
                <h2>Get in Touch</h2>
                <p>
                  I am currently open to new opportunities, freelance projects, or simply a chat about tech. 
                  Feel free to reach out through any of the platforms below or directly via the contact form.
                </p>
              </div>

              <div className="contact-methods">
                <div className="method-item">
                  <div className="method-icon">✉️</div>
                  <div className="method-details">
                    <h3>Email</h3>
                    <a href={`mailto:${personal.email}`}>{personal.email}</a>
                  </div>
                </div>
                
                <div className="method-item">
                  <div className="method-icon">📞</div>
                  <div className="method-details">
                    <h3>Phone</h3>
                    <span>{personal.phone}</span>
                  </div>
                </div>

                <div className="method-item">
                  <div className="method-icon">💼</div>
                  <div className="method-details">
                    <h3>LinkedIn</h3>
                    <a href={personal.linkedin} target="_blank" rel="noreferrer">Connect with me</a>
                  </div>
                </div>

                <div className="method-item">
                  <div className="method-icon">📍</div>
                  <div className="method-details">
                    <h3>Location</h3>
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="contact-form-card">
                <h3>Send me a message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      className="form-control" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className="form-control" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      className="form-control" 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      placeholder="How can I help you?"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary form-submit" disabled={status === 'Sending...'}>
                    {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {status && status !== 'Sending...' && (
                    <p style={{ marginTop: '1rem', color: '#059669', fontSize: 'var(--fs-sm)', fontWeight: 500, textAlign: 'center' }}>
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
