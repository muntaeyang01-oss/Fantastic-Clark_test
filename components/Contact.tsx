
import React from 'react';

interface ContactProps {
  manager: string;
  phoneNumber: string;
  kakaoId: string;
  telegramId: string;
  primaryColor: string;
}

const Contact: React.FC<ContactProps> = ({ manager, phoneNumber, kakaoId, telegramId, primaryColor }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
        <div className="flex-1 p-12 md:p-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">CONTACT US</h2>
          <p className="text-zinc-400 mb-12">예약 및 문의사항은 아래 연락처로 언제든지 연락주세요. 담당자가 실시간으로 답변해 드립니다.</p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
                <span className="text-sm font-bold">DIR</span>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Manager</p>
                <p className="text-xl font-bold">{manager}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Phone</p>
                <p className="text-xl font-bold">{phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[400px] bg-black p-12 flex flex-col justify-center gap-4">
          <a 
            href={`https://pf.kakao.com/`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-[#FEE500] text-[#3c1e1e] rounded-2xl hover:scale-105 transition-transform"
          >
            <div className="flex items-center space-x-4">
              <div className="font-black text-2xl italic">TALK</div>
              <div className="text-sm font-bold uppercase tracking-widest">KakaoTalk</div>
            </div>
            <div className="font-mono text-lg font-bold">ID: {kakaoId}</div>
          </a>

          <a 
            href={`https://t.me/${telegramId}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-[#0088cc] text-white rounded-2xl hover:scale-105 transition-transform"
          >
            <div className="flex items-center space-x-4">
              <div className="font-black text-2xl italic">TELE</div>
              <div className="text-sm font-bold uppercase tracking-widest">Telegram</div>
            </div>
            <div className="font-mono text-lg font-bold">@{telegramId}</div>
          </a>

          <p className="mt-6 text-center text-zinc-500 text-xs uppercase tracking-[0.2em]">
            Fast Response Within 5 Minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
