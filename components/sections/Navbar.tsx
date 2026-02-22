import { Container } from "@/components/ui/Container";
import type { NavItem } from "@/site.config";

type NavbarProps = {
  siteName: string;
  items: NavItem[];
};

export function Navbar({ siteName, items }: NavbarProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="font-semibold text-slate-900" aria-label={`${siteName} home`}>
          {siteName}
        </a>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6 text-sm">
            {items.map((item) => (
              <li key={`${item.label}-${item.href}`}>
                <a className="text-slate-700 hover:text-slate-900" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}