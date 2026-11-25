import { useState } from 'react';
import { Award, Calendar, Clock, MapPin, Folder } from 'lucide-react';
import './Pastevents.css';

import { SERIES, ALL_CARDS, ordinal, plural } from './pastData';

function Card({ card, hidden }) {
  const { series } = card;
  return (
    <article className="pm-card" aria-hidden={hidden ? true : undefined}>
      <div className="pm-photo" style={{ backgroundImage: `url(${card.image})` }}>
        <span className="pm-edition">
          <b>{String(card.no).padStart(2, '0')}</b>
          <i>Edition</i>
        </span>
        <span className="pm-series">{series.name}</span>
      </div>
      <div className="pm-body">
        <h3>
          {ordinal(card.no)} {series.title}
        </h3>
        {card.date || card.venue ? (
          <div className="pm-meta">
            {card.date && (
              <span>
                <Calendar size={15} />
                {card.date}
              </span>
            )}
            {card.time && (
              <span>
                <Clock size={15} />
                {card.time}
              </span>
            )}
            {card.venue && (
              <span>
                <MapPin size={15} />
                {card.venue}
              </span>
            )}
          </div>
        ) : (
          <p className="pm-soon">Details coming soon</p>
        )}
        {card.note && <p className="pm-note">{card.note}</p>}
      </div>
    </article>
  );
}

export default function Pastevents() {
  const [filter, setFilter] = useState('all');
  const series = SERIES.find((s) => s.id === filter);
  const cards = filter === 'all' ? ALL_CARDS : ALL_CARDS.filter((c) => c.series.id === filter);

  // a handful of cards can't fill the screen twice over, so they sit still instead of scrolling
  const scrolling = cards.length >= 5;

  return (
    <section className="pv" id="past-events">
      <div className="pv-wrap">
        <div className="pv-head">
          <div className="pv-eyebrow">
            <Award size={16} />
            OUR COMPLETED CHAPTERS
          </div>
          <h2 className="pv-heading">
            Our Past <span className="pv-accent">Events</span>
          </h2>
          <p className="pv-sub">Every edition of the events we have hosted. Pick an event to see how many there have been.</p>
        </div>

        <div className="pv-folders" role="tablist" aria-label="Past events">
          <button
            type="button"
            role="tab"
            aria-selected={filter === 'all'}
            className={`pv-folder ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <Folder size={22} fill="currentColor" strokeWidth={1.5} />
            <span>
              All events
              <small>{plural(ALL_CARDS.length)} listed</small>
            </span>
          </button>
          {SERIES.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={filter === s.id}
              className={`pv-folder ${filter === s.id ? 'active' : ''}`}
              onClick={() => setFilter(s.id)}
            >
              <Folder size={22} fill="currentColor" strokeWidth={1.5} />
              <span>
                {s.name}
                {s.held && <small>{plural(s.held)}</small>}
              </span>
            </button>
          ))}
        </div>

        {series && series.held && (
          <p className="pv-summary" key={series.id}>
            <b>{series.held}</b> {series.held === 1 ? 'edition' : 'editions'} of {series.title} held so far
          </p>
        )}
      </div>

      <div className={`pm ${scrolling ? 'pm--scroll' : 'pm--still'}`} key={filter}>
        <div className="pm-track" style={scrolling ? { animationDuration: `${cards.length * 6}s` } : undefined}>
          {cards.map((c) => (
            <Card key={`${c.series.id}-${c.no}`} card={c} />
          ))}
          {scrolling &&
            cards.map((c) => <Card key={`dup-${c.series.id}-${c.no}`} card={c} hidden />)}
        </div>
      </div>
    </section>
  );
}
