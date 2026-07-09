import React from "react";
import { Globe2, Users, Star, Sprout, Recycle } from "lucide-react";
import "./WhyChooseRecommerce.css";
import Loop from "../assets/whyChooseLoop.png";
import card1 from "../assets/WhyChooseCardImage.png";
import card2 from "../assets/WhyChooseCradImage2.png";
import card3 from "../assets/WhyChooseCardImage3.png";

const FEATURES = [
  {
    id: 1,
    title: "Circular Economy Pioneers",
    description:
      "Recommerce leads the charge in fostering a circular economy, transforming waste into valuable resources.",
    Icon: Globe2,
    image: card1,
  },
  {
    id: 2,
    title: "Expertise-Driven Events",
    description:
      "Recommerce leads the charge in fostering a circular economy, transforming waste into valuable resources.",
    Icon: Users,
    withStar: true,
    image: card2,
  },
  {
    id: 3,
    title: "Positive Impact",
    description:
      "Recommerce leads the charge in fostering a circular economy, transforming waste into valuable resources.",
    Icon: Sprout,
    image: card3,
  },
];

function FeatureRow({ feature }) {
  const { title, description, Icon, withStar, image } = feature;

  return (
    <div className="why-feature" style={{ backgroundImage: `url(${image})` }}>
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
          <img src={Loop} alt="Recommerce Loop" className="why-choose__infinity-img" />

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