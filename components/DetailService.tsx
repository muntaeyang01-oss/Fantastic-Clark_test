
import React from 'react';
import { ServiceItem } from '../types.ts';

interface DetailServiceProps {
  services: ServiceItem[];
  primaryColor: string;
}

const DetailService: React.FC<DetailServiceProps> = ({ services, primaryColor }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div className="max-w-xl">
          <span className="text-xs font-bold tracking-[0.5em] uppercase mb-4 block" style={{ color: primaryColor }}>Premium Solutions</span>
          <h2 className="text-4xl md:text-6xl font-serif">DETAILS</h2>
        </div>
        <p className="text-zinc-500 max-w-sm text-right hidden md:block font-bold tracking-[0.2em] uppercase">
          EXTRA SERVICE
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className="group relative bg-zinc-900/30 border border-white/5 rounded-3xl p-8 hover:bg-zinc-800/40 transition-all duration-500 overflow-hidden"
          >
            {/* Background Accent Animation */}
            <div 
              className="absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity blur-3xl"
              style={{ backgroundColor: primaryColor }}
            />
            
            <div className="relative z-10">
              <div className="text-zinc-600 text-6xl font-serif mb-8 transition-colors group-hover:text-white/20">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:translate-x-2 transition-transform">{service.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 group-hover:text-zinc-400 transition-colors">
                {service.description}
              </p>
              <div 
                className="w-8 h-1 rounded-full transition-all group-hover:w-full"
                style={{ backgroundColor: primaryColor }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailService;
