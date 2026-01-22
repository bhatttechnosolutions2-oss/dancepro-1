import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-4">
             Real Stories, <span className="text-yellow-500">Real Results</span>
           </h2>
           <div className="flex justify-center gap-1 text-yellow-500 mb-2">
             {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
           </div>
           <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Rated 4.9/5 by 500+ Students</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-black p-8 border-l-4 border-yellow-500 relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center font-serif text-4xl text-zinc-700">"</div>
              <p className="text-zinc-300 mb-8 italic leading-relaxed relative z-10">{t.content}</p>
              
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <h4 className="text-white font-bold uppercase text-sm">{t.name}</h4>
                  <p className="text-xs text-zinc-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
