import { Fragment, useEffect, useRef, useState } from 'react';
import { FiList, FiChevronDown } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NetworkBackground from '../components/NetworkBackground';
import './AboutPage.css'; // shared hero styles
import './LegalPage.css';

// Email addresses and web addresses inside a sentence become links; the rest of the text is left exactly as written.
const LINKS = /([\w.+-]+@[\w-]+(?:\.[\w-]+)+|https?:\/\/[^\s“”"<>]+)/g;
const trimUrl = (u) => u.replace(/[).,;:]+$/, '');

const linkify = (text) =>
  text.split(LINKS).map((part, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
    if (part.includes('@') && !part.startsWith('http')) {
      return (
        <a key={i} href={`mailto:${part}`}>
          {part}
        </a>
      );
    }
    const url = trimUrl(part);
    return (
      <Fragment key={i}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
        {part.slice(url.length)}
      </Fragment>
    );
  });

// one list item: a plain string, or { lead, text } where the lead is shown in bold
const Item = ({ item }) =>
  typeof item === 'string' ? (
    linkify(item)
  ) : (
    <>
      <strong>{item.lead}</strong> {linkify(item.text)}
    </>
  );

function Block({ b }) {
  if (b.p) return <p>{linkify(b.p)}</p>;
  if (b.h3) return <h3 className="tm-sub">{b.h3}</h3>;
  if (b.h4) return <h4 className="tm-sub tm-sub--small">{b.h4}</h4>;
  if (b.ul)
    return (
      <ul>
        {b.ul.map((item, i) => (
          <li key={i}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    );
  if (b.ol)
    return (
      <ol className="tm-ol">
        {b.ol.map((item, i) => (
          <li key={i}>
            <Item item={item} />
          </li>
        ))}
      </ol>
    );
  if (b.card)
    return (
      <div className="tm-card">
        <h4>{b.card.title}</h4>
        <dl>
          {b.card.rows.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
  return null;
}

/**
 * A long legal document: dark hero, a table of contents that follows you (a fold-out on phones),
 * and numbered sections.  Props: title (node), intro (blocks, optional), sections [{ id, title, blocks }].
 */
export default function LegalPage({ title, intro, sections }) {
  const [active, setActive] = useState(sections[0].id);
  const tocRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // contents list: open on wide screens (where it stays in view), folded shut on phones and tablets
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1101px)');
    const apply = () => {
      if (tocRef.current) tocRef.current.open = mq.matches;
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  // highlight the section being read
  useEffect(() => {
    const els = sections.map((t) => document.getElementById(t.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );
    els.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sections]);

  // keep the highlighted link in view inside the contents list
  useEffect(() => {
    const link = tocRef.current?.querySelector('.tm-toc-link.active');
    const box = tocRef.current?.querySelector('.tm-toc-list');
    if (link && box && box.scrollHeight > box.clientHeight) {
      const top = link.offsetTop - box.clientHeight / 2 + link.clientHeight / 2;
      box.scrollTo({ top, behavior: 'smooth' });
    }
  }, [active]);

  const go = (id) => (e) => {
    e.preventDefault();
    const toc = tocRef.current;
    const phone = !window.matchMedia('(min-width: 1101px)').matches;
    // On phones the list folds shut after a choice. Do that first, so the page has its final
    // height before it scrolls (otherwise the fold shifts the target mid-scroll).
    if (phone && toc) toc.open = false;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    });
  };

  return (
    <div className="ab tm">
      <Navbar />

      <header className="ab-hero tm-hero">
        <NetworkBackground className="ab-hero-net" />
        <div className="ab-hero-glow" aria-hidden="true" />
        <div className="ab-hero-inner">
          <div className="ab-eyebrow ab-eyebrow--light">
            <span className="ab-eyebrow-line" />
            LEGAL
            <span className="ab-eyebrow-line" />
          </div>
          <h1 className="ab-hero-title tm-hero-title">{title}</h1>
          <p className="ab-hero-brand">Recommerce &middot; A brand of Urdhva Management</p>
        </div>
      </header>

      <section className="tm-body">
        <div className="ab-wrap tm-grid">
          <details className="tm-toc" ref={tocRef}>
            <summary>
              <span>
                <FiList /> Table of Contents
              </span>
              <FiChevronDown className="tm-toc-chevron" />
            </summary>
            <ol className="tm-toc-list">
              {sections.map((t, i) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className={`tm-toc-link ${active === t.id ? 'active' : ''}`}
                    onClick={go(t.id)}
                    aria-current={active === t.id ? 'location' : undefined}
                  >
                    <b>{String(i + 1).padStart(2, '0')}</b>
                    <span>{t.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </details>

          <article className="tm-content">
            {intro && (
              <div className="tm-intro">
                {intro.map((b, j) => (
                  <Block b={b} key={j} />
                ))}
              </div>
            )}
            {sections.map((t, i) => (
              <section className="tm-section" id={t.id} key={t.id}>
                <h2>
                  <span className="tm-num">{i + 1}</span>
                  {t.title}
                </h2>
                {t.blocks.map((b, j) => (
                  <Block b={b} key={j} />
                ))}
              </section>
            ))}
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
