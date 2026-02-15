import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css';
import backgroundVideo from './video/muhoza.mp4';

function StatCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}+</span>;
}

function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [editFormData, setEditFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/');
    } else {
      fetchUsers();
    }
  }, [navigate]);

  const fetchUsers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://127.0.0.1:5001/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Could not connect to the database. Please ensure the server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await fetch(`http://127.0.0.1:5001/users/${id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          fetchUsers();
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user.id);
    setEditFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone
    });
  };

  const handleEditChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:5001/users/${editingUser}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editFormData),
      });
      if (response.ok) {
        setEditingUser(null);
        fetchUsers();
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className={`dashboard-container ${isMenuOpen ? 'menu-open' : ''}`}>
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

      {/* Navigation Sidebar */}
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/dashboard" className="nav-item" onClick={toggleMenu}>
          <i className="fas fa-home"></i> Home
        </Link>
        <a href="#user-management" className="nav-item" onClick={toggleMenu}>
          <i className="fas fa-user-shield"></i> Users
        </a>
        <div className="nav-users-list">
          {isLoading ? (
            <div className="nav-user-item">Loading...</div>
          ) : error ? (
            <div className="nav-user-item" style={{ color: '#ef4444' }}>Error loading users</div>
          ) : users.length === 0 ? (
            <div className="nav-user-item">No users yet</div>
          ) : (
            users.map(user => (
              <div key={user.id} className="nav-user-item">
                <i className="fas fa-user-circle"></i> {user.firstName} {user.lastName}
              </div>
            ))
          )}
        </div>
        <Link to="/team" className="nav-item" onClick={toggleMenu}>
          <i className="fas fa-users"></i> Team
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

        <section id="user-management" className="user-management-section">
          <h2>User Management</h2>
          <div className="table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center' }}>Loading users from database...</td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', color: '#ef4444' }}>{error}</td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center' }}>No users found in database.</td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr key={user.id}>
                      {editingUser === user.id ? (
                        <>
                          <td><input type="text" name="firstName" value={editFormData.firstName} onChange={handleEditChange} /></td>
                          <td><input type="text" name="lastName" value={editFormData.lastName} onChange={handleEditChange} /></td>
                          <td><input type="email" name="email" value={editFormData.email} onChange={handleEditChange} /></td>
                          <td><input type="text" name="phone" value={editFormData.phone} onChange={handleEditChange} /></td>
                          <td>
                            <button className="save-btn" onClick={handleUpdateUser}>Save</button>
                            <button className="cancel-btn" onClick={() => setEditingUser(null)}>Cancel</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.email}</td>
                          <td>{user.phone}</td>
                          <td>
                            <button className="edit-btn" onClick={() => handleEditClick(user)}>Edit</button>
                            <button className="delete-btn" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="extra-content" style={{ marginTop: '4rem', textAlign: 'left' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="info-block" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
              <h2 style={{ color: '#10b981' }}><i className="fas fa-bullseye"></i> Our Goal</h2>
              <p>To be the leading technical institution providing hands-on skills that bridge the gap between education and industry requirements.</p>
            </div>
            <div className="info-block" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '15px', backdropFilter: 'blur(10px)' }}>
              <h2 style={{ color: '#10b981' }}><i className="fas fa-chart-line"></i> Recent Success</h2>
              <p>Over 95% of our graduates from the last cohort secured employment within three months of completion.</p>
            </div>
          </div>

          <div className="stats-section" style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', padding: '2rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '15px' }}>
            <div className="stat-item" style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', margin: '0' }}><StatCounter end={500} /></h2>
              <p>Active Students</p>
            </div>
            <div className="stat-item" style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', margin: '0' }}><StatCounter end={50} /></h2>
              <p>Expert Instructors</p>
            </div>
            <div className="stat-item" style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.5rem', margin: '0' }}><StatCounter end={15} /></h2>
              <p>Industry Partners</p>
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
