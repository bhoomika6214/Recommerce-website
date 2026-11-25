import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Leaf } from 'lucide-react';
import './Services.css';
import { services } from './servicesData';

const Services = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="svx" id="services" aria-label="Our services">
      <div className="svx-wrap">
        <div className="svx-head">
          <p className="svx-label">OUR SERVICES</p>
          <h2 className="svx-heading">
            Comprehensive Solutions for a <span className="svx-accent">Circular Economy</span> in Action
          </h2>
          <p className="svx-sub">
            From knowledge to impact, we offer end-to-end services that empower industries, inspire action and
            drive sustainable transformation.
          </p>
        </div>

        {/* Narrow photo strips; the one you hover, focus or tap opens up. */}
        <div className="sve-row">
          {services.map((s, i) => (
            <article
              key={s.id}
              className={`sve-panel ${i === active ? 'active' : ''}`}
              style={{ backgroundImage: `url(${s.image})` }}
              tabIndex={0}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              <span className="sve-shade" />
              <span className="sve-collapsed">
                <span className="sve-collapsed-icon">{s.icon}</span>
                <span className="sve-collapsed-title">{s.title}</span>
              </span>
              <div className="sve-open">
                <span className="sve-no">{s.id}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="svx-cta">
          <div className="svx-cta-left">
            <span className="svx-cta-icon">
              <Leaf size={24} />
            </span>
            <p>Let&apos;s build a sustainable future together.</p>
          </div>
          <ul className="svx-cta-points">
            <li>Collaborate for Impact</li>
            <li>Innovate for Change</li>
            <li>Sustain for Tomorrow</li>
          </ul>
          <a className="btn-primary svx-cta-btn" href="mailto:info@recommerceeco.com">
            Connect with us <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
