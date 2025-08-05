import React from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="hexagon-container">
          <svg className="hexagon" viewBox="0 0 100 100" width="120" height="120">
            <polygon
              points="50,5 85,25 85,75 50,95 15,75 15,25"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0EA5E9" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>
            </defs>
          </svg>
          <div className="initial">A</div>
        </div>
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingAnimation;