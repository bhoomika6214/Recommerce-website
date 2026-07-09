import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import RecommerceLogo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled || !isHomePage ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={RecommerceLogo} alt="Recommerce Logo" className="logo-image" />
          <div className="logo-text-group">
            <span className="logo-text">RECOMMERCE</span>
            <span className="logo-subtitle">ECO | SUSTAINABILITY & BEYOND</span>
          </div>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {isHomePage ? (
            <>
              <a href="#services" className="nav-link">SERVICES</a>
              <a href="#about" className="nav-link">ABOUT US</a>
            </>
          ) : (
            <>
              <Link to="/" className="nav-link">HOME</Link>
              <a href="/#services" className="nav-link">SERVICES</a>
              <a href="/#about" className="nav-link">ABOUT US</a>
            </>
          )}
          <Link to="/gallery" className="nav-link">GALLERY</Link>
          <Link to="/careers" className="nav-link">CAREERS</Link>
        </div>

        <div className="navbar-actions">
          <button className="nav-contact-btn">CONTACT US →</button>
          <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {isOpen && <div className="navbar-overlay" onClick={toggleMenu}></div>}
      
      {isOpen && (
        <div className="navbar-mobile-menu">
          {isHomePage ? (
            <>
              <a href="#services" className="mobile-nav-link" onClick={() => setIsOpen(false)}>SERVICES</a>
              <a href="#about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>ABOUT US</a>
            </>
          ) : (
            <>
              <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>HOME</Link>
              <a href="/#services" className="mobile-nav-link" onClick={() => setIsOpen(false)}>SERVICES</a>
              <a href="/#about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>ABOUT US</a>
            </>
          )}
          <Link to="/gallery" className="mobile-nav-link" onClick={() => setIsOpen(false)}>GALLERY</Link>
          <Link to="/careers" className="mobile-nav-link" onClick={() => setIsOpen(false)}>CAREERS</Link>
          <button className="mobile-contact-btn">CONTACT US →</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
