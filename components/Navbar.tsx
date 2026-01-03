
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
    { name: 'AGENT 소개', href: '#about' },
    { name: '서비스', href: '#services' },
    { name: '예약상담', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black tracking-tighter" style={{ color: primaryColor }}>
          {siteName}
        </a>
        
        <div className="hidden md:flex space-x-10">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-yellow-400 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="px-6 py-2 rounded-full font-bold text-sm transition-transform active:scale-95 border"
          style={{ borderColor: primaryColor, color: primaryColor }}
        >
          예약하기
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
