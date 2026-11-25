import { useEffect, useRef } from 'react';
import { FiUsers, FiBookOpen, FiRepeat, FiZap, FiSettings, FiFlag, FiEye, FiCompass, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NetworkBackground from '../components/NetworkBackground';
import { features } from '../components/whyData';
import heroPhoto from '../assets/gallery-web/banners/about-hero.webp';
import joinPhoto from '../assets/gallery-web/banners/about-join.webp';
import './AboutPage.css';

// Web-sized event photos (see src/assets/gallery-web).
const expoFiles = import.meta.glob('../assets/gallery-web/6thRecommerce/*.webp', { eager: true, query: '?url', import: 'default' });
const itadFiles = import.meta.glob('../assets/gallery-web/itad/*.webp', { eager: true, query: '?url', import: 'default' });
const expoPic = (n) => expoFiles[`../assets/gallery-web/6thRecommerce/${n}.webp`];
const itadPic = (n) => itadFiles[`../assets/gallery-web/itad/${n}.webp`];

const IDEALS = [
  { label: 'Engage', icon: <FiUsers /> },
  { label: 'Educate', icon: <FiBookOpen /> },
  { label: 'Exchange', icon: <FiRepeat /> },
  { label: 'Empower', icon: <FiZap /> },
  { label: 'Enable', icon: <FiSettings /> },
];

const PILLARS = [
  {
    no: '01',
    photo: itadPic('6k4a4775'),
    alt: 'Speakers lined up on stage at a Recommerce conference',
    title: 'Mission',
    icon: <FiFlag />,
    text: 'Our mission at Recommerce is to lead the charge in creating a circular economy revolution. Through Recommerce, we inspire, educate, and empower businesses and individuals to make a positive environmental impact while fostering growth and success. Our dedication to superior customer experiences and innovative approaches transforms waste management into a valuable resource, not just a liability.',
  },
  {
    no: '02',
    photo: expoPic('urs_4232'),
    alt: 'A full hall of delegates at the Recommerce Expo',
    title: 'Vision',
    icon: <FiEye />,
    text: 'Recommerce, a visionary brand under Urdhva Management, envisions a world where waste is seen as an opportunity, not a burden. We are committed to transforming the way waste is perceived, managed, and utilized. Our vision extends beyond waste management—it encompasses fostering sustainable practices across industries, resulting in a more equitable and sustainable future.',
  },
  {
    no: '03',
    photo: itadPic('dsc03552'),
    alt: 'Exhibitors and visitors at their stand',
    title: 'Our Approach',
    icon: <FiCompass />,
    text: 'Recommerce is at the forefront of building a sustainable reverse commerce ecosystem. Through exhibitions, conferences, training workshops, and awareness programs, we unite industry experts and change-makers from diverse backgrounds to tackle global challenges head-on. By providing top-notch services in the reverse commerce market, we set a new standard for industry and customer experiences.',
  },
];

// photos for the three "Why Choose" cards, in the same order as `features`
const WHY_PHOTOS = [
  { src: itadPic('dsc03500'), alt: 'An e-waste recycling stand at the ITAD & WEEE meet' },
  { src: itadPic('6k4a5451'), alt: 'A panel of experts on stage' },
  { src: itadPic('dsc02891'), alt: 'Delegates together at the event' },
];

export default function AboutPage() {
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
    <div className="ab" ref={ref}>
      <Navbar />

      {/* ---------- hero ---------- */}
      <header className="ab-hero">
        <div className="ab-hero-photo" style={{ backgroundImage: `url(${heroPhoto})` }} aria-hidden="true" />
        <NetworkBackground className="ab-hero-net" />
        <div className="ab-hero-glow" aria-hidden="true" />
        <div className="ab-hero-inner">
          <div className="ab-eyebrow ab-eyebrow--light ab-reveal">
            <span className="ab-eyebrow-line" />
            ABOUT US
            <span className="ab-eyebrow-line" />
          </div>
          <h1 className="ab-hero-title ab-reveal">
            About <span>Recommerce</span>
          </h1>
          <p className="ab-hero-brand ab-reveal">A brand of Urdhva Management</p>
          <blockquote className="ab-hero-quote ab-reveal">
            <span className="ab-quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            Unlocking Infinite Possibilities, Connecting Industries: Pioneering Sustainability for a Thriving
            Tomorrow!
            <span className="ab-quote-mark ab-quote-mark--end" aria-hidden="true">
              &rdquo;
            </span>
          </blockquote>
        </div>
      </header>

      {/* ---------- who we are ---------- */}
      <section className="ab-who">
        <div className="ab-wrap ab-who-grid">
          <div className="ab-reveal">
            <div className="ab-eyebrow">
              <span className="ab-eyebrow-line" />
              WHO WE ARE
            </div>
            <h2 className="ab-h2">
              A pioneering force for a <span>brighter future</span> for industries
            </h2>
            <div className="ab-collage">
              <img className="ab-collage-a" src={itadPic('6k4a4753')} alt="Two delegates meeting at the ITAD & WEEE Global Leaders Meet" loading="lazy" />
              <img className="ab-collage-b" src={expoPic('urs_4223')} alt="Delegates at a table at the Recommerce Expo" loading="lazy" />
              <span className="ab-collage-dots" aria-hidden="true" />
            </div>
          </div>
          <div className="ab-who-text ab-reveal">
            <p className="ab-lead">
              Recommerce, is a brand of <mark>Urdhva Management</mark> and the pioneering force in leading the charge
              towards a brighter future for the industries, A category-defining company dedicated to building a{' '}
              <mark>sustainable reverse commerce ecosystem</mark>
            </p>
            <p>
              At Recommerce, we embody the ideals of <mark>Engage, Educate, Exchange, Empower, and Enable</mark>,
              propelling industries and individuals towards a brighter future. Our tagline,{' '}
              <em>
                &ldquo;Unlocking Infinite Possibilities, Connecting Industries: Pioneering Sustainability for a
                Thriving Tomorrow!&rdquo;
              </em>{' '}
              encapsulates our mission to revolutionize India&rsquo;s business landscape through Recommerce, our
              pioneering brand dedicated to driving a <mark>circular economy</mark>.
            </p>
          </div>
        </div>

        {/* the five ideals */}
        <div className="ab-wrap">
          <ol className="ab-ideals" aria-label="Engage, Educate, Exchange, Empower and Enable">
            {IDEALS.map((d, i) => (
              <li className="ab-ideal ab-reveal" key={d.label} style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="ab-ideal-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="ab-ideal-icon">{d.icon}</span>
                <span className="ab-ideal-label">{d.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- mission / vision / approach ---------- */}
      <section className="ab-pillars">
        <div className="ab-wrap">
          <div className="ab-center ab-reveal">
            <div className="ab-eyebrow">
              <span className="ab-eyebrow-line" />
              WHAT DRIVES US
              <span className="ab-eyebrow-line" />
            </div>
            <h2 className="ab-h2">
              Our <span>Mission</span>, <span>Vision</span> &amp; <span>Approach</span>
            </h2>
          </div>

          <div className="ab-pillar-grid">
            {PILLARS.map((p, i) => (
              <article className="ab-pillar ab-reveal" key={p.title} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="ab-pillar-photo" style={{ backgroundImage: `url(${p.photo})` }} role="img" aria-label={p.alt}>
                  <span className="ab-pillar-no">{p.no}</span>
                </div>
                <div className="ab-pillar-body">
                  <span className="ab-pillar-icon">{p.icon}</span>
                  <h3>{p.title}</h3>
                  <span className="ab-pillar-rule" />
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- why choose ---------- */}
      <section className="ab-why">
        <div className="ab-why-glow" aria-hidden="true" />
        <div className="ab-wrap">
          <div className="ab-center ab-reveal">
            <div className="ab-eyebrow ab-eyebrow--light">
              <span className="ab-eyebrow-line" />
              WHY CHOOSE
              <span className="ab-eyebrow-line" />
            </div>
            <h2 className="ab-h2 ab-h2--light">
              Why Choose <span>Recommerce</span>
            </h2>
            <p className="ab-sub ab-sub--light">
              Driving change. Creating impact. Empowering industries for a sustainable tomorrow.
            </p>
          </div>

          <div className="ab-why-grid">
            {features.map((f, i) => (
              <article className="ab-why-card ab-reveal" key={f.id} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="ab-why-photo" style={{ backgroundImage: `url(${WHY_PHOTOS[i].src})` }} role="img" aria-label={WHY_PHOTOS[i].alt} />
                <div className="ab-why-body">
                  <span className="ab-why-icon">
                    <f.Icon size={28} strokeWidth={1.7} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- join us ---------- */}
      <section className="ab-join">
        <div className="ab-wrap">
          <div className="ab-join-card ab-reveal" style={{ '--join-photo': `url(${joinPhoto})` }}>
            <NetworkBackground className="ab-join-net" />
            <div className="ab-join-inner">
              <h2>Join Us in Redefining Tomorrow</h2>
              <p>
                At Recommerce, we are redefining waste as an opportunity for transformation. Our vision of becoming
                leading waste management platform is rooted in inspiring, educating, and empowering businesses and
                individuals to embrace sustainable practices. Together, we can create a ripple effect that
                transcends industries, shaping a future of prosperity, equity, and environmental well-being. Join
                us on this journey to unlock infinite possibilities and pioneer a thriving, sustainable tomorrow.
              </p>
              <div className="ab-join-actions">
                <a className="ab-btn ab-btn--white" href="/#events">
                  Explore Events <FiArrowRight />
                </a>
                <Link className="ab-btn ab-btn--ghost" to="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
