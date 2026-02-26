import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import type { PricingSection } from "@/site.config";

export function Pricing({ title, tiers }: PricingSection) {
  return (
    <section id="pricing" className="py-20 sm:py-24" aria-labelledby="pricing-title">
      <Container>
        <h2 id="pricing-title" className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <li key={tier.name} className={tier.highlighted ? "rounded-md ring-2 ring-indigo-600" : ""}>
              <Card>
                <div className="flex h-full flex-col">
                  <div>
                    <h3 className="text-lg font-semibold">{tier.name}</h3>
                    <p className="mt-2 text-3xl font-bold tracking-tight">{tier.price}</p>
                    <ul className="mt-4 space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                          <span aria-hidden="true" className="mt-0.5 text-indigo-600">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Button
                      href="#contact"
                      variant={tier.highlighted ? "primary" : "secondary"}
                    >
                      {tier.cta}
                    </Button>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
