import React from 'react';
import styles from './CarbonProcess.module.css';

const CarbonProcess = () => {
  return (
    <section className={styles.section} id="carbon-process">
      <div className={styles.content}>
        <h2 className={styles.heading}>Carbon Credit Process</h2>
        <p className={styles.description}>
          Our AI + blockchain-based MRV system tracks and verifies carbon credits across agriculture, 
          waste, and energy sectors with full compliance to national schemes.
        </p>
        
        <div className={styles.processSteps}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Project Design</h3>
            <p className={styles.stepDescription}>
              Custom methodology development aligned with sector-specific requirements and compliance standards.
            </p>
          </div>
          
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Real-Time Monitoring</h3>
            <p className={styles.stepDescription}>
              AI-powered tracking of emissions data with IoT sensors and satellite imagery integration.
            </p>
          </div>
          
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Blockchain Verification</h3>
            <p className={styles.stepDescription}>
              Immutable record-keeping on distributed ledger ensuring transparency and auditability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarbonProcess;