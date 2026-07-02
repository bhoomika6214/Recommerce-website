import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-shape"></div>
          <span className="logo-text">RECOMMERCE</span>
          <span className="logo-subtitle">ECO | SUSTAINABILITY & BEYOND</span>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="#events" className="nav-link">EVENTS</a>
          <a href="#industries" className="nav-link">INDUSTRIES</a>
          <a href="#insights" className="nav-link">INSIGHTS</a>
          <a href="#about" className="nav-link">ABOUT US</a>
        </div>

        <div className="navbar-actions">
          <button className="nav-contact-btn">CONTACT US →</button>
          <button className="hamburger" onClick={toggleMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {isOpen && <div className="navbar-overlay" onClick={toggleMenu}></div>}
      
      {isOpen && (
        <div className="navbar-mobile-menu">
          <a href="#events" className="mobile-nav-link" onClick={() => setIsOpen(false)}>EVENTS</a>
          <a href="#industries" className="mobile-nav-link" onClick={() => setIsOpen(false)}>INDUSTRIES</a>
          <a href="#insights" className="mobile-nav-link" onClick={() => setIsOpen(false)}>INSIGHTS</a>
          <a href="#about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>ABOUT US</a>
          <button className="mobile-contact-btn">CONTACT US →</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;