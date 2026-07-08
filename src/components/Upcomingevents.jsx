import React, { useState, useRef, useEffect } from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  const events = [
    {
      id: 1,
      date: '12-13',
      month: 'JUN',
      year: '2026',
      title: 'BIO-MEDICAL WASTE CONCLAVE',
      location: 'Shangri-la, Bengaluru',
      icon: 'medical',
      color: 'teal',
      image: 'https://images.unsplash.com/photo-1579606818029-ca0f9e89b90f?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      date: '24-25',
      month: 'JUL',
      year: '2026',
      title: 'SOLID WASTE MANAGEMENT FORUM',
      location: 'Shangri-la, Bengaluru',
      icon: 'recycle',
      color: 'green',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      date: '29-30',
      month: 'APR',
      year: '2026',
      title: 'RECOMMERCE EXPO 2026',
      location: 'Bangalore, India',
      icon: 'asterisk',
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      date: '18-19',
      month: 'AUG',
      year: '2026',
      title: 'IT ASSET DISPOSITION & E-WASTE SUMMIT',
      location: 'Shangri-la, Bengaluru',
      icon: 'monitor',
      color: 'orange',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      date: '12-13',
      month: 'JUN',
      year: '2026',
      title: 'BIO-MEDICAL WASTE CONCLAVE',
      location: 'Shangri-la, Bengaluru',
      icon: 'medical',
      color: 'teal',
      image: 'https://images.unsplash.com/photo-1579606818029-ca0f9e89b90f?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      date: '05-06',
      month: 'SEP',
      year: '2026',
      title: 'GREEN INNOVATION SUMMIT',
      location: 'Bangalore, India',
      icon: 'leaf',
      color: 'teal',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    },
  ];

  useEffect(() => {
    const updateCardWidth = () => {
      if (carouselRef.current) {
        const card = carouselRef.current.querySelector('.event-card');
        if (card) {
          setCardWidth(card.offsetWidth + 20); // 20px gap
        }
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const IconComponent = ({ type }) => {
    const icons = {
      medical: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="1" />
          <path d="M12 8v8M8 12h8" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
      recycle: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z" />
          <path d="M9 6h6v6h-6z" />
          <path d="M7.5 15h9" />
        </svg>
      ),
      asterisk: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      ),
      monitor: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      ),
      leaf: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2c0 0-4 4-4 10 0 6 2 8 4 8s4-2 4-8c0-6-4-10-4-10z" />
          <path d="M8 12h8" />
        </svg>
      ),
    };

    return icons[type] || icons.asterisk;
  };

  return (
    <div className="upcoming-events" ref={containerRef}>
      {/* Background decorative elements */}
      <div className="bg-decoration top-left" />
      <div className="bg-decoration bottom-right" />

      <div className="events-wrapper">
        {/* Header Section */}
        <div className="events-header">
          <div className="header-left">
            <div className="event-label">
              <span className="label-text">OUR UPCOMING EVENTS</span>
              <div className="label-line" />
            </div>
            <h1 className="events-title">
              Our Upcoming <span className="highlight">Events</span>
            </h1>
          </div>

          <div className="header-right">
            <p className="events-description">
              Explore our flagship sustainability-focused events that bring together global thought leaders, innovators, policymakers, and industry experts. These events are designed for professionals in circular economy, e-waste, IT asset disposition, healthcare waste, and other key environmental sectors. Join us in shaping a cleaner, greener future.
            </p>
            <button className="view-all-btn">
              <span className="btn-icon">📅</span>
              <span>View All Events</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>

        {/* Events Carousel */}
        <div className="carousel-container">
          {/* Left Arrow */}
          <button
            className="carousel-arrow left"
            onClick={handlePrevious}
            aria-label="Previous events"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel */}
          <div className="carousel" ref={carouselRef}>
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`event-card ${event.color} ${
                  index === currentSlide ? 'active' : ''
                }`}
                style={{
                  transform: `translateX(${(index - currentSlide) * 100}%)`,
                  opacity: Math.abs(index - currentSlide) > 1 ? 0 : 1,
                }}
              >
                {/* Card Image */}
                <div className="card-image-wrapper">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="card-image"
                  />
                  <div className="image-overlay" />

                  {/* Date Badge */}
                  <div className={`date-badge ${event.color}`}>
                    <div className="badge-content">
                      <div className="badge-date">{event.date}</div>
                      <div className="badge-month">{event.month}</div>
                      <div className="badge-year">{event.year}</div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-content">
                  {/* Icon */}
                  <div className={`card-icon ${event.color}`}>
                    <IconComponent type={event.icon} />
                  </div>

                  {/* Title */}
                  <h3 className="card-title">{event.title}</h3>

                  {/* Location */}
                  <div className="card-location">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{event.location}</span>
                  </div>

                  {/* View Event Button */}
                  <button className={`view-event-btn ${event.color}`}>
                    View Event <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="carousel-arrow right"
            onClick={handleNext}
            aria-label="Next events"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="pagination-dots">
          {events.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;