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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      // Calculate offset for fixed header
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Custom Logo Component to match your brand without needing an image file
  const BrandLogo = ({ className = "" }: { className?: string }) => (
    <div className={`flex flex-col items-center justify-center relative group ${className}`}>
      {/* Icon Part */}
      <div className="relative w-14 h-14 flex items-center justify-center mb-1 transition-transform group-hover:scale-105 duration-300">
        {/* Yellow Ring */}
        <div className="absolute inset-0 rounded-full border-[2.5px] border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.2)]"></div>
        {/* Dancer Silhouette SVG */}
        <svg viewBox="0 0 100 100" className="w-10 h-10 fill-white" style={{ filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.8))' }}>
           <path d="M55,20 C58,20 60,23 60,26 C60,29 58,32 55,32 C52,32 50,29 50,26 C50,23 52,20 55,20 M45,35 C42,35 40,32 40,29 C40,26 42,23 45,23 C48,23 50,26 50,29 C50,32 48,35 45,35 M58,34 L62,55 L75,45 L78,48 L65,60 L62,90 L55,90 L56,60 L52,60 L50,90 L43,90 L46,60 L40,50 C30,60 25,50 35,40 L45,35 Z" />
        </svg>
      </div>
      {/* Text Part */}
      <div className="flex flex-col items-center -mt-2 relative z-10">
          <span className="font-script text-2xl text-red-500 leading-none drop-shadow-md whitespace-nowrap">Dance Pro</span>
          <span className="text-[0.6rem] text-white font-bold tracking-[0.35em] uppercase leading-none mt-1 shadow-black drop-shadow-sm">Studio</span>
          <div className="h-[1px] w-full bg-white/20 mt-1"></div>
      </div>
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-md shadow-lg py-2' : 'bg-gradient-to-b from-black/80 to-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2">
             <BrandLogo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 bg-black/20 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-yellow-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a href="tel:+917035419267" className="hidden md:flex items-center gap-2 text-white font-bold group">
              <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all border border-zinc-700">
                <Phone className="w-4 h-4" />
              </div>
              <span className="hidden lg:inline font-heading tracking-wide">+91 70354 19267</span>
            </a>
            
            <button 
              onClick={onOpenModal}
              className="hidden sm:inline-block bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-black text-sm uppercase px-6 py-3 rounded-lg transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(234,179,8,0.3)]"
            >
              Book Trial
            </button>

            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800 p-6 shadow-2xl flex flex-col gap-6 animate-slide-down h-screen">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xl font-heading font-bold text-white py-3 border-b border-zinc-800/50"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-4">
             <a href="tel:+917035419267" className="flex items-center gap-3 text-yellow-500 font-bold bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" /> 
                </div>
                <span>+91 70354 19267</span>
             </a>
             <button 
               onClick={() => {
                 setIsMenuOpen(false);
                 onOpenModal();
               }}
               className="w-full bg-yellow-500 text-black font-black uppercase py-4 rounded-xl text-center shadow-lg"
             >
                Book Free Trial
             </button>
          </div>
        </div>
      )}
    </nav>
  );
};