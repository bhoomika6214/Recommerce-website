import React, { useEffect, useRef } from 'react';
import { FiUsers, FiBookOpen, FiSettings } from 'react-icons/fi';
import { FaHandshake, FaHandRock } from 'react-icons/fa';
import './About.css';

const steps = [
  { icon: <FiUsers />, label: 'ENGAGE' },
  { icon: <FiBookOpen />, label: 'EDUCATE' },
  { icon: <FaHandshake />, label: 'EXCHANGE' },
  { icon: <FaHandRock />, label: 'EMPOWER' },
  { icon: <FiSettings />, label: 'ENABLE' },
];

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="about-bg-arcs" />
      <div className="about-bg-dots" />

      <div className="about-container">
        {/* Left Column - Quote & Description */}
        <div className="about-left animate-on-scroll">
          <span className="about-quote-mark">&ldquo;</span>
          <h2 className="about-quote">
            Creating a circular business model is challenging, and taking the wrong approach can be expensive
            <span className="about-quote-mark-end">&rdquo;</span>
          </h2>
          <span className="about-underline" />

          <p className="about-desc">
            Recommerce, is a brand of Urdhva Management and the pioneering force in leading the charge towards a brighter future for the industries, A category-defining company dedicated to building a sustainable reverse commerce ecosystem
          </p>

          <p className="about-desc">
            At Recommerce, we embody the ideals of Engage, Educate, Exchange, Empower, and Enable, propelling industries and individuals towards a brighter future. Our tagline, <em>&ldquo;Unlocking Infinite Possibilities, Connecting Industries: Pioneering Sustainability for a Thriving Tomorrow!&rdquo;</em> encapsulates our mission to revolutionize India&rsquo;s business landscape through Recommerce, our pioneering brand dedicated to driving a circular economy.
          </p>
        </div>

        {/* Right Column - Steps & Brand Card */}
        <div className="about-right animate-on-scroll">
          <div className="about-steps">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="about-step">
                  <div className="about-step-icon">
                    {step.icon}
                  </div>
                  <span className="about-step-label">{step.label}</span>
                </div>
                {index < steps.length - 1 && <span className="about-step-connector" />}
              </React.Fragment>
            ))}
          </div>

          <div className="about-brand-card">
            <div className="about-brand-logo-col">
              <svg className="about-brand-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g fill="#3b6ef6">
                  <path d="M50 48 C50 30, 44 18, 34 10 C46 12, 56 22, 58 38 Z" />
                  <path d="M52 50 C70 50, 82 44, 90 34 C88 46, 78 56, 62 58 Z" />
                  <path d="M50 52 C50 70, 56 82, 66 90 C54 88, 44 78, 42 62 Z" />
                  <path d="M48 50 C30 50, 18 56, 10 66 C12 54, 22 44, 38 42 Z" />
                </g>
              </svg>
              <h3 className="about-brand-name">RECOMMERCE</h3>
              <span className="about-brand-tag">A Brand of Urdhva Management</span>
            </div>

            <span className="about-brand-divider" />

            <p className="about-brand-desc">
              We unite industry experts and change-makers from diverse backgrounds to tackle global challenges head-on. By providing top-notch services in the reverse commerce market, we set a new standard for industry and customer experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;