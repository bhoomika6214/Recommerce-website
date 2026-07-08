import React from "react";
import {
  TrendingUp,
  BarChart3,
  Users,
  ClipboardList,
  Rocket,
  Briefcase,
  Globe2,
  Video,
  MessageSquare,
  ChevronsRight,
  ChevronsLeft,
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
    Icon: Briefcase,
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
    description:
      "Sharing knowledge and updates through expert sessions.",
    Icon: Video,
  },
  {
    number: "09",
    title: "Community Engagement",
    description: "Collaborating with communities to drive collective impact.",
    Icon: MessageSquare,
  },
];

function ServiceCard({ service }) {
  const { number, title, description, Icon } = service;
  return (
    <div className="service-card">
      <span className="service-card__badge">{number}</span>
      <div className="service-card__icon">
        <Icon size={26} strokeWidth={1.8} />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
    </div>
  );
}

export default function OurServices() {
  const topRow = SERVICES.slice(0, 4); // 01 - 04
  const bottomRow = [
    SERVICES[8],
    SERVICES[7],
    SERVICES[6],
    SERVICES[5],
    SERVICES[4],
  ]; // 09 - 05

  return (
    <section className="our-services">
      <div className="our-services__bg-glow" aria-hidden="true" />
      <div className="our-services__bg-dots" aria-hidden="true" />

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

      <div className="our-services__timeline">
        <div className="our-services__row">
          {topRow.map((service, i) => (
            <React.Fragment key={service.number}>
              <ServiceCard service={service} />
              {i < topRow.length - 1 && (
                <ChevronsRight className="our-services__arrow" size={26} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="our-services__connector" aria-hidden="true">
          <span className="our-services__dot" style={{ left: "22%" }} />
          <span className="our-services__dot" style={{ left: "48%" }} />
          <span className="our-services__dot" style={{ left: "74%" }} />
        </div>

        <div className="our-services__row">
          {bottomRow.map((service, i) => (
            <React.Fragment key={service.number}>
              <ServiceCard service={service} />
              {i < bottomRow.length - 1 && (
                <ChevronsLeft className="our-services__arrow" size={26} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}