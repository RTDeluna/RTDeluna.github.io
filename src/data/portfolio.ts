export type PortfolioCategory = 'all' | 'meta-ads' | 'ghl' | 'web-dev';

export interface PortfolioItem {
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  description: string;
  metric?: string;
  image: string;
  link?: string;
}

export const categories: { key: PortfolioCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'meta-ads', label: 'Meta Ads' },
  { key: 'ghl', label: 'GHL Builds' },
  { key: 'web-dev', label: 'Web Development' },
];

export const portfolio: PortfolioItem[] = [
  {
    title: 'E-Commerce ROAS Campaign',
    category: 'meta-ads',
    categoryLabel: 'Meta Ads',
    description: 'Scaled a DTC brand from $5K to $50K/month ad spend while maintaining 4.5x ROAS through strategic audience segmentation and creative testing.',
    metric: '4.5x ROAS',
    image: '/images/portfolio/portfolio-1.png',
  },
  {
    title: 'Lead Gen Funnel — Real Estate',
    category: 'meta-ads',
    categoryLabel: 'Meta Ads',
    description: 'Built and optimized a Meta lead generation campaign for a real estate agency, generating qualified leads at $12 CPL.',
    metric: '$12 CPL',
    image: '/images/portfolio/portfolio-2.png',
  },
  {
    title: 'Full CRM Automation Suite',
    category: 'ghl',
    categoryLabel: 'GHL Build',
    description: 'Designed a complete GoHighLevel CRM setup with 15+ automated workflows — lead capture, nurture sequences, appointment booking, and review requests.',
    metric: '15+ Workflows',
    image: '/images/portfolio/portfolio-3.png',
  },
  {
    title: 'Appointment Booking System',
    category: 'ghl',
    categoryLabel: 'GHL Build',
    description: 'Automated appointment booking pipeline with SMS/email confirmations, reminders, and no-show follow-ups, reducing missed appointments by 40%.',
    metric: '40% Fewer No-Shows',
    image: '/images/portfolio/portfolio-4.png',
  },
  {
    title: 'Luxe Hotel — Booking Website',
    category: 'web-dev',
    categoryLabel: 'Web Dev',
    description: 'Modern hotel booking website with responsive design, room showcase gallery, and integrated reservation system.',
    image: '/images/portfolio/portfolio-5.png',
    link: 'https://rtdeluna.github.io/Luxe-Hotel/',
  },
  {
    title: 'KodeResto — Restaurant Platform',
    category: 'web-dev',
    categoryLabel: 'Web Dev',
    description: 'Full-featured restaurant website with menu management, online ordering interface, and mobile-first responsive design.',
    image: '/images/portfolio/portfolio-6.png',
    link: 'https://rtdeluna.github.io/KodeResto/',
  },
];
