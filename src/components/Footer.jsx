import React from "react";
import "./Footer.css";
import recommerceLogo from "../assets/Logo.png";

/* ---------- inline icons (no external deps) ---------- */

const IconRecycleLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3c3.5 0 6 2.5 6 6M12 3c-3.5 0-6 2.5-6 6M6 9l-1.5-2.5M6 9l2.7-.7M18 9l1.5-2.5M18 9l-2.7-.7M12 21c-3.5 0-6-2.5-6-6M12 21c3.5 0 6-2.5 6-6M6 15l-1.5 2.5M6 15l2.7.7M18 15l1.5 2.5M18 15l-2.7.7"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5 3.5h3.2l1.6 4-2 1.6a11.5 11.5 0 0 0 5.6 5.6l1.6-2 4 1.6v3.2c0 1-.9 1.8-1.9 1.6C9.7 18.7 5.3 14.3 3.9 7.4c-.2-1 .6-1.9 1.6-1.9z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3.5" y="5.5" width="17" height="13" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
    <path d="M4 6.5l8 6.5 8-6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21s7-6.1 7-11.5A7 7 0 1 0 5 9.5C5 14.9 12 21 12 21z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const IconBuilding = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="3.5" width="10" height="17" rx="1" stroke="currentColor" strokeWidth="1.3" />
    <rect x="15" y="9" width="5" height="11.5" rx="1" stroke="currentColor" strokeWidth="1.3" />
    <path d="M7.5 7h1.5M11 7h1.5M7.5 10.5h1.5M11 10.5h1.5M7.5 14h1.5M11 14h1.5M7.5 17.5h1.5M11 17.5h1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="4.4" height="4.4" rx="1" fill="currentColor" />
    <rect x="3" y="9" width="4.4" height="12" fill="currentColor" />
    <path d="M10.6 9h4.2v1.8c.6-1 1.9-2.1 3.9-2.1 3 0 4.3 2 4.3 5.4V21h-4.4v-6.2c0-1.5-.6-2.5-1.9-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V21h-4.4c.1-9.7 0-10.7 0-12z" fill="currentColor" />
  </svg>
);

const IconX = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 4l16 16M20 4L4 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
  </svg>
);

const IconYoutube = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" />
  </svg>
);

/* ---------- data ---------- */

const quickLinks = ["About Us", "Our Services", "Events", "Resources", "Contact Us"];

const solutions = [
  "Recommerce Expo",
  "ITAD & WEEE",
  "Biomedical Waste",
  "Solid Waste Management",
  "Research & Reporting",
];

const socials = [
  { icon: <IconLinkedIn />, label: "LinkedIn" },
  { icon: <IconX />, label: "X" },
  { icon: <IconInstagram />, label: "Instagram" },
  { icon: <IconYoutube />, label: "YouTube" },
];

/* ---------- component ---------- */

const Footer = () => {
  return (
    <footer className="uf">
      {/* CTA banner */}
      <div className="uf-cta-wrap">
        <div className="uf-cta">
          <div className="uf-cta-left">
            <div className="uf-cta-icon">
              <img src={recommerceLogo} alt="Recommerce Logo" className="uf-cta-mark" />
            </div>
            <div className="uf-cta-text">
              <h2>
                Let&rsquo;s Build a
                <br />
                <span className="uf-highlight">Sustainable Future</span> Together
              </h2>
              <p>
                Partner with Recommerce to drive circular innovation,
                <br />
                create impact and build a better tomorrow.
              </p>
            </div>
          </div>
          <button className="uf-cta-btn" type="button">
            <span>Contact Us</span>
            <span className="uf-cta-btn-circle">
              <IconArrowRight />
            </span>
          </button>
        </div>
      </div>

      {/* Main dark footer */}
      <div className="uf-main">
        <div className="uf-grid">
          {/* Brand column */}
          <div className="uf-col uf-brand-col">
            <div className="uf-logo">
              <img src="https://dev.urdhvamanagement.com/wp-content/uploads/2026/05/urdhva-logo-hd-neo-scaled.png" alt="Urdhva Management Logo" className="uf-logo-mark" />
              <div className="uf-logo-text">
                <span className="uf-logo-name">URDHVA</span>
                <span className="uf-logo-tag">FUTURE-READY BUSINESS SOLUTIONS</span>
              </div>
            </div>
            <p className="uf-brand-desc">
              Driving the transition to a circular economy through knowledge, innovation and
              impactful partnerships.
            </p>
          </div>

          {/* Quick links */}
          <div className="uf-col">
            <h4 className="uf-heading">QUICK LINKS</h4>
            <ul className="uf-list">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#!">
                    <span>{item}</span>
                    <IconChevron />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our solutions */}
          <div className="uf-col">
            <h4 className="uf-heading">OUR SOLUTIONS</h4>
            <ul className="uf-list">
              {solutions.map((item) => (
                <li key={item}>
                  <a href="#!">
                    <span>{item}</span>
                    <IconChevron />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact us */}
          <div className="uf-col">
            <h4 className="uf-heading">CONTACT US</h4>
            <ul className="uf-contact-list">
              <li>
                <span className="uf-contact-icon">
                  <IconPhone />
                </span>
                <span>+91 97317 75124</span>
              </li>
              <li>
                <span className="uf-contact-icon">
                  <IconMail />
                </span>
                <span>info@recommerceeco.com</span>
              </li>
              <li>
                <span className="uf-contact-icon">
                  <IconPin />
                </span>
                <span>
                  <strong>Bengaluru Office</strong>
                  <br />
                  RoofSquare Realty, No.549, 4th Floor
                  <br />
                  &lsquo;SRINILAYAM&rsquo;, 7th Main Road
                  <br />
                  Rajiv Gandhi Nagar, 2nd Phase, Post
                  <br />
                  NTI Layout, Vidyaranyapura,
                  <br />
                  Bengaluru, Karnataka 560097
                </span>
              </li>
            </ul>
          </div>

          {/* Stay connected */}
          <div className="uf-col">
            <h4 className="uf-heading">STAY CONNECTED</h4>
            <p className="uf-connect-desc">Follow us for updates, insights and events.</p>
            <div className="uf-socials">
              {socials.map((s) => (
                <a href="#!" key={s.label} className="uf-social-btn" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="uf-hq-card">
              <span className="uf-hq-icon">
                <IconBuilding />
              </span>
              <div>
                <strong>Bengaluru HQ</strong>
                <p>Driving impact from the heart of India&rsquo;s innovation hub.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="uf-bottom">
          <p>© 2026 Urdhva Management Private Limited. All Rights Reserved.</p>
          <div className="uf-bottom-links">
            <a href="#!">Privacy Policy</a>
            <span className="uf-divider" />
            <a href="#!">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;