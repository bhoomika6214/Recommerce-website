import React, { useState } from 'react';
import {
  FiUsers,
  FiCalendar,
  FiGlobe,
  FiActivity,
  FiTrendingUp,
  FiBarChart2,
  FiClipboard,
  FiVideo,
  FiMessageSquare,
} from 'react-icons/fi';
import './OurServices.css';

const OurServices = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      number: '01',
      title: 'Training and Workshops',
      icon: FiTrendingUp,
      color: '#1572e6',
    },
    {
      id: 2,
      number: '02',
      title: 'Expo',
      icon: FiBarChart2,
      color: '#1572e6',
    },
    {
      id: 3,
      number: '03',
      title: 'Conference',
      icon: FiUsers,
      color: '#1572e6',
    },
    {
      id: 4,
      number: '04',
      title: 'Market Research and Analysis',
      icon: FiClipboard,
      color: '#1572e6',
    },
    {
      id: 5,
      number: '05',
      title: 'Product Launches',
      icon: FiActivity,
      color: '#1572e6',
    },
    {
      id: 6,
      number: '06',
      title: 'Supply Chain Project Management',
      icon: FiCalendar,
      color: '#1572e6',
    },
    {
      id: 7,
      number: '07',
      title: 'Green Reporting',
      icon: FiGlobe,
      color: '#1572e6',
    },
    {
      id: 8,
      number: '08',
      title: 'Webinar and Seminar',
      icon: FiVideo,
      color: '#1572e6',
    },
    {
      id: 9,
      number: '09',
      title: 'Community Engagement',
      icon: FiMessageSquare,
      color: '#1572e6',
    },
  ];


  return (
    <div className="our-services">
      <div className="our-services-container">
        {/* Left Content Section */}
        <div className="our-services-content">
          <div className="our-services-header">
            <p className="our-services-label">OUR SERVICES</p>
            <h1 className="our-services-title">
              Comprehensive Solutions for a <span className="highlight">Circular Economy</span> in Action
            </h1>
            <div className="our-services-divider"></div>
            <p className="our-services-description">
              From knowledge to impact, we offer end-to-end services that empower industries, inspire action and drive sustainable transformation.
            </p>
          </div>

        </div>

        {/* Right Circular Services Section */}
        <div className="services-circular-container">
          <div className="services-circle-wrapper">
            {/* Center Circle */}
            <div className="center-circle">
              <div className="center-content">
                <div className="center-asterisk">✱</div>
                <p className="center-text">RECOMMERCE</p>
                <p className="center-subtitle">Building a Sustainable Reverse Commerce Ecosystem</p>
              </div>
            </div>

            {/* Service Cards in Circle */}
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              const angle = (index / services.length) * 360;
              return (
                <div
                  key={service.id}
                  className="service-card-wrapper"
                  style={{
                    '--angle': angle,
                  }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className={`service-card ${hoveredService === service.id ? 'active' : ''}`}>
                    <div className="service-number">{service.number}</div>
                    <div className="service-icon">
                      <ServiceIcon size={32} />
                    </div>
                    <p className="service-title">{service.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;