import { useRef, useEffect } from "react";
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

// The 11 post-show reports. Everything here is read from the report covers themselves.
// Order: Recommerce Expo (newest first), then ITAD, Textile and C&D.
const REPORT_URL = "https://events.recommerceeco.com/?f=0WH6HBIt4ssa1TSZbIZB&e=O4XrnthpX51ToWC48v5y";

const reports = [
  { id: 1, series: "Recommerce Expo", title: "6th Recommerce Expo", date: "29 – 30 Apr, 2026", venue: "The LaLiT Ashok, Bengaluru", image: Posture11 },
  { id: 2, series: "Recommerce Expo", title: "5th Recommerce Expo", date: "3 – 5 Sep, 2024", venue: "The LaLiT Ashok, Bengaluru", image: Posture7 },
  { id: 3, series: "Recommerce Expo", title: "4th Recommerce Expo", date: "9 – 10 Aug, 2023", venue: "Palace Grounds, Bengaluru", image: Posture6 },
  { id: 4, series: "Recommerce Expo", title: "3rd Recommerce Expo", date: "18 – 20 May", venue: "The LaLiT Ashok, Bengaluru", image: Posture5 },
  { id: 5, series: "Recommerce Expo", title: "Recommerce Expo 2020", date: "6 – 7 Mar, 2020", venue: "The LaLiT Ashok, Bengaluru", image: Posture4 },
  { id: 6, series: "Recommerce Expo", title: "1st Recommerce Expo", date: "1 – 3 Feb, 2019", venue: "Bengaluru", image: Posture3 },
  { id: 7, series: "ITAD & WEEE", title: "ITAD & WEEE Global Leaders Meet", date: "30 – 31 Oct, 2025", venue: "Delhi", image: Posture8 },
  { id: 8, series: "Textile", title: "4th Sustainable Clothing & Textile Recycling Conference", date: "19 Oct, 2022", venue: "Radisson Blu, Jaipur", image: Posture1 },
  { id: 9, series: "Textile", title: "3rd Sustainable Clothing & Textile Recycling Conference", date: "10 Aug, 2022", venue: "The Residency Towers, Coimbatore", image: Posture2 },
  { id: 10, series: "Textile", title: "1st Sustainable Clothing & Textile Recycling Conference", date: "30 Apr, 2021", venue: "Online", image: Posture10 },
  { id: 11, series: "C&D", title: "International Conference on Construction & Demolition Waste Management", date: "7 Dec, 2022", venue: "The Park, Hyderabad", image: Posture9 },
];

function ReportCard({ report, hidden }) {
  return (
    <div className="poster-card" aria-hidden={hidden ? true : undefined}>
      <div className="image-container">
        <img draggable={false} src={report.image} alt={hidden ? "" : `${report.title} post-show report cover`} className="poster-image" loading="lazy" />
        <span className="report-series">{report.series}</span>
      </div>
      <div className="card-content">
        <div>
          <h3 className="report-title">{report.title}</h3>
          <p className="report-meta">
            {report.date} · {report.venue}
          </p>
        </div>
        <a
          href={REPORT_URL}
          className="view-report-btn"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={hidden ? -1 : undefined}
        >
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
  );
}

// Pixels per second the row drifts on its own.
const SPEED = 55;
// How long (ms) an arrow click takes to slide the row by one card.
const STEP_MS = 520;

const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

