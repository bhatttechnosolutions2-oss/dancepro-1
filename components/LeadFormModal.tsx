import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadFormModal: React.FC<Props> = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fade-in" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md z-10 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:-right-8 text-zinc-400 hover:text-white transition-colors bg-zinc-800/50 p-2 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>
        
        <LeadForm onSuccess={onClose} className="shadow-2xl ring-1 ring-white/10" />
      </div>
    </div>
  );
};