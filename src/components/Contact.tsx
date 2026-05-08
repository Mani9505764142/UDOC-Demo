import React from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get in <span>Touch</span></h2>
        <p className="section-subtitle">Take the first step towards your global education. Contact us today for a free consultation.</p>
        
        <div className="contact-wrap">
          <div className="contact-info">
            <h3>Contact Details</h3>
            <p>Reach out to our expert counselors via phone, email, or visit our office.</p>
            
            <div className="info-item">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <strong>Location</strong>
                <div>Uma Devi Overseas Consultancy Pvt. Ltd.</div>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Phone size={24} /></div>
              <div>
                <strong>Phone</strong>
                <div>Bhuma Devendhar Manikanta<br/>+44 7554 759943</div>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Mail size={24} /></div>
              <div>
                <strong>Email</strong>
                <div>info@udoc.com</div>
              </div>
            </div>
            
            <a href="https://wa.me/447554759943" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+1234567890" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
