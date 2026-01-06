import React from 'react';

interface HeroProps {
  title: string;
  sub: string;
  primaryColor: string;
}

const Hero: React.FC<HeroProps> = ({ title, sub, primaryColor }) => {
  // Function to highlight "CLARK" in purple
  const renderTitle = (text: string) => {
    if (!text.includes('CLARK')) return text;
    
    const parts = text.split('CLARK');
    return (
      <>
        {parts[0]}
        <span className="text-[#A855F7]">CLARK</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
      
      {/* Background Image Placeholder */}
      <img 
        src="https://picsum.photos/id/158/1920/1080?grayscale" 
        alt="Casino Background" 
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[pulse_10s_infinite]"
      />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <span 
          className="inline-block mb-4 text-xs font-bold tracking-[0.4em] uppercase opacity-80"
          style={{ color: primaryColor }}
        >
          Exclusive Experience
        </span>
        <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight tracking-tight">
          {renderTitle(title)}
        </h1>
        <p className="text-lg md:text-xl mb-12 font-medium leading-relaxed max-w-2xl mx-auto" style={{ color: primaryColor }}>
          {sub}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="px-10 py-4 rounded-full font-bold text-lg text-black hover:opacity-90 transition-all shadow-xl"
            style={{ 
              backgroundColor: primaryColor,
              boxShadow: `0 20px 25px -5px ${primaryColor}33` 
            }}
          >
            상담 시작하기
          </a>
          <a 
            href="#about" 
            className="px-10 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/5 transition-all"
          >
            더 알아보기
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-px h-12 bg-white/20" />
      </div>
    </div>
  );
};

export default Hero;