import React, { useState, useEffect } from 'react';
import background_video from '../assets/background_video.mp4';
import './Hero2.css';

const Typewriter = ({ text, speed = 50, delay = 0, onComplete }) => {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed, onComplete]);

  return <>{displayed}</>;
};

const Hero2 = () => {
  return (
    <div className="hero2-container">
      <video autoPlay muted loop className="hero2-background-video">
        <source src={background_video} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

      <div className="hero2-overlay"></div>

      <div className="hero2-content">
        <div className="hero2-left-section">
          <div className="hero2-card">
            <div className="hero2-label">
              <span className="hero2-label-line"></span>
              <span className="hero2-label-text">RECOMMERCE ECOSYSTEM</span>
            </div>

            <h1 className="hero2-heading">
              <Typewriter text="Building a Sustainable Future" speed={60} delay={500} />
              <span className="hero2-heading-highlight"> <Typewriter text="Together." speed={60} delay={2200} /></span>
            </h1>

            <p className="hero2-description">
              <Typewriter text="Connecting industries, innovators and sustainability leaders to drive meaningful change." speed={30} delay={3800} />
            </p>

            <button className="hero2-btn">
              EXPLORE EVENTS →
            </button>
          </div>
        </div>

        <div className="hero2-right-section"></div>
      </div>
    </div>
  );
};

export default Hero2;