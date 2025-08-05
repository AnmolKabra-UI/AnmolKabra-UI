import React from 'react';
import { Download, Mail, Menu, X, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import './Navbar.css';

const Navbar = ({ isMenuOpen, toggleMenu, scrollToContact, onLogoClick, onWorkNavigation, loadingStage }) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleWorkClick = (e) => {
    e.preventDefault();
    onWorkNavigation();
    // Small delay to show loading animation before navigation
    setTimeout(() => {
      navigate('/work');
    }, 100);
    toggleMenu(); // Close mobile menu if open
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <div className={`logo ${loadingStage >= 1 ? 'loading-stage-1' : 'loading-stage-0'}`}>
            <div className="logo-hexagon" onClick={onLogoClick}>
              <svg viewBox="0 0 100 100" width="40" height="40">
                <polygon
                  points="50,5 85,25 85,75 50,95 15,75 15,25"
                  fill="none"
                  stroke="url(#navGradient)"
                  strokeWidth="3"
                />
                <defs>
                  <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#0284C7" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="logo-initial">A</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={`nav-desktop ${loadingStage >= 2 ? 'loading-stage-2' : 'loading-stage-0'}`}>
            <div className="nav-links">
              <button onClick={toggleTheme} className="theme-toggle" title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
                {theme === 'light' ? <Moon className="icon" /> : <Sun className="icon" />}
              </button>
              <a href="/work" className="nav-link" onClick={handleWorkClick}>
                View My Work
              </a>
              <a href="/Resume_Anmol_08_2025.pdf" download="Anmol_Kabra_Resume.pdf" className="nav-link nav-link-resume">
                <Download className="icon" />
                Download Resume
              </a>
              <a href="#contact" className="nav-link nav-link-primary" onClick={scrollToContact}>
                <Mail className="icon" />
                Contact Me
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className={`nav-mobile ${loadingStage >= 2 ? 'loading-stage-2' : 'loading-stage-0'}`}>
            <button onClick={toggleTheme} className="theme-toggle mobile-theme-toggle" title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
              {theme === 'light' ? <Moon className="icon" /> : <Sun className="icon" />}
            </button>
            <button onClick={toggleMenu} className="mobile-menu-btn">
              {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-content">
            <button onClick={toggleTheme} className="mobile-nav-link theme-toggle-mobile" title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
              {theme === 'light' ? <Moon className="icon" /> : <Sun className="icon" />}
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            <a href="/work" className="mobile-nav-link" onClick={handleWorkClick}>
              View My Work
            </a>
            <a href="/Resume_Anmol_08_2025.pdf" download="Anmol_Kabra_Resume.pdf" className="mobile-nav-link" onClick={toggleMenu}>
              <Download className="icon" />
              Download Resume
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={scrollToContact}>
              <Mail className="icon" />
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;