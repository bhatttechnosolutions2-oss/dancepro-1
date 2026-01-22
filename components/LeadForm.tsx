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

    // Simulate API call
    setTimeout(() => {
      console.log('Lead Captured:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', interest: 'General Inquiry' });

      // If onSuccess callback provided (e.g. closing modal), call it after a delay
      if (onSuccess) {
         setTimeout(() => {
             onSuccess();
             setIsSuccess(false); 
         }, 2000);
      } else {
         // Reset after showing success for a while if inline
         setTimeout(() => setIsSuccess(false), 5000);
      }
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isSuccess) {
    return (
      <div className={`bg-zinc-900 border border-yellow-500/30 rounded-xl p-8 text-center shadow-2xl animate-fade-in ${className}`}>
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-white mb-2">You're In!</h3>
        <p className="text-zinc-400">Our team will call you shortly to schedule your free trial.</p>
      </div>
    );
  }

  return (
    <div className={`bg-zinc-900/95 backdrop-blur-sm border border-zinc-800 p-6 md:p-8 rounded-xl shadow-2xl relative overflow-hidden group ${className}`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500"></div>
      
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-heading font-black text-white mb-2 uppercase italic">
          Book Free Trial
        </h3>
        <p className="text-zinc-400 text-sm">
          Limited slots available for this month. Claim yours now!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-zinc-800 border-zinc-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none placeholder:text-zinc-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-zinc-800 border-zinc-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none placeholder:text-zinc-500"
          />
        </div>

        <div>
          <label htmlFor="interest" className="sr-only">Interested In</label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full bg-zinc-800 border-zinc-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all outline-none"
          >
            <option value="General Inquiry">Select Dance Style</option>
            <option value="Contemporary">Contemporary</option>
            <option value="Hip Hop">Hip Hop</option>
            <option value="Bollywood">Bollywood</option>
            <option value="Kids">Kids Batch</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-heading font-bold uppercase tracking-wider py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Get Free Pass <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
        
        <p className="text-xs text-center text-zinc-600 mt-4">
          By submitting, you agree to receive a call/WhatsApp for scheduling.
        </p>
      </form>
    </div>
  );
};