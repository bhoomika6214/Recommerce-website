import { useRef, useEffect, useCallback } from "react";
import "./PosterReport.css";
import Posture1 from "../assets/Posture1.jpg";
import Posture7 from "../assets/Posture7.jpg";
import Posture3 from "../assets/Posture3.jpg";
import Posture4 from "../assets/Posture4.png";
import Posture5 from "../assets/Posture5.jpg";
import Posture6 from "../assets/Posture6.jpg";
import Posture2 from "../assets/Posture2.jpg";
import Posture8 from "../assets/Posture8.jpg";
import Posture9 from "../assets/Posture9.jpg";
import Posture10 from "../assets/Posture10.jpg";
import Posture11 from "../assets/Posture11.jpg";

const reports = [
  { id: 1, title: "Carbon Market & Li-Ion", image: Posture1 },
  { id: 2, title: "E-Waste Guidelines", image: Posture2 },
  { id: 3, title: "RecomLive 2026 Preview", image: Posture3 },
  { id: 4, title: "ITAD Management", image: Posture4 },
  { id: 5, title: "Circular Economy", image: Posture5 },
  { id: 6, title: "MSME Digital Growth", image: Posture6 },
  { id: 7, title: "Govt Policies & WEEE", image: Posture7 },
  { id: 8, title: "Sustainable Packaging", image: Posture8 },
  { id: 9, title: "Critical Mineral Recovery", image: Posture9 },
  { id: 10, title: "EV Battery Transitions", image: Posture10 },
  { id: 11, title: "Green Tech Innovations", image: Posture11 },
];

const PosterReport = () => {
  const wrapperRef = useRef(null);
  const autoScrollRef = useRef(null);
  const timeoutRef = useRef(null);

  const totalCards = reports.length;

  const getCardWidth = useCallback(() => {
    if (!wrapperRef.current) return 360;
    const cards = wrapperRef.current.querySelectorAll('.poster-card');
    if (cards.length < 2) return 360;
    const rect1 = cards[0].getBoundingClientRect();
    const rect2 = cards[1].getBoundingClientRect();
    return rect2.left - rect1.left;
  }, []);

  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      if (!wrapperRef.current) return;
      const cardWidth = getCardWidth();
      const loopWidth = totalCards * cardWidth;
      
      wrapperRef.current.style.scrollBehavior = 'auto';
      if (wrapperRef.current.scrollLeft >= loopWidth) {
        wrapperRef.current.scrollLeft -= loopWidth;
      } else {
        wrapperRef.current.scrollLeft += 1;
      }
    }, 20);
  }, [getCardWidth, totalCards]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => {
      stopAutoScroll();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [startAutoScroll, stopAutoScroll]);

  const handlePrev = useCallback(() => {
    stopAutoScroll();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (!wrapperRef.current) return;
    const cardWidth = getCardWidth();
    const loopWidth = totalCards * cardWidth;

    let currentScroll = wrapperRef.current.scrollLeft;
    if (currentScroll <= 5) {
      wrapperRef.current.style.scrollBehavior = 'auto';
      wrapperRef.current.scrollLeft = currentScroll + loopWidth;
      currentScroll = wrapperRef.current.scrollLeft;
    }

    const targetScroll = Math.floor((currentScroll - 1) / cardWidth) * cardWidth;

    wrapperRef.current.style.scrollBehavior = 'smooth';
    wrapperRef.current.scrollLeft = targetScroll;

    timeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 3000);
  }, [getCardWidth, totalCards, startAutoScroll, stopAutoScroll]);

  const handleNext = useCallback(() => {
    stopAutoScroll();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (!wrapperRef.current) return;
    const cardWidth = getCardWidth();
    const loopWidth = totalCards * cardWidth;

    let currentScroll = wrapperRef.current.scrollLeft;
    if (currentScroll >= loopWidth) {
      wrapperRef.current.style.scrollBehavior = 'auto';
      wrapperRef.current.scrollLeft = currentScroll - loopWidth;
      currentScroll = wrapperRef.current.scrollLeft;
    }

    const targetScroll = Math.ceil((currentScroll + 1) / cardWidth) * cardWidth;

    wrapperRef.current.style.scrollBehavior = 'smooth';
    wrapperRef.current.scrollLeft = targetScroll;

    timeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 3000);
  }, [getCardWidth, totalCards, startAutoScroll, stopAutoScroll]);

  return (
    <section className="poster-report-section">
      <div className="carousel-header">
        <h2>Latest Reports</h2>
      </div>

      <div className="carousel-container">
        <button className="carousel-arrow carousel-arrow-left" onClick={handlePrev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="carousel-wrapper" ref={wrapperRef}>
          <div className="carousel-track">
            {/* Render the 11 cards once */}
            {reports.map((report) => (
              <div className="poster-card" key={`first-${report.id}`}>
                <div className="image-container">
                  <img src={report.image} alt={report.title} className="poster-image" loading="lazy" />
                </div>
                <div className="card-content">
                  <h3 className="report-title">{report.title}</h3>
                  <a href="https://events.recommerceeco.com/?f=0WH6HBIt4ssa1TSZbIZB&e=O4XrnthpX51ToWC48v5y" className="view-report-btn" target="_blank" rel="noopener noreferrer">
                    View Report
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}

            {/* Render the exact same 11 cards AGAIN to create the infinite loop effect */}
            {reports.map((report) => (
              <div className="poster-card" key={`second-${report.id}`}>
                <div className="image-container">
                  <img src={report.image} alt={report.title} className="poster-image" loading="lazy" />
                </div>
                <div className="card-content">
                  <h3 className="report-title">{report.title}</h3>
                  <a href="https://events.recommerceeco.com/?f=0WH6HBIt4ssa1TSZbIZB&e=O4XrnthpX51ToWC48v5y" className="view-report-btn" target="_blank" rel="noopener noreferrer">
                    View Report
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-arrow carousel-arrow-right" onClick={handleNext} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default PosterReport;
