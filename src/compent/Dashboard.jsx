import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css';
import backgroundVideo from './video/muhoza.mp4';

function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Logic for logout can be added here
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <video autoPlay loop muted playsInline className="video-background">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay"></div>
      
      <header className="header">
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <h1>Technical School Admin Dashboard</h1>
        <button className="header-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* Overlay for closing menu when clicking outside */}
      <div 
        className={`overlay ${isMenuOpen ? 'visible' : ''}`} 
        onClick={toggleMenu}
      ></div>

      {/* Navigation Sidebar */}
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/dashboard" className="nav-item" onClick={toggleMenu}>
          <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/about" className="nav-item" onClick={toggleMenu}>
          <i className="fas fa-info-circle"></i> About Us
        </Link>
        <Link to="/contact" className="nav-item" onClick={toggleMenu}>
          <i className="fas fa-envelope"></i> Contact
        </Link>
        <button className="nav-item logout-btn" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </button>
      </nav>

      <main className="welcome-content">
        <h1>Welcome to the Technical School Admin Dashboard</h1>
        <p>Empowering the next generation of SOD, BDC, and AUT professionals.</p>

        <section className="dashboard-cards">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Software Development" className="card-image" />
            <div className="card-content">
              <h3>SOD</h3>
              <p>Software Development: Master coding, web technologies, and software engineering.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Building Construction" className="card-image" />
            <div className="card-content">
              <h3>BDC</h3>
              <p>Building Construction: Learn modern architecture, structural design, and construction management.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Automobile Technology" className="card-image" />
            <div className="card-content">
              <h3>AUT</h3>
              <p>Automobile Technology: Explore automotive engineering, diagnostics, and maintenance.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: contact@techschool.edu</p>
            <div className="social-links">
              <a href="https://www.facebook.com/MuhozPacifique" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="mailto:muhozapacif.com" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://www.instagram.com/muhozpacifique/#" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@muhozapacifique" target="_blank" rel="noopener noreferrer" title="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" title="X">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://open.spotify.com/user/31urh7mibpg4gmz4c3h76tfebzky" target="_blank" rel="noopener noreferrer" title="Spotify">
                <i className="fab fa-spotify"></i>
              </a>
              <a href="https://www.youtube.com/@MuhozaPacific-v9y" target="_blank" rel="noopener noreferrer" title="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Our Location</h3>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d761.4124248635842!2d30.56613677266739!3d-2.147335216550244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c4cb37e426c625%3A0x7221b435a93126ba!2sschool!5e1!3m2!1sen!2srw!4v1770220470159!5m2!1sen!2srw" 
                width="100%" 
                height="150" 
                style={{ border: 0, borderRadius: '10px' }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Technical School Admin Dashboard. All rights reserved.</p>
          <p>Excellence in SOD, BDC, and AUT Education</p>
          <p>MUHOZA Pacifique</p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
