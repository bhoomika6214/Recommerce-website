import React from "react";
import "./Careers.css";

/* ---------- inline icons ---------- */

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconPeople = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 19c.7-3 3-4.8 5.5-4.8s4.8 1.8 5.5 4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="17" cy="8.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M15.8 14.6c2 .3 3.6 1.8 4.2 4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 12.2l2.6 2.6L16.2 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

/* ---------- data ---------- */

const internshipPoints = [
  "Apply knowledge to real-world projects",
  "Learn from industry experts",
  "Mentorship & continuous learning",
  "Be a part of meaningful change",
];

const fullTimePoints = [
  "Work on impactful & innovative projects",
  "Collaborate with a passionate team",
  "Opportunities for growth & leadership",
  "Make a difference, every single day",
];

const values = [
  {
    icon: <IconBulb />,
    tone: "blue",
    title: "Innovation at Heart",
    desc: "We foster a culture that values creativity, welcomes new ideas, and encourages innovative thinking.",
  },
  {
    icon: <IconMentor />,
    tone: "green",
    title: "Mentorship & Growth",
    desc: "Our team comprises seasoned professionals who are committed to guiding and supporting your career journey.",
  },
  {
    icon: <IconGlobe />,
    tone: "purple",
    title: "Positive Impact",
    desc: "Every day, you'll work on projects that contribute to a sustainable future and meaningful change.",
  },
  {
    icon: <IconHandshake />,
    tone: "orange",
    title: "Collaborative Environment",
    desc: "Join a community where collaboration is celebrated, and diverse perspectives drive success.",
  },
];

/* ---------- component ---------- */

const Careers = () => {
  return (
    <section className="cr">
      {/* Hero */}
      <div className="cr-hero">
        <div className="cr-hero-text">
          <span className="cr-eyebrow">
            <span className="cr-eyebrow-line" /> JOIN OUR TEAM
          </span>
          <h1 className="cr-title">
            Cultivate Your
            <br />
            Career <span className="cr-title-accent">With Us</span>
          </h1>
          <p className="cr-subtitle">Grow. Innovate. Impact.</p>
          <p className="cr-desc">
            At Urdhva Management, we don&rsquo;t just offer jobs;
            <br />
            we build careers that drive change.
            <br />
            Be a part of a team that&rsquo;s shaping industries
            <br />
            and embracing sustainability.
          </p>
          <button className="cr-hero-btn" type="button">
            <IconPeople />
            <span>Explore Opportunities</span>
            <span className="cr-hero-btn-circle">
              <IconArrow />
            </span>
          </button>
        </div>
        <div className="cr-hero-image">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
            alt="Team collaborating in a modern office"
          />
        </div>
      </div>

      {/* Internship / Full time cards */}
      <div className="cr-cards">
        <div className="cr-card cr-card-blue">
          <div className="cr-card-icon cr-icon-blue">
            <IconCap />
          </div>
          <h3>Internship</h3>
          <p className="cr-card-tag cr-tag-blue">Learn. Grow. Make an Impact.</p>
          <p className="cr-card-desc">
            Embark on a journey of learning and growth with our dynamic internship
            opportunities. Gain hands-on experience, collaborate with experts, and
            contribute to meaningful projects that create a real-world impact.
          </p>
          <ul className="cr-card-list">
            {internshipPoints.map((p) => (
              <li key={p}>
                <span className="cr-check cr-check-blue">
                  <IconCheck />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <button className="cr-apply-btn cr-apply-blue" type="button">
            <span>Apply Now</span>
            <span className="cr-apply-circle cr-circle-blue">
              <IconArrow />
            </span>
          </button>
        </div>

        <div className="cr-card cr-card-green">
          <div className="cr-card-icon cr-icon-green">
            <IconBriefcase />
          </div>
          <h3>Full Time</h3>
          <p className="cr-card-tag cr-tag-green">Build Your Career. Drive Change.</p>
          <p className="cr-card-desc">
            Join our passionate team and work on innovative solutions that shape
            industries and build a sustainable future. Bring your ideas, skills, and
            enthusiasm to drive our mission forward.
          </p>
          <ul className="cr-card-list">
            {fullTimePoints.map((p) => (
              <li key={p}>
                <span className="cr-check cr-check-green">
                  <IconCheck />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <button className="cr-apply-btn cr-apply-green" type="button">
            <span>Apply Now</span>
            <span className="cr-apply-circle cr-circle-green">
              <IconArrow />
            </span>
          </button>
        </div>
      </div>

      {/* Why Urdhva */}
      <div className="cr-why">
        <p className="cr-why-eyebrow">
          <span className="cr-why-rule" /> WHY URDHVA MANAGEMENT <span className="cr-why-rule" />
        </p>
        <h2 className="cr-why-title">A Workplace That Empowers You</h2>

        <div className="cr-values">
          {values.map((v) => (
            <div className="cr-value" key={v.title}>
              <div className={`cr-value-icon cr-value-${v.tone}`}>{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA banner */}
      <div className="cr-cta">
        <img
          className="cr-cta-bg"
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80"
          alt="City skyline at night with wind turbines"
        />
        <div className="cr-cta-overlay" />
        <div className="cr-cta-content">
          <span className="cr-cta-bar" />
          <h2>Ready to Build the Future With Us?</h2>
          <p>
            Take the next step towards a fulfilling career that drives impact,
            innovation, and sustainability.
          </p>
          <button className="cr-cta-btn" type="button">
            <span>Submit Your Application</span>
            <span className="cr-cta-btn-circle">
              <IconArrow />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Careers;