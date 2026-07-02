import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Industries.css";

const items = [
  {
    id: "01",
    title: "IT Asset Disposition (ITAD)",
    large: true,
    lines: [
      "Enterprise asset recovery",
      "Data destruction",
      "Remarketing",
      "Lifecycle management",
    ],
  },
  {
    id: "02",
    title: "E-Waste Recycling",
    lines: ["Collection systems", "Processing technologies", "Compliance"],
  },
  {
    id: "03",
    title: "Battery Recycling",
    lines: ["EV batteries", "Energy storage systems", "Critical minerals recovery"],
  },
  {
    id: "04",
    title: "Circular Manufacturing",
    lines: ["Product redesign", "Material recovery", "Sustainable production"],
  },
  {
    id: "05",
    title: "Reverse Logistics",
    lines: ["Returns management", "Supply chain optimization", "Resource recovery"],
  },
  {
    id: "06",
    title: "ESG & Sustainability",
    lines: ["Corporate sustainability", "Net-zero initiatives", "Environmental reporting"],
  },
  {
    id: "07",
    title: "Refurbishment & Reuse",
    lines: ["Device refurbishment", "Repair economy", "Secondary markets"],
  },
  {
    id: "08",
    title: "Green Technology",
    lines: ["Clean tech", "AI for sustainability", "Smart resource management"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] },
  }),
};

function IndustryCard({ item, index }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: "-60px" });
  const isLarge = item.large;

  return (
    <motion.div
      ref={cardRef}
      className={`industry-card ${isLarge ? "industry-card--large" : ""}`}
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
    >
      <div className="industry-card__bg" />
      <div className="industry-card__glow" />
      <div className="industry-card__content">
        <span className="industry-card__id">{item.id}</span>
        <h3 className="industry-card__title">{item.title}</h3>
        <ul className="industry-card__list">
          {item.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Industries() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true });

  return (
    <section className="industries" ref={sectionRef} id="industries">
      <div className="industries__bg" />
      <div className="industries__grid-bg" />

      <div className="industries__header" ref={headerRef}>
        <motion.h2
          className="industries__headline"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Built For Every
          <br />
          Circular Industry.
        </motion.h2>
        <motion.p
          className="industries__subhead"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          From IT asset recovery to battery recycling,
          <br />
          Recommerce connects the industries shaping
          <br />
          the next generation of sustainable growth.
        </motion.p>
      </div>

      <div className="industries__grid">
        {items.map((item, i) => (
          <IndustryCard key={item.id} item={item} index={i} />
        ))}
      </div>

      <motion.div
        className="industries__footer"
        ref={footerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={footerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="industries__footer-line" />
        <p className="industries__footer-text">
          One Ecosystem.
          <br />
          Many Industries.
          <br />
          Shared Impact.
        </p>
      </motion.div>
    </section>
  );
}
