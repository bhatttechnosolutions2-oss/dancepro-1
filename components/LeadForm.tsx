import React, { useState } from 'react';
import { FormData } from '../types';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

interface Props {
  onSuccess?: () => void;
  className?: string;
  isEmbedded?: boolean;
}

export const LeadForm: React.FC<Props> = ({ onSuccess, className = "", isEmbedded = false }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    interest: 'General Inquiry'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp URL
    const phoneNumber = "917035419267";
    const message = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Interest:* ${formData.interest}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    setTimeout(() => {
      console.log('Lead Captured:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', interest: 'General Inquiry' });
      
      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');

      // Auto close or reset
      if (onSuccess) {
         setTimeout(() => {
             onSuccess();
             setIsSuccess(false); 
         }, 2000);
      } else {
         setTimeout(() => setIsSuccess(false), 5000);
      }
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isSuccess) {
    return (
      <div className={`p-8 text-center flex flex-col items-center justify-center h-full ${className} ${!className.includes('bg-') ? 'bg-black border border-yellow-500' : ''}`}>
        <CheckCircle className="w-16 h-16 text-yellow-500 mb-4 animate-bounce" />
        <h3 className="text-2xl font-heading font-black text-white uppercase mb-2">Redirecting...</h3>
        <p className="text-zinc-400">Opening WhatsApp to complete your inquiry.</p>
      </div>
    );
  }

  // Base classes that can be overridden by className prop using ! modifier or specifically handled
  const containerClasses = `p-8 relative overflow-hidden ${className} ${!className.includes('bg-') ? 'bg-black border border-zinc-800' : ''}`;

  return (
    <div className={containerClasses}>
      <div className="mb-6 text-center">
        <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase mb-1">
          {isEmbedded ? "Start Now" : "Claim Free Pass"}
        </h3>
        <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest">
          {isEmbedded ? "Join Guwahati's Best" : "Limited Spots Available"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="group">
          <input
            type="text"
            name="name"
            required
            placeholder="FULL NAME"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-zinc-900/80 border-b-2 border-zinc-800 text-white px-4 py-3 focus:border-yellow-500 focus:bg-black transition-all outline-none placeholder:text-zinc-600 font-bold text-sm tracking-wider uppercase"
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            required
            placeholder="PHONE NUMBER"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            className="w-full bg-zinc-900/80 border-b-2 border-zinc-800 text-white px-4 py-3 focus:border-yellow-500 focus:bg-black transition-all outline-none placeholder:text-zinc-600 font-bold text-sm tracking-wider uppercase"
          />
        </div>

        <div>
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full bg-zinc-900/80 border-b-2 border-zinc-800 text-white px-4 py-3 focus:border-yellow-500 focus:bg-black transition-all outline-none font-bold text-sm tracking-wider uppercase text-zinc-400"
          >
            <option value="General Inquiry">Select Style</option>
            <option value="Contemporary">Contemporary</option>
            <option value="Hip Hop">Hip Hop</option>
            <option value="Bollywood">Bollywood</option>
            <option value="Kids">Kids Batch</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow-500 hover:bg-white text-black font-black uppercase tracking-widest py-4 flex items-center justify-center gap-2 transition-all mt-2 group"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : <>Get Access <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>}
        </button>
      </form>
    </div>
  );
};