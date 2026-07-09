import React from "react";
import "./Careers.css";

/* ---------- inline icons ---------- */

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCap = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L2 9l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M21 9v5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="8" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 13h18" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const IconMortarSmall = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5L3 9.5 12 14l9-4.5L12 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7 11.3V15c0 1.2 2.2 2.3 5 2.3s5-1.1 5-2.3v-3.7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconBulbSmall = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.5 18h5M10.3 20.5h3.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 3.5a5.6 5.6 0 0 0-3.4 10c.6.5 1 1.2 1 2h4.8c0-.8.4-1.5 1-2A5.6 5.6 0 0 0 12 3.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconChartSmall = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 20h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 17l4.5-5 3.5 2.5L18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 6h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPeopleSmall = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3.7 18.5c.7-2.8 2.9-4.4 5.3-4.4s4.6 1.6 5.3 4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14.5 8a2.4 2.4 0 1 1 3 2.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconTargetSmall = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="4.8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" />
  </svg>
);

const IconGlobeSmall = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3.5 12h17M12 3.5c2.3 2.3 2.3 14.7 0 17M12 3.5c-2.3 2.3-2.3 14.7 0 17" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const IconBulb = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18h6M10 21h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.3 1.1 2.2h5c0-.9.5-1.7 1.1-2.2A6 6 0 0 0 12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

const IconMentor = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8.5" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="16" cy="9" r="2.1" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 19c.6-2.8 2.6-4.5 5-4.5s4.4 1.7 5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M14.5 14.8c2.2.3 3.9 1.9 4.4 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const IconHandshake = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 11l4-3 3.2 2.3M21.5 11l-4-3-3.2 2.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 8l3.3 2.4c.6.4.7 1.3.2 1.9l-.3.3a1.3 1.3 0 0 1-1.9 0l-1.2-1.2M17.5 8l-3.3 2.4a1.3 1.3 0 0 0-.2 1.9l.3.3c.5.5 1.4.5 1.9 0l1.2-1.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.7 12.4l1.6 1.6c.5.5 1.4.5 1.9 0l.1-.1M8.3 13.8l1 1c.5.5.5 1.3 0 1.8s-1.3.5-1.8 0l-1-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 19c8 0 13-5 13-13 0-.6 0-1.2-.1-1.8C10 4.2 5 9.3 5 17c0 .7 0 1.4.1 2H5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M6 18c3-4 6.5-7 11.5-11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ---------- data ---------- */

const internshipFeatures = [
  { icon: <IconMortarSmall />, label: "Learn\nFrom Experts" },
  { icon: <IconBulbSmall />, label: "Work on\nReal Projects" },
  { icon: <IconChartSmall />, label: "Build\nYour Skills" },
];

const fullTimeFeatures = [
  { icon: <IconPeopleSmall />, label: "Career\nGrowth" },
  { icon: <IconTargetSmall />, label: "Challenging\nOpportunities" },
  { icon: <IconGlobeSmall />, label: "Drive\nSustainability" },
];

const values = [
  {
    icon: <IconBulb />,
    title: "Innovation at Heart",
    desc: "We foster a culture that values creativity, welcomes new ideas, and encourages innovative thinking.",
  },
  {
    icon: <IconMentor />,
    title: "Mentorship and Growth",
    desc: "Our team comprises seasoned professionals who guide, support, and empower you.",
  },
  {
    icon: <IconGlobe />,
    title: "Positive Impact",
    desc: "Every day, you'll work on projects that contribute to a sustainable future and meaningful change.",
  },
  {
    icon: <IconHandshake />,
    title: "Collaborative Environment",
    desc: "Join a community where collaboration is celebrated and diverse perspectives drive success.",
  },
];

const stats = [
  { icon: <IconPeopleSmall />, value: "50+", label: "Team Members" },
  { icon: <IconGlobeSmall />, value: "20+", label: "Projects Across India" },
  { icon: <IconLeaf />, value: "100%", label: "Commitment to Sustainability" },
];

