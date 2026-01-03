
import { SiteConfig } from './types';

export const DEFAULT_CONFIG: SiteConfig = {
  siteName: 'FANTASTIC CLARK',
  heroTitle: 'PREMIUM CASINO AGENCY',
  heroSub: '클락 최고의 신뢰와 전문성, 당신의 완벽한 파트너 판타스틱 클락',
  aboutTitle: 'AGENT 소개',
  aboutContent: '판타스틱 클락은 다년간의 노하우를 바탕으로 고객님께 최상의 서비스를 제공하는 프리미엄 에이전시입니다. 투명하고 정직한 운영을 원칙으로 하며, 모든 고객님이 특별한 경험을 하실 수 있도록 밀착 케어를 지원합니다.',
  services: [
    { id: '1', title: '프라이빗 VIP 룸', description: '고객님만을 위한 프라이빗한 공간에서 즐기는 최상의 게임 환경을 제공합니다.', icon: 'Crown' },
    { id: '2', title: '실시간 예약 시스템', description: '언제 어디서든 간편하게 예약하고 즉시 상담받을 수 있는 시스템을 구축하고 있습니다.', icon: 'Clock' },
    { id: '3', title: '24/7 밀착 케어', description: '전문 상담사가 24시간 상주하며 고객님의 모든 요구 사항을 신속하게 처리해 드립니다.', icon: 'Headset' },
  ],
  contactManager: 'KEVIN',
  kakaoId: 'mrsun50',
  telegramId: 'mrsun50',
  primaryColor: '#FFD700',
  secondaryColor: '#000000'
};
