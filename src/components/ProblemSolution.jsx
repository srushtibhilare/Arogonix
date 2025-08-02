import React from 'react';
import styles from './ProblemSolution.module.css';

const ProblemSolution = () => {
  return (
    <section className={styles.section} id="problem-solution">
      <div className={`${styles.decorativeShape} ${styles.shape1}`}></div>
      <div className={`${styles.decorativeShape} ${styles.shape2}`}></div>
      
      <div className={styles.content}>
        <h2 className={styles.heading}>Challenges & Solutions</h2>
        
        <div className={styles.grid}>
          {/* Problem Card */}
          <div className={`${styles.card} ${styles.problemCard}`}>
            <div className={styles.cardContent}>
              <h4 className={`${styles.cardHeading} ${styles.problemHeading}`}>
                Current Challenges
              </h4>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>500 million+ tons</strong> of agricultural waste burned annually, causing severe pollution
                </li>
                <li className={styles.listItem}>
                  <strong>70% of potential carbon credits</strong> in India remain unregistered and untapped
                </li>
                <li className={styles.listItem}>
                  <strong>Limited access</strong> for farmers and MSMEs to monetize sustainability efforts
                </li>
                <li className={styles.listItem}>
                  <strong>Inefficient systems</strong> for tracking and verifying carbon credits
                </li>
              </ul>
            </div>
          </div>
          
          {/* Solution Card */}
          <div className={`${styles.card} ${styles.solutionCard}`}>
            <div className={styles.cardContent}>
              <h4 className={`${styles.cardHeading} ${styles.solutionHeading}`}>
                Our Innovative Solutions
              </h4>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <strong>Biochar production</strong> converting waste into high-value carbon-negative fuel
                </li>
                <li className={styles.listItem}>
                  <strong>AI-powered blockchain platform</strong> for transparent credit verification
                </li>
                <li className={styles.listItem}>
                  <strong>Inclusive access model</strong> empowering rural communities
                </li>
                <li className={styles.listItem}>
                  <strong>Multi-sector integration</strong> across agriculture, energy and waste management
                </li>
                <li className={styles.listItem}>
                  <strong>Policy-aligned approach</strong> supporting India's Net Zero 2070 goals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;