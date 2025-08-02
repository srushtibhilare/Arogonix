import React, { useEffect, useRef } from 'react';
import styles from './ImpactMap.module.css';

const ImpactMap = () => {
  const progressBars = useRef([]);

  useEffect(() => {
    // Animate progress bars on mount
    const animateBars = () => {
      progressBars.current.forEach(bar => {
        if (bar) {
          const targetWidth = bar.dataset.value;
          bar.style.width = targetWidth;
        }
      });
    };

    const timer = setTimeout(animateBars, 1000);
    return () => clearTimeout(timer);
  }, []);

  const primaryStates = [
    { name: "Maharashtra", impact: "1M tCO₂e", percentage: "100%" },
    { name: "Gujarat", impact: "800K tCO₂e", percentage: "80%" },
    { name: "Tamil Nadu", impact: "600K tCO₂e", percentage: "60%" },
    { name: "Karnataka", impact: "500K tCO₂e", percentage: "50%" },
    { name: "Uttar Pradesh", impact: "400K tCO₂e", percentage: "40%" }
  ];

  const additionalStates = [
    { name: "Punjab", impact: "300K tCO₂e" },
    { name: "West Bengal", impact: "250K tCO₂e" },
    { name: "Madhya Pradesh", impact: "200K tCO₂e" },
    { name: "Telangana", impact: "150K tCO₂e" },
    { name: "Rajasthan", impact: "100K tCO₂e" }
  ];

  return (
    <section className={styles.section} id="impact-map">
      <div className={styles.content}>
        <h2 className={styles.heading}>CO₂e Impact (2025–2030)</h2>
        <p className={styles.subheading}>
          Projected carbon emission reductions across key Indian states through our biochar production and carbon credit initiatives.
        </p>
        
        <div className={styles.impactGrid}>
          {primaryStates.map((state, index) => (
            <div key={state.name} className={styles.stateCard}>
              <h3 className={styles.stateName}>{state.name}</h3>
              <div className={styles.impactValue}>{state.impact}</div>
              <div className={styles.progressContainer}>
                <div
                  className={styles.progressBar}
                  ref={el => progressBars.current[index] = el}
                  data-value={state.percentage}
                  style={{ width: '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.additionalStates}>
          {additionalStates.map(state => (
            <div key={state.name} className={styles.additionalState}>
              <h4>{state.name}</h4>
              <p>{state.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMap;