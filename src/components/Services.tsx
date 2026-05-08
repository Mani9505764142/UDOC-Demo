import React from 'react';
import { Lightbulb, ListChecks, FileText, BookOpen, FileSignature, PlaneTakeoff } from 'lucide-react';
import './Services.css';

const services = [
  { icon: <Lightbulb size={28} />, title: "Career Counselling", desc: "Expert guidance to help you choose the right career path based on your profile and aspirations." },
  { icon: <ListChecks size={28} />, title: "University Shortlisting", desc: "Tailored university recommendations that match your academic background and goals." },
  { icon: <FileText size={28} />, title: "Application Support", desc: "End-to-end assistance with university applications, SOPs, and LORs to ensure success." },
  { icon: <BookOpen size={28} />, title: "Visa Guidance", desc: "Comprehensive visa interview preparation and application assistance for a hassle-free process." },
  { icon: <FileSignature size={28} />, title: "Document Preparation", desc: "Meticulous review and organization of your financial and academic documents." },
  { icon: <PlaneTakeoff size={28} />, title: "Pre-Departure Support", desc: "Briefing sessions on accommodation, travel, and life in the UK before you fly." },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Our <span>Services</span></h2>
        <p className="section-subtitle">Comprehensive support tailored for your international education journey.</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
