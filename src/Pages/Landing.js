// Pages/Landing.js

import React from 'react';
import './Landing.css'; // Import the CSS file for styling

function Landing() {
  return (
    <div className="landing-container">

      <main className="main-content">
        <section className="hero-section">
          <h2>Welcome to Our Website!</h2>
          <p>Explore the world of podcasts with us.</p>
          <a href="/aboutpod" className="btn">Learn More</a>
        </section>

        <section className="info-section">
          <h2>About Us</h2>
          <p>We are passionate about podcasts and sharing knowledge.</p>
        </section>
      </main>
    </div>
  );
}

export default Landing;
