import React from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-zinc-900 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          
          <div className="max-w-sm">
            <h2 className="text-5xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-6">
              Dance<span className="text-yellow-500">Pro</span>
            </h2>
            <p className="text-zinc-500 mb-8">
              Guwahati's ultimate destination for dance education. We don't just teach steps, we build artists.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/dance_pro_studio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all"
                aria-label="Visit Instagram Page"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/rajadas.rajadas.750/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all"
                aria-label="Visit Facebook Page"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6">Location</h4>
              <div className="flex gap-4 text-zinc-400">
                <MapPin className="w-6 h-6 text-yellow-500 shrink-0" />
                <address className="not-italic">
                  Das Brother 1st floor,<br/>
                  Kala pahar, AK Azad Rd,<br/>
                  Birubari, Guwahati, Assam 781001
                </address>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contact</h4>
              <div className="flex flex-col gap-4">
                <a href="tel:+917035419267" className="flex items-center gap-4 text-white hover:text-yellow-500 transition-colors">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <span className="text-xl font-bold">+91 70354 19267</span>
                </a>
                <a href="mailto:info@dancepro.com" className="text-zinc-400 hover:text-white">
                  rajmarten10@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-zinc-600 text-xs uppercase tracking-wider">&copy; 2024 Dance Pro Studio.</p>
           <p className="text-zinc-700 text-xs uppercase tracking-wider">Designed for Performance.</p>
        </div>
      </div>
    </footer>
  );
};