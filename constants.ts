import { SiteConfig } from './types.ts';

export const DEFAULT_CONFIG: SiteConfig = {
  siteName: 'FANTASTIC CLARK',
  heroTitle: 'FANTASTIC CLARK PREMIUM',
  heroSub: 'VIP(정켓)이용 고객님은 경험이 많은 전문 에이전트와 함께해야 합니다.',
  agencyTitle: 'FANTASTIC CLARK AGENCY',
  agencyContent: `안녕하십니까. FANTASTIC CLARK 대표 John KIM입니다.
우리 FANTASTIC CLARK은 카지노 산업의 정켓을 운영하여 필리핀 카지노 산업을 20년 동안 성장을 거둘 수 있도록, 필리핀 클락 카지노 발전의 발판 역할을 해 왔습니다.
또한, 코로나 시기에도 끝까지 버팀으로서 저력을 보여 왔습니다.

현재 카지노 산업은 유례 없는 경기의 혹한기를 겪고 있으나, 이러한 위기를 극복하여 성장할 수 있는 DNA가 FANTASTIC CLARK에는 내재되어 있습니다.
이를 바탕으로 어떠한 상황 속에서도 ‘최고의 경쟁력’을 가진 회사로 도약하기 위해 고객님들께 더 나은 서비스를 제공하고 있습니다. 비슷해 보이지만 분명히 다른 차별화를 통해 고객님께 안전하고 의지할 수 있는 쉼터가 되겠습니다. 
상생을 통해 사람을 잃지 않는 회사로 신뢰 있는 에이전시로 묵묵히 걸어가겠습니다.

2026 병오년, 귀하의 건강과 풍요가 항상 함께하시길 바라겠습니다.

FANTASTIC CLARK 대표 JOHN KIM`,
  aboutTitle: 'KEVIN MUN 이사',
  aboutContent: `주요약력

1982 출생
2001 영어영문 학사 입학
2023 필리핀 AGENT 시작
2025 FANTASTIC CLARK 입사. (대표에이전트 scout, 이사 선임)
2026 1월 3일 블로그 '판타스틱 클락' 오픈.`,
  services: [
    { id: '1', title: 'FREE ROOM 제공', description: 'HANN, ROYCE, HILTON, POOL VILLA 등 \n숙소 서비스를 MINIMUM 조건 하에 제공해드립니다.\n빠른 상담 해드리겠습니다.', icon: 'Crown' },
    { id: '2', title: '최고의 환전 시스템', description: "안전한 프로세스, 합리적인 RATE는 좋은 결과의 \n'필수 조건' 입니다.", icon: 'Clock' },
    { id: '3', title: '최상의 PLAY SUPPORT', description: '고객님의 음료, 음식 서비스 등 불편함 없이 \n서포트 해드립니다.\n물수건 하나가 고객님의 결과에 \n영향을 미칠 때도 있습니다.', icon: 'Headset' },
  ],
  detailServices: [
    { id: 'd1', title: 'PICK UP / DROP OFF', description: "첫째도 '안전' 두째도 '안전' 그리고\n마지막도 '안전'이 여행에서 가장 중요합니다.\n고객님의 동선에 전문 에이전트가 함께 하겠습니다.", icon: 'Car' },
    { id: 'd2', title: '유흥의 끝판왕', description: '바, KTV, JTV, 마사지, 베트남 마사지 등 \n고객님의 NEEDS는 전문가에게 맡기십시오.', icon: 'Hotel' },
    { id: 'd3', title: '명문 골프 코스 부킹', description: '미모사, 썬밸리 등 클락 최고의 골프장 부킹정보를 정확하게 드립니다.', icon: 'Golf' },
    { id: 'd4', title: '미식 및 라이프스타일 케어', description: '현지 최고의 맛집 예약부터 관광까지 고객님의 모든 일정을 큐레이팅합니다.', icon: 'Star' }
  ],
  contactManager: 'KEVIN',
  phoneNumber: '010-2352-7855',
  kakaoId: 'mrsun50',
  telegramId: 'mrsun50',
  primaryColor: '#D4AF37',
  secondaryColor: '#000000'
};