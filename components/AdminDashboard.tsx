
import React, { useState } from 'react';
import { SiteConfig, ServiceItem } from '../types';

interface AdminDashboardProps {
  config: SiteConfig;
  setConfig: React.Dispatch<React.SetStateAction<SiteConfig>>;
  exitAdmin: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ config, setConfig, exitAdmin }) => {
  const [localConfig, setLocalConfig] = useState<SiteConfig>(config);

  const handleSave = () => {
    setConfig(localConfig);
    alert('설정이 저장되었습니다.');
  };

  const updateField = (field: keyof SiteConfig, value: string) => {
    setLocalConfig(prev => ({ ...prev, [field]: value }));
  };

  const updateService = (id: string, field: keyof ServiceItem, value: string) => {
    setLocalConfig(prev => ({
      ...prev,
      services: prev.services.map(s => s.id === id ? { ...s, [field]: value } : s)
    }));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold">CMS 대시보드</h1>
            <p className="text-zinc-500 mt-1">사이트 콘텐츠 및 테마를 실시간으로 수정하세요.</p>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={exitAdmin}
              className="px-6 py-2 border border-zinc-700 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              닫기
            </button>
            <button 
              onClick={handleSave}
              className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              저장하기
            </button>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                기본 정보 및 히어로 섹션
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">사이트 이름</label>
                  <input 
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:border-yellow-500 outline-none" 
                    value={localConfig.siteName}
                    onChange={(e) => updateField('siteName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">메인 타이틀</label>
                  <input 
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:border-yellow-500 outline-none" 
                    value={localConfig.heroTitle}
                    onChange={(e) => updateField('heroTitle', e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs uppercase text-zinc-500 mb-2">히어로 보조 텍스트</label>
                  <textarea 
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:border-yellow-500 outline-none h-24 resize-none" 
                    value={localConfig.heroSub}
                    onChange={(e) => updateField('heroSub', e.target.value)}
                  />
                </div>
              </div>
            </section>

            <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                에이전트 소개 (About)
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">소개 제목</label>
                  <input 
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:border-yellow-500 outline-none" 
                    value={localConfig.aboutTitle}
                    onChange={(e) => updateField('aboutTitle', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">소개 본문</label>
                  <textarea 
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:border-yellow-500 outline-none h-48 resize-none" 
                    value={localConfig.aboutContent}
                    onChange={(e) => updateField('aboutContent', e.target.value)}
                  />
                </div>
              </div>
            </section>

            <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                서비스 목록
              </h2>
              <div className="space-y-6">
                {localConfig.services.map((service) => (
                  <div key={service.id} className="p-4 bg-black rounded-xl border border-zinc-800">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input 
                        className="bg-transparent border-b border-zinc-800 py-2 focus:border-yellow-500 outline-none font-bold"
                        value={service.title}
                        onChange={(e) => updateService(service.id, 'title', e.target.value)}
                        placeholder="서비스명"
                      />
                      <input 
                        className="bg-transparent border-b border-zinc-800 py-2 focus:border-yellow-500 outline-none"
                        value={service.description}
                        onChange={(e) => updateService(service.id, 'description', e.target.value)}
                        placeholder="설명"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold mb-6">연락처 설정</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">담당자 이름</label>
                  <input 
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:border-yellow-500 outline-none" 
                    value={localConfig.contactManager}
                    onChange={(e) => updateField('contactManager', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">카카오톡 ID</label>
                  <input 
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:border-yellow-500 outline-none" 
                    value={localConfig.kakaoId}
                    onChange={(e) => updateField('kakaoId', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">텔레그램 ID</label>
                  <input 
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:border-yellow-500 outline-none" 
                    value={localConfig.telegramId}
                    onChange={(e) => updateField('telegramId', e.target.value)}
                  />
                </div>
              </div>
            </section>

            <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold mb-6">디자인 설정</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">포인트 컬러</label>
                  <div className="flex items-center space-x-3">
                    <input 
                      type="color" 
                      className="w-10 h-10 bg-transparent rounded cursor-pointer"
                      value={localConfig.primaryColor}
                      onChange={(e) => updateField('primaryColor', e.target.value)}
                    />
                    <span className="font-mono text-sm uppercase">{localConfig.primaryColor}</span>
                  </div>
                </div>
              </div>
            </section>

            <div className="p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl">
              <p className="text-sm text-yellow-500 leading-relaxed font-medium">
                💡 변경 사항은 브라우저에 즉시 반영되며, '저장하기'를 눌러야 영구 보관됩니다. (LocalStorage 시뮬레이션)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
