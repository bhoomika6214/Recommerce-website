import { useEffect, useRef, useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiSend, FiArrowRight, FiBriefcase, FiMic, FiUsers, FiGlobe } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NetworkBackground from '../components/NetworkBackground';
import joinPhoto from '../assets/gallery-web/banners/about-join.webp';
import './AboutPage.css'; // shared hero, buttons and reveal styles
import './ContactPage.css';
import { GENERAL_EMAIL, TEAM as TEAM_DATA, buildMailto } from './contactMail';

const PHONE = '+919731775124';
const PHONE_LABEL = '+91 97317 75124';
const ADDRESS =
  "Urdhva Management, RoofSquare Realty: No.549, 4th Floor, 'SRINILAYAM' 7th Main Road Rajiv Gandhi Nagar, 2nd Phase, Post, NTI Layout, Vidyaranyapura, Bengaluru, Karnataka 560097";
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const ICONS = {
  'Sponsor & Exhibitor': <FiBriefcase />,
  Speaker: <FiMic />,
  Delegate: <FiUsers />,
  'Media & Association': <FiGlobe />,
};
const TEAM = TEAM_DATA.map((t) => ({ ...t, icon: ICONS[t.topic] }));

const tel = (p) => `tel:${p.replace(/[^\d+]/g, '')}`;

export default function ContactPage() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [topic, setTopic] = useState('');
  const [sent, setSent] = useState(null); // the email address the message was addressed to

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

  const scrollToForm = (e) => {
    e.preventDefault();
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    formRef.current?.querySelector('input')?.focus({ preventScroll: true });
  };

  // No server receives this form: it opens the visitor's email app with the message filled in.
  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const { to, url } = buildMailto(data);
    window.location.href = url;
    setSent(to);
  };

  return (
    <div className="ab ct" ref={ref}>
      <Navbar />

      {/* ---------- hero ---------- */}
      <header className="ab-hero ct-hero">
        <NetworkBackground className="ab-hero-net" />
        <div className="ab-hero-glow" aria-hidden="true" />
        <div className="ab-hero-inner">
          <div className="ab-eyebrow ab-eyebrow--light ab-reveal">
            <span className="ab-eyebrow-line" />
            GET IN TOUCH
            <span className="ab-eyebrow-line" />
          </div>
          <h1 className="ab-hero-title ab-reveal">
            Contact <span>Us</span>
          </h1>
          <p className="ab-hero-brand ab-reveal">Recommerce &middot; A brand of Urdhva Management</p>
        </div>
      </header>

      {/* ---------- message + details ---------- */}
      <section className="ct-main">
        <div className="ab-wrap ct-grid">
          <form className="ct-form ab-reveal" ref={formRef} onSubmit={onSubmit} id="message">
            <h2 className="ct-title">
              Send Us <span>Message</span>
            </h2>
            <p className="ct-form-sub">Tell us how we can help and we will get back to you.</p>

            <div className="ct-row">
              <label className="ct-field">
                <span>Your name *</span>
                <input name="name" type="text" required autoComplete="name" placeholder="Full name" />
              </label>
              <label className="ct-field">
                <span>Email *</span>
                <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
              </label>
            </div>

            <div className="ct-row">
              <label className="ct-field">
                <span>Phone</span>
                <input name="phone" type="tel" autoComplete="tel" placeholder="+91" />
              </label>
              <label className="ct-field">
                <span>Organisation</span>
                <input name="company" type="text" autoComplete="organization" placeholder="Company or association" />
              </label>
            </div>

            <label className="ct-field">
              <span>I am enquiring as</span>
              <select name="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
                <option value="">General enquiry</option>
                {TEAM.map((t) => (
                  <option key={t.topic} value={t.topic}>
                    {t.topic}
                  </option>
                ))}
              </select>
            </label>

            <label className="ct-field">
              <span>Message *</span>
              <textarea name="message" required rows={5} placeholder="Write your message here" />
            </label>

            <button type="submit" className="ct-submit">
              Send Message <FiSend />
            </button>

            <p className="ct-note" role="status" aria-live="polite">
              {sent
                ? `Your email app should now open with the message addressed to ${sent}. Press send there to finish. If nothing opened, write to us directly at ${sent}.`
                : 'This opens your email app with your message ready to send.'}
            </p>
          </form>

          <aside className="ct-info">
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

      {/* ---------- ready to join ---------- */}
      <section className="ab-join ct-join">
        <div className="ab-wrap">
          <div className="ab-join-card ab-reveal" style={{ '--join-photo': `url(${joinPhoto})` }}>
            <NetworkBackground className="ab-join-net" />
            <div className="ab-join-inner">
              <h2>Ready to join as a delegate, exhibitor, or sponsor?</h2>
              <div className="ab-join-actions">
                <a className="ab-btn ab-btn--white" href="#message" onClick={scrollToForm}>
                  Enquire Now <FiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- team ---------- */}
      <section className="ct-team">
        <div className="ab-wrap">
          <div className="ab-center ab-reveal">
            <div className="ab-eyebrow">
              <span className="ab-eyebrow-line" />
              OUR TEAM
              <span className="ab-eyebrow-line" />
            </div>
            <h2 className="ab-h2">
              Reach Out To <span>Our Team</span>
            </h2>
          </div>

          <div className="ct-team-grid">
            {TEAM.map((t, i) => (
              <article className="ct-person ab-reveal" key={t.email} style={{ transitionDelay: `${i * 0.09}s` }}>
                <span className="ct-person-icon">{t.icon}</span>
                <h3>{t.title}</h3>
                <p className="ct-person-name">{t.name}</p>
                <a href={tel(t.phone)}>
                  <FiPhone /> {t.phone}
                </a>
                <a href={`mailto:${t.email}`}>
                  <FiMail /> {t.email}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
