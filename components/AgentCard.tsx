import React from 'react';

interface AgentCardProps {
  name: string;
  siteName: string;
  phoneNumber: string;
  kakaoId: string;
  telegramId: string;
  primaryColor: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ name, siteName, phoneNumber, kakaoId, telegramId, primaryColor }) => {
  return (
    <div className="container mx-auto px-6 py-12 flex justify-center">
      <div className="relative group perspective-1000 w-full max-w-xl">
        {/* Animated Hover Container with 3D effect */}
        <div className="relative transition-all duration-700 ease-out transform-gpu group-hover:rotate-y-6 group-hover:-rotate-x-6">
          
          {/* Main Card Body */}
          <div className="relative w-full aspect-[1.75/1] bg-gradient-to-br from-zinc-950 via-zinc-900 to-black rounded-[2rem] border border-white/10 p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between">
            
            {/* Luxury Background Accents */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[200%] rotate-12" style={{ background: `linear-gradient(to bottom right, ${primaryColor}1a, transparent, transparent)` }} />
            </div>

            {/* Glossy Reflection Effect */}
            <div className="absolute -inset-x-20 top-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent -rotate-[25deg] pointer-events-none" />

            {/* Header: Company Info */}
            <div className="flex justify-between items-start relative z-10">
              <div>
                <h3 className="text-xl md:text-2xl font-serif font-bold tracking-tighter" style={{ color: primaryColor }}>
                  {siteName.split(' ')[0]} <span className="italic font-light text-white">{siteName.split(' ').slice(1).join(' ')}</span>
                </h3>
                <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-[0.5em] mt-1 font-black">Luxury Casino Agency</p>
              </div>
              <div 
                className="w-10 h-10 md:w-12 md:h-12 border rounded-xl flex items-center justify-center shadow-lg"
                style={{ borderColor: `${primaryColor}40` }}
              >
                <div className="w-4 h-4 md:w-5 md:h-5 rotate-45 rounded-sm" style={{ backgroundColor: primaryColor }} />
              </div>
            </div>

            {/* Body: Agent Info */}
            <div className="relative z-10">
              <div className="flex items-end gap-3 mb-1">
                <h4 className="text-3xl md:text-4xl font-serif text-white tracking-wide">{name}</h4>
                <span className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest pb-1 md:pb-2 font-bold">Operations Director</span>
              </div>
              <p className="text-[9px] md:text-[11px] text-zinc-400 font-bold uppercase tracking-[0.4em] mb-4">Executive Gaming Concierge</p>
              <div className="w-12 h-0.5 rounded-full" style={{ backgroundColor: primaryColor }} />
            </div>

            {/* Footer: Contact Channels */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 relative z-10 pt-6 border-t border-white/5">
              <div className="space-y-1.5 group/link cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <span className="block text-[7px] md:text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-black">Mobile</span>
                </div>
                <div className="flex items-center gap-1.5">
                   <div className="w-1 h-1 rounded-full hidden md:block" style={{ backgroundColor: primaryColor }} />
                   <span className="text-[10px] md:text-sm font-mono text-zinc-300 group-hover/link:text-white transition-colors">{phoneNumber}</span>
                </div>
              </div>

              <div className="space-y-1.5 group/link cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <span className="block text-[7px] md:text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-black">KakaoTalk</span>
                </div>
                <div className="flex items-center gap-1.5">
                   <div className="w-1 h-1 rounded-full hidden md:block" style={{ backgroundColor: primaryColor }} />
                   <span className="text-[10px] md:text-sm font-mono text-zinc-300 group-hover/link:text-white transition-colors uppercase">{kakaoId}</span>
                </div>
              </div>

              <div className="space-y-1.5 group/link cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <span className="block text-[7px] md:text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-black">Telegram</span>
                </div>
                <div className="flex items-center gap-1.5">
                   <div className="w-1 h-1 rounded-full hidden md:block" style={{ backgroundColor: primaryColor }} />
                   <span className="text-[10px] md:text-sm font-mono text-zinc-300 group-hover/link:text-white transition-colors uppercase">@{telegramId}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="absolute -inset-2 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" 
            style={{ background: `linear-gradient(to bottom right, ${primaryColor}1a, transparent)` }}
          />
        </div>
      </div>
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-12 { transform: rotateY(12deg); }
        .-rotate-x-12 { transform: rotateX(-12deg); }
        .transform-gpu { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
};

export default AgentCard;