import { SectionRenderer } from "@/components/SectionRenderer";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { siteConfig } from "@/site.config";

export default function HomePage() {
  const footer = siteConfig.sections.find((section) => section.type === "footer");
  const contentSections = siteConfig.sections.filter((section) => section.type !== "footer");

  return (
    <>
      <Navbar siteName={siteConfig.site.name} items={siteConfig.nav} />
      <main>
        {contentSections.map((section, index) => (
          <SectionRenderer key={`${section.type}-${index}`} section={section} />
        ))}
      </main>
      {footer && <Footer {...footer} />}
    </>
  );
}