const PosterReport = () => {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const api = useRef({ step: () => {} });

  /*
   * The row is moved with a transform from one animation loop (no scrollLeft), so the motion is
   * sub-pixel smooth. The cards are rendered twice; when the position passes the width of one
   * copy it wraps back by exactly that width, and because both copies are identical the wrap
   * can't be seen. The loop pauses on hover, while dragging, while off screen, and it doesn't
   * drift on its own when the visitor has asked for reduced motion.
   */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pos = 0; // current offset in px (always kept within 0..loop)
    let loop = 0; // width of one copy of the cards
    let pitch = 0; // distance from one card to the next
    let raf = 0;
    let last = 0;
    let onScreen = true;
    let hovering = false;
    let dragging = false;
    let anim = null; // { from, to, start }

    const measure = () => {
      const cards = track.querySelectorAll(".poster-card");
      const n = cards.length / 2;
      if (n < 1) return;
      const a = cards[0].getBoundingClientRect().left;
      pitch = cards[1].getBoundingClientRect().left - a;
      loop = cards[n].getBoundingClientRect().left - a;
    };

    const wrap = (v) => (loop > 0 ? ((v % loop) + loop) % loop : v);
    const paint = () => {
      track.style.transform = `translate3d(${-pos}px,0,0)`;
    };

    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (anim) {
        const t = Math.min(1, (now - anim.start) / STEP_MS);
        pos = wrap(anim.from + (anim.to - anim.from) * easeInOut(t));
        if (t >= 1) anim = null;
      } else if (!hovering && !dragging && !reduced.matches) {
        pos = wrap(pos + SPEED * dt);
      }
      paint();
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (raf || !onScreen || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    // arrows: slide by one card
    api.current.step = (dir) => {
      measure();
      const base = anim ? anim.to : pos;
      anim = { from: pos, to: base + dir * pitch, start: performance.now() };
      start();
    };

    // drag / swipe with a mouse, finger or pen
    let startX = 0;
    let startPos = 0;
    let moved = 0;
    const onDown = (e) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      dragging = true;
      anim = null;
      moved = 0;
      startX = e.clientX;
      startPos = pos;
      wrapper.classList.add("is-dragging");
      try {
        wrapper.setPointerCapture(e.pointerId);
      } catch {
        /* capture is best-effort */
      }
    };
    const onMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      pos = wrap(startPos - dx);
      paint();
    };
    const onUp = (e) => {
      if (!dragging) return;
      dragging = false;
      wrapper.classList.remove("is-dragging");
      if (wrapper.hasPointerCapture(e.pointerId)) wrapper.releasePointerCapture(e.pointerId);
    };
    // a drag must not count as a click on a "View Report" link
    const onClickCapture = (e) => {
      if (moved > 6) {
        e.preventDefault();
        e.stopPropagation();
        moved = 0;
      }
    };

    const onEnter = (e) => {
      if (e.pointerType === "mouse") hovering = true;
    };
    const onLeave = () => {
      hovering = false;
    };
    const onFocusIn = () => {
      hovering = true;
    };
    const onFocusOut = () => {
      hovering = false;
    };

    measure();
    paint();
    const ro = new ResizeObserver(() => {
      measure();
      pos = wrap(pos);
      paint();
    });
    ro.observe(wrapper);
    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) start();
      else stop();
    });
    io.observe(wrapper);
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    wrapper.addEventListener("pointerdown", onDown);
    wrapper.addEventListener("pointermove", onMove);
    wrapper.addEventListener("pointerup", onUp);
    wrapper.addEventListener("pointercancel", onUp);
    wrapper.addEventListener("pointerenter", onEnter);
    wrapper.addEventListener("pointerleave", onLeave);
    wrapper.addEventListener("focusin", onFocusIn);
    wrapper.addEventListener("focusout", onFocusOut);
    wrapper.addEventListener("click", onClickCapture, true);
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      wrapper.removeEventListener("pointerdown", onDown);
      wrapper.removeEventListener("pointermove", onMove);
      wrapper.removeEventListener("pointerup", onUp);
      wrapper.removeEventListener("pointercancel", onUp);
      wrapper.removeEventListener("pointerenter", onEnter);
      wrapper.removeEventListener("pointerleave", onLeave);
      wrapper.removeEventListener("focusin", onFocusIn);
      wrapper.removeEventListener("focusout", onFocusOut);
      wrapper.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <section className="poster-report-section" id="reports">
      <div className="carousel-header">
        <p className="carousel-eyebrow">EVENT REPORTS</p>
        <h2>
          Post Show <span>Reports</span>
        </h2>
        <p className="carousel-sub">
          Read the report of every edition we have hosted: the Recommerce Expo, ITAD &amp; WEEE, Textile and C&amp;D conferences.
        </p>
      </div>

      <div className="carousel-container">
        <button className="carousel-arrow carousel-arrow-left" onClick={() => api.current.step(-1)} aria-label="Previous report">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="carousel-wrapper" ref={wrapperRef}>
          <div className="carousel-track" ref={trackRef}>
            {reports.map((report) => (
              <ReportCard key={`first-${report.id}`} report={report} />
            ))}
            {/* the same cards again, so the row can loop without a jump */}
            {reports.map((report) => (
              <ReportCard key={`second-${report.id}`} report={report} hidden />
            ))}
          </div>
        </div>

        <button className="carousel-arrow carousel-arrow-right" onClick={() => api.current.step(1)} aria-label="Next report">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default PosterReport;
