
import React from 'react';

interface FooterProps {
  siteName: string;
}

const Footer: React.FC<FooterProps> = ({ siteName }) => {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-serif font-bold mb-2 tracking-tight italic">{siteName}</h2>
          <p className="text-zinc-600 text-xs uppercase tracking-widest">Premium Casino Agency Experience</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end text-zinc-500 text-xs space-y-4">
          <div className="flex space-x-8 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
          <p>© 2024 {siteName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
