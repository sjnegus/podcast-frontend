// Pages/Landing.js

import React from 'react';
import './Landing.css'; // Import the CSS file for styling
import coverPhoto from '../assets/img/AB_logo_Final.jpg'

function Landing() {
  return (
    <div className="landing-container">

      <main className="main-content">
        <section className="hero-section">
          <h2>Welcome to Our Website!</h2>
          <p>Explore the world of podcasts with us.</p>
            <img src={coverPhoto} alt="Archie Bunker" />
        </section>
          <a href="/aboutpod" className="btn btn-primary mt-2">About the Pod</a>

      </main>
    </div>
  );
}

export default Landing;
