import { useEffect, useRef } from 'react';
import { FiFlag, FiEye, FiFileText } from 'react-icons/fi';
import NetworkBackground from './NetworkBackground';
import './AboutNetwork.css';

const VALUES = ['ENGAGE', 'EDUCATE', 'EXCHANGE', 'EMPOWER', 'ENABLE'];

const PILLARS = [
  {
    id: 'mission',
    title: 'Mission',
    icon: <FiFlag />,
    text: 'Our mission at Recommerce is to lead the charge in creating a circular economy revolution. Through Recommerce, we inspire, educate, and empower businesses and individuals to make a positive environmental impact while fostering growth and success. Our dedication to superior customer experiences and innovative approaches transforms waste management into a valuable resource, not just a liability.',
  },
  {
    id: 'vision',
    title: 'Vision',
    icon: <FiEye />,
    text: 'Recommerce, a visionary brand under Urdhva Management, envisions a world where waste is seen as an opportunity, not a burden. We are committed to transforming the way waste is perceived, managed, and utilized. Our vision extends beyond waste management—it encompasses fostering sustainable practices across industries, resulting in a more equitable and sustainable future.',
  },
  {
    id: 'approach',
    title: 'Our Approach',
    icon: <FiFileText />,
    text: 'Recommerce is at the forefront of building a sustainable reverse commerce ecosystem. Through exhibitions, conferences, training workshops, and awareness programs, we unite industry experts and change-makers from diverse backgrounds to tackle global challenges head-on. By providing top-notch services in the reverse commerce market, we set a new standard for industry and customer experiences.',
  },
];

export default function AboutNetwork() {
  const ref = useRef(null);

  // fade each block in as it scrolls into view
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.an-reveal') ?? [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('an-in');
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
    <section className="an" id="about" ref={ref}>
      {/* ---------- intro, over the network ---------- */}
      <div className="an-intro">
        <NetworkBackground className="an-net" />

        <div className="an-intro-inner">
          <div className="an-eyebrow an-reveal">
            <span className="an-eyebrow-line" />
            ABOUT
            <span className="an-eyebrow-line" />
          </div>

          <ul className="an-values an-reveal" aria-label="Engage, Educate, Exchange, Empower, Enable">
            {VALUES.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>

          <h2 className="an-quote an-reveal">
            &ldquo;Creating a circular business model is challenging, and taking the wrong approach can be expensive&rdquo;
          </h2>

          <div className="an-text an-reveal">
            <p>
              Recommerce, is a brand of <mark>Urdhva Management</mark> and the pioneering force in leading the charge towards a brighter future for the industries, A category-defining company dedicated to building a <mark>sustainable reverse commerce ecosystem</mark>
            </p>
            <p>
              At Recommerce, we embody the ideals of <mark>Engage, Educate, Exchange, Empower, and Enable</mark>, propelling industries and individuals towards a brighter future. Our tagline, <em>&ldquo;Unlocking Infinite Possibilities, Connecting Industries: Pioneering Sustainability for a Thriving Tomorrow!&rdquo;</em> encapsulates our mission to revolutionize India&rsquo;s business landscape through Recommerce, our pioneering brand dedicated to driving a <mark>circular economy</mark>.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- mission / vision / approach ---------- */}
      <div className="an-pillars">
        <h2 className="an-heading an-reveal">
          Our <span>Mission</span>, <span>Vision</span> &amp; <span>Approach</span>
        </h2>

        <div className="an-cards">
          {PILLARS.map((p, i) => (
            <article
              key={p.id}
              className={`an-card an-reveal ${i % 2 === 1 ? 'an-card--flip' : ''}`}
            >
              <div className="an-card-id">
                <span className="an-card-icon">{p.icon}</span>
                <h3>{p.title}</h3>
              </div>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
