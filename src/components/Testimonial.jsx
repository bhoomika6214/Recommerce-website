import React, { useState, useEffect, useRef } from 'react';
import './Testimonial.css';
import BhagwantKhuba from '../assets/Testimonials/Bhagwant-Khuba.jpg';
import RoopRashi from '../assets/Testimonials/Roop-Rashi.jpg';
import PrajaktaVerma from '../assets/Testimonials/Prajakta-Verma.jpg';
import EshwarKhandre from '../assets/Testimonials/Eshwar-Khandre.jpg';
import PiyushGoyal from '../assets/Testimonials/piyush-goyal.png';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote:
        'Recommerce as an entity advocates the need for proper management of waste in the world where there is an imbalance in the human- nature relationship. It is a progressive platform that addresses the precarious situation like waste management, the country needs such platforms to handle pollution-related issues.',
      name: 'Ms. Roop Rashi (IA&AS)',
      title: 'Textile Commissioner of India',
      avatar: RoopRashi,
    },
    {
      id: 2,
      quote:
        'In India, the waste produced has been growing by the year and not many private entities are taking initiatives to help control the mass collection of waste such as textile waste, Recommerce is creating a platform to make industries aware of the importance of waste segregation, and recycling in order to build a better tomorrow for everyone. Such initiatives will inspire other companies to take up the circular economy model.',
      name: 'Smt. Prajakta Verma (IAS)',
      title: 'Joint Secretary, Ministry of Textiles, Government of India',
      avatar: PrajaktaVerma,
    },
    {
      id: 3,
      quote:
        'The Recommerce expo is a foundation for the pathway the country needs to navigate towards proper waste management. The expo will stimulate companies to set up waste management plants and help control the accumulation of waste.',
      name: 'Shri. Eshwara Khandre',
      title: 'Minister of Forest, Ecology And Environment Government of Karnataka',
      avatar: EshwarKhandre,
    },
    {
      id: 4,
      quote:
        'I am happy to know that Urdhva Management Pvt ltd is organizing the summit for the benefit of the key stakeholders in the renewable energy sector. I hope this stage will provide the right platform to discuss, deliberate, and exchange ideas and best practices for the benefit of waste management.',
      name: 'Shri. Baghwanth Khuba',
      title: 'Union Minister of State for Chemicals and Fertilizers, New and Renewable Energy Government of India',
      avatar: BhagwantKhuba,
    },
    {
      id: 5,
      quote:
        'The government is taking initiatives to control the accumulation of waste. I hope forum organized by Recommerce will be helpful for the key stakeholders to plan for further growth of this sector for the years to come.',
      name: 'Shri. Piyush Goyal',
      title: 'Minister of Commerce & Industry, Consumer Affairs, Food & Public Distribution, Textiles Government of India',
      avatar: PiyushGoyal,
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2500);

    return () => clearInterval(timerRef.current);
  }, [isPaused, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const first = testimonials[currentIndex];
    const second = testimonials[(currentIndex + 1) % testimonials.length];
    return [first, second];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section
      className="testimonial-section"
      id="testimonial"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="dots-left"></div>
      <div className="dots-right"></div>

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

      <div className="testimonials-container">
        {visibleTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="quote-icon-open">"</div>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="quote-icon-close">"</div>

            <div className="testimonial-author">
              <div className="author-avatar">
                <div className="avatar-popup">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <div className="author-info">
                <h3 className="author-name">{testimonial.name}</h3>
                <p className="author-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

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
              className={`dot ${index === currentIndex || index === (currentIndex + 1) % testimonials.length ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
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
