import React, { useState } from 'react';
import './Testimonial.css';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        'Recommerce as an entity advocates the need for proper management of waste in the world where there is an imbalance in the human-nature relationship. It is a progressive platform that addresses the precarious situation like waste management, the country needs such platforms to handle pollution-related issues.',
      name: 'Ms. Roop Rashi (IA&AS)',
      title: 'Textile Commissioner of India',
      avatar: '👤',
    },
    {
      id: 2,
      quote:
        'In India, the waste produced has been growing by the year and not many private entities are taking initiatives to help control the mass collection of waste such as textile waste. Recommerce is creating a platform to make industries aware of the importance of waste segregation, and recycling in order to build a better tomorrow for everyone. Such initiatives will inspire other companies to take up the circular economy model.',
      name: 'Smt. Prajakta Verma (IAS)',
      title: 'Joint Secretary, Ministry of Textiles, Government of India',
      avatar: '👤',
    },
    {
      id: 3,
      quote:
        'Sustainability is not just a buzzword; it is the future of business. Companies that prioritize environmental responsibility will lead the market. Recommerce exemplifies this commitment and serves as a beacon for others in the industry.',
      name: 'Dr. Arjun Singh',
      title: 'Environmental Policy Expert',
      avatar: '👤',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonial-section">
      {/* Decorative dots */}
      <div className="dots-left"></div>
      <div className="dots-right"></div>

      {/* Header */}
      <div className="testimonial-header">
        <span className="testimonial-label">TESTIMONIALS</span>
        <h1 className="testimonial-title">
          Voices of <span className="highlight">Impact</span>
        </h1>
        <p className="testimonial-subtitle">
          Trusted by industry leaders and changemakers
          <br />
          driving the circular economy forward.
        </p>
      </div>

      {/* Testimonials Container */}
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${
              index === currentIndex ? 'active' : ''
            }`}
            style={{
              opacity: index === currentIndex ? 1 : 0,
              visibility: index === currentIndex ? 'visible' : 'hidden',
              transform:
                index === currentIndex ? 'translateX(0)' : 'translateX(20px)',
            }}
          >
            <div className="quote-icon-open">"</div>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="quote-icon-close">"</div>

            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.avatar}</div>
              <div className="author-info">
                <h3 className="author-name">{testimonial.name}</h3>
                <p className="author-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="testimonial-controls">
        <button
          className="nav-button prev-button"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        <div className="dots-container">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>

        <button
          className="nav-button next-button"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Testimonial;