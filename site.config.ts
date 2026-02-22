// last updated from connector: 2026-02-22T15:09:31.120Z
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

export type FooterSection = {
  type: "footer";
  text: string;
  links: NavItem[];
};

export type SiteSection = HeroSection | FeaturesSection | FooterSection;

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