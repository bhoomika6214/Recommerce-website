import React from "react";
import { Globe2, Users, Star, Sprout, Recycle } from "lucide-react";
import "./WhyChooseRecommerce.css";

const FEATURES = [
  {
    id: 1,
    title: "Circular Economy Pioneers",
    description:
      "Recommerce leads the charge in fostering a circular economy, transforming waste into valuable resources.",
    Icon: Globe2,
    image: "/images/why-choose/circular-economy.jpg",
  },
  {
    id: 2,
    title: "Expertise-Driven Events",
    description:
      "Recommerce leads the charge in fostering a circular economy, transforming waste into valuable resources.",
    Icon: Users,
    withStar: true,
    image: "/images/why-choose/expertise-events.jpg",
  },
  {
    id: 3,
    title: "Positive Impact",
    description:
      "Recommerce leads the charge in fostering a circular economy, transforming waste into valuable resources.",
    Icon: Sprout,
    image: "/images/why-choose/positive-impact.jpg",
  },
];

function FeatureRow({ feature }) {
  const { title, description, Icon, withStar, image } = feature;

  return (
    <div className="why-feature">
      <div className="why-feature__icon">
        {withStar && (
          <Star className="why-feature__icon-star" size={14} fill="currentColor" />
        )}
        <Icon size={28} strokeWidth={1.6} />
      </div>

      <span className="why-feature__divider" />

      <div className="why-feature__text">
        <h3 className="why-feature__title">{title}</h3>
        <span className="why-feature__underline" />
        <p className="why-feature__desc">{description}</p>
      </div>

      <div className="why-feature__media">
        <img src={image} alt={title} className="why-feature__img" />
      </div>
    </div>
  );
}

export default function WhyChooseRecommerce() {
  return (
    <section className="why-choose">
      <div className="why-choose__left">
        <div className="why-choose__eyebrow">
          <span className="why-choose__eyebrow-line" />
          WHY CHOOSE
        </div>

        <h2 className="why-choose__heading">
          Why Choose
          <br />
          <span className="why-choose__heading-accent">Recommerce</span>
        </h2>

        <span className="why-choose__heading-underline" />

        <p className="why-choose__desc">
          Driving change. Creating impact. Empowering industries for a
          sustainable tomorrow.
        </p>

        <div className="why-choose__infinity">
          <svg
            className="why-choose__infinity-svg"
            viewBox="0 0 620 340"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="loopLeft">
                <circle cx="185" cy="170" r="150" />
              </clipPath>
              <clipPath id="loopRight">
                <circle cx="435" cy="170" r="150" />
              </clipPath>
              <radialGradient id="loopGlow" cx="50%" cy="50%" r="60%">
                <stop offset="70%" stopColor="rgba(47,125,255,0)" />
                <stop offset="100%" stopColor="rgba(47,125,255,0.35)" />
              </radialGradient>
            </defs>

            <g clipPath="url(#loopLeft)">
              <image
                href="/images/why-choose/infinity-nature.jpg"
                x="35"
                y="20"
                width="300"
                height="300"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>

            <g clipPath="url(#loopRight)">
              <image
                href="/images/why-choose/infinity-turbines.jpg"
                x="285"
                y="20"
                width="300"
                height="300"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>

            <circle
              cx="185"
              cy="170"
              r="150"
              fill="none"
              stroke="#2f7dff"
              strokeWidth="3"
              opacity="0.9"
            />
            <circle
              cx="435"
              cy="170"
              r="150"
              fill="none"
              stroke="#2f7dff"
              strokeWidth="3"
              opacity="0.9"
            />

            <circle cx="185" cy="170" r="150" fill="url(#loopGlow)" />
            <circle cx="435" cy="170" r="150" fill="url(#loopGlow)" />
          </svg>

          <div className="why-choose__badge why-choose__badge--1">
            <Recycle size={18} strokeWidth={2} />
          </div>
          <div className="why-choose__badge why-choose__badge--2">
            <Recycle size={18} strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="why-choose__right">
        {FEATURES.map((feature) => (
          <FeatureRow key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}