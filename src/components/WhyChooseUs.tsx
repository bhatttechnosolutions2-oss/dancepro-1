import React from 'react';
import { FEATURES } from '../constants';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-black relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-end">
          <div className="max-w-2xl">
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2 block">The Dance Pro Advantage</span>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase leading-none">
              Why We <span className="text-stroke">Dominate</span> <br/> The Floor
            </h2>
          </div>
          <div className="h-px flex-1 bg-zinc-800 mb-4 hidden md:block"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, idx) => (
            <div 
              key={feature.id} 
              className={`p-8 border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900 transition-colors group ${idx === 1 || idx === 2 ? 'lg:bg-zinc-900/40' : ''}`}
            >
              <feature.icon className="w-10 h-10 text-zinc-500 group-hover:text-yellow-500 transition-colors mb-6" />
              <h3 className="text-xl font-bold text-white uppercase mb-3 group-hover:translate-x-1 transition-transform">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
