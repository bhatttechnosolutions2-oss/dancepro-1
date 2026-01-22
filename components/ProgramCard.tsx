import React from 'react';
import { Program } from '../types';
import { ArrowRight } from 'lucide-react';

interface Props {
  program: Program;
  onOpenModal: () => void;
}

export const ProgramCard: React.FC<Props> = ({ program, onOpenModal }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-900 aspect-[4/3] md:aspect-[3/4] isolate shadow-xl hover:shadow-2xl hover:shadow-yellow-500/10 transition-shadow">
      {/* Image */}
      <img 
        src={program.image} 
        alt={program.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        <span className="inline-block px-3 py-1 bg-yellow-500/90 text-black text-xs font-bold uppercase tracking-wider rounded-sm w-fit mb-3 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          {program.level}
        </span>
        
        <h3 className="text-2xl font-heading font-black text-white mb-2 uppercase italic leading-none drop-shadow-md">
          {program.title}
        </h3>
        
        <p className="text-zinc-300 text-sm mb-4 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 md:block hidden">
          {program.description}
        </p>

        {/* Visual Button - Always Visible */}
        <div className="mt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal();
              }}
              className="inline-flex items-center gap-2 bg-yellow-500 text-black font-bold uppercase text-sm tracking-wider px-5 py-3 rounded-lg hover:bg-yellow-400 transition-all shadow-lg transform group-hover:translate-x-1"
            >
              Join Class <ArrowRight className="w-4 h-4" />
            </button>
        </div>
        
        {/* Full Card Clickable Area */}
        <div 
            onClick={onOpenModal}
            className="absolute inset-0 z-20 cursor-pointer"
            aria-label={`Join ${program.title} Class`}
        ></div>
      </div>
    </div>
  );
};