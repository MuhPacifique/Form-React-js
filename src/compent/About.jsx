import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function About() {
  return (
    <div className="dashboard-container">
      <header className="header">
        <Link to="/dashboard" className="back-btn">
          <i className="fas fa-arrow-left"></i> Back to Dashboard
        </Link>
        <h1>About Us</h1>
      </header>
      <main className="welcome-content">
        <section className="about-hero" style={{ marginBottom: '3rem' }}>
          <img src="https://images.unsplash.com/photo-1523050853064-8504f2f40055?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="School Campus" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} />
        </section>

        <section className="about-intro" style={{ marginTop: '2rem' }}>
          <fieldset style={{ border: '2px solid #10b981', borderRadius: '15px', padding: '2rem', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(5px)', boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2)' }}>
            <legend style={{ padding: '0 1rem', color: '#10b981', fontSize: '1.8rem', fontWeight: 'bold' }}>Our Mission</legend>
            <p>Technical School Admin Dashboard is dedicated to empowering the next generation of professionals in SOD, BDC, and AUT. We provide cutting-edge resources and a streamlined management system to ensure excellence in technical education.</p>
            <p>Our goal is to foster an environment where innovation meets practical skill. We strive to bridge the gap between academic learning and industry demands by providing our students with real-world projects, expert mentorship, and state-of-the-art facilities. We believe that by nurturing talent and encouraging creative problem-solving, we can shape the leaders who will drive the future of technology, construction, and automotive engineering.</p>
          </fieldset>
        </section>

        <section className="dashboard-cards">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Software Development" className="card-image" />
            <div className="card-content">
              <h3>Software Development (SOD)</h3>
              <p>Our SOD program focuses on modern programming languages, software architecture, and agile methodologies. We prepare students for the fast-paced tech industry.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Building Construction" className="card-image" />
            <div className="card-content">
              <h3>Building Construction (BDC)</h3>
              <p>The BDC department provides hands-on experience in civil engineering, sustainable building materials, and advanced structural design.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Automobile Technology" className="card-image" />
            <div className="card-content">
              <h3>Automobile Technology (AUT)</h3>
              <p>In the AUT program, students master automotive electronics, engine diagnostics, and the latest trends in hybrid and electric vehicles.</p>
            </div>
          </div>
        </section>

        <section className="about-values" style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '15px' }}>
          <h2>Our Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
            <div>
              <h4>Innovation</h4>
              <p>Constantly evolving with the latest technological trends.</p>
            </div>
            <div>
              <h4>Excellence</h4>
              <p>Striving for the highest standards in everything we do.</p>
            </div>
            <div>
              <h4>Integrity</h4>
              <p>Maintaining honesty and transparency in our operations.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
