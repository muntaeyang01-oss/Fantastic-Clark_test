import React from 'react';
import { ServiceItem } from '../types.ts';

interface ServicesProps {
  services: ServiceItem[];
  primaryColor: string;
}

const Services: React.FC<ServicesProps> = ({ services, primaryColor }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 uppercase">SERVICE</h2>
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm">전문적인 케어 시스템</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((item) => (
          <div 
            key={item.id} 
            className="p-10 bg-black/40 border border-white/5 rounded-3xl transition-all group hover:bg-white/[0.02]"
            style={{ 
              // Using a subtle border transition with the primary color
              borderColor: 'rgba(255,255,255,0.05)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = primaryColor + '80')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)')}
          >
            <div className="mb-6 inline-block p-4 rounded-2xl bg-zinc-900 group-hover:scale-110 transition-transform">
              <svg 
                className="w-8 h-8" 
                fill="none" 
                stroke={primaryColor} 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-zinc-500 leading-relaxed whitespace-pre-wrap">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;