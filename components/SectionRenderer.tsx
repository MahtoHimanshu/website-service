import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import type { SiteSection } from "@/site.config";

type SectionRendererProps = {
  section: SiteSection;
};

export function SectionRenderer({ section }: SectionRendererProps) {
  switch (section.type) {
    case "hero":
      return <Hero {...section} />;
    case "features":
      return <Features {...section} />;
    case "pricing":
      return <Pricing {...section} />;
    case "testimonials":
      return <Testimonials {...section} />;
    case "cta_banner":
      return <CtaBanner {...section} />;
    case "faq":
      return <Faq {...section} />;
    case "footer":
      return null;
    default:
      return null;
  }
}