import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface Props {
  onOpenModal: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Stories', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-zinc-800 py-3' 
        : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
             <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-yellow-500 rounded-full group-hover:bg-yellow-500 transition-colors duration-300">
                <span className="font-heading font-black text-white group-hover:text-black text-xl md:text-2xl">D</span>
             </div>
             <div className="flex flex-col">
                <span className="font-heading font-black text-lg md:text-xl text-white tracking-tighter leading-none uppercase">Dance<span className="text-yellow-500">Pro</span></span>
                <span className="text-[10px] text-zinc-400 uppercase tracking-[0.3em] leading-none">Studio</span>
             </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-zinc-900/50 p-1 rounded-full border border-zinc-800 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <a href="tel:+917035419267" className="hidden lg:flex items-center gap-2 text-zinc-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wide">+91 70354 19267</span>
            </a>
            
            <button 
              onClick={onOpenModal}
              className="hidden sm:inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-black font-black text-xs md:text-sm uppercase tracking-wider px-6 py-3 rounded-none skew-x-[-12deg] transition-transform hover:scale-105"
            >
              <span className="skew-x-[12deg]">Book Trial</span>
            </button>

            <button 
              className="md:hidden text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-28 px-6 pb-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-4xl font-heading font-black text-white hover:text-yellow-500 uppercase tracking-tight transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-auto space-y-4">
             <div className="h-[1px] w-full bg-zinc-800"></div>
             <p className="text-zinc-500 text-sm uppercase tracking-widest">Get in touch</p>
             <a href="tel:+917035419267" className="block text-2xl font-bold text-white">+91 70354 19267</a>
             
             <button 
               onClick={() => {
                 setIsMenuOpen(false);
                 onOpenModal();
               }}
               className="w-full bg-yellow-500 text-black font-black uppercase py-5 text-lg tracking-widest mt-4"
             >
                Start Your Journey
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
