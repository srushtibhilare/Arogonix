import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutHeading}>About Us</h2>
        <div className={styles.aboutText}>
          <p>
            Arogonix Export (OPC) Pvt Ltd is a climate-tech venture focused on transforming India's carbon credit ecosystem through innovation in agri-waste valorization and digital infrastructure.
          </p>
          <p>
            Headquartered in Jalgaon, Maharashtra, Arogonix is pioneering a dual-model approach:
          </p>
          <ul className={styles.aboutList}>
            <li>Converting agricultural residues into high-density biochar pellets</li>
            <li>Operating a blockchain-integrated carbon credit platform for accurate, transparent credit generation and trade</li>
          </ul>
          
          <div className={styles.missionVision}>
            <div className={styles.vision}>
              <h3 className={styles.subHeading}>Vision</h3>
              <p>To empower rural India and MSMEs through climate-tech that transforms agri-waste into value and enables transparent access to global carbon markets for a Net Zero future.</p>
            </div>
            
            <div className={styles.mission}>
              <h3 className={styles.subHeading}>Mission</h3>
              <p>To create a scalable, tech-driven ecosystem that converts agricultural waste into biochar and enables verified carbon credit generation, driving sustainable income for farmers and climate impact for industries.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;