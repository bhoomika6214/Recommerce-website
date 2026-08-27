import React from 'react';
import ScrollExpandMedia from './ui/scroll-expansion-hero';
import './Hero2.css';

const Hero2 = () => {
  const bgImage = "https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYMNjMlBUYHaeYpxduXPVNwf8mnFA61L7rkcoS";
  const promptVideo = "https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1";
  const posterImage = "https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg";

  return (
    <div className="hero-scroll-container">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={promptVideo}
        posterSrc={posterImage}
        bgImageSrc={bgImage}
        title="RECOMMERCE ECOSYSTEM"
        date="Circular Economy Starts Here"
        scrollToExpand="Scroll to Explore"
        textBlend={false}
      >
      </ScrollExpandMedia>
    </div>
  );
};

export default Hero2;