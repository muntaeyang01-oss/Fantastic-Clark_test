import React from 'react';

interface AboutProps {
  title: string;
  content: string;
  primaryColor: string;
}

const About: React.FC<AboutProps> = ({ title, content, primaryColor }) => {
  const professionalValues = [
    {
      id: 1,
      title: "전문가",
      points: [
        "천 회가 넘는 ONLINE(AVARTAR), OFFLINE(정켓) 플레이 경험",
        "AGENT 의 역량과 전문성은 함께 하시는 고객만이 느끼는 '특권' 입니다."
      ]
    },
    {
      id: 2,
      title: '"KEVIN은 합니다."',
      points: [
        "어려운 순간, 끝까지 최선을 다하는 모습이 '신뢰의 시작' 입니다."
      ]
    },
    {
      id: 3,
      title: "손님과의 유연한 소통",
      points: [
        "VIP의 성향, NEEDS를 빠르게 이해하고 함께 웃을 수 있는 소통은 간과할 수 없는 AGENT의 '필수 역량' 입니다."
      ]
    },
    {
      id: 4,
      title: "신뢰있는 동반자",
      points: [
        "환전부터 Play까지 모든 서비스는 투명해야 합니다.",
        "Free rancer보다는 회사를 이용하셔야 안전합니다."
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="relative sticky top-32">
          {/* Decorative frame accent */}
          <div 
            className="absolute -top-6 -left-6 w-24 h-24 opacity-30 border-t-4 border-l-4 rounded-tl-xl"
            style={{ borderColor: primaryColor }}
          />
          
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/10 group bg-zinc-800">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Professional Agent Kevin B&W" 
              className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105 grayscale contrast-125 brightness-90"
              onError={(e) => {
                // Fallback image in case the CDN is blocked
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&grayscale=true";
              }}
            />
            {/* Subtle overlay to enhance luxury feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

          <div 
            className="absolute -bottom-8 -right-4 w-48 p-6 bg-zinc-900 rounded-2xl shadow-2xl z-20 border border-white/10 backdrop-blur-sm"
          >
            <p className="text-4xl font-serif italic mb-1" style={{ color: primaryColor }}>3+ Years</p>
            <p className="text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">Industry Expertise</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold tracking-[0.5em] text-zinc-500 uppercase mb-4 block">REPRESENTATIVE AGENT</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              {title.includes('이사') ? (
                <>
                  {title.replace('이사', '').trim()}
                  <span className="text-xl md:text-2xl font-sans ml-3 text-zinc-500 font-medium">이사</span>
                </>
              ) : title}
            </h2>
            <div className="w-16 h-1 mt-6" style={{ backgroundColor: primaryColor }} />
          </div>
          
          {content && (
            <div className="relative">
              <p className="text-zinc-400 text-lg leading-relaxed whitespace-pre-wrap font-light mb-8">
                {content}
              </p>
              
              {/* Elegant divider line */}
              <div className="w-full h-px bg-gradient-to-r from-zinc-800 via-zinc-800/50 to-transparent mb-6" />
              
              {/* Updated phrase with three dots */}
              <p 
                className="text-2xl md:text-3xl font-serif italic tracking-[0.2em] opacity-80 mb-12"
                style={{ color: primaryColor }}
              >
                WITH KEVIN...
              </p>

              {/* Professional Values Section */}
              <div className="space-y-10">
                {professionalValues.map((val) => (
                  <div key={val.id} className="group">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-baseline">
                      <span className="text-sm font-mono mr-3 opacity-50" style={{ color: primaryColor }}>{val.id}.</span>
                      {val.title}
                    </h4>
                    <div className="space-y-3 pl-7">
                      {val.points.map((point, idx) => (
                        <p key={idx} className="text-zinc-400 text-[15px] leading-relaxed relative flex items-start">
                          <span className="inline-block mr-2 text-zinc-600">—</span>
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;