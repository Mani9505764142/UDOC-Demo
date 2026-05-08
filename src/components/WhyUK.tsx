import React from 'react';
import { Award, Briefcase, Clock, Globe, GraduationCap, MapPin } from 'lucide-react';
import './WhyUK.css';

const features = [
  { icon: <Award size={32} />, title: "Top-Ranked Universities", desc: "Home to some of the world's most prestigious and highest-ranking educational institutions." },
  { icon: <Clock size={32} />, title: "2 Years PSW", desc: "Benefit from the Graduate Route visa, allowing you to stay and work for 2 years post-study." },
  { icon: <Briefcase size={32} />, title: "Career Opportunities", desc: "Access to a global job market with excellent graduate employability rates." },
  { icon: <Globe size={32} />, title: "Multicultural Environment", desc: "Experience a diverse culture, meeting students and professionals from around the globe." },
  { icon: <MapPin size={32} />, title: "PR Pathway", desc: "Clear and structured pathways for long-term settlement and Permanent Residency." },
  { icon: <GraduationCap size={32} />, title: "Part-Time Work", desc: "Work up to 20 hours per week during term time to support your living expenses." },
];

const WhyUK: React.FC = () => {
  return (
    <section className="section why-uk">
      <div className="container">
        <h2 className="section-title">Why <span>Choose UK</span></h2>
        <p className="section-subtitle">Discover the unparalleled benefits of pursuing your higher education in the United Kingdom.</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
             <div key={index} className="feature-card">
               <div className="feature-icon">{feature.icon}</div>
               <h3 className="feature-title">{feature.title}</h3>
               <p className="feature-description">{feature.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUK;
