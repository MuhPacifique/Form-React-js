import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import backgroundVideo from './video/muhoza.mp4';

function NotFound() {
  return (
    <div className="dashboard-container">
      <video autoPlay loop muted playsInline className="video-background">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay"></div>
      
      <main className="welcome-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
        <h1 style={{ fontSize: '6rem', marginBottom: '1rem', color: '#10b981' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Oops! Page Not Found</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/dashboard" className="header-logout-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
          Back to Dashboard
        </Link>
      </main>

      <footer className="footer" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, marginTop: 0 }}>
        <div className="footer-bottom">
          <p>&copy; 2026 Technical School Admin Dashboard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default NotFound;
