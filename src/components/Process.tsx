import React from 'react';
import './Process.css';

const steps = [
  { id: 1, title: "Counselling", desc: "Initial profile evaluation and goal setting discussion." },
  { id: 2, title: "University Selection", desc: "Shortlisting courses and institutions matching your profile." },
  { id: 3, title: "Application Process", desc: "Drafting SOPs, LORs, and submitting university applications." },
  { id: 4, title: "Documentation", desc: "Gathering and organizing financial and academic records." },
  { id: 5, title: "Visa Processing", desc: "Filing visa application and mock interview preparation." },
  { id: 6, title: "Pre-Departure", desc: "Briefing on accommodation, travel, and what to expect." },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="section process">
      <div className="container">
        <h2 className="section-title">Admission <span>Process</span></h2>
        <p className="section-subtitle">A streamlined step-by-step procedure to ensure a smooth transition to your dream university.</p>
        
        <div className="timeline">
          {steps.map((step, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-number">0{step.id}</div>
                <h3 className="timeline-title">{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
