import React from 'react';
import './SkillsSection.css';

const SkillsSection = ({ loadingStage }) => {
  const technologies = ['ReactJS', 'JavaScript', 'Redux', 'HTML', 'CSS', 'TypeScript'];

  return (
    <div className={`skills-section ${loadingStage >= 4 ? 'loading-stage-4' : 'loading-stage-0'}`}>
      <div className="container">
        <div className="skills-content">
          <h2 className="skills-title">
            Technologies I Work With
          </h2>
          <div className="skills-grid">
            {technologies.map((tech) => (
              <div key={tech} className="skill-tag">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;