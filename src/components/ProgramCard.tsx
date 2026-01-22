import React from 'react';
import { Program } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface Props {
  program: Program;
  onOpenModal: () => void;
}

export const ProgramCard: React.FC<Props> = ({ program, onOpenModal }) => {
  return (
    <div 
      className="group relative h-[450px] overflow-hidden bg-zinc-900 cursor-pointer border-b-4 border-transparent hover:border-yellow-500 transition-all duration-300"
      onClick={onOpenModal}
    >
      {/* Image */}
      <img 
        src={program.image} 
        alt={program.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
           <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest border border-white/10">
             {program.level}
           </span>
           <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             <ArrowUpRight className="w-5 h-5 text-black" />
           </div>
        </div>
        
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-3xl font-heading font-black text-white uppercase italic leading-none mb-3">
            {program.title}
          </h3>
          <p className="text-zinc-400 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {program.description}
          </p>
          <span className="inline-block mt-4 text-yellow-500 text-xs font-bold uppercase tracking-widest border-b border-yellow-500 pb-1">
            Join Class
          </span>
        </div>
      </div>
    </div>
  );
};