/* ---------- component ---------- */

const Careers = () => {
  return (
    <section className="cr">
      {/* Hero */}
      <div className="cr-hero">
        <div className="cr-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
            alt="Team collaborating in a modern office"
          />
          <div className="cr-hero-overlay" />
        </div>
        <div className="cr-hero-text">
          <span className="cr-eyebrow">JOIN OUR TEAM</span>
          <span className="cr-eyebrow-line" />
          <h1 className="cr-title">
            Cultivate Your
            <br />
            <span className="cr-title-accent">Career</span> with Us
          </h1>
          <p className="cr-desc">
            Grow, innovate, and make a meaningful impact.
            <br />
            Be part of a passionate team committed to
            <br />
            building a sustainable future.
          </p>
          <button className="cr-hero-btn" type="button">
            <span>Explore Opportunities</span>
            <span className="cr-hero-btn-circle">
              <IconArrow />
            </span>
          </button>
        </div>
      </div>

      {/* Career opportunities intro */}
      <div className="cr-section-head">
        <p className="cr-eyebrow-center">CAREER OPPORTUNITIES</p>
        <h2 className="cr-section-title">
          Find the Path That <span className="cr-title-accent">Inspires You</span>
        </h2>
        <p className="cr-section-sub">
          Whether you&rsquo;re just starting out or ready for the next big step,
          <br />
          there&rsquo;s a place for you at Urdhva Management.
        </p>
      </div>

      {/* Internship / Full time cards */}
      <div className="cr-cards">
        <div className="cr-card cr-card-blue">
          <div className="cr-card-icon cr-icon-blue">
            <IconCap />
          </div>
          <h3>Internship</h3>
          <span className="cr-card-underline cr-underline-blue" />
          <p className="cr-card-desc">
            Embark on a journey of learning and growth with hands-on experience.
            Apply your knowledge, collaborate with experts, and work on projects
            that create real-world impact.
          </p>
          <div className="cr-features">
            {internshipFeatures.map((f) => (
              <div className="cr-feature" key={f.label}>
                <span className="cr-feature-icon cr-feature-blue">{f.icon}</span>
                <span className="cr-feature-label">
                  {f.label.split("\n").map((line) => (
                    <React.Fragment key={line}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </span>
              </div>
            ))}
          </div>
          <div className="cr-card-divider" />
          <a href="#!" className="cr-card-link cr-link-blue">
            <span>Apply for Internship</span>
            <IconArrow />
          </a>
        </div>

        <div className="cr-card cr-card-green">
          <div className="cr-card-icon cr-icon-green">
            <IconBriefcase />
          </div>
          <h3>Full Time</h3>
          <span className="cr-card-underline cr-underline-green" />
          <p className="cr-card-desc">
            Join our passionate team and contribute your skills, ideas, and
            enthusiasm to drive innovation and create lasting impact across
            industries.
          </p>
          <div className="cr-features">
            {fullTimeFeatures.map((f) => (
              <div className="cr-feature" key={f.label}>
                <span className="cr-feature-icon cr-feature-green">{f.icon}</span>
                <span className="cr-feature-label">
                  {f.label.split("\n").map((line) => (
                    <React.Fragment key={line}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </span>
              </div>
            ))}
          </div>
          <div className="cr-card-divider" />
          <a href="#!" className="cr-card-link cr-link-green">
            <span>Explore Full Time Roles</span>
            <IconArrow />
          </a>
        </div>
      </div>

      {/* Why Urdhva */}
      <div className="cr-why">
        <p className="cr-eyebrow-center">WHY URDHVA MANAGEMENT</p>
        <h2 className="cr-section-title">
          Build a Career with <span className="cr-title-accent">Purpose</span>
        </h2>

        <div className="cr-values">
          {values.map((v, i) => (
            <React.Fragment key={v.title}>
              <div className="cr-value">
                <div className="cr-value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
              {i < values.length - 1 && <span className="cr-value-sep" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default Careers;