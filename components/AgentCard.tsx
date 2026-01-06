import React from 'react';

interface AgentCardProps {
  name: string;
  phoneNumber: string;
  kakaoId: string;
  telegramId: string;
  primaryColor: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ name, phoneNumber, kakaoId, telegramId, primaryColor }) => {
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
                  NEWER VISION <span className="italic font-light text-white">co.</span>
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
              {/* Mobile Column */}
              <div className="space-y-1.5 group/link cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <span className="block text-[7px] md:text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-black">Mobile</span>
                  <svg className="w-2 h-2 md:w-2.5 md:h-2.5 text-zinc-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-4H7V6h10v10z"/>
                  </svg>
                </div>
                <div className="flex items-center gap-1.5">
                   <div className="w-1 h-1 rounded-full hidden md:block" style={{ backgroundColor: primaryColor }} />
                   <span className="text-[10px] md:text-sm font-mono text-zinc-300 group-hover/link:text-white transition-colors">{phoneNumber}</span>
                </div>
              </div>

              {/* KakaoTalk Column */}
              <div className="space-y-1.5 group/link cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <span className="block text-[7px] md:text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-black">KakaoTalk</span>
                  <svg className="w-2 h-2 md:w-2.5 md:h-2.5 text-[#FEE500]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c-4.97 0-9 3.134-9 7 0 2.419 1.557 4.545 3.946 5.793l-.999 3.655c-.126.463.424.843.82.58l4.314-2.859c.302.02.608.031.92.031 4.97 0 9-3.134 9-7s-4.03-7-9-7z"/>
                  </svg>
                </div>
                <div className="flex items-center gap-1.5">
                   <div className="w-1 h-1 rounded-full hidden md:block" style={{ backgroundColor: primaryColor }} />
                   <span className="text-[10px] md:text-sm font-mono text-zinc-300 group-hover/link:text-white transition-colors uppercase">{kakaoId}</span>
                </div>
              </div>

              {/* Telegram Column */}
              <div className="space-y-1.5 group/link cursor-pointer">
                <div className="flex items-center gap-1.5">
                  <span className="block text-[7px] md:text-[9px] text-zinc-500 uppercase tracking-[0.2em] font-black">Telegram</span>
                  <svg className="w-2 h-2 md:w-2.5 md:h-2.5 text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.35-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.24-3.55 3.92-1.65 4.73-1.93 5.26-1.94.12 0 .38.03.55.17.14.12.18.28.2.45-.02.07-.02.13-.03.19z"/>
                  </svg>
                </div>
                <div className="flex items-center gap-1.5">
                   <div className="w-1 h-1 rounded-full hidden md:block" style={{ backgroundColor: primaryColor }} />
                   <span className="text-[10px] md:text-sm font-mono text-zinc-300 group-hover/link:text-white transition-colors uppercase">@{telegramId}</span>
                </div>
              </div>
            </div>

            {/* Holographic Chip Decor */}
            <div className="absolute right-12 bottom-32 w-10 h-8 md:w-14 md:h-10 rounded-lg border border-white/5 bg-gradient-to-br from-zinc-800 to-zinc-950 opacity-40 overflow-hidden hidden md:block">
               <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
               <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
            </div>

          </div>
          
          {/* Card Shadow/Glow Background */}
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