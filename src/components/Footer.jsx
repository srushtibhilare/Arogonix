import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">Arogonix Exports</h3>
            <p className="footer-tagline">Transforming India's carbon credit ecosystem</p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Us</h4>
            <address className="footer-address">
              <p>123 Greenway Boulevard</p>
              <p>Bangalore, Karnataka 560001</p>
              <p>India</p>
              <p><a href="mailto:info@arogonix.com">info@arogonix.com</a></p>
              <p><a href="tel:+911234567890">+91 12345 67890</a></p>
            </address>
          </div>

          <div className="footer-social">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-icons">
              <a href="https://twitter.com/arogonix" aria-label="Twitter">
                <i className="icon-twitter"></i>
              </a>
              <a href="https://linkedin.com/company/arogonix" aria-label="LinkedIn">
                <i className="icon-linkedin"></i>
              </a>
              <a href="https://facebook.com/arogonix" aria-label="Facebook">
                <i className="icon-facebook"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Arogonix Exports. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="/terms">Terms of Service</a>
            <span className="divider">|</span>
            <a href="/sustainability">Sustainability Commitment</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;