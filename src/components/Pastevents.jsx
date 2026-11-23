import { useRef, useState } from 'react';
import {
  Award,
  Calendar,
  MapPin,
  Users,
  Mic,
  Globe,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import './Pastevents.css';
import { pastEvents, categories } from './pastData';

export default function Pastevents() {
  const [cat, setCat] = useState('All');
  const trackRef = useRef(null);
  const events = cat === 'All' ? pastEvents : pastEvents.filter((e) => e.category === cat);

  // Step the row by one poster (plus its gap).
  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector('.pvc-card');
    const step = card ? card.getBoundingClientRect().width + 22 : 320;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="pv" id="past-events">
      <div className="pv-wrap">
        <div className="pv-top">
          <div className="pv-head">
            <div className="pv-eyebrow">
              <Award size={16} />
              OUR COMPLETED CHAPTERS
            </div>
            <h2 className="pv-heading">
              Our Past <span className="pv-accent">Events</span>
            </h2>
            <p className="pv-sub">
              Take a look back at our successful gatherings, high-impact panels, and exhibition milestones that
              shaped circular policies and green technology.
            </p>
          </div>

          <div className="pvc-controls">
            <div className="pv-chips" role="tablist" aria-label="Event type">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  role="tab"
                  aria-selected={cat === c}
                  className={`pv-chip ${cat === c ? 'active' : ''}`}
                  onClick={() => setCat(c)}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="pvc-arrows">
              <button type="button" onClick={() => scrollByCard(-1)} aria-label="Previous events">
                <ChevronLeft size={22} />
              </button>
              <button type="button" onClick={() => scrollByCard(1)} aria-label="Next events">
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tall photo posters: swipe, use the arrows, or hover one for the details. */}
      <div className="pvc-track" ref={trackRef}>
        {events.map((e) => (
          <article className="pvc-card" key={e.id} style={{ backgroundImage: `url(${e.image})` }}>
            <span className="pvc-shade" />
            <div className="pvc-tags">
              <span className="pv-badge">{e.category}</span>
              <span className="pv-year">{e.year}</span>
            </div>
            <div className="pvc-body">
              <h3>{e.title}</h3>
              <div className="pv-meta">
                <span>
                  <Calendar size={14} />
                  {e.date}
                </span>
                <span>
                  <MapPin size={14} />
                  {e.location}
                </span>
              </div>
              <div className="pvc-more">
                <p>{e.subtitle}</p>
                <div className="pv-stats">
                  <span title="Attendees">
                    <Users size={16} />
                    <b>{e.stats.attendees}</b>
                  </span>
                  <span title="Speakers">
                    <Mic size={16} />
                    <b>{e.stats.speakers}</b>
                  </span>
                  <span title="Countries">
                    <Globe size={16} />
                    <b>{e.stats.countries}</b>
                  </span>
                </div>
                <a href="#gallery" className="pv-recap" aria-label={`View recap of ${e.title}`}>
                  Recap <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
