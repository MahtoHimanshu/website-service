# Minimal Agent-Ready Next.js Template

Small, production-ready template for static marketing websites with a config-first editing model.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- ESLint + Prettier

## Run locally

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`

## Generator patch workflow

- Prefer editing `site.config.ts` for content and section ordering.
- Add/modify section components only when a new section type is required.
- Keep changes minimal and avoid config/dependency changes unless requested.
- Before merging, run `npm run lint`, `npm run typecheck`, `npm run build`.

## Vercel

- Connect repo to Vercel via Git.
- Build command: `npm run build`
- Start command: `npm run start`

## Contributing

Recommended commit format:

- `feat(template): ...`
- `fix(template): ...`
- `chore(template): ...`

Use `.github/pull_request_template.md` to keep PR descriptions high-signal.# Website Service Template

Production-ready, extensible Next.js App Router template for AI-generated marketing websites.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- ESLint + Prettier
- Static-first architecture with optional DB stubs

## Local development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your env file:

   ```bash
   cp env.example .env.local
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000`.

## Quality checks

Run before creating commits or deploys:

```bash
npm run lint
npm run typecheck
npm run build
```

## Vercel deployment

1. Push this repository to GitHub.
2. Import the repo into Vercel.
3. Keep build command as `npm run build`.
4. Keep start command as `npm run start`.
5. Set env vars as needed (`NEXT_PUBLIC_SITE_URL`, optional `DATABASE_URL`).

## Generator patch workflow

The generator should only edit paths allowed in [docs/GENERATOR_GUIDE.md](docs/GENERATOR_GUIDE.md).

Typical flow:

1. Create a branch.
2. Apply patch/diff output to allowed files.
3. Validate path scope:

   ```bash
   npm run validate:tree -- app/page.tsx components/sections/Hero.tsx lib/site.ts
   ```

4. Run checks:

   ```bash
   npm run lint && npm run typecheck && npm run build
   ```

5. Commit and open PR.

## Content model

Primary content source is `lib/site.ts`.

- Brand
- Theme tokens
- Navigation
- Ordered section array (Hero, Features, CTA, Testimonials, FAQ, Footer)
- SEO defaults

Homepage rendering is config-driven in `app/page.tsx`.
