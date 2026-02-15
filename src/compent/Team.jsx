import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Reusing dashboard styles for consistency

function Team() {
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
        <h1>Our Team</h1>
      </header>
      <main className="welcome-content">
        <section className="dashboard-cards">
          <div className="card">
            <img src="https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/570976578_1584524899578767_4517461660560852729_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGbpmcbWeN5GY3e2_TMot_wwOQypiE9X5XA5DKmIT1flSjU-Wj9FcQOA81JpPhVkENBx8JQhI_ouWdlBz-Dfaum&_nc_ohc=CTIFp3Me3J4Q7kNvwEko4m6&_nc_oc=Adm8GwpWBzEeGAsQwqYSkkt5BD_P1pICD1LBZztj2ROVWqdNUkBbZNwZ-kfdTUEiuXs&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=VxXfOZYuvXxmrwmd56V2OA&oh=00_AfvWu9KOuRBsKuU9E92y5QWjm68lgBDeNzPLxa9aV-9oMw&oe=698B3982" alt="Muhoza Pacifique" className="card-image" />
            <div className="card-content">
              <h3>Muhoza Pacifique</h3>
              <p><strong>Lead Developer & Founder</strong></p>
              <p>Visionary behind the Technical School Admin Dashboard, specializing in full-stack development and system architecture.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/474747522_1117404633170093_796088318909383048_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGszfH5taSycyqsQ6Yby1S8LV6XHAlEgE8tXpccCUSAT7O0aEXf8L9lN3_u-C8Q7Vxm22XB6--gK5pJRD31usgS&_nc_ohc=WqYK9gISvYIQ7kNvwH6mt_d&_nc_oc=AdnBXAnwMmWuakiVPxtuK2uZbNFJ0GSjEzNkpsJnYg6fobp0RHqrlcZM52kmpCRLUgo&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=I6QVw6ti6ESx9ZxKD3_UTg&oh=00_AfvrgU1WitYcg3_fJ-Yc-fwMUd-F9BB2YAG1BtGO3cxhKA&oe=698B2291" alt="Sarah Johnson" className="card-image" />
            <div className="card-content">
              <h3>Nshimiyemana Protogen </h3>
              <p><strong>Head of SOD Department</strong></p>
              <p>Expert in Software Development with over 10 years of experience in teaching modern web frameworks and mobile development.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://scontent.fnbo18-1.fna.fbcdn.net/v/t39.30808-6/572164992_122202599720430213_2490634547219882737_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGpvQ5EBxHrpkaCVZlH790LhC_vu2XMNEiEL--7Zcw0SMKdRjfQyDRG3Q6mWymgrgHXvwetXusvBspvBVAXca2G&_nc_ohc=8LDM4Uxi6QMQ7kNvwGmt7XM&_nc_oc=AdmPV7oUiIW5xgf-Nnr_ktImh1Q_TesiyBkEwA_KqxbT4XeAOK0IGcEOAi6XF_L9yOk&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=KHYJUhSuZuiixIv6ARAqjQ&oh=00_Afv5NvjOym6xFL9KwmQgrxNEyjjvkSvHbcrg_Ma-AkXRCw&oe=698B4B6D" alt="David Chen" className="card-image" />
            <div className="card-content">
              <h3>Nsengiyumva Eric</h3>
              <p><strong>Head of BDC Department</strong></p>
              <p>Professional structural engineer focusing on sustainable building practices and modern construction management.</p>
            </div>
          </div>

          <div className="card">
            <img src="https://scontent.fnbo18-1.fna.fbcdn.net/v/t51.82787-15/606662041_17905257729315372_863506708138427615_n.webp?stp=dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH6Lux3XhSpbwCjDvzlOdXMGgZMmrhduyUaBkyauF27JVHV1YQ5WHumCspvZav1sfgKndPgVtU8Np8GOFRYTFm0&_nc_ohc=gLnXSZ-_Xe8Q7kNvwE5U0xu&_nc_oc=AdmmrTFEa-j265-Re4xEtsQFNUnG0u-Zy4S1tReYws86Oy2fsgWZ4KvQzLrsjuwIeDE&_nc_zt=23&_nc_ht=scontent.fnbo18-1.fna&_nc_gid=IUm12ja-xgC0HFERBlaRSg&oh=00_AfsXIh02YAx4HI9SRYpaXWbqveRTeismRzJEYH7ugh4JFQ&oe=698B2BA3" alt="Elena Rodriguez" className="card-image" />
            <div className="card-content">
              <h3>INEZA Sifa</h3>
              <p><strong>Head of AUT Department</strong></p>
              <p>Automotive specialist with a passion for electric vehicle technology and advanced diagnostics systems.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Team;
