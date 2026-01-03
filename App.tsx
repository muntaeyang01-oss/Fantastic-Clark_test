
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { SiteConfig, ViewType } from './types';
import { DEFAULT_CONFIG } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('USER');
  const [config, setConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('fantastic_clark_config');
    return saved ? JSON.parse(saved) : DEFAULT_CONFIG;
  });

  useEffect(() => {
    localStorage.setItem('fantastic_clark_config', JSON.stringify(config));
  }, [config]);

  const toggleView = () => setView(prev => prev === 'USER' ? 'ADMIN' : 'USER');

  if (view === 'ADMIN') {
    return <AdminDashboard config={config} setConfig={setConfig} exitAdmin={() => setView('USER')} />;
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      {/* Hidden toggle for developers/admins - in real world this would be a login page */}
      <button 
        onClick={toggleView}
        className="fixed bottom-4 right-4 z-50 p-2 opacity-10 hover:opacity-100 transition-opacity bg-white/10 rounded-full text-[10px]"
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

        <section id="about" className="py-24">
          <About 
            title={config.aboutTitle} 
            content={config.aboutContent} 
            primaryColor={config.primaryColor} 
          />
        </section>

        <section id="services" className="bg-zinc-900/50 py-24">
          <Services 
            services={config.services} 
            primaryColor={config.primaryColor} 
          />
        </section>

        <section id="contact" className="py-24">
          <Contact 
            manager={config.contactManager} 
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
