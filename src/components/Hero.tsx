import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Study in <span>UK</span></h1>
          <p className="hero-subtitle">World-Class Education. Global Opportunities. Unlock your potential with UDOC.</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Book Free Consultation</a>
            <a href="#universities" className="btn btn-outline">Explore Universities</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
