import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { CtaBannerSection } from "@/site.config";

export function CtaBanner({ title, subtitle, buttonLabel, buttonHref }: CtaBannerSection) {
  return (
    <section className="bg-indigo-600 py-16 sm:py-20" aria-labelledby="cta-banner-title">
      <Container className="text-center">
        <h2 id="cta-banner-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {subtitle ? <p className="mt-3 text-lg text-indigo-100">{subtitle}</p> : null}
        <div className="mt-8">
          <Button href={buttonHref} variant="secondary">
            {buttonLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
