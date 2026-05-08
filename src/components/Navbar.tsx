import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">UDOC</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
          <li><a href="#universities" onClick={() => setIsOpen(false)}>Universities</a></li>
          <li><a href="#process" onClick={() => setIsOpen(false)}>Process</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
