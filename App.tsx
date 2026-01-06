import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import AgencyIntro from './components/AgencyIntro.tsx';
import About from './components/About.tsx';
import AgentCard from './components/AgentCard.tsx';
import Services from './components/Services.tsx';
import DetailService from './components/DetailService.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import AdminDashboard from './components/AdminDashboard.tsx';
import { SiteConfig, ViewType } from './types.ts';
import { DEFAULT_CONFIG } from './constants.ts';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('USER');
  const [config, setConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('fantastic_clark_v1_config');
    return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
  });

  useEffect(() => {
    localStorage.setItem('fantastic_clark_v1_config', JSON.stringify(config));
  }, [config]);

  const toggleView = () => setView(prev => prev === 'USER' ? 'ADMIN' : 'USER');

  if (view === 'ADMIN') {
    return <AdminDashboard config={config} setConfig={setConfig} exitAdmin={() => setView('USER')} />;
  }

  return (
    <div className={`min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black`}>
      <button 
        onClick={toggleView}
        className="fixed bottom-4 right-4 z-[60] p-2 opacity-10 hover:opacity-100 transition-opacity bg-white/10 rounded-full text-[10px]"
      >
        ADMIN
      </button>

      <Navbar siteName={config.siteName} primaryColor={config.primaryColor} />
      
      <main>
        <section id="home">
          <Hero 
            title={config.heroTitle} 
            sub={config.heroSub} 
            primaryColor={config.primaryColor} 
          />
        </section>

        <section id="agency" className="bg-black">
          <AgencyIntro 
            title={config.agencyTitle}
            content={config.agencyContent}
            primaryColor={config.primaryColor}
          />
        </section>

        <section id="about" className="pt-32 pb-16">
          <About 
            title={config.aboutTitle} 
            content={config.aboutContent} 
            primaryColor={config.primaryColor} 
          />
          <AgentCard 
            name={config.contactManager}
            siteName={config.siteName}
            phoneNumber={config.phoneNumber}
            kakaoId={config.kakaoId}
            telegramId={config.telegramId}
            primaryColor={config.primaryColor}
          />
        </section>

        <section id="services" className="bg-zinc-900/50 py-32">
          <Services 
            services={config.services} 
            primaryColor={config.primaryColor} 
          />
        </section>

        <section id="detail-services" className="py-32 border-y border-white/5 bg-black">
          <DetailService 
            services={config.detailServices} 
            primaryColor={config.primaryColor} 
          />
        </section>

        <section id="contact" className="py-32">
          <Contact 
            manager={config.contactManager} 
            phoneNumber={config.phoneNumber}
            kakaoId={config.kakaoId} 
            telegramId={config.telegramId} 
            primaryColor={config.primaryColor} 
          />
        </section>
      </main>

      <Footer siteName={config.siteName} />
    </div>
  );
};

export default App;