import './Events.css';

const eventsData = [
  {
    id: '01',
    title: 'ITAD & WEEE Global Leaders Meet',
    location: 'Frankfurt, Germany',
    date: '20 - 22 May, 2025',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '02',
    title: 'Battery Recycling & Circular Energy Summit',
    location: 'Singapore',
    date: '15 - 17 July, 2025',
    image: 'https://images.unsplash.com/photo-1509391366360-128aa1d5a7d9?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '03',
    title: 'Global Recommerce Summit',
    location: 'Dubai, UAE',
    date: '30 Sep - 2 Oct, 2025',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400',
    isActive: true, // Highlights the middle card initially
  },
  {
    id: '04',
    title: 'ESG & Sustainability Leaders Forum',
    location: 'London, UK',
    date: '18 - 19 Nov, 2025',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: '05',
    title: 'Circular Manufacturing Expo',
    location: 'Chicago, USA',
    date: '10 - 12 Dec, 2025',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400',
  }
];

const Events = () => {
  return (
    <div className="recommerce-container">

      {/* Main Content Area */}
      <main className="events-main">
        {/* Left Side: Text & Controls */}
        <div className="events-info">
          <div className="section-subtitle">
            <span className="icon">&#128197;</span> OUR FLAGSHIP EVENTS
          </div>
          <h1 className="section-title">
            Where the<br />Industry<br />
            <span className="highlight-text">Meets.</span>
          </h1>
          <p className="section-description">
            Global conferences, executive summits, industry expos, and leadership forums driving the future of circular commerce.
          </p>
          
          <a href="#all-events" className="view-all-link">
            <span className="arrow-circle">&rarr;</span> VIEW ALL EVENTS
          </a>

          <div className="slider-controls">
            <button className="control-btn prev">&larr;</button>
            <button className="control-btn next">&rarr;</button>
            <div className="progress-bars">
              <div className="bar active"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Slider Cards */}
        <div className="events-slider">
          {eventsData.map((event) => (
            <div key={event.id} className={`event-card ${event.isActive ? 'active-card' : ''}`}>
              <div className="card-image-container">
                <span className="card-number">{event.id}</span>
                <img src={event.image} alt={event.title} className="card-image" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{event.title}</h3>
                <div className="card-meta">
                  <span className="location">&#128205; {event.location}</span>
                  <span className="date">&#128197; {event.date}</span>
                </div>
                <button className="explore-btn">EXPLORE &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer / Bottom Graphic Area */}
      <footer className="recommerce-footer">
        <h2 className="footer-title">
          One Platform.<br />
          Multiple Industries.<br />
          <span className="highlight-text">Unlimited Opportunities.</span>
        </h2>
        <div className="glowing-arc"></div>
      </footer>
    </div>
  );
};

export default Events;