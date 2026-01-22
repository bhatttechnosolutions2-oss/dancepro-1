import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProgramCard } from './components/ProgramCard';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { LeadFormModal } from './components/LeadFormModal';
import { PROGRAMS } from './constants';
import { ArrowUp } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-white selection:bg-yellow-500 selection:text-black">
      <Navbar onOpenModal={handleOpenModal} />
      
      <main>
        <Hero onOpenModal={handleOpenModal} />
        
        {/* Programs Grid */}
        <section id="programs" className="py-20 md:py-28 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-4">
                Our <span className="text-yellow-500">Programs</span>
              </h2>
              <p className="text-zinc-400 max-w-xl">
                Whether you want to go pro or just move to the beat, we have a class that fits your style and schedule.
              </p>
            </div>
            <button 
              onClick={handleOpenModal}
              className="text-white border-b border-yellow-500 pb-1 hover:text-yellow-500 transition-colors uppercase font-bold tracking-widest text-sm"
            >
              View Schedule
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map((program) => (
              <ProgramCard 
                key={program.id} 
                program={program} 
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
        </section>

        <WhyChooseUs />
        
        {/* Statistics Banner */}
        <section className="py-16 bg-yellow-500 text-black">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-black/10">
            <div>
              <div className="text-4xl md:text-5xl font-black font-heading mb-2">10+</div>
              <div className="text-sm font-bold uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black font-heading mb-2">5k+</div>
              <div className="text-sm font-bold uppercase tracking-wider">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black font-heading mb-2">50+</div>
              <div className="text-sm font-bold uppercase tracking-wider">Awards Won</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black font-heading mb-2">3</div>
              <div className="text-sm font-bold uppercase tracking-wider">Studio Locations</div>
            </div>
          </div>
        </section>

        <Testimonials />
        
        {/* Final CTA Strip */}
        <section className="py-20 bg-zinc-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-6xl font-heading font-black text-white uppercase mb-8 leading-tight">
              Ready to <span className="text-yellow-500">Level Up?</span>
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={handleOpenModal}
                className="bg-yellow-500 text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
              >
                Claim Free Pass
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Sticky Bottom Bar for Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-4 md:hidden z-50 flex gap-3">
        <a href="tel:+917035419267" className="flex-1 bg-zinc-800 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 uppercase text-sm">
          Call Now
        </a>
        <button 
          onClick={handleOpenModal}
          className="flex-1 bg-yellow-500 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 uppercase text-sm"
        >
          Book Trial
        </button>
      </div>

      {/* Global Lead Form Modal */}
      <LeadFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;