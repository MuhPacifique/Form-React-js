import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <header className="header">
        <Link to="/dashboard" className="back-btn">
          <i className="fas fa-arrow-left"></i> Back to Dashboard
        </Link>
        <h1>Contact Us</h1>
      </header>
      <main className="welcome-content">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', textAlign: 'left', marginTop: '2rem' }}>
          
          <section className="contact-form-section" style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '15px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ color: '#10b981', marginBottom: '1.5rem' }}>Send us a Message</h2>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label>Full Name</label>
                <input type="text" placeholder="Your Name" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label>Email Address</label>
                <input type="email" placeholder="Your Email" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label>Message</label>
                <textarea rows="4" placeholder="How can we help you?" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white', resize: 'none' }}></textarea>
              </div>
              <button type="submit" style={{ background: '#10b981', color: 'white', padding: '1rem', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                Send Message
              </button>
            </form>
          </section>

          <section className="contact-info-section">
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ color: '#10b981', marginBottom: '1rem' }}><i className="fas fa-map-marker-alt"></i> Our Campus</h2>
              <p>123 Technical Way, Kigali, Rwanda</p>
              <p>Excellence Hub, Building B</p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ color: '#10b981', marginBottom: '1rem' }}><i className="fas fa-phone"></i> Direct Contact</h2>
              <p><strong>Phone:</strong> +250 788 000 000</p>
              <p><strong>Email:</strong> contact@techschool.edu</p>
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ color: '#10b981', marginBottom: '1rem' }}><i className="fas fa-clock"></i> Office Hours</h2>
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <div className="social-links-container">
              <h2 style={{ color: '#10b981', marginBottom: '1rem' }}>Follow Us</h2>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}><i className="fab fa-facebook"></i></a>
                <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}><i className="fab fa-twitter"></i></a>
                <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}><i className="fab fa-linkedin"></i></a>
                <a href="#" style={{ color: 'white', fontSize: '1.5rem' }}><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default Contact;
