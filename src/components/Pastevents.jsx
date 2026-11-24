import { useState } from 'react';
import { Award, Calendar, MapPin, Folder, ArrowUpRight, Hourglass } from 'lucide-react';
import './Pastevents.css';

// Web-sized event photos (see src/assets/gallery-web).
const expoPhotos = import.meta.glob('../assets/gallery-web/6thRecommerce/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});
const itadPhotos = import.meta.glob('../assets/gallery-web/itad/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});
const photo = (files, name) => files[`../assets/gallery-web/${name}.webp`];

/*
 * One entry per event series. To add Textile or C&D later, add an object here:
 *   - held:     how many editions have been held (number), or null if not known yet
 *   - editions: the editions you have real details for
 * Only facts from the event websites and event photos are filled in below.
 */
const SERIES = [
  {
    id: 'expo',
    name: 'Recommerce Expo',
    blurb: "India's circular economy trade floor: conferences, an expo floor, awards and networking.",
    held: 6, // the 7th edition is the upcoming one
    upcoming: { label: '7th edition · 3 – 4 Mar, 2027 · The LaLiT Ashok, Bengaluru', href: 'https://expo.recommerceeco.com/' },
    editions: [
      {
        no: 6,
        title: '6th Recommerce Expo',
        date: '29 – 30 Apr, 2026',
        venue: 'The LaLiT Ashok, Bengaluru',
        image: photo(expoPhotos, '6thRecommerce/urs_4274'),
      },
    ],
  },
  {
    id: 'itad',
    name: 'ITAD & WEEE',
    blurb: 'Global Leaders Meet for circular electronics, IT asset disposition and e-waste management.',
    held: null, // edition count not confirmed yet
    editions: [
      {
        no: null,
        title: 'ITAD & WEEE Global Leaders Meet 2026',
        date: '5 – 6 Oct, 2026',
        venue: 'The LaLiT, New Delhi',
        image: photo(itadPhotos, 'itad/6k4a4743'),
      },
    ],
  },
];

const ordinal = (n) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export default function Pastevents() {
  const [seriesId, setSeriesId] = useState(SERIES[0].id);
  const [editionNo, setEditionNo] = useState(null); // which numbered dot is selected
  const series = SERIES.find((s) => s.id === seriesId);

  const pick = (id) => {
    setSeriesId(id);
    setEditionNo(null);
  };

  // The edition shown below: the picked dot if there is one, else the latest we have details for.
  const known = series.editions;
  const shown =
    (editionNo && known.find((e) => e.no === editionNo)) || (editionNo ? null : known[known.length - 1]);

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
          <p className="pv-sub">
            Choose an event to see how many editions we have hosted and a look back at the latest one.
          </p>
        </div>

        {/* event folders */}
        <div className="pv-folders" role="tablist" aria-label="Past events">
          {SERIES.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={s.id === seriesId}
              className={`pv-folder ${s.id === seriesId ? 'active' : ''}`}
              onClick={() => pick(s.id)}
            >
              <Folder size={22} fill="currentColor" strokeWidth={1.5} />
              <span>{s.name}</span>
            </button>
          ))}
        </div>

        <div className="pv-panel" key={series.id} role="tabpanel">
          {/* how many editions */}
          <div className="pv-count">
            {series.held ? (
              <>
                <span className="pv-count-num">{String(series.held).padStart(2, '0')}</span>
                <span className="pv-count-label">Editions held</span>
              </>
            ) : (
              <>
                <span className="pv-count-num pv-count-num--year">{known[known.length - 1].date.slice(-4)}</span>
                <span className="pv-count-label">Latest edition</span>
              </>
            )}
            <p className="pv-count-blurb">{series.blurb}</p>

            {series.held && (
              <ol className="pv-dots" aria-label={`${series.held} past editions`}>
                {Array.from({ length: series.held }, (_, i) => i + 1).map((n) => (
                  <li key={n}>
                    <button
                      type="button"
                      className={`pv-dot ${(editionNo ?? known[known.length - 1].no) === n ? 'active' : ''} ${known.some((e) => e.no === n) ? '' : 'pv-dot--empty'}`}
                      onClick={() => setEditionNo(n)}
                      aria-label={`${ordinal(n)} edition`}
                    >
                      {n}
                    </button>
                  </li>
                ))}
                {series.upcoming && (
                  <li>
                    <a
                      className="pv-dot pv-dot--next"
                      href={series.upcoming.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Upcoming edition"
                      title="Upcoming edition"
                    >
                      {series.held + 1}
                    </a>
                  </li>
                )}
              </ol>
            )}
            {series.upcoming && <p className="pv-next">Next: {series.upcoming.label}</p>}
          </div>

          {/* the edition */}
          {shown ? (
            <article className="pv-edition">
              <div className="pv-edition-photo" style={{ backgroundImage: `url(${shown.image})` }}>
                <span className="pv-edition-badge">{shown.no ? `${ordinal(shown.no)} edition` : 'Latest edition'}</span>
              </div>
              <div className="pv-edition-body">
                <h3>{shown.title}</h3>
                <div className="pv-meta">
                  <span>
                    <Calendar size={15} />
                    {shown.date}
                  </span>
                  <span>
                    <MapPin size={15} />
                    {shown.venue}
                  </span>
                </div>
                <a href="#gallery" className="pv-recap">
                  See photos <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ) : (
            <div className="pv-edition pv-edition--soon">
              <Hourglass size={30} />
              <h3>{ordinal(editionNo)} edition</h3>
              <p>Photos and details for this edition will be added soon.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
