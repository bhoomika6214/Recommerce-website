import { Star } from 'lucide-react';
import './WhyChooseRecommerce.css';
import Loop from '../assets/whyChooseLoop.png';
import { features } from './whyData';

export default function WhyChooseRecommerce() {
  return (
    <section className="wx" id="why">
      <div className="wx-wrap wx-grid">
        {/* Heading and loop stay in view while the cards slide over each other. */}
        <div className="wx-left">
          <div className="wx-eyebrow">
            <span className="wx-eyebrow-line" />
            WHY CHOOSE
          </div>
          <h2 className="wx-heading">
            Why Choose <span className="wx-accent">Recommerce</span>
          </h2>
          <p className="wx-sub">
            Driving change. Creating impact. Empowering industries for a sustainable tomorrow.
          </p>
          <img src={Loop} alt="Recommerce circular loop" className="wx-loop" />
        </div>

        <div className="wx-stack">
          {features.map((f, i) => (
            <article className="wx-card" key={f.id} style={{ '--i': i }}>
              <div className="wx-text">
                <span className="wx-no">{f.no}</span>
                <span className="wx-icon">
                  {f.star && <Star className="wx-icon-star" size={12} fill="currentColor" />}
                  <f.Icon size={26} strokeWidth={1.7} />
                </span>
                <h3>{f.title}</h3>
                <span className="wx-rule" />
                <p>{f.description}</p>
              </div>
              <div
                className={`wx-photo wx-photo--${f.id}`}
                style={{ '--img': `url(${f.image})` }}
                role="img"
                aria-label={f.title}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
