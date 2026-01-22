import React, { useState } from 'react';
import { FormData } from '../types';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

interface Props {
  onSuccess?: () => void;
  className?: string;
}

export const LeadForm: React.FC<Props> = ({ onSuccess, className = "" }) => {
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
    setTimeout(() => {
      console.log('Lead Captured:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', interest: 'General Inquiry' });
      if (onSuccess) {
         setTimeout(() => {
             onSuccess();
             setIsSuccess(false); 
         }, 2000);
      } else {
         setTimeout(() => setIsSuccess(false), 5000);
      }
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isSuccess) {
    return (
      <div className={`bg-black border border-yellow-500 p-8 text-center ${className}`}>
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-yellow-500" />
        </div>
        <h3 className="text-2xl font-heading font-black text-white uppercase mb-2">You're In!</h3>
        <p className="text-zinc-400">We'll call you shortly.</p>
      </div>
    );
  }

  return (
    <div className={`bg-black border border-zinc-800 p-8 relative overflow-hidden ${className}`}>
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-heading font-black text-white uppercase mb-2">
          Claim Free Pass
        </h3>
        <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest">
          Limited Spots Available
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="group">
          <input
            type="text"
            name="name"
            required
            placeholder="FULL NAME"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-zinc-900 border-b-2 border-zinc-800 text-white px-4 py-4 focus:border-yellow-500 focus:bg-zinc-800 transition-all outline-none placeholder:text-zinc-600 font-bold text-sm tracking-wider uppercase"
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
            className="w-full bg-zinc-900 border-b-2 border-zinc-800 text-white px-4 py-4 focus:border-yellow-500 focus:bg-zinc-800 transition-all outline-none placeholder:text-zinc-600 font-bold text-sm tracking-wider uppercase"
          />
        </div>

        <div>
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full bg-zinc-900 border-b-2 border-zinc-800 text-white px-4 py-4 focus:border-yellow-500 focus:bg-zinc-800 transition-all outline-none font-bold text-sm tracking-wider uppercase text-zinc-400"
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
          className="w-full bg-yellow-500 hover:bg-white text-black font-black uppercase tracking-widest py-5 flex items-center justify-center gap-2 transition-all mt-4"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : <>Get Access <ArrowRight className="w-5 h-5" /></>}
        </button>
      </form>
    </div>
  );
};
