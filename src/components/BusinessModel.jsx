import React from 'react';
import styles from './BusinessModel.module.css';

const BusinessModel = () => {
  return (
    <section className={styles.section} id="business-model">
      <div className={styles.content}>
        <h2 className={styles.heading}>Business & Revenue Model</h2>
        
        <ul className={styles.revenueList}>
          <li className={styles.revenueItem}>
            <div className={styles.checkmark}>✓</div>
            <div className={styles.itemContent}>
              <h3 className={styles.itemTitle}>Subscription Analytics</h3>
              <p className={styles.itemDescription}>
                Recurring revenue from premium analytics dashboards and monitoring tools for enterprises and government partners.
              </p>
            </div>
          </li>
          
          <li className={styles.revenueItem}>
            <div className={styles.checkmark}>✓</div>
            <div className={styles.itemContent}>
              <h3 className={styles.itemTitle}>Platform Licensing</h3>
              <p className={styles.itemDescription}>
                White-label solutions and API access for ESG integrations with financial institutions and corporate sustainability platforms.
              </p>
            </div>
          </li>
          
          <li className={styles.revenueItem}>
            <div className={styles.checkmark}>✓</div>
            <div className={styles.itemContent}>
              <h3 className={styles.itemTitle}>Carbon Market Services</h3>
              <p className={styles.itemDescription}>
                Transaction fees from carbon credit validation, verification, and trading through our blockchain-powered marketplace.
              </p>
            </div>
          </li>
        </ul>
        
        <div className={styles.additionalInfo}>
          <h4 className={styles.additionalTitle}>Additional Revenue Streams</h4>
          <p className={styles.additionalText}>
            Consulting services for carbon project development, custom MRV solutions for large-scale emitters, 
            and data licensing partnerships with research institutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;