import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface Props {
  onOpenModal: () => void;
}

const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1920&auto=format&fit=crop", 
  "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555597408-26bc8e548a46?q=80&w=1920&auto=format&fit=crop"
];

export const Hero: React.FC<Props> = ({ onOpenModal }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-black">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {CAROUSEL_IMAGES.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-60' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              alt="Dance studio" 
              className="w-full h-full object-cover scale-105 animate-[pulse_10s_infinite]"
            />
          </div>
        ))}
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl">
          
          <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">
             <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-black uppercase tracking-widest skew-x-[-12deg]">
                <span className="block skew-x-[12deg]">New Batches Open</span>
             </span>
             <span className="h-px w-20 bg-yellow-500/50"></span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black text-white leading-[0.9] tracking-tighter mb-8 animate-slide-up">
            MOVE WITH <br />
            <span className="text-stroke">PURPOSE</span> <br />
            <span className="text-yellow-500">DANCE PRO</span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-300 max-w-xl mb-10 leading-relaxed border-l-4 border-yellow-500 pl-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Guwahati's premier dance academy. Master <strong>Hip-Hop, Contemporary & Bollywood</strong> with professional choreographers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <button 
              onClick={onOpenModal}
              className="group relative bg-yellow-500 text-black px-8 py-5 font-black uppercase tracking-widest overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Book Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0 mix-blend-screen"></div>
            </button>
            
            <a 
              href="#programs"
              className="group px-8 py-5 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center gap-3"
            >
              <Play className="w-4 h-4 fill-current" /> View Programs
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-4 animate-bounce">
        <span className="vertical-text text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] rotate-180" style={{writingMode: 'vertical-rl'}}>Scroll Down</span>
        <div className="w-px h-12 bg-zinc-800"></div>
      </div>
    </section>
  );
};
