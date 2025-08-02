import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header-overlay"></div>
      <div className="header-content">
        <div className="header-logo">
          <span className="logo-main">AROGONIX</span>
          <span className="logo-sub">EXPORTS (OPC) PRIVATE LIMITED</span>
        </div>
        <h1 className="header-title">
          Catalyzing India's National Carbon Credit Infrastructure
        </h1>
        <h2 className="header-subtitle">
          Hybrid Model: Biochar + Digital Platform
        </h2>
        <div className="header-highlights">
          <div className="highlight-item">
            <div className="highlight-icon">♻️</div>
            <p>Transforming 500M+ tons of agri-waste annually</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🔗</div>
            <p>Blockchain-verified carbon credit platform</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🌱</div>
            <p>Empowering rural India and MSMEs</p>
          </div>
        </div>
        <div className="header-cta">
          <a href="#contact" className="cta-primary">
            Request TDB Grant Information
          </a>
          <a href="#solution" className="cta-secondary">
            Explore Our Model
          </a>
        </div>
      </div>
      <div className="header-scroll">
        <span>Discover Our Impact</span>
        <div className="scroll-arrow"></div>
      </div>
    </header>
  );
};

export default Header;