import React from 'react';

const VisionSection = () => {
  return (
    <section style={{
      padding: '3rem 1rem',
      background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
      textAlign: 'center',
      borderTop: '1px solid #b2dfdb',
      borderBottom: '1px solid #b2dfdb',
      margin: '2rem 0'
    }}>
      <h2 style={{
        color: '#00796b',
        fontSize: '1.8rem',
        marginBottom: '1rem',
        fontWeight: '600'
      }}>
        Vision
      </h2>
      <p style={{
        color: '#006064',
        fontSize: '1.1rem',
        lineHeight: '1.6',
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        Empowering farmers and MSMEs through innovation in carbon credit generation.
      </p>
    </section>
  );
};

export default VisionSection;