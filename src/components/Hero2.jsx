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
        <div className="max-w-6xl mx-auto px-4 py-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            {/* Text description section */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-8 h-0.5 bg-blue-500"></span>
                <span className="text-sm font-semibold tracking-wider text-blue-400 uppercase">OUR MISSION</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Building a Sustainable Future <span className="text-blue-400">Together.</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Connecting industries, innovators, and sustainability leaders to drive meaningful change. Recommerce is at the forefront of the circular economy transition, empowering organizations to eliminate waste and optimize resource recovery.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('events');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-[#009BFF] hover:bg-[#0085db] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 text-sm tracking-wider uppercase inline-block text-center cursor-pointer no-underline"
                >
                  EXPLORE EVENTS →
                </a>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-200 text-sm tracking-wider uppercase inline-block text-center cursor-pointer no-underline"
                >
                  OUR SERVICES
                </a>
              </div>
            </div>

            {/* Quick stats section */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-3xl font-extrabold text-blue-400 mb-1">500+</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Partners Connected</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-3xl font-extrabold text-blue-400 mb-1">10K+</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Tons Diverted</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-3xl font-extrabold text-blue-400 mb-1">50+</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Eco Projects</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-3xl font-extrabold text-blue-400 mb-1">99%</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Client Rating</p>
              </div>
            </div>

          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
};

export default Hero2;