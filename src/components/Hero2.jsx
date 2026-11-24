import { useEffect, useRef } from 'react';
import heroVideo from '../assets/background_video.mp4';
import { LiquidText } from './ui/liquid-text';
import './Hero2.css';

const Hero2 = () => {
  const videoRef = useRef(null);

  // Visitors who ask for less motion get a still frame instead of a moving video.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      const video = videoRef.current;
      if (!video) return;
      if (reduced.matches) video.pause();
      else video.play().catch(() => {});
    };
    apply();
    reduced.addEventListener('change', apply);
    return () => reduced.removeEventListener('change', apply);
  }, []);

  return (
    <section className="hero" id="home" aria-label="Recommerce">
      <video
        ref={videoRef}
        className="hero__video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        disablePictureInPicture
        disableRemotePlayback
      />

      <div className="hero__content">
        {/* The first line is the liquid headline: move the pointer over it, or drag, to pull ink off the letters. */}
        <h1 className="hero__title">
          <LiquidText
            text="Unlocking Infinite Possibilities"
            tone="dark"
            color="#ffffff"
            highlight="#bfe6ff"
            accentColor="#009bff"
            fontFamily="'Manrope', sans-serif"
            fontWeight={800}
            fontSize={64}
            viscosity={0.55}
            className="hero__liquid"
          />
        </h1>

        <div className="hero__lines">
          <p className="hero__line">Connecting Industries</p>
          <p className="hero__line">Pioneering Sustainability for a Thriving Tomorrow</p>
        </div>

        <a className="btn-primary hero__cta" href="#events">
          EXPLORE EVENTS &rarr;
        </a>
      </div>
    </section>
  );
};

export default Hero2;
