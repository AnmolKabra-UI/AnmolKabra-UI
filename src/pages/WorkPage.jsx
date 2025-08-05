import React from 'react';
import { ArrowLeft, Building2, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './WorkPage.css';

const WorkPage = ({ onNavigationComplete }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Call navigation complete when component mounts
    if (onNavigationComplete) {
      onNavigationComplete();
    }
  }, [onNavigationComplete]);

  const experiences = [
    {
      company: "Capgemini",
      position: "Senior Consultant",
      client: "USAA",
      location: "Hyderabad, Telangana",
      duration: "July 2025 – Present",
      responsibilities: [
        "Worked on the UI development for the Auto Insurance module catering to military personnel using React.js, TypeScript, JavaScript, HTML, and CSS.",
        "Designed and implemented dynamic, form-based interfaces that captured various user and vehicle details required for insurance processing. The form configurations, including field types, validations, and labels, were driven by a JSON schema, enabling scalable and flexible form rendering.",
        "Integrated with backend APIs developed in Java, ensuring smooth data flow and seamless user experience while adhering to client's design and compliance standards."
      ]
    },
    {
      company: "Accenture",
      position: "Advanced App Engineering Senior Analyst",
      client: "Meta",
      location: "Hyderabad, Telangana",
      duration: "June 2024 – June 2025",
      responsibilities: [
        "Developed responsive UI elements using React JS, TypeScript, HTML, CSS and did API integration of backend in PHP Hack and GraphQL database for a web-based application called Demo Planner, which allows users to configure network settings (Wi-Fi), OS and APKs and provision into MR headset based on their preferences.",
        "Bundled OS and APK files download from multiple applications into one and improved performance.",
        "Implemented lazy loading and improved load time of device profiles by 90%."
      ]
    },
    {
      company: "Accenture",
      position: "Application Development Analyst",
      client: "Internal",
      location: "Hyderabad, Telangana",
      duration: "July 2021 – June 2024",
      responsibilities: [
        "Developed a web based application called Ecosystem Offerings Workbench using React JS, HTML, CSS which integrates it's services with one or more Partner solutions and targets multiple clients in specific industries and markets",
        "Developing and implementing highly responsive user interface and building reusable components using React JS concepts",
        "Translating and integrating wireframes and designs into good quality code",
        "Using Axios library to make HTTP requests and fetch data.",
        "Using React Redux to read data from redux store and dispatch actions to the store to update state and optimize components to work seamlessly across different browsers and devices"
      ]
    },
    {
      company: "Infosys",
      position: "Senior Systems Engineer",
      client: "Cisco",
      location: "Hyderabad, Telangana",
      duration: "July 2018 – June 2021",
      responsibilities: [
        "Developed a responsive web based application using HTML, CSS, Bootstrap called File System management which enabled users to store and retrieve data to/from multiple cloud storage systems",
        "Developed a component that performs basic configurations to connect to the cloud.",
        "Implemented SSO authentication using Key Cloak for login component, dynamic role management to provide users with different levels of access.",
        "Integrated user facing components with server side using RESTful web services and used Routing to navigate between tabs"
      ]
    }
  ];

  return (
    <div className="work-page">
      {/* Header with back button */}
      <header className="work-header">
        <div className="container">
          <button onClick={() => navigate('/')} className="back-button">
            <ArrowLeft className="back-icon" />
            Back to Portfolio
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="work-main">
        <div className="container">
          <div className="work-intro">
            <h1 className="work-title">Professional Experience</h1>
            <p className="work-subtitle">
              A journey through my career in software development, working with leading companies and innovative technologies.
            </p>
          </div>
          
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <div className="company-info">
                    <div className="company-icon">
                      <Building2 className="icon" />
                    </div>
                    <div className="company-details">
                      <h3 className="company-name">{exp.company}</h3>
                      <h4 className="position-title">{exp.position}</h4>
                      {exp.client && (
                        <p className="client-info">Client: {exp.client}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="experience-meta">
                    <div className="meta-item">
                      <Calendar className="meta-icon" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="meta-item">
                      <MapPin className="meta-icon" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="experience-content">
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="responsibility-item">
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="work-summary">
            <div className="summary-card">
              <h3 className="summary-title">Key Achievements</h3>
              <div className="achievements-grid">
                <div className="achievement-item">
                  <span className="achievement-number">7+</span>
                  <span className="achievement-label">Years Experience</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-number">3</span>
                  <span className="achievement-label">Major Companies</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-number">90%</span>
                  <span className="achievement-label">Performance Improvement</span>
                </div>
                <div className="achievement-item">
                  <span className="achievement-number">6+</span>
                  <span className="achievement-label">Technologies Mastered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkPage;