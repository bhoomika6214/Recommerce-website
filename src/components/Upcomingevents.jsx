import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  Calendar,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import "./Upcomingevents.css";

const BANNERS = [
  {
    id: 1,
    title: "Recommerce 2026 Expo",
    subtitle: "India's Largest Circular Economy Exhibition",
    date: "29 – 30 Apr, 2026",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Bio-Medical Waste Conclave",
    subtitle: "Advancing Healthcare Waste Management Practices",
    date: "12 – 13 Jun, 2026",
    location: "Shangri-la, Bengaluru",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Circular Economy Summit",
    subtitle: "Driving Sustainable Solutions for Tomorrow",
    date: "05 – 06 Sep, 2026",
    location: "Chennai, India",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1200",
  },
];

function BannerCarousel() {
  const [activeBanner, setActiveBanner] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goToBanner = useCallback((index) => {
    setActiveBanner(index);
  }, []);

  const nextBanner = useCallback(() => {
    setActiveBanner((prev) => (prev + 1) % BANNERS.length);
  }, []);

  const prevBanner = useCallback(() => {
    setActiveBanner((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(nextBanner, 5000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, nextBanner]);

  return (
    <div className="banner-carousel">
      {BANNERS.map((banner, index) => (
        <div
          key={banner.id}
          className={`banner-slide ${index === activeBanner ? "banner-slide--active" : ""}`}
        >
          <img src={banner.image} alt={banner.title} className="banner-slide__img" />
          <div className="banner-slide__overlay" />
          <div className="banner-slide__content">
            <span className="banner-slide__date">
              <Calendar size={14} strokeWidth={2} />
              {banner.date}
            </span>
            <h2 className="banner-slide__title">{banner.title}</h2>
            <p className="banner-slide__subtitle">{banner.subtitle}</p>
            <div className="banner-slide__meta">
              <MapPin size={14} strokeWidth={2} />
              {banner.location}
            </div>
            <button type="button" className="banner-slide__cta">
              Register Now
              <ArrowRight size={16} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      ))}

      <button
        type="button"
        className="banner-nav banner-nav--prev"
        onClick={prevBanner}
        aria-label="Previous banner"
      >
        <ChevronLeft size={24} strokeWidth={2} />
      </button>

      <button
        type="button"
        className="banner-nav banner-nav--next"
        onClick={nextBanner}
        aria-label="Next banner"
      >
        <ChevronRight size={24} strokeWidth={2} />
      </button>

      <div className="banner-controls">
        <div className="banner-dots">
          {BANNERS.map((banner, i) => (
            <button
              key={banner.id}
              type="button"
              className={`banner-dot ${i === activeBanner ? "banner-dot--active" : ""}`}
              onClick={() => goToBanner(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="banner-pause"
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? "Play" : "Pause"}
        >
          {isPaused ? <Play size={14} strokeWidth={2.5} /> : <Pause size={14} strokeWidth={2.5} />}
        </button>
      </div>

      <div className="banner-progress">
        <div
          className="banner-progress__bar"
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        />
      </div>
    </div>
  );
}

export default function Upcomingevents() {
  return (
    <section className="upcoming-events" id="events">
      <div className="upcoming-events__header">
        <div className="upcoming-events__intro">
          <div className="upcoming-events__eyebrow">
            <span className="upcoming-events__eyebrow-line" />
            OUR UPCOMING EVENTS
          </div>
          <h2 className="upcoming-events__heading">
            Our Upcoming{" "}
            <span className="upcoming-events__heading-accent">Events</span>
          </h2>
        </div>

        <p className="upcoming-events__desc">
          Explore our flagship sustainability-focused events that bring
          together global thought leaders, innovators, policymakers, and
          industry experts. <br></br>These events are designed for professionals in
          circular economy, e-waste, IT asset disposition, healthcare waste,
          and other key environmental sectors. Join us in shaping a cleaner,
          greener future.
        </p>

        <button type="button" className="upcoming-events__view-all">
          <Calendar size={16} strokeWidth={2} />
          View All Events
          <ArrowRight size={16} strokeWidth={2.2} />
        </button>
      </div>

      <BannerCarousel />
    </section>
  );
}
