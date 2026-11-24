import { useRef, useState, useEffect, useCallback } from "react";
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
    title: "7th Recommerce Expo 2027",
    subtitle: "Building the World's Most Green and Circular Economy: 8 co-located conferences and an expo floor.",
    date: "3 – 4 Mar, 2027",
    location: "The LaLiT Ashok, Bengaluru",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    link: "https://expo.recommerceeco.com/",
  },
  {
    id: 2,
    title: "ITAD & WEEE Global Leaders Meet 2026",
    subtitle: "The world's largest gathering for circular electronics, IT asset disposition and e-waste management.",
    date: "See event website for dates",
    location: "New Delhi, India",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200",
    link: "https://itad.recommerceeco.com/",
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
            <a
              className="banner-slide__cta"
              href={banner.link}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={index === activeBanner ? 0 : -1}
            >
              Know More
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
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
          Two flagship events bringing together global thought leaders,
          innovators, policymakers and industry experts: the 7th Recommerce
          Expo for the whole circular economy, and the ITAD &amp; WEEE Global
          Leaders Meet for circular electronics and e-waste. Join us in
          shaping a cleaner, greener future.
        </p>
      </div>

      <BannerCarousel />
    </section>
  );
}
