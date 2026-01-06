import React, { useState } from 'react';
import { SiteConfig, ServiceItem } from '../types.ts';

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
              className="px-6 py-2 text-black font-bold rounded-lg hover:opacity-90 transition-colors"
              style={{ backgroundColor: localConfig.primaryColor }}
            >
              저장하기
            </button>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: localConfig.primaryColor }}></span>
                기본 정보
              </h2>
              <div className="grid gap-6">
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">사이트 이름</label>
                  <input 
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:outline-none" 
                    value={localConfig.siteName}
                    onChange={(e) => updateField('siteName', e.target.value)}
                  />
                </div>
              </div>
            </section>

            <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: localConfig.primaryColor }}></span>
                AGENCY 소개 설정
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">AGENCY 타이틀</label>
                  <input 
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:outline-none" 
                    value={localConfig.agencyTitle}
                    onChange={(e) => updateField('agencyTitle', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">AGENCY 소개 문구</label>
                  <textarea 
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:outline-none h-32" 
                    value={localConfig.agencyContent}
                    onChange={(e) => updateField('agencyContent', e.target.value)}
                  />
                </div>
              </div>
            </section>

            <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: localConfig.primaryColor }}></span>
                STAFF 소개 설정
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">STAFF 타이틀</label>
                  <input 
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:outline-none" 
                    value={localConfig.aboutTitle}
                    onChange={(e) => updateField('aboutTitle', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">STAFF 소개 문구</label>
                  <textarea 
                    className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:outline-none h-32" 
                    value={localConfig.aboutContent}
                    onChange={(e) => updateField('aboutContent', e.target.value)}
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold mb-6">디자인 및 컬러</h2>
              <div>
                <label className="block text-xs uppercase text-zinc-500 mb-2">포인트 컬러</label>
                <div className="flex items-center space-x-3">
                  <input type="color" className="w-10 h-10 bg-transparent rounded cursor-pointer" value={localConfig.primaryColor} onChange={(e) => updateField('primaryColor', e.target.value)} />
                  <span className="font-mono text-sm uppercase">{localConfig.primaryColor}</span>
                </div>
              </div>
            </section>

            <section className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold mb-6">연락처 및 SNS</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">담당자</label>
                  <input className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:outline-none" value={localConfig.contactManager} onChange={(e) => updateField('contactManager', e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">전화번호</label>
                  <input className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:outline-none" value={localConfig.phoneNumber} onChange={(e) => updateField('phoneNumber', e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">카카오톡</label>
                  <input className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:outline-none" value={localConfig.kakaoId} onChange={(e) => updateField('kakaoId', e.target.value)} />
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2">텔레그램</label>
                  <input className="w-full bg-black border border-zinc-800 rounded-lg p-3 focus:outline-none" value={localConfig.telegramId} onChange={(e) => updateField('telegramId', e.target.value)} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;