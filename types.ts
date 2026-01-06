
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
  agencyTitle: string;
  agencyContent: string;
  aboutTitle: string;
  aboutContent: string;
  services: ServiceItem[];
  detailServices: ServiceItem[];
  contactManager: string;
  phoneNumber: string;
  kakaoId: string;
  telegramId: string;
  primaryColor: string;
  secondaryColor: string;
}

export type ViewType = 'USER' | 'ADMIN';
