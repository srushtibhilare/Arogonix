import React from 'react';

const IntroSection = () => {
  return (
    <section style={{
      padding: '3rem 1rem',
      backgroundColor: '#e8f5e9',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        color: '#00796b',
        fontSize: '1.8rem',
        marginBottom: '1rem'
      }}>
        Our Mission
      </h2>
      <p style={{
        color: '#37474f',
        fontSize: '1.1rem',
        lineHeight: '1.6'
      }}>
        We convert agricultural residues into high-density biochar and enable transparent access to global carbon markets.
      </p>
    </section>
  );
};

export default IntroSection;