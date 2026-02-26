// last updated from connector: 2026-02-22T17:25:57.152Z
// webforge: Heyllo
export type Radius = "sm" | "md" | "lg";

export type NavItem = {
  label: string;
  href: string;
};

export type HeroSection = {
  type: "hero";
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export type FeaturesSection = {
  type: "features";
  title: string;
  intro: string;
  items: Array<{ title: string; description: string }>;
};

export type PricingSection = {
  type: "pricing";
  title: string;
  tiers: Array<{ name: string; price: string; features: string[]; cta: string; highlighted?: boolean }>;
};

export type TestimonialsSection = {
  type: "testimonials";
  title: string;
  items: Array<{ quote: string; author: string; role: string }>;
};

export type CtaBannerSection = {
  type: "cta_banner";
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref: string;
};

export type FaqSection = {
  type: "faq";
  title: string;
  items: Array<{ question: string; answer: string }>;
};

export type FooterSection = {
  type: "footer";
  text: string;
  links: NavItem[];
};

export type SiteSection =
  | HeroSection
  | FeaturesSection
  | PricingSection
  | TestimonialsSection
  | CtaBannerSection
  | FaqSection
  | FooterSection;

export type SiteConfig = {
  site: {
    name: string;
    description: string;
  };
  theme: {
    accentColor: string;
    radius: Radius;
  };
  nav: NavItem[];
  sections: SiteSection[];
};

export const siteConfig: SiteConfig = {
  site: {
    name: "Lumen Studio",
    description: "A clean, config-driven template for modern marketing websites.",
  },
  theme: {
    accentColor: "indigo",
    radius: "md",
  },
  nav: [
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Minimal template",
      title: "Launch your next marketing site with confidence",
      description:
        "Use one config file for content and structure, while keeping components simple and reusable.",
      primaryCta: { label: "Get Started", href: "#contact" },
      secondaryCta: { label: "Explore Features", href: "#features" },
    },
    {
      type: "features",
      title: "Designed for fast iteration",
      intro: "A small component set and typed sections make changes safe and predictable.",
      items: [
        {
          title: "Single config source",
          description: "Update copy and section order in one place.",
        },
        {
          title: "Agent-friendly docs",
          description: "Progressive disclosure helps agents make smaller, safer edits.",
        },
        {
          title: "Vercel-ready",
          description: "Static-first defaults with standard Next.js build and start scripts.",
        },
      ],
    },
    {
      type: "footer",
      text: "© 2026 Lumen Studio. Built for reliable marketing pages.",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
      ],
    },
  ],
};