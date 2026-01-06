import React from 'react';

interface AgencyIntroProps {
  title: string;
  content: string;
  primaryColor: string;
}

const AgencyIntro: React.FC<AgencyIntroProps> = ({ title, content, primaryColor }) => {
  // 상위 관리직 계층
  const managementHierarchy = [
    { 
      title: 'Managing Director',
      name: '상무 GARNETT LIM',
      dept: 'Finance Management',
      desc: '정켓운영 / 재무 관리' 
    },
    { 
      title: 'Operations Director',
      name: 'KEVIN MUN 이사',
      dept: 'Head of Operations',
      desc: 'VIP / STAFF 관리' 
    },
  ];

  // 하위 실행 부서
  const operationalUnits = [
    { 
      title: 'AGENT', 
      name: '차장 Ryan OK', 
      desc: '고객관리 / VIP운영 / 환전' 
    },
    { 
      title: 'AGENT', 
      name: '부장 JASON JANG', 
      desc: '고객관리 / VIP운영 / 환전' 
    },
    { 
      title: 'BUSINESS SUPPORT', 
      name: '매니저 SOFIA', 
      desc: 'ROLLER 관리 및 UPDATE 총괄' 
    },
    { 
      title: 'AGENT', 
      name: '사원 SCOTT KIM', 
      desc: '고객관리 / VIP운영 / 환전' 
    },
    { 
      title: 'AGENT', 
      name: '사원 ERIC KIM', 
      desc: '고객관리 / VIP운영 / 환전' 
    },
    { 
      title: 'ROLLER', 
      name: 'STAFF MARY', 
      desc: 'ROLL / UPDATE' 
    },
  ];

  const purpleBorder = "#A855F7"; // CEO용 보라색
  const greenBorder = "#22C55E";  // 상무, 이사용 녹색
  const yellowBorder = "#FACC15"; // 하위 박스용 노란색
  const redBorder = "#EF4444";    // SCOTT KIM, ERIC KIM, MARY용 빨간색

  const renderLead = (lead: string) => {
    const titles = ['대표', '이사', '상무', '부장', '차장', '매니저', '사원', 'STAFF'];
    const foundTitle = titles.find(t => lead.includes(t));

    if (foundTitle) {
      // Handle title at the beginning (e.g., "이사 KEVIN MUN")
      if (lead.startsWith(foundTitle)) {
        const name = lead.replace(foundTitle, '').trim();
        return (
          <>
            <span className="text-xs font-medium mr-1.5 text-zinc-500 align-middle">{foundTitle}</span>
            <span className="align-middle">{name}</span>
          </>
        );
      }
      // Handle title at the end (e.g., "KEVIN MUN 이사")
      if (lead.endsWith(foundTitle)) {
        const name = lead.replace(foundTitle, '').trim();
        return (
          <>
            <span className="align-middle">{name}</span>
            <span className="text-xs font-medium ml-1.5 text-zinc-500 align-middle">{foundTitle}</span>
          </>
        );
      }
      
      // Fallback for complex strings
      const parts = lead.split(foundTitle);
      return (
        <>
          <span className="text-xs font-medium mr-1.5 text-zinc-500 align-middle">{foundTitle}</span>
          <span className="align-middle">{parts[parts.length - 1].trim()}</span>
        </>
      );
    }
    return lead;
  };

  return (
    <div className="container mx-auto px-6">
      <div className="relative border-y border-white/5 py-32 overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-900/20 -skew-x-12 transform translate-x-20" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="order-2 lg:order-1">
            <div className="mb-10">
              <span className="text-[10px] font-black tracking-[0.6em] text-zinc-500 uppercase mb-4 block">Our Philosophy</span>
              <h2 className="text-5xl md:text-7xl font-serif leading-tight text-white mb-8">
                The Core of <br/>
                <span style={{ color: primaryColor }} className="italic">Luxury Agency</span>
              </h2>
              <div className="w-20 h-0.5" style={{ backgroundColor: primaryColor }} />
            </div>
            
            <p className="text-zinc-400 text-lg leading-relaxed font-light mb-12 max-w-2xl whitespace-pre-wrap">
              {content}
            </p>

            <div className="inline-flex items-center gap-6 group cursor-pointer">
              <div 
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-colors"
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = primaryColor)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
              >
                <svg className="w-5 h-5 text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.4em]">View Our Commitment</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-video bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&q=80&w=1200" 
                alt="Luxury Clark Location" 
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <h4 className="text-white font-bold mb-1">Located in Clark</h4>
                <p className="text-zinc-500 text-xs uppercase tracking-widest">Philippines Premium Hub</p>
              </div>
            </div>
          </div>
        </div>

        {/* Organization Chart Section */}
        <div className="relative z-10 pt-16 border-t border-white/5">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase mb-2 block">Organization</span>
            <h3 className="text-3xl md:text-4xl font-serif italic" style={{ color: primaryColor }}>Agency Structure</h3>
          </div>

          <div className="flex flex-col items-center max-w-6xl mx-auto">
            {/* 1. CEO Node */}
            <div className="relative mb-0 w-full flex flex-col items-center">
              <div 
                className="px-12 py-6 border-2 rounded-2xl bg-black text-center shadow-2xl relative z-10 w-full max-w-sm transition-all duration-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                style={{ borderColor: purpleBorder }}
              >
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Chief Executive Officer</p>
                <h4 className="text-2xl font-bold text-white">
                  <span className="text-xs font-medium mr-1.5 text-zinc-500 align-middle">대표</span>
                  <span className="align-middle">John KIM</span>
                </h4>
              </div>
              <div className="w-px h-12 bg-zinc-800" />
            </div>

            {/* 2. Hierarchical Nodes (상무, 이사) */}
            {managementHierarchy.map((member, idx) => (
              <React.Fragment key={idx}>
                <div className="relative w-full flex flex-col items-center group">
                  <div 
                    className="p-8 bg-zinc-900/50 border rounded-2xl transition-all duration-500 text-center w-full max-w-md relative z-10 hover:bg-zinc-800/80 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                    style={{ borderColor: `${greenBorder}66` }}
                  >
                    <div 
                      className="w-2 h-2 rounded-full mx-auto mb-4 transition-transform group-hover:scale-150"
                      style={{ backgroundColor: greenBorder }}
                    />
                    <h5 className="text-[10px] font-light mb-1 tracking-[0.3em] text-zinc-500 uppercase">{member.title}</h5>
                    <div className="text-xl font-bold mb-3 tracking-tighter text-white">
                      {renderLead(member.name)}
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed">{member.desc}</p>
                  </div>
                  <div className="w-px h-12 bg-zinc-800" />
                </div>
              </React.Fragment>
            ))}

            {/* 3. Operational Units Grid */}
            <div className="w-full relative">
              <div className="absolute top-0 left-[5%] right-[5%] h-px bg-zinc-800 hidden md:block" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 md:pt-12">
                {operationalUnits.map((unit, idx) => {
                  const isRedBox = unit.name.includes('SCOTT KIM') || unit.name.includes('ERIC KIM') || unit.name.includes('MARY');
                  const currentBorderColor = isRedBox ? redBorder : yellowBorder;
                  const hoverShadowColor = isRedBox ? 'rgba(239, 68, 68, 0.3)' : 'rgba(250, 204, 21, 0.2)';

                  return (
                    <div 
                      key={idx} 
                      className="relative group"
                    >
                      <div className="absolute -top-12 left-1/2 w-px h-12 bg-zinc-800 hidden md:block" />
                      
                      <div 
                        className="h-full p-6 bg-zinc-900/30 border rounded-2xl transition-all duration-500 text-center flex flex-col justify-center hover:bg-zinc-900"
                        style={{ 
                          borderColor: `${currentBorderColor}88`,
                        }} 
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = currentBorderColor;
                          e.currentTarget.style.boxShadow = `0 0 20px ${hoverShadowColor}`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = `${currentBorderColor}88`;
                          e.currentTarget.style.boxShadow = `none`;
                        }}
                      >
                        <span className="text-[9px] font-bold tracking-[0.3em] text-zinc-600 uppercase mb-3 block transition-colors group-hover:text-zinc-400">
                          {unit.title}
                        </span>
                        <h6 className="text-lg font-bold text-white mb-2">
                          {renderLead(unit.name)}
                        </h6>
                        <p className="text-zinc-500 text-[11px] leading-relaxed px-4">{unit.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyIntro;