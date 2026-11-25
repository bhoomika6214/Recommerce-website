import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import RecommerceLogo from '../assets/RecommerceLogo.png';
import { ENQUIRY_URL } from '../pages/contactMail';

const EVENT_LINKS = [
  { label: 'ITAD & WEEE', href: 'https://itad.recommerceeco.com/' },
  { label: '7th Recommerce Expo', href: 'https://expo.recommerceeco.com/' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // the phone menu
  const eventsRef = useRef(null);
  const navRef = useRef(null);
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close the Events menu on an outside click or Escape
  useEffect(() => {
    if (!eventsOpen) return undefined;
    const onDown = (e) => {
      if (!eventsRef.current?.contains(e.target)) setEventsOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setEventsOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [eventsOpen]);

  // phone menu: close on an outside tap or Escape
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onDown = (e) => {
      if (!navRef.current?.contains(e.target)) setMenuOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const closeAll = () => {
    setEventsOpen(false);
    setMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled || !isHomePage ? 'navbar-scrolled' : 'navbar-transparent'}${menuOpen ? ' navbar--open' : ''}`}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Recommerce, home" onClick={closeAll}>
          <img src={RecommerceLogo} alt="Recommerce: reuse redefined" className="logo-lockup" />
        </Link>

        <div className="nav-right">
          <div className="nav-links" id="nav-links">
            <NavLink
              to="/about"
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
              onClick={closeAll}
            >
              ABOUT US
            </NavLink>
            <div className={`nav-dropdown ${eventsOpen ? 'nav-dropdown--open' : ''}`} ref={eventsRef}>
              <button
                type="button"
                className="nav-link nav-dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={eventsOpen}
                onClick={() => setEventsOpen((o) => !o)}
              >
                EVENTS
                <svg className="nav-caret" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <ul className="nav-menu">
                {EVENT_LINKS.map((e) => (
                  <li key={e.href}>
                    <a href={e.href} target="_blank" rel="noopener noreferrer" onClick={closeAll}>
                      {e.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <NavLink
              to="/awareness"
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
              onClick={closeAll}
            >
              AWARENESS
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
              onClick={closeAll}
            >
              CONTACT US
            </NavLink>
          </div>
          <a className="nav-contact-btn" href={ENQUIRY_URL} target="_blank" rel="noopener noreferrer" onClick={closeAll}>
            ENQUIRE NOW →
          </a>
        </div>

        <button
          type="button"
          className="nav-burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
