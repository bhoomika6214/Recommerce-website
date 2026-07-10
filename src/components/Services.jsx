import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(1);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  const services = [
    {
      id: '01',
      number: '01',
      title: 'Training and Workshops',
      icon: '🎓',
      color: 'gray'
    },
    {
      id: '02',
      number: '02',
      title: 'Expo',
      icon: '📊',
      color: 'blue',
      featured: true,
      featuredTitle: 'Expo',
      featuredDescription: 'Showcasing innovations and solutions driving circular progress.',
      featuredImage: 'expo'
    },
    {
      id: '03',
      number: '03',
      title: 'Conference',
      icon: '👥',
      color: 'gray'
    },
    {
      id: '04',
      number: '04',
      title: 'Market Research and Analysis',
      icon: '📋',
      color: 'gray'
    },
    {
      id: '05',
      number: '05',
      title: 'Product Launches',
      icon: '🚀',
      color: 'green'
    },
    {
      id: '06',
      number: '06',
      title: 'Supply Chain Management',
      icon: '📦',
      color: 'gray'
    },
    {
      id: '07',
      number: '07',
      title: 'Green Reporting',
      icon: '🌍',
      color: 'yellow'
    },
    {
      id: '08',
      number: '08',
      title: 'Webinar and Seminar',
      icon: '📹',
      color: 'purple'
    },
    {
      id: '09',
      number: '09',
      title: 'Community Engagement',
      icon: '💬',
      color: 'gray'
    }
  ];

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev + 1) % services.length);
  };

  const prevCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const goToService = (index) => {
    setCurrentServiceIndex(index);
  };

  const featuredService = services[currentServiceIndex];

  return (
    <div className="sv-page">
      {/* Hero Section */}
      <section className="sv-hero">
        <div className="sv-hero-container">
          {/* Left Content */}
          <div className="sv-hero-left">
            <span className="sv-hero-label">— OUR SERVICES</span>
            <h1 className="sv-hero-title">
              Comprehensive Solutions for a <span className="sv-highlight">Circular Economy</span> in Action
            </h1>
            <p className="sv-hero-description">
              From knowledge to impact, we offer end-to-end services that empower industries, inspire action and drive sustainable transformation.
            </p>
            <div className="sv-progress-section">
              <div className="sv-progress-label">
                <span className="sv-progress-number">{String(currentServiceIndex + 1).padStart(2, '0')}</span>
                <span className="sv-progress-total">/ {String(services.length).padStart(2, '0')}</span>
              </div>
              <div className="sv-progress-bar">
                <div 
                  className="sv-progress-fill" 
                  style={{ width: `${((currentServiceIndex + 1) / services.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Service Carousel */}
          <div className="sv-hero-right">
            <div className="sv-featured-card">
              <div className="sv-featured-badge">FEATURED SERVICE</div>
              
              <div className="sv-featured-content">
                <h2 className="sv-featured-number">{featuredService.id}</h2>
                <h3 className="sv-featured-title">{featuredService.featuredTitle || featuredService.title}</h3>
                <p className="sv-featured-description">
                  {featuredService.featuredDescription || 'Delivering comprehensive solutions for your business needs.'}
                </p>
                <button className="sv-featured-button">
                  Learn More
                  <span className="sv-arrow">→</span>
                </button>
              </div>

              <div className="sv-featured-image-area">
                <div className="sv-image-placeholder">
                  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="sv-expo-illustration">
                    {/* Background */}
                    <rect width="400" height="300" fill="#1e3a5f" rx="16"/>
                    
                    {/* Ceiling lights */}
                    <circle cx="80" cy="20" r="8" fill="#4a6fa5" opacity="0.6"/>
                    <circle cx="200" cy="15" r="8" fill="#4a6fa5" opacity="0.6"/>
                    <circle cx="320" cy="20" r="8" fill="#4a6fa5" opacity="0.6"/>
                    
                    {/* Hanging plants */}
                    <path d="M 50 30 Q 45 50 50 70" stroke="#4ade80" strokeWidth="2" fill="none"/>
                    <circle cx="45" cy="75" r="15" fill="#4ade80" opacity="0.7"/>
                    <circle cx="370" cy="80" r="12" fill="#4ade80" opacity="0.7"/>
                    
                    {/* Recycling symbol - main */}
                    <circle cx="200" cy="100" r="45" fill="none" stroke="#4ade80" strokeWidth="3"/>
                    <path d="M 185 70 L 175 95 L 195 90 Z" fill="#4ade80"/>
                    <path d="M 215 70 L 225 95 L 205 90 Z" fill="#4ade80"/>
                    <path d="M 200 130 L 190 105 L 210 110 Z" fill="#4ade80"/>
                    
                    {/* Display board */}
                    <rect x="250" y="60" width="120" height="80" fill="#2d5a8c" stroke="#4ade80" strokeWidth="2" rx="4"/>
                    <rect x="260" y="70" width="100" height="20" fill="#1e3a5f"/>
                    <text x="310" y="82" fontSize="12" fill="#4ade80" textAnchor="middle" fontWeight="bold">CIRCULAR</text>
                    <text x="310" y="98" fontSize="10" fill="#4ade80" textAnchor="middle">SOLUTIONS</text>
                    
                    {/* Icons on board */}
                    <circle cx="270" cy="110" r="4" fill="#4ade80"/>
                    <circle cx="285" cy="110" r="4" fill="#4ade80"/>
                    <circle cx="300" cy="110" r="4" fill="#4ade80"/>
                    
                    {/* Plants in pots */}
                    <rect x="100" y="200" width="25" height="20" fill="#8b6f47" rx="2"/>
                    <path d="M 112 200 L 108 180 L 116 180 Z" fill="#4ade80"/>
                    <path d="M 112 200 L 105 170 L 120 175 Z" fill="#4ade80"/>
                    
                    <rect x="330" y="210" width="20" height="18" fill="#8b6f47" rx="2"/>
                    <path d="M 340 210 L 336 190 L 344 192 Z" fill="#4ade80"/>
                    
                    {/* Ground elements */}
                    <rect x="0" y="260" width="400" height="40" fill="#2d5a8c" opacity="0.3"/>
                    
                    {/* Text elements */}
                    <text x="120" y="260" fontSize="12" fill="#4ade80" fontWeight="bold">RETHINK</text>
                    <text x="110" y="278" fontSize="12" fill="#4ade80" fontWeight="bold">RECOVER</text>
                    <text x="115" y="296" fontSize="12" fill="#4ade80" fontWeight="bold">REVERSE</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="sv-featured-nav">
              <button className="sv-nav-arrow sv-prev" onClick={prevService} aria-label="Previous service">
                ‹
              </button>
              <button className="sv-nav-arrow sv-next" onClick={nextService} aria-label="Next service">
                ›
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="sv-carousel-dots">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`sv-dot ${index === currentServiceIndex ? 'sv-active' : ''}`}
                  onClick={() => goToService(index)}
                  aria-label={`Go to service ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Carousel */}
      <section className="sv-grid-section">
        <div className="sv-grid-carousel-container">
          {/* Left Navigation */}
          <button className="sv-grid-nav-arrow sv-prev" onClick={prevCarousel} aria-label="Previous services">
            ‹
          </button>

          {/* Services Grid */}
          <div className="sv-services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`sv-service-card ${service.featured ? 'sv-featured-card-main' : ''} ${
                  index >= currentCarouselIndex && index < currentCarouselIndex + 3 ? 'sv-visible' : 'sv-hidden'
                }`}
              >
                <div className={`sv-card-icon sv-color-${service.color}`}>
                  {service.icon}
                </div>
                <div className="sv-card-number">{service.number}</div>
                <h3 className="sv-card-title">{service.title}</h3>
              </div>
            ))}
          </div>

          {/* Right Navigation */}
          <button className="sv-grid-nav-arrow sv-next" onClick={nextCarousel} aria-label="Next services">
            ›
          </button>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="sv-cta-section">
        <div className="sv-cta-container">
          <div className="sv-cta-leaf">🍃</div>
          <h2 className="sv-cta-title">
            Let's build a <span className="sv-highlight">sustainable future</span> together.
          </h2>

          <div className="sv-cta-features">
            <div className="sv-cta-feature">
              <span className="sv-feature-icon">👥</span>
              <div className="sv-feature-text">
                <span className="sv-feature-highlight">Collaborate</span>
                <span className="sv-feature-label">for Impact</span>
              </div>
            </div>

            <div className="sv-cta-feature">
              <span className="sv-feature-icon">💡</span>
              <div className="sv-feature-text">
                <span className="sv-feature-highlight">Innovate</span>
                <span className="sv-feature-label">for Change</span>
              </div>
            </div>

            <div className="sv-cta-feature">
              <span className="sv-feature-icon">🌍</span>
              <div className="sv-feature-text">
                <span className="sv-feature-highlight">Sustain</span>
                <span className="sv-feature-label">for Tomorrow</span>
              </div>
            </div>
          </div>

          <button className="sv-cta-button">
            Connect with us
            <span className="sv-arrow">→</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
