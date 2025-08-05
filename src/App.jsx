import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingAnimation from './components/LoadingAnimation';
import HomePage from './pages/HomePage';
import PersonalPage from './pages/PersonalPage';
import WorkPage from './pages/WorkPage';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isNavigating, setIsNavigating] = React.useState(false);
  const [isFirstVisit, setIsFirstVisit] = React.useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setIsFirstVisit(false);
  };

  const handleLogoClick = () => {
    setIsLoading(true);
  };

  const handleWorkNavigation = () => {
    setIsNavigating(true);
  };

  const handleNavigationComplete = () => {
    setIsNavigating(false);
  };
  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  if (isNavigating) {
    return <LoadingAnimation onComplete={handleNavigationComplete} />;
  }

  return (
    <ThemeProvider>
      <div className="app">
        <Router>
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  isMenuOpen={isMenuOpen}
                  toggleMenu={toggleMenu}
                  scrollToContact={scrollToContact}
                  onLogoClick={handleLogoClick}
                  onWorkNavigation={handleWorkNavigation}
                 isFirstVisit={isFirstVisit}
                />
              } 
            />
            <Route 
              path="/personal" 
              element={<PersonalPage onNavigationComplete={handleNavigationComplete} />} 
            />
            <Route 
              path="/work" 
              element={<WorkPage onNavigationComplete={handleNavigationComplete} />} 
            />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;