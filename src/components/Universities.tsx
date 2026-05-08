import React from 'react';
import './Universities.css';

const universities = [
  { name: "University of Oxford", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600" },
  { name: "University of Cambridge", image: "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?auto=format&fit=crop&q=80&w=600" },
  { name: "Imperial College London", image: "https://images.unsplash.com/photo-1555546132-22501a35ae67?auto=format&fit=crop&q=80&w=600" },
  { name: "London School of Economics", image: "https://images.unsplash.com/photo-1533035773173-196d4fbdf277?auto=format&fit=crop&q=80&w=600" },
  { name: "University of Edinburgh", image: "https://images.unsplash.com/photo-1596484552803-f04ffad4ee4e?auto=format&fit=crop&q=80&w=600" },
];

const Universities: React.FC = () => {
  return (
    <section id="universities" className="section universities">
      <div className="container">
        <h2 className="section-title">Top <span>Universities</span></h2>
        <p className="section-subtitle">We partner with the most esteemed universities to provide you with the best educational choices.</p>
        
        <div className="uni-grid">
          {universities.map((uni, index) => (
            <div key={index} className="uni-card">
              <img src={uni.image} alt={uni.name} className="uni-img" loading="lazy" />
              <div className="uni-overlay">
                <h3 className="uni-name">{uni.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Universities;
