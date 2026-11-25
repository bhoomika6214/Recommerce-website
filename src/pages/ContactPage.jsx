import { useEffect, useRef, useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiSend, FiArrowRight, FiCalendar } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NetworkBackground from '../components/NetworkBackground';
import './AboutPage.css'; // shared reveal-on-scroll styles
import './ContactPage.css';
import { ENQUIRY_URL, GENERAL_EMAIL, TEAM, buildMailto } from './contactMail';

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

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    formRef.current?.querySelector('input')?.focus({ preventScroll: true });
  };

  // "Talk to ..." takes the visitor to the form with that team member already chosen.
  const enquire = (e, member) => {
    e.preventDefault();
    setTopic(member.topic);
    scrollToForm();
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
                  <a className="ct2-talk" href="#message" onClick={(e) => enquire(e, t)}>
                    Talk to {t.first} <FiArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
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

      <Footer />
    </div>
  );
}
