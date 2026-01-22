import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProgramCard } from './components/ProgramCard';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { LeadFormModal } from './components/LeadFormModal';
import { PROGRAMS } from './constants';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black min-h-screen text-white selection:bg-yellow-500 selection:text-black font-sans">
      <Navbar onOpenModal={handleOpenModal} />
      
      <main>
        <Hero onOpenModal={handleOpenModal} />
        
        {/* Stats Strip */}
        <div className="bg-yellow-500 text-black py-12">
           <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: "10+", label: "Years Exp" },
                { num: "5k+", label: "Students" },
                { num: "50+", label: "Awards" },
                { num: "3", label: "Studios" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                   <div className="text-4xl md:text-6xl font-black font-heading leading-none">{stat.num}</div>
                   <div className="text-xs font-bold uppercase tracking-widest mt-1 opacity-80">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>

        {/* Programs Grid */}
        <section id="programs" className="py-24 bg-zinc-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2 block">Find Your Rhythm</span>
                <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase leading-none">
                  Our <span className="text-stroke">Programs</span>
                </h2>
              </div>
              <button 
                onClick={handleOpenModal}
                className="text-white border-b border-yellow-500 pb-1 hover:text-yellow-500 transition-colors uppercase font-bold tracking-widest text-sm"
              >
                Get Class Schedule
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {PROGRAMS.map((program) => (
                <ProgramCard 
                  key={program.id} 
                  program={program} 
                  onOpenModal={handleOpenModal}
                />
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <Testimonials />
        
        {/* Final CTA */}
        <section className="py-24 bg-yellow-500 text-black text-center px-4 relative overflow-hidden">
           <div className="relative z-10 max-w-4xl mx-auto">
             <h2 className="text-5xl md:text-8xl font-heading font-black uppercase leading-[0.9] mb-8">
               Don't Just Watch.<br/>Start Moving.
             </h2>
             <button 
                onClick={handleOpenModal}
                className="bg-black text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl hover:shadow-none"
             >
                Book Your Free Trial
             </button>
           </div>
           {/* Background Pattern */}
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </section>
      </main>

      <Footer />
      
      {/* Sticky Bottom Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden">
        <a href="tel:+917035419267" className="flex-1 bg-zinc-900 text-white py-4 font-bold uppercase tracking-widest text-center text-xs flex items-center justify-center gap-2">
           Call Us
        </a>
        <button 
          onClick={handleOpenModal}
          className="flex-1 bg-yellow-500 text-black py-4 font-black uppercase tracking-widest text-center text-xs"
        >
          Book Trial
        </button>
      </div>

      <LeadFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
