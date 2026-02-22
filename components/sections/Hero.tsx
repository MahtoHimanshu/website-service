import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { HeroSection } from "@/site.config";

export function Hero({ eyebrow, title, description, primaryCta, secondaryCta }: HeroSection) {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="hero-title">
      <Container className="max-w-3xl text-center">
        {eyebrow ? <p className="text-sm font-semibold text-indigo-600">{eyebrow}</p> : null}
        <h1 id="hero-title" className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg text-slate-600">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          {secondaryCta ? (
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}