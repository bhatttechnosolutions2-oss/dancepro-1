import React, { useState, useEffect } from 'react';
import { LeadForm } from './LeadForm';

interface Props {
  onOpenModal: () => void;
}

const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1920&auto=format&fit=crop", // Male Jump
  "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=1920&auto=format&fit=crop", // Urban Style
  "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1920&auto=format&fit=crop"  // Dramatic Silhouette
];

export const Hero: React.FC<Props> = ({ onOpenModal }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {CAROUSEL_IMAGES.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt="Dance studio atmosphere" 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Permanent Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent md:to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
              New Batches in Guwahati
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-tight">
              UNLEASH YOUR <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">INNER DANCER</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-300 max-w-lg leading-relaxed">
              Join <strong>Dance Pro Studio</strong> in Birubari. Professional training in Hip-Hop, Contemporary, and Bollywood for all ages.
            </p>
            
            {/* CTA Buttons - Now visible on Desktop too */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={onOpenModal}
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold uppercase text-center hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20 transform hover:scale-105 duration-200"
              >
                Book Free Trial
              </button>
              <a href="tel:+917035419267" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-lg font-bold uppercase text-center hover:bg-white/20 transition-colors">
                Call Now
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-8 pt-8 text-sm font-semibold text-zinc-400 uppercase tracking-widest">
              <span>• Certified Instructors</span>
              <span>• Studio Events</span>
              <span>• All Ages</span>
            </div>
          </div>

          {/* Form Container (Desktop: Right Side, Mobile: Hidden/Stacked below) */}
          <div className="w-full max-w-md mx-auto lg:ml-auto" id="register">
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  );
};