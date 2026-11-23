import { useState } from 'react';
import {
  FiUsers,
  FiBookOpen,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
  FiGrid,
} from 'react-icons/fi';
import { FaHandshake, FaHandRock } from 'react-icons/fa';
import './AboutShowcase.css';
import Logo from '../assets/Logo.png';

const steps = [
  { icon: <FiUsers />, label: 'ENGAGE', text: 'Bringing industries and change-makers together.' },
  { icon: <FiBookOpen />, label: 'EDUCATE', text: 'Training, workshops and awareness programs.' },
  { icon: <FaHandshake />, label: 'EXCHANGE', text: 'Expos and conferences to trade ideas and solutions.' },
  { icon: <FaHandRock />, label: 'EMPOWER', text: 'Helping businesses act on circular practices.' },
  { icon: <FiSettings />, label: 'ENABLE', text: 'Building a sustainable reverse commerce ecosystem.' },
];

const pad = (n) => String(n).padStart(2, '0');

const AboutShowcase = () => {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState('overview');
  const step = steps[active];

  const prev = () => setActive((active - 1 + steps.length) % steps.length);
  const next = () => setActive((active + 1) % steps.length);

  return (
    <section className="asc" id="about">
      <div className="asc-wrap">
        <div className="asc-head">
          <div className="asc-eyebrow">
            <span className="asc-eyebrow-line" />
            ABOUT
            <span className="asc-eyebrow-line" />
          </div>
        </div>

        <div className="asc-intro">
          <span className="asc-quote-mark">&ldquo;</span>
          <h2 className="asc-quote">
            Creating a circular business model is challenging, and taking the wrong approach can be expensive
            <span className="asc-quote-end">&rdquo;</span>
          </h2>
        </div>

        <div className="asc-panel">
          <div className="asc-blob" aria-hidden="true" />

          {/* progress dots */}
          <div className="asc-dots" aria-hidden="true">
            {steps.map((s, i) => (
              <span key={s.label} className={`asc-dot ${i === active ? 'active' : ''}`} />
            ))}
          </div>

          {/* medallion + headline */}
          <div className="asc-main">
            <div className="asc-plate-wrap">
              <div className="asc-plate" key={`plate-${active}`}>
                <span className="asc-plate-ring" />
                <div className="asc-plate-disc">
                  <span className="asc-plate-inner" />
                  <span className="asc-plate-icon">{step.icon}</span>
                </div>
                <span className="asc-plate-badge">{pad(active + 1)}</span>
              </div>
            </div>

            <div className="asc-copy" key={`copy-${active}`}>
              <span className="asc-step">
                STEP {pad(active + 1)} / {pad(steps.length)}
              </span>
              <h3 className="asc-title">
                <span className="asc-title-thin">WE</span>
                <span className="asc-title-bold">{step.label}</span>
              </h3>
              <p className="asc-lead">{step.text}</p>
              <div className="asc-links">
                <a href="#events">
                  <FiPlay /> Explore events
                </a>
                <a href="#services">
                  <FiGrid /> Our services
                </a>
              </div>
            </div>
          </div>

          {/* info card */}
          <aside className="asc-card">
            <div className="asc-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'overview'}
                className={`asc-tab ${tab === 'overview' ? 'active' : ''}`}
                onClick={() => setTab('overview')}
              >
                Overview
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === 'mission'}
                className={`asc-tab ${tab === 'mission' ? 'active' : ''}`}
                onClick={() => setTab('mission')}
              >
                Mission
              </button>
            </div>

            <div className="asc-card-top">
              <div className="asc-badge">
                <strong>{pad(steps.length)}</strong>
                <span>VALUES</span>
              </div>
              <img src={Logo} alt="Recommerce Logo" className="asc-card-logo" />
            </div>

            <h4 className="asc-card-title">Recommerce</h4>
            <p className="asc-card-sub">A Brand of Urdhva Management</p>

            {/* Both texts share one grid cell, so the card keeps the height of the
                taller one and nothing jumps when the tab changes. */}
            <div className="asc-card-texts">
              <p className={`asc-card-text ${tab === 'overview' ? 'active' : ''}`} aria-hidden={tab !== 'overview'}>
                Recommerce, is a brand of <mark className="asc-hl">Urdhva Management</mark> and the pioneering force in leading the charge towards a brighter future for the industries, A category-defining company dedicated to building a <mark className="asc-hl">sustainable reverse commerce ecosystem</mark>
              </p>
              <p className={`asc-card-text ${tab === 'mission' ? 'active' : ''}`} aria-hidden={tab !== 'mission'}>
                At Recommerce, we embody the ideals of <mark className="asc-hl">Engage, Educate, Exchange, Empower, and Enable</mark>, propelling industries and individuals towards a brighter future. Our tagline, <em>&ldquo;Unlocking Infinite Possibilities, Connecting Industries: Pioneering Sustainability for a Thriving Tomorrow!&rdquo;</em> encapsulates our mission to revolutionize India&rsquo;s business landscape through Recommerce, our pioneering brand dedicated to driving a <mark className="asc-hl">circular economy</mark>.
              </p>
            </div>

            <a className="btn-primary asc-card-btn" href="mailto:info@recommerceeco.com">
              Contact us
            </a>
          </aside>

          {/* value switcher */}
          <div className="asc-rail">
            <button type="button" className="asc-arrow" onClick={prev} aria-label="Previous value">
              <FiChevronLeft />
            </button>
            <div className="asc-thumbs" role="tablist" aria-label="Our five values">
              {steps.map((s, i) => (
                <button
                  key={s.label}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={`asc-thumb ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className="asc-thumb-disc">{s.icon}</span>
                  <span className="asc-thumb-label">{s.label}</span>
                </button>
              ))}
            </div>
            <button type="button" className="asc-arrow" onClick={next} aria-label="Next value">
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* brand statement */}
        <div className="asc-brand">
          <div className="asc-brand-logo-col">
            <img src={Logo} alt="" className="asc-brand-logo" />
            <div>
              <h3 className="asc-brand-name">RECOMMERCE</h3>
              <span className="asc-brand-tag">A Brand of Urdhva Management</span>
            </div>
          </div>
          <span className="asc-brand-divider" />
          <p className="asc-brand-desc">
            We unite industry experts and change-makers from diverse backgrounds to tackle global challenges head-on. By providing top-notch services in the reverse commerce market, we set a new standard for industry and customer experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutShowcase;
