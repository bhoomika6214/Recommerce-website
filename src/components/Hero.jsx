import './Hero.css';
import background_video from '../assets/background_video.mp4';

const Hero = () => {
  return (
    <section className="hero-container">
      {/* SVG clipPath for organic curve */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="organicCurve" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L0.86,0 C0.76,0.22 0.64,0.5 0.68,0.64 C0.72,0.8 0.78,0.92 0.85,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Background Video */}
      <div className="hero-video-wrap">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={background_video} type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      {/* Organic-shaped card */}
      <div className="hero-card-wrap">
        <div className="hero-card">

          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-line"></span>
              RECOMMERCE ECOSYSTEM
            </div>

            <h1 className="hero-heading">
              Building a <br />
              Sustainable Future. <br />
              <span className="text-blue">Together.</span>
            </h1>

            <p className="hero-subtext">
              Connecting industries, innovators and <br />
              sustainability leaders to drive meaningful change.
            </p>

            <a 
              href="https://urdhva.zohobackstage.in/6thRecommerceExpo#/?affl=EM-CAMP-AFF" 
              className="btn-primary"
            >
              EXPLORE EVENTS &rarr;
            </a>
          </div>

          <div className="hero-footer">
            <div className="scroll-indicator">
              <div className="mouse"></div>
            </div>
            <span className="scroll-text">SCROLL TO EXPLORE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
