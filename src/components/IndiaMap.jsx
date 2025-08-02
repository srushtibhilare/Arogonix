import React from 'react';
import PropTypes from 'prop-types';

const IndiaMap = ({ 
  className = '', 
  ariaLabel = 'India Carbon Impact Map Visualization' 
}) => {
  return (
    <section 
      className={`india-map-container ${className}`}
      style={styles.container}
      aria-label={ariaLabel}
    >
      <header style={styles.header}>
        <h2 style={styles.heading}>
          India Carbon Impact Map
        </h2>
        <p style={styles.subheading}>Regional carbon footprint analysis</p>
      </header>
      
      <div 
        style={styles.mapContainer}
        role="img"
        aria-label="Geographical representation of India showing carbon impact data"
      >
        <div style={styles.placeholder}>
          <div style={styles.placeholderContent}>
            <p style={styles.placeholderText}>Interactive map visualization loading...</p>
            <div style={styles.loadingIndicator} aria-hidden="true">
              <div style={styles.loadingDot}></div>
              <div style={styles.loadingDot}></div>
              <div style={styles.loadingDot}></div>
            </div>
          </div>
        </div>
      </div>
      
      <footer style={styles.footer}>
        <small style={styles.caption}>Data sourced from National Environmental Research Institute</small>
      </footer>
    </section>
  );
};

// Styles using CSS-in-JS pattern
const styles = {
  container: {
    padding: '2.5rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    margin: '2.5rem auto',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    maxWidth: '1200px',
    width: '95%',
    border: '1px solid #ced4da',
  },
  
  header: {
    marginBottom: '1.5rem',
  },
  
  heading: {
    color: '#00796b',
    margin: '0 0 0.5rem 0',
    fontSize: 'clamp(1.5rem, 2vw, 2rem)',
    fontWeight: '700',
    letterSpacing: '0.25px',
    lineHeight: '1.3',
  },
  
  subheading: {
    color: '#495057',
    fontSize: '1rem',
    margin: '0',
    opacity: '0.9',
  },
  
  mapContainer: {
    height: '450px',
    background: 'linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    border: '1px solid #ced4da',
    position: 'relative',
    overflow: 'hidden',
    margin: '1.5rem 0',
  },
  
  placeholder: {
    padding: '2rem',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  placeholderContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  
  placeholderText: {
    color: '#495057',
    fontSize: '1.1rem',
    fontStyle: 'italic',
    opacity: '0.8',
    margin: '0',
  },
  
  loadingIndicator: {
    display: 'flex',
    gap: '0.5rem',
  },
  
  loadingDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#00796b',
    opacity: '0.6',
    animation: 'pulse 1.5s infinite ease-in-out',
  },
  
  footer: {
    marginTop: '1rem',
  },
  
  caption: {
    color: '#6c757d',
    fontSize: '0.85rem',
  },
};

IndiaMap.propTypes = {
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default IndiaMap;