# Architecture

This repository is a minimal marketing-site template.

## Site config and rendering

- `site.config.ts` is the single source of truth for content and section order.
- `app/page.tsx` renders `Navbar`, then maps `siteConfig.sections` with `SectionRenderer`.
- `SectionRenderer` routes each `section.type` to one presentational component in `components/sections/`.

## Add a new section

1. Add a new discriminated union member in `site.config.ts`.
2. Add a matching component in `components/sections/`.
3. Add a mapping case in `components/SectionRenderer.tsx`.

## Safe-to-edit files

- Preferred: `site.config.ts`
- Section implementation: `components/sections/*`
- Render logic only when needed: `app/page.tsx`, `components/SectionRenderer.tsx`
- Global styling: `app/globals.css`
