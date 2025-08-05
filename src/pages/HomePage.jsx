import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage = ({ 
  isMenuOpen, 
  toggleMenu, 
  scrollToContact, 
  onLogoClick,
  onWorkNavigation,
  isFirstVisit
}) => {
  const [loadingStage, setLoadingStage] = React.useState(0);

  React.useEffect(() => {
    if (isFirstVisit) {
      // Sequential loading animation only on first visit
      const timers = [
        setTimeout(() => setLoadingStage(1), 500),  // Logo
        setTimeout(() => setLoadingStage(2), 1000), // Navbar buttons
        setTimeout(() => setLoadingStage(3), 1500), // Hero section
        setTimeout(() => setLoadingStage(4), 2000), // Skills section
        setTimeout(() => setLoadingStage(5), 2500), // Footer section
      ];

      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    } else {
      // Show all elements immediately on subsequent visits
      setLoadingStage(5);
    }
  }, [isFirstVisit]);

  return (
    <div className="home-page">
      <Navbar 
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        scrollToContact={scrollToContact}
        onLogoClick={onLogoClick}
        onWorkNavigation={onWorkNavigation}
        loadingStage={loadingStage}
      />
      <HeroSection 
        scrollToContact={scrollToContact} 
        onWorkNavigation={onWorkNavigation}
        loadingStage={loadingStage}
      />
      <SkillsSection loadingStage={loadingStage} />
      <Footer loadingStage={loadingStage} />
    </div>
  );
};

export default HomePage;