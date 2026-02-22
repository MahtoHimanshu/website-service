import { Container } from "@/components/ui/Container";
import type { FooterSection } from "@/site.config";

export function Footer({ text, links }: FooterSection) {
  return (
    <footer id="contact" className="border-t border-slate-200 py-8">
      <Container className="flex flex-col items-start justify-between gap-3 text-sm text-slate-600 sm:flex-row sm:items-center">
        <p>{text}</p>
        <nav aria-label="Footer links">
          <ul className="flex gap-4">
            {links.map((link) => (
              <li key={`${link.label}-${link.href}`}>
                <a className="hover:text-slate-900" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}