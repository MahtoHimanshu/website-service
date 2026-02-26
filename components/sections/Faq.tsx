import { Container } from "@/components/ui/Container";
import type { FaqSection } from "@/site.config";

export function Faq({ title, items }: FaqSection) {
  return (
    <section id="faq" className="py-20 sm:py-24" aria-labelledby="faq-title">
      <Container className="max-w-3xl">
        <h2 id="faq-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <dl className="mt-8 divide-y divide-slate-200">
          {items.map((item) => (
            <details key={item.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                <dt>{item.question}</dt>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>
              <dd className="mt-3 text-sm text-slate-600">{item.answer}</dd>
            </details>
          ))}
        </dl>
      </Container>
    </section>
  );
}
