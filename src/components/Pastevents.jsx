import { useState } from "react";
import { Calendar, MapPin, Users, Mic, Globe, ArrowUpRight, Award } from "lucide-react";
import "./Pastevents.css";

const PAST_EVENTS = [
  {
    id: 1,
    title: "Recommerce Expo 2025",
    subtitle: "5th Edition of India's Flagship Circular Economy Event",
    date: "14 – 15 Oct, 2025",
    location: "BEC, Mumbai",
    category: "Expo",
    year: "2025",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600",
    stats: { attendees: "5,200+", speakers: "45+", countries: "18+" }
  },
  {
    id: 2,
    title: "ITAD & WEEE Global Leaders Meet 2025",
    subtitle: "Connecting Leaders in IT Asset Disposition & E-Waste",
    date: "22 – 23 Jul, 2025",
    location: "Shangri-La, Bengaluru",
    category: "Summit",
    year: "2025",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=600",
    stats: { attendees: "1,200+", speakers: "32+", countries: "25+" }
  },
  {
    id: 3,
    title: "Sustainable Clothing & Textile Conclave 2025",
    subtitle: "Advancing Circularity in Fashion and Apparel Industry",
    date: "18 – 19 Mar, 2025",
    location: "Leela Palace, New Delhi",
    category: "Conclave",
    year: "2025",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=600",
    stats: { attendees: "850+", speakers: "28+", countries: "12+" }
  },
  {
    id: 4,
    title: "E-Waste Management & EPR Summit 2024",
    subtitle: "Regulatory Frameworks, Producer Responsibility, and Compliance",
    date: "08 Nov, 2024",
    location: "ITC Gardenia, Bengaluru",
    category: "Summit",
    year: "2024",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    stats: { attendees: "950+", speakers: "24+", countries: "10+" }
  },
  {
    id: 5,
    title: "Circular Economy & Resource Recovery 2024",
    subtitle: "Transforming Waste into Resource Streams",
    date: "15 – 16 May, 2024",
    location: "Pragati Maidan, New Delhi",
    category: "Conclave",
    year: "2024",
    image: "https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&q=80&w=600",
    stats: { attendees: "1,800+", speakers: "50+", countries: "15+" }
  },
  {
    id: 6,
    title: "Battery Recycling & EV Transitions Forum 2024",
    subtitle: "Navigating Regulations and Critical Mineral Recovery",
    date: "24 Jan, 2024",
    location: "Hilton, Chennai",
    category: "Forum",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558441719-ff34b0524a24?auto=format&fit=crop&q=80&w=600",
    stats: { attendees: "600+", speakers: "18+", countries: "8+" }
  }
];

const CATEGORIES = ["All", "Expo", "Summit", "Conclave", "Forum"];
const YEARS = ["All", "2025", "2024"];

export default function Pastevents() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredEvents = PAST_EVENTS.filter((event) => {
    const matchCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchYear = selectedYear === "All" || event.year === selectedYear;
    return matchCategory && matchYear;
  });

  return (
    <section className="past-events" id="past-events">
      <div className="past-events__container">
        <div className="past-events__header">
          <div className="past-events__intro">
            <div className="past-events__eyebrow">
              <Award size={16} className="past-events__eyebrow-icon" />
              OUR COMPLETED CHAPTERS
            </div>
            <h2 className="past-events__heading">
              Our Past <span className="past-events__heading-accent">Events</span>
            </h2>
            <p className="past-events__desc">
              Take a look back at our successful gatherings, high-impact panels, 
              and exhibition milestones that shaped circular policies and green technology.
            </p>
          </div>

          <div className="past-events__filters">
            <div className="past-events__filter-group">
              <span className="past-events__filter-label">Type:</span>
              <div className="past-events__filter-tabs">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`past-events__filter-tab ${
                      selectedCategory === cat ? "past-events__filter-tab--active" : ""
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="past-events__filter-group">
              <span className="past-events__filter-label">Year:</span>
              <div className="past-events__filter-tabs">
                {YEARS.map((y) => (
                  <button
                    key={y}
                    type="button"
                    className={`past-events__filter-tab ${
                      selectedYear === y ? "past-events__filter-tab--active" : ""
                    }`}
                    onClick={() => setSelectedYear(y)}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="past-events__empty">
            <p>No past events found matching the selected criteria.</p>
          </div>
        ) : (
          <div className="past-events__grid">
            {filteredEvents.map((event) => (
              <article className="past-event-card" key={event.id}>
                <div className="past-event-card__img-container">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="past-event-card__img"
                    loading="lazy"
                  />
                  <div className="past-event-card__overlay" />
                  <span className={`past-event-card__badge past-event-card__badge--${event.category.toLowerCase()}`}>{event.category}</span>
                  <span className="past-event-card__year">{event.year}</span>
                </div>

                <div className="past-event-card__content">
                  <div className="past-event-card__meta">
                    <span className="past-event-card__meta-item">
                      <Calendar size={14} />
                      {event.date}
                    </span>
                    <span className="past-event-card__meta-item">
                      <MapPin size={14} />
                      {event.location}
                    </span>
                  </div>

                  <h3 className="past-event-card__title">{event.title}</h3>
                  <p className="past-event-card__subtitle">{event.subtitle}</p>

                  <div className="past-event-card__footer">
                    <div className="past-event-card__stats">
                      <div className="past-event-card__stat-item" title="Attendees">
                        <Users size={16} />
                        <span>{event.stats.attendees}</span>
                      </div>
                      <div className="past-event-card__stat-item" title="Speakers">
                        <Mic size={16} />
                        <span>{event.stats.speakers}</span>
                      </div>
                      <div className="past-event-card__stat-item" title="Countries">
                        <Globe size={16} />
                        <span>{event.stats.countries}</span>
                      </div>
                    </div>

                    <a
                      href="#gallery"
                      className="past-event-card__recap-link"
                      aria-label={`View recap of ${event.title}`}
                    >
                      <span>Recap</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
