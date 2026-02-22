import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
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
    case "footer":
      return null;
    default:
      return null;
  }
}