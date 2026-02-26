import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import type { TestimonialsSection } from "@/site.config";

export function Testimonials({ title, items }: TestimonialsSection) {
  return (
    <section className="bg-slate-50 py-20 sm:py-24" aria-labelledby="testimonials-title">
      <Container>
        <h2 id="testimonials-title" className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <li key={index}>
              <Card>
                <blockquote className="flex h-full flex-col">
                  <p className="flex-1 text-slate-700 before:content-['\u201c'] after:content-['\u201d']">
                    {item.quote}
                  </p>
                  <footer className="mt-4">
                    <p className="font-semibold">{item.author}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </footer>
                </blockquote>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
