import { useEffect, useRef } from 'react';
import {
  FiVolume2,
  FiTrash2,
  FiRefreshCw,
  FiFileText,
  FiWind,
  FiRotateCcw,
  FiHome,
  FiArrowRight,
} from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NetworkBackground from '../components/NetworkBackground';
import joinPhoto from '../assets/gallery-web/banners/about-join.webp';
import './AboutPage.css'; // shared hero, buttons and reveal styles
import './AwarenessPage.css';

// Web-sized event photos (see src/assets/gallery-web).
const itadFiles = import.meta.glob('../assets/gallery-web/itad/*.webp', { eager: true, query: '?url', import: 'default' });
const itadPic = (n) => itadFiles[`../assets/gallery-web/itad/${n}.webp`];

const WHY = [
  { title: 'Raising Awareness on E-Waste Issues', icon: <FiVolume2 /> },
  { title: 'Promoting Sustainable Disposal and Recycling Practices', icon: <FiTrash2 /> },
  { title: 'Supporting the Circular Economy', icon: <FiRefreshCw /> },
  { title: 'Encouraging Policy Action and Producer Responsibility', icon: <FiFileText /> },
  { title: 'Reducing Resource Depletion and Pollution', icon: <FiWind /> },
];

const POINTS = [
  {
    title: 'Recovery of Valuable Resources from Unused Electronics',
    icon: <FiRotateCcw />,
    text: 'Understanding the value of unclaimed electronics is crucial because many old devices contain overlooked valuable materials like gold, silver, and copper. Recognizing this hidden wealth encourages individuals to recycle rather than dispose of these items, leading to significant environmental benefits.',
  },
  {
    title: 'Impact of Decluttering on Sustainability',
    icon: <FiHome />,
    text: 'Decluttering homes of unused or broken electronics has a significant positive impact on sustainability. By clearing out these items, individuals can reduce pollution and prevent harmful e-waste from ending up in landfills. Recycling these devices not only recovers valuable materials but also conserves resources and minimizes the need for environmentally damaging extraction processes.',
  },
];

