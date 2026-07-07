import React from 'react';
import { FiTarget, FiEye, FiTrendingUp } from 'react-icons/fi';
import './Missionvisionapproach.css';

const MissionVisionApproach = () => {
  const sections = [
    {
      id: 'mission',
      label: 'OUR MISSION',
      title: 'Mission',
      icon: FiTarget,
      description: 'Our mission at Recommerce is to lead the charge in creating a circular economy revolution. Through Recommerce, we inspire, educate, and empower businesses and individuals to make a positive environmental impact while fostering growth and success. Our dedication to superior customer experiences and innovative approaches transforms waste management into a valuable resource, not just a liability.',
    },
    {
      id: 'vision',
      label: 'OUR VISION',
      title: 'Vision',
      icon: FiEye,
      description: 'Recommerce, a visionary brand under Urdhva Management, envisions a world where waste is seen as an opportunity, not a burden.\n\nWe are committed to transforming the way waste is perceived, managed, and utilized. Our vision extends beyond waste management—it encompasses fostering sustainable practices across industries, resulting in a more equitable and sustainable future.',
    },
    {
      id: 'approach',
      label: 'OUR APPROACH',
      title: 'Our Approach',
      icon: FiTrendingUp,
      description: 'Recommerce is at the forefront of building a sustainable reverse commerce ecosystem. Through exhibitions, conferences, training workshops, and awareness programs, we unite industry experts and change-makers from diverse backgrounds to tackle global challenges head-on.\n\nBy providing top-notch services in the reverse commerce market, we set a new standard for industry and customer experiences.',
    },
  ];

  return (
    <div className="mva-container">
      <div className="mva-grid">
        {sections.map((section) => {
          const IconComponent = section.icon;
          return (
            <div key={section.id} className="mva-card">
              <div className="mva-card-header">
                <div className="mva-icon-circle">
                  <IconComponent size={40} />
                </div>
                <p className="mva-label">{section.label}</p>
                <h2 className="mva-title">{section.title}</h2>
              </div>
              <div className="mva-divider"></div>
              <div className="mva-card-body">
                <p className="mva-description">{section.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MissionVisionApproach;
