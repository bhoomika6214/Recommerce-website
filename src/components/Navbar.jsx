import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import RecommerceLogo from '../assets/RecommerceLogo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled || !isHomePage ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Recommerce, home">
          <img src={RecommerceLogo} alt="Recommerce: reuse redefined" className="logo-lockup" />
        </Link>

        <a className="nav-contact-btn" href="mailto:info@recommerceeco.com">
          CONTACT US →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
