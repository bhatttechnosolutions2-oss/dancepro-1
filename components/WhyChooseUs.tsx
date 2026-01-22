import React from 'react';
import { FEATURES } from '../constants';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 uppercase">
            Why Train With <span className="text-yellow-500">Dance Pro?</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            We don't just teach steps; we build performers. Experience the difference of training with the best in Guwahati.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-yellow-500/50 transition-colors group">
              <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-yellow-500 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">
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