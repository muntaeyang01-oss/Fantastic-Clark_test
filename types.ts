
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SiteConfig {
  siteName: string;
  heroTitle: string;
  heroSub: string;
  aboutTitle: string;
  aboutContent: string;
  services: ServiceItem[];
  contactManager: string;
  kakaoId: string;
  telegramId: string;
  primaryColor: string;
  secondaryColor: string;
}

export type ViewType = 'USER' | 'ADMIN';
