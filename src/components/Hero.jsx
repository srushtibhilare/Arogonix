import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContent}>
        <div className={styles.logoContainer}>
          <span className={styles.logo}>AROGONIX</span>
          <span className={styles.subLogo}>EXPORTS (OPC) PRIVATE LIMITED</span>
        </div>
        
        <h1 className={styles.heroHeading}>
          Building India's Climate Future
        </h1>
        
        <h2 className={styles.heroSubheading}>
          Empowering Rural India Through Agri-Waste Valorization
        </h2>
        
        <p className={styles.heroText}>
          Transforming 500M+ tons of agricultural waste into carbon-negative biochar
          and blockchain-verified carbon credits
        </p>
        
        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>500M+</span>
            <span className={styles.statLabel}>tons agri-waste/year</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>70%</span>
            <span className={styles.statLabel}>unregistered credits</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>₹10Cr+</span>
            <span className={styles.statLabel}>revenue potential</span>
          </div>
        </div>
        
        <div className={styles.ctaContainer}>
          <a href="#contact" className={styles.primaryCta}>
            Request Partnership
          </a>
          <a href="#solution" className={styles.secondaryCta}>
            Learn How It Works →
          </a>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <div className={styles.arrowDown}></div>
      </div>
    </section>
  );
};

export default Hero;