import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './GalleryPage.css';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    title: 'Sustainability Summit 2024',
    category: 'Events',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    title: 'Team Collaboration Workshop',
    category: 'Workshops',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    title: 'Green Innovation Hub',
    category: 'Office',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80',
    title: 'Circular Economy Expo',
    category: 'Events',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    title: 'Modern Workspace',
    category: 'Office',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    title: 'Team Building Activity',
    category: 'Team',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    title: 'Training Session',
    category: 'Workshops',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    title: 'Sustainable Office Design',
    category: 'Office',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    title: 'Conference Presentation',
    category: 'Events',
  },
];

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gallery-page" style={{ paddingTop: '70px' }}>
      <Navbar />
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay" />
        <div className="gallery-hero-content">
          <span className="gallery-eyebrow">OUR GALLERY</span>
          <h1 className="gallery-title">
            Capturing <span className="gallery-title-accent">Moments</span> of Impact
          </h1>
          <p className="gallery-subtitle">
            Explore our journey through images showcasing events, teamwork, and sustainability in action.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <div className="gallery-image-wrapper">
                <img src={image.url} alt={image.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <span className="gallery-category">{image.category}</span>
                  <h3 className="gallery-image-title">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
