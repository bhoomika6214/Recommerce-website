import { useEffect, useState } from 'react';
import './Loader.css';
import Logo from '../assets/Logo.png';

const MIN_DURATION = 1200; // ms the loader stays visible at minimum
const MAX_DURATION = 5000; // ms safety cap if the load event never fires
const FADE_DURATION = 600; // must match the CSS transition

const Loader = () => {
  const [hiding, setHiding] = useState(false);
  const [removed, setRemoved] = useState(false);

  // Stop the page scrolling underneath the loader
  useEffect(() => {
    if (removed) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [removed]);

  useEffect(() => {
    const start = performance.now();
    let hideTimer;
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      const wait = Math.max(0, MIN_DURATION - (performance.now() - start));
      hideTimer = setTimeout(() => setHiding(true), wait);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }
    const capTimer = setTimeout(finish, MAX_DURATION);

    return () => {
      window.removeEventListener('load', finish);
      clearTimeout(hideTimer);
      clearTimeout(capTimer);
    };
  }, []);

  useEffect(() => {
    if (!hiding) return;
    const t = setTimeout(() => setRemoved(true), FADE_DURATION);
    return () => clearTimeout(t);
  }, [hiding]);

  if (removed) return null;

  return (
    <div
      className={`site-loader ${hiding ? 'site-loader--hide' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="site-loader__inner">
        <div className="site-loader__ring">
          <img src={Logo} alt="Recommerce" className="site-loader__logo" />
        </div>
        <span className="site-loader__name">RECOMMERCE</span>
        <div className="site-loader__bar">
          <span className="site-loader__bar-fill" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
