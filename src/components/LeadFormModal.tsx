import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadFormModal: React.FC<Props> = ({ isOpen, onClose }) => {
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
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-md z-10 animate-[scaleIn_0.3s_ease-out]">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-zinc-500 hover:text-white transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        
        <LeadForm onSuccess={onClose} className="shadow-[0_0_50px_rgba(234,179,8,0.2)]" />
      </div>
    </div>
  );
};
