import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-4">
              Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">Stories</span>
            </h2>
            <p className="text-zinc-400">Join 5,000+ happy students who have transformed their lives through dance.</p>
          </div>
          <div className="flex items-center gap-2">
             <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/id/${100+i}/50/50`} className="w-10 h-10 rounded-full border-2 border-zinc-900" alt="Student" />
                ))}
             </div>
             <div className="text-white font-bold text-sm">
                 <span className="text-yellow-500">4.9/5</span> Rating
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-zinc-950 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-zinc-800" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-500"
                />
                <div>
                  <h4 className="text-white font-bold font-heading">{testimonial.name}</h4>
                  <p className="text-xs text-yellow-500 uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-zinc-300 italic">"{testimonial.content}"</p>
              
              <div className="flex gap-1 mt-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};