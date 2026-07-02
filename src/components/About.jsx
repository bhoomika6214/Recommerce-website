import { BsBullseye, BsEye, BsDiamond, BsGraphUpArrow, BsPlayFill } from 'react-icons/bs';
import './About.css';

const About = () => {
  const cardsData = [
    {
      id: 'mission',
      icon: <BsBullseye />,
      title: 'Our Mission',
      content: 'Accelerate the circular economy by connecting industries and unlocking sustainable value at every stage of the resource lifecycle.'
    },
    {
      id: 'vision',
      icon: <BsEye />,
      title: 'Our Vision',
      content: 'To be the world\'s most trusted circular commerce ecosystem, driving a future where resources are valued, reused, and renewed without limits.'
    },
    {
      id: 'values',
      icon: <BsDiamond />,
      title: 'Our Values',
      isList: true,
      content: ['Sustainability', 'Collaboration', 'Innovation', 'Transparency', 'Impact']
    },
    {
      id: 'impact',
      icon: <BsGraphUpArrow />,
      title: 'Our Impact',
      content: 'Together, we turn industry challenges into circular opportunities—creating economic value for today and a better tomorrow for generations to come.'
    }
  ];

  return (
    <section className="about-section">
      {/* Top Section: Text & Globe */}
      <div className="about-hero">
        
        {/* Left Column: Text Content */}
        <div className="about-text-content">
          <div className="section-eyebrow">
            <span className="eyebrow-line"></span>
            ABOUT RECOMMERCE
          </div>
          
          <h1 className="about-title">
            Powering a<br />
            <span className="text-blue">Circular Tomorrow</span><br />
            Together Today.
          </h1>
          
          <p className="about-description">
            Recommerce is the global ecosystem connecting industries, 
            innovators, and leaders to build a more sustainable, 
            resource-efficient future through collaboration, innovation, 
            and circular solutions that create lasting impact.
          </p>
          
          <button className="mission-btn">
            <span className="play-icon-circle"><BsPlayFill className="play-icon-svg" /></span> 
            OUR MISSION &rarr;
          </button>
        </div>

        {/* Right Column: Globe Visual */}
        <div className="about-visual-center">
          <div className="globe-container">
            {/* Replace src with your specific 3D globe image or video */}
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" 
              alt="Global Ecosystem" 
              className="globe-image" 
            />
            <div className="globe-overlay-text">
              <span className="globe-eyebrow">A GLOBAL ECOSYSTEM</span>
              <h2>Connecting Today<br/>For a Sustainable<br/>Tomorrow</h2>
            </div>
          </div>
          {/* Glowing Pedestal Base */}
          <div className="pedestal-base">
            <div className="pedestal-ring-1"></div>
            <div className="pedestal-ring-2"></div>
            <div className="pedestal-glow"></div>
          </div>
        </div>

      </div>

      {/* Bottom Section: 4 Information Cards */}
      <div className="about-cards-grid">
        {cardsData.map((card) => (
          <div key={card.id} className="about-card">
            <div className="card-header">
              <span className="card-icon text-blue">{card.icon}</span>
              <h3 className="card-title">{card.title}</h3>
            </div>
            <div className="card-body">
              {card.isList ? (
                <ul className="values-list">
                  {card.content.map((item, index) => (
                    <li key={index}>
                      <span className="list-dot"></span>{item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{card.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Footer Banner */}
      <div className="about-bottom-banner">
        <p>MORE THAN A PLATFORM. A MOVEMENT.</p>
        <div className="bottom-glow-line"></div>
      </div>
    </section>
  );
};

export default About;