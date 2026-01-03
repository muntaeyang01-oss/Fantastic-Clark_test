
import React from 'react';

interface AboutProps {
  title: string;
  content: string;
  primaryColor: string;
}

const About: React.FC<AboutProps> = ({ title, content, primaryColor }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div 
            className="absolute -top-10 -left-10 w-32 h-32 opacity-20 border-t-2 border-l-2"
            style={{ borderColor: primaryColor }}
          />
          <img 
            src="https://picsum.photos/id/1014/800/1000?grayscale" 
            alt="Agent Profile" 
            className="rounded-2xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div 
            className="absolute -bottom-6 -right-6 w-1/2 p-6 bg-zinc-900 rounded-lg shadow-xl z-20 border border-white/5"
          >
            <p className="text-3xl font-serif italic mb-1" style={{ color: primaryColor }}>10+ Years</p>
            <p className="text-xs text-zinc-400 uppercase tracking-widest">Industry Expertise</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-8">{title}</h2>
          <div className="w-20 h-1 bg-yellow-500 mb-8" style={{ backgroundColor: primaryColor }} />
          <p className="text-zinc-400 text-lg leading-loose mb-10">
            {content}
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-2">무결성 보장</h4>
              <p className="text-zinc-500 text-sm">모든 게임은 공정한 환경에서 투명하게 진행됨을 보장합니다.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">절대 비밀 유지</h4>
              <p className="text-zinc-500 text-sm">고객님의 개인정보와 자산 현황은 철저히 보호됩니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
