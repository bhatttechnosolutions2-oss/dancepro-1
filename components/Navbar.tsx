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
        ? 'bg-black/90 backdrop-blur-xl border-zinc-800 py-2' 
        : 'bg-transparent border-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand - Custom SVG Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group cursor-pointer">
             <svg 
               viewBox="0 0 200 220" 
               className="h-28 w-auto transition-transform duration-300 group-hover:scale-105"
               xmlns="http://www.w3.org/2000/svg"
               shapeRendering="geometricPrecision"
             >
                {/* Yellow Ring - Thicker and more vibrant */}
                <path 
                  d="M 35 155 A 85 85 0 1 1 165 155" 
                  stroke="#facc15" 
                  strokeWidth="5" 
                  fill="none" 
                  strokeLinecap="round"
                  className="drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
                />
                
                {/* Dancers Silhouette (White) - Refined & Smoother */}
                <g transform="translate(45, 25) scale(0.42)" fill="white">
                   {/* Male Dancer */}
                   <circle cx="160" cy="50" r="16" />
                   <path d="M145,75 C140,75 130,85 135,100 L130,160 L120,280 L145,280 L155,160 L165,100 C170,85 160,75 145,75 Z" />
                   <path d="M170,80 Q190,60 215,40 L205,30 Q180,55 160,75 Z" /> {/* Arm up */}

                   {/* Female Dancer */}
                   <circle cx="120" cy="110" r="14" />
                   <path d="M105,125 C95,125 90,135 95,150 C100,165 110,170 115,180 L125,200 L70,185 L60,205 L115,230 L135,280 L155,280 L140,200 C150,180 145,140 135,130 C125,120 115,125 105,125 Z" />
                </g>
                
                {/* Dance Pro Text (Red Script) */}
                <text 
                  x="100" 
                  y="180" 
                  textAnchor="middle" 
                  fontFamily="'Great Vibes', cursive" 
                  fontSize="46" 
                  fill="#ff2222"
                  className="drop-shadow-md"
                  style={{ textShadow: '2px 2px 0px rgba(0,0,0,1)' }}
                >
                  Dance Pro
                </text>
                
                {/* Studio Text (White Sans) */}
                <text 
                  x="100" 
                  y="205" 
                  textAnchor="middle" 
                  fontFamily="'Montserrat', sans-serif" 
                  fontSize="13" 
                  fontWeight="900"
                  fill="white" 
                  letterSpacing="5"
                >
                  STUDIO
                </text>
                
                {/* Decorative Lines */}
                <line x1="20" y1="201" x2="60" y2="201" stroke="white" strokeWidth="1.5" opacity="0.9" />
                <line x1="140" y1="201" x2="180" y2="201" stroke="white" strokeWidth="1.5" opacity="0.9" />
             </svg>
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