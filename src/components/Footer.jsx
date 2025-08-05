import React from 'react';
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';
import './Footer.css';

const Footer = ({ loadingStage }) => {
  return (
    <footer id="contact" className={`footer-section ${loadingStage >= 5 ? 'loading-stage-5' : 'loading-stage-0'}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <h2 className="footer-title">Let's Connect</h2>
            <p className="footer-description">
              Feel free to reach out through any of these platforms. I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>
          
          <div className="social-links">
            <a 
              href="mailto:appyanmol@gmail.com" 
              className="social-link"
              title="Email"
            >
              <Mail className="social-icon" />
              <span>Gmail</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/anmol-kabra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <Linkedin className="social-icon" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://instagram.com/anmol__kabra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              title="Instagram"
            >
              <Instagram className="social-icon" />
              <span>Instagram</span>
            </a>
            
            <a 
              href="https://github.com/AnmolKabra-UI/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <Github className="social-icon" />
              <span>GitHub</span>
            </a>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Anmol. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;