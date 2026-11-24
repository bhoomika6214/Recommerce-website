import ScrollExpandMedia from './ui/scroll-expansion-hero';
import heroVideo from '../assets/background_video.mp4';
import './Hero2.css';

const Hero2 = () => {
  const bgImage = "https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYMNjMlBUYHaeYpxduXPVNwf8mnFA61L7rkcoS";

  return (
    <div className="hero-scroll-container">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc={heroVideo}
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