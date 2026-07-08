import React, { useEffect, useRef } from "react";
import {
  TrendingUp,
  BarChart3,
  Users,
  ClipboardList,
  Rocket,
  Calendar,
  Globe2,
  Video,
  MessageSquare,
  ArrowRight,
  Leaf,
} from "lucide-react";
import "./Ourservices.css";

const SERVICES = [
  {
    number: "01",
    title: "Training and Workshops",
    description: "Building knowledge and skills for a sustainable future.",
    Icon: TrendingUp,
  },
  {
    number: "02",
    title: "Expo",
    description:
      "Showcasing innovations and solutions driving circular progress.",
    Icon: BarChart3,
    featured: true,
  },
  {
    number: "03",
    title: "Conference",
    description:
      "Bringing leaders together to discuss, collaborate and create impact.",
    Icon: Users,
  },
  {
    number: "04",
    title: "Market Research and Analysis",
    description:
      "Data-driven insights for informed decisions and strategies.",
    Icon: ClipboardList,
  },
  {
    number: "05",
    title: "Product Launches",
    description: "Helping sustainable solutions reach the right market.",
    Icon: Rocket,
  },
  {
    number: "06",
    title: "Supply Chain Project Management",
    description:
      "End-to-end management for efficient and responsible supply chains.",
    Icon: Calendar,
  },
  {
    number: "07",
    title: "Green Reporting",
    description:
      "Tracking, measuring and communicating your sustainability impact.",
    Icon: Globe2,
  },
  {
    number: "08",
    title: "Webinar and Seminar",
    description: "Sharing knowledge and updates through expert sessions.",
    Icon: Video,
  },
  {
    number: "09",
    title: "Community Engagement",
    description: "Collaborating with communities to drive collective impact.",
    Icon: MessageSquare,
  },
];

function ServiceCard({ service, index }) {
  const { number, title, description, Icon, featured } = service;
  return (
    <div
      className={`service-card${featured ? " service-card--featured" : ""}`}
      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
    >
      {featured && <span className="service-card__tag">FEATURED</span>}

      <div className="service-card__icon">
        <Icon size={26} strokeWidth={1.8} />
      </div>

      <div className="service-card__body">
        <span className="service-card__number">{number}</span>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__desc">{description}</p>
      </div>

      <ArrowRight className="service-card__arrow" size={18} strokeWidth={2} />
    </div>
  );
}

export default function Ourservices() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="our-services" ref={sectionRef}>
      <div className="our-services__spark" aria-hidden="true">
        <span className="spark-line spark-line--1" />
        <span className="spark-line spark-line--2" />
        <span className="spark-line spark-line--3" />
      </div>

      <div className="our-services__circle-reveal" aria-hidden="true" />

      <div className="our-services__bg-glow" aria-hidden="true" />
      <div className="our-services__bg-dots" aria-hidden="true" />

      <div className="our-services__content">
        <div className="our-services__header">
          <div className="our-services__eyebrow">
            <span className="our-services__eyebrow-line" />
            OUR SERVICES
          </div>
          <h2 className="our-services__heading">
            Comprehensive Solutions for a{" "}
            <span className="our-services__heading-accent">
              Circular Economy
            </span>{" "}
            in Action
          </h2>
          <p className="our-services__subtext">
            From knowledge to impact, we offer end-to-end services that empower industries, inspire action and drive sustainable transformation.
          </p>
        </div>

        <div className="our-services__grid">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>

        <div className="our-services__footer">
          <div className="our-services__footer-icon">
            <Leaf size={18} strokeWidth={1.8} />
          </div>
          <span className="our-services__footer-divider" />
          <p className="our-services__footer-text">
            Let&apos;s build a sustainable future together.
            <br />
            <a href="#connect" className="our-services__footer-link">
              Connect with us <ArrowRight size={16} strokeWidth={2.2} />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
