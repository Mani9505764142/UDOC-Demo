import React from 'react';
import './Statistics.css';

const Statistics: React.FC = () => {
  return (
    <section className="statistics">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">40k+</div>
            <div className="stat-label">Students Placed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1k+</div>
            <div className="stat-label">Universities</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Visa Success Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Global</div>
            <div className="stat-label">Alumni Network</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
