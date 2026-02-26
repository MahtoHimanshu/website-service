// catalogue.ts  — machine-readable, committed to repo
export const SECTION_CATALOGUE = `
AVAILABLE SECTION TYPES — only use these exact type values:

hero
  eyebrow?: string
  title: string
  description: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }

features
  title: string
  intro: string
  items: Array<{ title: string; description: string }>

pricing
  title: string
  tiers: Array<{ name: string; price: string; features: string[]; cta: string; highlighted?: boolean }>

testimonials
  title: string
  items: Array<{ quote: string; author: string; role: string }>

cta_banner
  title: string
  subtitle?: string
  buttonLabel: string
  buttonHref: string

faq
  title: string
  items: Array<{ question: string; answer: string }>

footer
  text: string
  links: Array<{ label: string; href: string }>
`;
