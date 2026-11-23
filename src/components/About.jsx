import { useEffect, useRef } from 'react';
import { FiUsers, FiBookOpen, FiSettings } from 'react-icons/fi';
import { FaHandshake, FaHandRock } from 'react-icons/fa';
import './About.css';
import Logo from '../assets/Logo.png';

const steps = [
  { icon: <FiUsers />, label: 'ENGAGE', text: 'Bringing industries and change-makers together.' },
  { icon: <FiBookOpen />, label: 'EDUCATE', text: 'Training, workshops and awareness programs.' },
  { icon: <FaHandshake />, label: 'EXCHANGE', text: 'Expos and conferences to trade ideas and solutions.' },
  { icon: <FaHandRock />, label: 'EMPOWER', text: 'Helping businesses act on circular practices.' },
  { icon: <FiSettings />, label: 'ENABLE', text: 'Building a sustainable reverse commerce ecosystem.' },
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
      <div className="about-wrap">
        <div className="about-header animate-on-scroll">
          <div className="about-eyebrow">
            <span className="about-eyebrow-line" />
            ABOUT
            <span className="about-eyebrow-line" />
          </div>
        </div>

        <div className="about-grid">
          {/* Left: quote and highlighted about text */}
          <div className="about-left animate-on-scroll">
            <span className="about-quote-mark">&ldquo;</span>
            <h2 className="about-quote">
              Creating a circular business model is challenging, and taking the wrong approach can be expensive
              <span className="about-quote-mark-end">&rdquo;</span>
            </h2>
            <span className="about-underline" />

            <div className="about-text-card">
              <p className="about-desc">
                Recommerce, is a brand of <mark className="about-hl">Urdhva Management</mark> and the pioneering force in leading the charge towards a brighter future for the industries, A category-defining company dedicated to building a <mark className="about-hl">sustainable reverse commerce ecosystem</mark>
              </p>

              <p className="about-desc">
                At Recommerce, we embody the ideals of <mark className="about-hl">Engage, Educate, Exchange, Empower, and Enable</mark>, propelling industries and individuals towards a brighter future. Our tagline, <em>&ldquo;Unlocking Infinite Possibilities, Connecting Industries: Pioneering Sustainability for a Thriving Tomorrow!&rdquo;</em> encapsulates our mission to revolutionize India&rsquo;s business landscape through Recommerce, our pioneering brand dedicated to driving a <mark className="about-hl">circular economy</mark>.
              </p>
            </div>
          </div>

          {/* Right: vertical timeline of the five values */}
          <ol className="about-timeline">
            {steps.map((s, i) => (
              <li
                className="about-step animate-on-scroll"
                key={s.label}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="about-step-node">{s.icon}</span>
                <div className="about-step-body">
                  <span className="about-step-no">STEP {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="about-step-label">{s.label}</h3>
                  <p className="about-step-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Brand statement */}
        <div className="about-brand animate-on-scroll">
          <div className="about-brand-logo-col">
            <img src={Logo} alt="Recommerce Logo" className="about-brand-logo" />
            <div>
              <h3 className="about-brand-name">RECOMMERCE</h3>
              <span className="about-brand-tag">A Brand of Urdhva Management</span>
            </div>
          </div>

          <span className="about-brand-divider" />

          <p className="about-brand-desc">
            We unite industry experts and change-makers from diverse backgrounds to tackle global challenges head-on. By providing top-notch services in the reverse commerce market, we set a new standard for industry and customer experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
