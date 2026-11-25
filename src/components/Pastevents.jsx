import { useState } from 'react';
import { Award, Calendar, Clock, MapPin } from 'lucide-react';
import './Pastevents.css';
import { SERIES, ALL_CARDS, ordinal } from './pastData';

const pad = (n) => String(n).padStart(2, '0');

function Meta({ e }) {
  return (
    <div className="pe-meta">
      {e.date && (
        <span>
          <Calendar size={14} />
          {e.date}
        </span>
      )}
      {e.time && (
        <span>
          <Clock size={14} />
          {e.time}
        </span>
      )}
      {e.venue && (
        <span>
          <MapPin size={14} />
          {e.venue}
        </span>
      )}
    </div>
  );
}

export default function Pastevents() {
  const [filter, setFilter] = useState('all');
  const cards = filter === 'all' ? ALL_CARDS : ALL_CARDS.filter((c) => c.series.id === filter);

  return (
    <section className="pe" id="past-events">
      <div className="pe-wrap">
        <div className="pe-head">
          <div className="pe-eyebrow">
            <Award size={16} />
            OUR COMPLETED CHAPTERS
          </div>
          <h2 className="pe-heading">
            Our Past <span className="pe-accent">Events</span>
          </h2>
          <p className="pe-sub">Every edition of the events we have hosted.</p>
        </div>

        <div className="pe-chips" role="tablist" aria-label="Past events">
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'all'}
            className={`pe-chip ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All <small>{ALL_CARDS.length}</small>
          </button>
          {SERIES.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={filter === s.id}
              className={`pe-chip ${filter === s.id ? 'active' : ''}`}
              onClick={() => setFilter(s.id)}
            >
              {s.name} <small>{s.editions.length}</small>
            </button>
          ))}
        </div>

        <div className="pe-grid">
          {cards.map((c) => (
            <article
              className="pe-poster"
              key={`${c.series.id}-${c.no}`}
              style={{ backgroundImage: `url(${c.image})` }}
            >
              <span className="pe-shade" />
              <span className="pe-no">{pad(c.no)}</span>
              <span className="pe-tag">{c.series.name}</span>
              <div className="pe-body">
                <h3>
                  {ordinal(c.no)} {c.series.title}
                </h3>
                {c.date || c.venue ? <Meta e={c} /> : <p className="pe-soon">Details coming soon</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
