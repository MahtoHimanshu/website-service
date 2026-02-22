import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import type { FeaturesSection } from "@/site.config";

export function Features({ title, intro, items }: FeaturesSection) {
  return (
    <section id="features" className="bg-slate-50 py-20 sm:py-24" aria-labelledby="features-title">
      <Container>
        <header className="max-w-2xl">
          <h2 id="features-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-slate-600">{intro}</p>
        </header>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title}>
              <Card>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}