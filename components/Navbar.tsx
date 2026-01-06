import React, { useState, useEffect } from 'react';

interface NavbarProps {
  siteName: string;
  primaryColor: string;
}

const Navbar: React.FC<NavbarProps> = ({ siteName, primaryColor }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', href: '#home' },
    { name: 'AGENCY 소개', href: '#agency' },
    { name: 'STAFF 소개', href: '#about' },
    { name: 'SERVICE', href: '#services' },
    { name: 'Details', href: '#detail-services' },
    { name: '예약상담', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold tracking-tight" style={{ color: primaryColor }}>
          {siteName}
        </a>
        
        <div className="hidden lg:flex space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-bold hover:text-white transition-colors uppercase tracking-[0.2em]"
              onMouseEnter={(e) => (e.currentTarget.style.color = primaryColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="px-6 py-2 rounded-full font-bold text-xs transition-transform active:scale-95 border uppercase tracking-widest"
          style={{ borderColor: primaryColor, color: primaryColor }}
        >
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;