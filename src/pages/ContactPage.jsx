import { useEffect, useRef } from 'react';
import { FiPhone, FiMail, FiMapPin, FiArrowRight, FiCalendar } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NetworkBackground from '../components/NetworkBackground';
import './AboutPage.css'; // shared reveal-on-scroll styles
import './ContactPage.css';
import { ENQUIRY_URL, GENERAL_EMAIL, TEAM } from './contactMail';

const PHONE = '+919731775124';
const PHONE_LABEL = '+91 97317 75124';
const ADDRESS =
  "Urdhva Management, RoofSquare Realty: No.549, 4th Floor, 'SRINILAYAM' 7th Main Road Rajiv Gandhi Nagar, 2nd Phase, Post, NTI Layout, Vidyaranyapura, Bengaluru, Karnataka 560097";
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

// The next event, as shown on https://expo.recommerceeco.com/
const NEXT_EVENT = {
  name: '7th Recommerce Expo',
  date: '3 – 4 March 2027',
  place: 'The LaLiT Ashok, Bengaluru',
  href: 'https://expo.recommerceeco.com/',
};

const tel = (p) => `tel:${p.replace(/[^\d+]/g, '')}`;

// "Ms. Kavitha Jayaraman" -> "KJ", "Ms. Jennifer" -> "J"
const initials = (name) =>
  name
    .replace(/^(Ms|Mr|Mrs|Dr)\.?\s+/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

export default function ContactPage() {
  const ref = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // fade blocks in as they scroll into view
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.ab-reveal') ?? [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('ab-in');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ab ct" ref={ref}>
      <Navbar />

      {/* ---------- connect with our team ---------- */}
      <header className="ct2">
        <NetworkBackground className="ct2-net" />
        <div className="ct2-glow" aria-hidden="true" />

        <div className="ct2-inner">
          <p className="ct2-eyebrow ab-reveal">CONTACT US</p>
          <h1 className="ct2-title ab-reveal">
            Reach Out To <span>Our Team</span>
          </h1>
          <p className="ct2-sub ab-reveal">Ready to join as a delegate, exhibitor, or sponsor?</p>

          <div className="ct2-actions ab-reveal">
            <a className="ct2-enquire" href={ENQUIRY_URL} target="_blank" rel="noopener noreferrer">
              Enquire Now <FiArrowRight />
            </a>
          </div>

          <a className="ct2-pill ab-reveal" href={NEXT_EVENT.href} target="_blank" rel="noopener noreferrer">
            <FiCalendar />
            <span>{NEXT_EVENT.name}</span>
            <i aria-hidden="true">&bull;</i>
            <span>{NEXT_EVENT.date}</span>
            <i aria-hidden="true">&bull;</i>
            <span>{NEXT_EVENT.place}</span>
          </a>

          <div className="ct2-cards">
            {TEAM.map((t, i) => (
              <article className="ct2-card ab-reveal" key={t.email} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="ct2-avatar" role="img" aria-label={`${t.name}`}>
                  <span>{initials(t.name)}</span>
                </div>
                <div className="ct2-body">
                  <span className="ct2-role">{t.role}</span>
                  <h3>{t.name}</h3>
                  <p>{t.desc}</p>
                  <div className="ct2-chips">
                    <a href={tel(t.phone)}>
                      <FiPhone /> {t.phone}
                    </a>
                    <a href={`mailto:${t.email}`} aria-label={`Email ${t.first} at ${t.email}`} title={t.email}>
                      <FiMail /> Email
                    </a>
                  </div>
                  <a className="ct2-talk" href={`mailto:${t.email}`}>
                    Talk to {t.first} <FiArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </header>

      {/* ---------- general contact details ---------- */}
      <section className="ct-main">
        <div className="ab-wrap">
          <aside className="ct-info" aria-label="Contact details">
            <a className="ct-card ab-reveal" href={tel(PHONE)}>
              <span className="ct-card-icon">
                <FiPhone />
              </span>
              <span className="ct-card-body">
                <small>Phone</small>
                <strong>{PHONE_LABEL}</strong>
              </span>
            </a>
            <a className="ct-card ab-reveal" href={`mailto:${GENERAL_EMAIL}`} style={{ transitionDelay: '0.08s' }}>
              <span className="ct-card-icon">
                <FiMail />
              </span>
              <span className="ct-card-body">
                <small>Email</small>
                <strong>{GENERAL_EMAIL}</strong>
              </span>
            </a>
            <a
              className="ct-card ab-reveal"
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: '0.16s' }}
            >
              <span className="ct-card-icon">
                <FiMapPin />
              </span>
              <span className="ct-card-body">
                <small>Address</small>
                <strong>{ADDRESS}</strong>
                <em>
                  Open in Maps <FiArrowRight />
                </em>
              </span>
            </a>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}
