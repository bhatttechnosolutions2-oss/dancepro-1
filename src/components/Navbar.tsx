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
                {/* Yellow Ring - Perfect Arc */}
                <path 
                  d="M 30 150 A 85 85 0 1 1 170 150" 
                  stroke="#fbbf24" 
                  strokeWidth="6" 
                  fill="none" 
                  strokeLinecap="round"
                  className="drop-shadow-lg"
                />
                
                {/* Dancers Silhouette - High Definition */}
                <g transform="translate(50, 35) scale(0.4)" fill="white">
                   {/* Male Head */}
                   <circle cx="160" cy="40" r="18" />
                   {/* Female Head */}
                   <circle cx="110" cy="90" r="16" />
                   
                   {/* Bodies Connected */}
                   <path d="M150,60 C170,60 185,75 175,100 C170,115 165,130 160,150 L155,280 L130,280 L135,180 L125,180 L115,280 L90,280 L100,160 C105,140 105,120 95,110 C85,100 70,105 60,120 L70,130 C80,120 90,120 95,130 C100,140 100,150 90,160 L50,150 L40,170 L100,190 C110,195 120,190 125,180 L220,200 L230,180 L165,150 C170,130 180,110 190,90 L200,80 C190,70 170,60 150,60 Z" />
                   
                   {/* Arms Flowing */}
                   <path d="M185,80 Q210,60 220,40 L205,30 Q190,50 170,70 Z" />
                   <path d="M100,110 Q80,90 85,70 L75,60 Q60,90 90,120 Z" />
                </g>
                
                {/* Dance Pro Text (Red Script) */}
                <text 
                  x="100" 
                  y="185" 
                  textAnchor="middle" 
                  fontFamily="'Great Vibes', cursive" 
                  fontSize="48" 
                  fill="#ef4444"
                  className="drop-shadow-md"
                  style={{ textShadow: '1px 1px 0px rgba(0,0,0,1)' }}
                >
                  Dance Pro
                </text>
                
                {/* Studio Text (White Sans) */}
                <text 
                  x="100" 
                  y="208" 
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
                <line x1="20" y1="204" x2="60" y2="204" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="140" y1="204" x2="180" y2="204" stroke="white" strokeWidth="2" strokeLinecap="round" />
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