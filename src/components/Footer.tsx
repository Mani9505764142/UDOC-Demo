import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>UDOC</h2>
            <p>Uma Devi Overseas Consultancy Private Limited. Your trusted partner in securing admission to top-tier universities in the UK and achieving your global career aspirations.</p>
            <div className="footer-social">
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#universities">Top Universities</a></li>
              <li><a href="#process">Admission Process</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Study in UK</h4>
            <ul>
              <li><a href="#">Why UK?</a></li>
              <li><a href="#">Student Visas</a></li>
              <li><a href="#">Scholarships</a></li>
              <li><a href="#">Post Study Work</a></li>
              <li><a href="#">Living Costs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} <span>UDOC</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