export default function AwarenessPage() {
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
    <div className="ab aw" ref={ref}>
      <Navbar />

      {/* ---------- hero ---------- */}
      <header className="ab-hero">
        <div className="ab-hero-photo" style={{ backgroundImage: `url(${itadPic('dsc03500')})` }} aria-hidden="true" />
        <NetworkBackground className="ab-hero-net" />
        <div className="ab-hero-glow" aria-hidden="true" />
        <div className="ab-hero-inner">
          <div className="ab-eyebrow ab-eyebrow--light ab-reveal">
            <span className="ab-eyebrow-line" />
            AWARENESS
            <span className="ab-eyebrow-line" />
          </div>
          <h1 className="ab-hero-title aw-hero-title ab-reveal">
            International <span>E-Waste Day</span>
          </h1>
          <p className="ab-hero-brand ab-reveal">A Recommerce webinar</p>
          <div className="aw-theme ab-reveal">
            <span className="aw-theme-label">This year&rsquo;s theme</span>
            <blockquote>
              <span className="ab-quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              Join the E-Waste Hunt &ndash; Retrieve, Recycle, and Revive!
              <span className="ab-quote-mark ab-quote-mark--end" aria-hidden="true">
                &rdquo;
              </span>
            </blockquote>
          </div>
        </div>
      </header>

      {/* ---------- supported by ---------- */}
      <section className="aw-support">
        <div className="ab-wrap ab-center ab-reveal">
          <h2 className="aw-support-title">SUPPORTED BY</h2>
          <div className="aw-support-badge">
            <span className="aw-support-dot" aria-hidden="true" />
            <span>Ministry of Electronics and Information Technology</span>
          </div>
        </div>
      </section>

      {/* ---------- intro ---------- */}
      <section className="aw-intro">
        <div className="ab-wrap aw-intro-grid">
          <div className="aw-intro-text ab-reveal">
            <p className="ab-lead">
              As the world embraces digital transformation, the growing concern around electronic waste (e-waste)
              continues to challenge sustainability goals. In honor of <mark>International E-waste Day</mark>,
              Recommerce presents a thought-provoking webinar that will spotlight{' '}
              <mark>minimizing e-waste</mark>, promoting <mark>responsible electronic reuse</mark>, and enabling
              circular economy principles in the electronics industry.
            </p>
            <p>
              This year&rsquo;s International E-Waste Day, themed{' '}
              <em>&ldquo;Join the E-Waste Hunt &ndash; Retrieve, Recycle, and Revive!&rdquo;</em> emphasizes the
              importance of recognizing the unused electronics many people store in their homes. Often forgotten,
              these devices contain valuable materials that can be reclaimed and reused, significantly reducing the
              need for harmful mining practices. E-waste includes items like old mobile phones, chargers, and game
              consoles, all of which can provide essential resources such as <mark>gold, silver, and copper</mark>{' '}
              when recycled properly. By recycling these devices, we not only prevent toxic substances from
              polluting the environment but also conserve energy, leading to lower carbon emissions.
            </p>
            <p>
              Decluttering our homes of these forgotten electronics contributes to pollution reduction, resource
              conservation, and energy savings. The process is straightforward: individuals can begin by searching
              their homes for unused electronics, gathering them together, finding local recycling programs, and
              disposing of them responsibly. This International E-Waste Day, let&rsquo;s take action to retrieve,
              recycle, and revive our electronics for a healthier planet!
            </p>
          </div>

          <figure className="aw-photo ab-reveal">
            <img
              src={itadPic('dsc03552')}
              alt="An e-waste recycling stand at the ITAD & WEEE Global Leaders Meet"
              loading="lazy"
            />
            <span className="aw-photo-dots" aria-hidden="true" />
          </figure>
        </div>
      </section>

      {/* ---------- why it is important ---------- */}
      <section className="ab-why aw-why">
        <div className="ab-why-glow" aria-hidden="true" />
        <div className="ab-wrap">
          <div className="ab-center ab-reveal">
            <div className="ab-eyebrow ab-eyebrow--light">
              <span className="ab-eyebrow-line" />
              THE IMPACT
              <span className="ab-eyebrow-line" />
            </div>
            <h2 className="ab-h2 ab-h2--light">
              Why it is <span>important</span>
            </h2>
          </div>

          <div className="aw-why-grid">
            {WHY.map((w, i) => (
              <article className="aw-why-card ab-reveal" key={w.title} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="aw-why-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="aw-why-icon">{w.icon}</span>
                <h3>{w.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- points to be discussed ---------- */}
      <section className="aw-points">
        <div className="ab-wrap">
          <div className="ab-center ab-reveal">
            <div className="ab-eyebrow">
              <span className="ab-eyebrow-line" />
              WEBINAR AGENDA
              <span className="ab-eyebrow-line" />
            </div>
            <h2 className="ab-h2">
              Points to be <span>discussed</span>
            </h2>
          </div>

          <div className="aw-points-grid">
            {POINTS.map((p, i) => (
              <article className="aw-point ab-reveal" key={p.title} style={{ transitionDelay: `${i * 0.12}s` }}>
                <span className="aw-point-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="aw-point-icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <span className="ab-pillar-rule" />
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- call to action ---------- */}
      <section className="ab-join">
        <div className="ab-wrap">
          <div className="ab-join-card ab-reveal" style={{ '--join-photo': `url(${joinPhoto})` }}>
            <NetworkBackground className="ab-join-net" />
            <div className="ab-join-inner">
              <h2>Retrieve. Recycle. Revive.</h2>
              <p>
                This International E-Waste Day, let&rsquo;s take action to retrieve, recycle, and revive our
                electronics for a healthier planet!
              </p>
              <div className="ab-join-actions">
                <a className="ab-btn ab-btn--white" href="/#events">
                  Explore Events <FiArrowRight />
                </a>
                <a className="ab-btn ab-btn--ghost" href="mailto:info@recommerceeco.com">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
