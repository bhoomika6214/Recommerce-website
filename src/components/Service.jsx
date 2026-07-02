import { BsCalendarEvent, BsLaptop, BsMegaphone } from 'react-icons/bs';
import './Service.css';

const Service = () => {
  const services = [
    {
      id: 'events',
      icon: <BsCalendarEvent />,
      title: 'Live Experiences',
      subtitle: 'Events',
      description: 'Turning corporate gatherings into high-stakes market milestones.',
      items: [
        {
          name: 'Conferences & Summits',
          text: 'End-to-end strategy, curation, and execution of industry-leading forums.',
        },
        {
          name: 'Corporate & B2B Events',
          text: 'Product launches, stakeholder meets, and exclusive networking environments designed to convert.',
        },
        {
          name: 'Government & Trade Platforms',
          text: 'High-security, strictly compliant public-sector engagements and international expos.',
        },
      ],
    },
    {
      id: 'marketing',
      icon: <BsLaptop />,
      title: 'Digital Brand Management',
      subtitle: 'Marketing',
      description: 'Deploying digital ecosystems that sustain your market prominence.',
      items: [
        {
          name: 'Brand Strategy & Identity',
          text: 'Corporate positioning, messaging frameworks, and visual identities that command premium pricing.',
        },
        {
          name: 'Digital & Social Engineering',
          text: 'Full-scale social media management, performance marketing, and high-conversion content creation.',
        },
        {
          name: 'Experiential Digital Campaigns',
          text: 'Pre-event buzz generation, post-event momentum management, and data-driven lead generation infrastructure.',
        },
      ],
    },
  ];

  return (
    <section className="service-section">
      <div className="service-header">
        <div className="section-eyebrow">
          <span className="eyebrow-line"></span>
          OUR SERVICES
        </div>
        <h1 className="service-title">
          End-to-End <span className="text-blue">Solutions</span> for Your Brand
        </h1>
        <p className="service-description">
          From live events to digital brand management, we deliver comprehensive strategies that drive results.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-card-header">
              <span className="service-icon text-blue">{service.icon}</span>
              <div>
                <h2 className="service-card-title">{service.title}</h2>
                <span className="service-card-subtitle">({service.subtitle})</span>
              </div>
            </div>

            <p className="service-card-description">{service.description}</p>

            <div className="service-card-items">
              {service.items.map((item, index) => (
                <div key={index} className="service-item">
                  <h4 className="service-item-name">{item.name}</h4>
                  <p className="service-item-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
