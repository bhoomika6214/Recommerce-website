import { useState } from 'react';
import { Award, Calendar, Clock, MapPin, Folder, ChevronDown, Hourglass } from 'lucide-react';
import './PastVariants.css';
import { SERIES, ALL_CARDS, ordinal, plural } from './pastData';

const pad = (n) => String(n).padStart(2, '0');
// label under a stepper node: the year if the date has one, else the month, else a dash
const nodeLabel = (e) => {
  if (!e.date) return '—';
  const year = e.date.match(/(19|20)[0-9]{2}/);
  return year ? year[0] : e.date.split(' ').slice(-1)[0];
};
const cardTitle = (c) => `${ordinal(c.no)} ${c.series.title}`;

/* ---------- shared pieces ---------- */

const Head = ({ light = false, sub }) => (
  <div className={`pv-head ${light ? 'pvx-head--light' : ''}`}>
    <div className="pv-eyebrow">
      <Award size={16} />
      OUR COMPLETED CHAPTERS
    </div>
    <h2 className="pv-heading">
      Our Past <span className="pv-accent">Events</span>
    </h2>
    <p className="pv-sub">{sub || 'Every edition of the events we have hosted.'}</p>
  </div>
);

const Meta = ({ e, light = false }) => (
  <div className={`pvx-meta ${light ? 'pvx-meta--light' : ''}`}>
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

/* ---------------------------------------------------------------
   Variation 2: Series rows. Each event is its own band with a big
   edition count and a swipeable row of its editions.
---------------------------------------------------------------- */
export const PastRows = () => (
  <section className="pv pa" id="past-events">
    <div className="pv-wrap">
      <Head />
      <div className="pa-rows">
        {SERIES.map((s) => (
          <div className="pa-row" key={s.id}>
            <div className="pa-id">
              <Folder size={22} fill="currentColor" strokeWidth={1.5} />
              <span className="pa-count">{s.held ? pad(s.held) : '—'}</span>
              <span className="pa-count-label">{s.held === 1 ? 'Edition' : 'Editions'}</span>
              <h3>{s.name}</h3>
              {s.title !== s.name && <p>{s.title}</p>}
            </div>
            <div className="pa-scroller">
              {s.editions.map((e) => (
                <article className="pa-card" key={e.no}>
                  <div className="pa-photo" style={{ backgroundImage: `url(${e.image})` }}>
                    <span className="pa-no">{pad(e.no)}</span>
                  </div>
                  <div className="pa-body">
                    <h4>{ordinal(e.no)} edition</h4>
                    {e.date || e.venue ? <Meta e={e} /> : <p className="pvx-soon">Details coming soon</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------------------------------------------------------
   Variation 3: Edition stepper. Pick an event, then step along a
   numbered line; the chosen edition opens in a big card.
---------------------------------------------------------------- */
export const PastStepper = () => {
  const [seriesId, setSeriesId] = useState(SERIES[1].id);
  const series = SERIES.find((s) => s.id === seriesId);
  const latest = series.editions[series.editions.length - 1].no;
  const [no, setNo] = useState(latest);
  const current = series.editions.find((e) => e.no === no) || series.editions[series.editions.length - 1];

  const pick = (id) => {
    const s = SERIES.find((x) => x.id === id);
    setSeriesId(id);
    setNo(s.editions[s.editions.length - 1].no);
  };

  return (
    <section className="pv pb" id="past-events">
      <div className="pv-wrap">
        <Head sub="Pick an event, then step through its editions." />

        <div className="pb-tabs" role="tablist">
          {SERIES.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={s.id === seriesId}
              className={`pb-tab ${s.id === seriesId ? 'active' : ''}`}
              onClick={() => pick(s.id)}
            >
              {s.name}
              {s.held && <small>{plural(s.held)}</small>}
            </button>
          ))}
        </div>

        <div className="pb-line" role="tablist" aria-label="Editions">
          {series.editions.map((e) => (
            <button
              key={e.no}
              type="button"
              role="tab"
              aria-selected={e.no === current.no}
              className={`pb-node ${e.no === current.no ? 'active' : ''} ${e.date ? '' : 'pb-node--empty'}`}
              onClick={() => setNo(e.no)}
            >
              <span className="pb-node-dot">{e.no}</span>
              <span className="pb-node-label">{nodeLabel(e)}</span>
            </button>
          ))}
        </div>

        <article className="pb-card" key={`${series.id}-${current.no}`}>
          <div className="pb-photo" style={{ backgroundImage: `url(${current.image})` }}>
            <span className="pb-big">{pad(current.no)}</span>
          </div>
          <div className="pb-info">
            <span className="pb-tag">{series.name}</span>
            <h3>
              {ordinal(current.no)} {series.title}
            </h3>
            {current.date || current.venue ? (
              <Meta e={current} />
            ) : (
              <p className="pvx-soon">
                <Hourglass size={16} /> Details for this edition will be added soon.
              </p>
            )}
            {current.note && <p className="pb-note">{current.note}</p>}
          </div>
        </article>
      </div>
    </section>
  );
};

/* ---------------------------------------------------------------
   Variation 4: Bento tiles. A mosaic of one tile per event, each
   with its count and a compact list of editions.
---------------------------------------------------------------- */
export const PastBento = () => (
  <section className="pv pc" id="past-events">
    <div className="pv-wrap">
      <Head />
      <div className="pc-grid">
        {SERIES.map((s) => {
          const last = s.editions[s.editions.length - 1];
          return (
            <article className={`pc-tile pc-tile--${s.id}`} key={s.id} style={{ backgroundImage: `url(${last.image})` }}>
              <span className="pc-shade" />
              <div className="pc-inner">
                <div className="pc-top">
                  <span className="pc-count">{s.held ? pad(s.held) : '—'}</span>
                  <span className="pc-count-label">{s.held === 1 ? 'Edition' : 'Editions'}</span>
                </div>
                <div className="pc-bottom">
                  <h3>{s.name}</h3>
                  {s.title !== s.name && <p>{s.title}</p>}
                  <ol className="pc-list">
                    {s.editions.map((e) => (
                      <li key={e.no}>
                        <b>{pad(e.no)}</b>
                        <span>{e.date ? `${e.date}${e.venue ? ` · ${e.venue}` : ''}` : 'Details coming soon'}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

/* ---------------------------------------------------------------
   Variation 5: Accordion. Four rows with the big counts; open one
   to see its edition cards.
---------------------------------------------------------------- */
export const PastAccordion = () => {
  const [open, setOpen] = useState(SERIES[1].id);

  return (
    <section className="pv pd" id="past-events">
      <div className="pv-wrap">
        <Head />
        <div className="pd-list">
          {SERIES.map((s) => {
            const isOpen = open === s.id;
            return (
              <div className={`pd-item ${isOpen ? 'open' : ''}`} key={s.id}>
                <button
                  type="button"
                  className="pd-head"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : s.id)}
                >
                  <span className="pd-count">{s.held ? pad(s.held) : '—'}</span>
                  <span className="pd-title">
                    <b>{s.name}</b>
                    {s.title !== s.name && <small>{s.title}</small>}
                  </span>
                  <span className="pd-badge">{s.held ? plural(s.held) : 'Editions'}</span>
                  <ChevronDown className="pd-chevron" size={24} />
                </button>
                <div className="pd-panel">
                  <div className="pd-panel-inner">
                    <div className="pd-cards">
                      {s.editions.map((e) => (
                        <article className="pd-card" key={e.no}>
                          <div className="pd-photo" style={{ backgroundImage: `url(${e.image})` }}>
                            <span>{pad(e.no)}</span>
                          </div>
                          <div className="pd-body">
                            <h4>{ordinal(e.no)} edition</h4>
                            {e.date || e.venue ? <Meta e={e} /> : <p className="pvx-soon">Details coming soon</p>}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------------------------------------
   Variation 6: Poster wall. A dark wall of portrait posters, one
   per edition, filtered by event.
---------------------------------------------------------------- */
export const PastWall = () => {
  const [filter, setFilter] = useState('all');
  const cards = filter === 'all' ? ALL_CARDS : ALL_CARDS.filter((c) => c.series.id === filter);

  return (
    <section className="pv pe" id="past-events">
      <div className="pv-wrap">
        <Head light />
        <div className="pe-chips" role="tablist">
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
            <article className="pe-poster" key={`${c.series.id}-${c.no}`} style={{ backgroundImage: `url(${c.image})` }}>
              <span className="pe-shade" />
              <span className="pe-no">{pad(c.no)}</span>
              <span className="pe-tag">{c.series.name}</span>
              <div className="pe-body">
                <h3>{cardTitle(c)}</h3>
                {c.date || c.venue ? <Meta e={c} light /> : <p className="pvx-soon pvx-soon--light">Details coming soon</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
