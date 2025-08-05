import React from 'react';
import { ExternalLink, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = ({ scrollToContact, onWorkNavigation, loadingStage }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/personal');
  };

  const handleWorkClick = (e) => {
    e.preventDefault();
    if (onWorkNavigation) {
      onWorkNavigation();
    }
    // Small delay to show loading animation before navigation
    setTimeout(() => {
      navigate('/work');
    }, 100);
  };

  return (
    <main className={`main-content ${loadingStage >= 3 ? 'loading-stage-3' : 'loading-stage-0'}`}>
      <div className="container">
        <div className="hero-section">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Hello, I'm{' '}
                <span className="hero-name">Anmol</span>
              </h1>
              <p className="hero-subtitle">
                A passionate developer building sleek user interfaces with React — turning ideas into interactive experiences.
              </p>
              <p className="hero-description">
                I specialize in modern web development, crafting responsive applications 
                that deliver exceptional user experiences across all devices.
              </p>
              
              {/* CTA Buttons */}
              <div className="cta-buttons">
                <a href="/work" className="btn btn-primary" onClick={handleWorkClick}>
                  <ExternalLink className="icon" />
                  View My Work
                </a>
                <a href="#contact" className="btn btn-secondary" onClick={scrollToContact}>
                  <Mail className="icon" />
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image Placeholder */}
          <div className="hero-image">
            <div className="profile-container" onClick={handleProfileClick}>
              <div className="profile-image-wrapper">
                <img 
                  src="/MyGhibli.jpg" 
                  alt="Anmol's Profile" 
                  className="profile-image"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="floating-element floating-1">
                <span>💻</span>
              </div>
              <div className="floating-element floating-2">
                <span>👩🏻‍🍳</span>
              </div>
              <div className="floating-element floating-3">
                <span>✨</span>
              </div>
            </div>
          </div>
          
          {/* Personal hint message */}
          <p className="profile-hint" onClick={handleProfileClick}>
            Click to discover my world beyond coding
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;