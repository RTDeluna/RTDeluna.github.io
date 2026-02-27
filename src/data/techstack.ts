export interface Tool {
  name: string;
  category: string;
}

export const techCategories = [
  {
    title: 'Advertising',
    tools: [
      { name: 'Meta Business Suite' },
      { name: 'Facebook Ads Manager' },
      { name: 'Meta Pixel' },
      { name: 'Conversions API' },
    ],
  },
  {
    title: 'CRM & Automation',
    tools: [
      { name: 'GoHighLevel' },
      { name: 'Zapier' },
      { name: 'Make' },
      { name: 'Mailchimp' },
    ],
  },
  {
    title: 'Development',
    tools: [
      { name: 'HTML/CSS/JS' },
      { name: 'React' },
      { name: 'Astro' },
      { name: 'Tailwind CSS' },
      { name: 'Node.js' },
      { name: 'TypeScript' },
    ],
  },
  {
    title: 'AI & Tools',
    tools: [
      { name: 'ChatGPT' },
      { name: 'Claude' },
      { name: 'Cursor' },
      { name: 'GitHub Copilot' },
      { name: 'v0' },
      { name: 'Midjourney' },
    ],
  },
  {
    title: 'Design',
    tools: [
      { name: 'Figma' },
      { name: 'Canva' },
      { name: 'Photoshop' },
    ],
  },
];
