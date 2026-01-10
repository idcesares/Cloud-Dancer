# Cloud Dancer

A calm, high-performance developer portfolio landing page inspired by Pantone 11-4201 Cloud Dancer.

![Cloud Dancer preview](public/og.png)

## Live Demo
- https://cloud-dancer.dcesares.dev

## Highlights
- Single-page layout with bento-style sections and ambient motion
- Content-driven architecture (`content/*` is the single source of truth)
- Light + dark themes with CSS variables
- Playwright smoke tests + Biome formatting
- LLM/GEO-ready assets (`public/llms.txt`, `public/index.md`)

## Tech Stack
- Next.js App Router + React + TypeScript
- Tailwind CSS + shadcn/ui components
- Framer Motion for ambient drift

## System Requirements
- Node.js 20.11+ (see `.nvmrc`)
- pnpm 10.20+

## Getting Started
```bash
pnpm install
pnpm dev
```

## Customize in 5 Minutes
1. Edit `content/site.ts` with your name, links, and CTA targets.
2. Update projects in `content/projects.ts`.
3. Replace roles in `content/experience.ts` (4 entries recommended).
4. Optional: tweak `content/testimonials.ts` and `content/principles.ts`.
5. Swap images in `public/avatars/` and `public/og.png`.

See `content/README.md` for a quick reference.

## LLM + GEO Readiness
This template ships with:
- `public/llms.txt` for AI crawlers and retrieval tools.
- `public/index.md` as a Markdown mirror of the homepage content.
- JSON-LD in `app/page.tsx` (Person, WebSite, ProfilePage) derived from `content/site.ts`.

Keep these files in sync with your content updates, and set `siteConfig.links.website`
to your real domain before deploying.

## Scripts
```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm format
pnpm test
```

## Deployment
Recommended: Vercel.
```bash
pnpm build
pnpm start
```

## Template Creator
- Isaac D'Césares — https://dcesares.dev
- GitHub: https://github.com/idcesares
- Project site: https://cloud-dancer.dcesares.dev
- Repository: https://github.com/idcesares/Cloud-Dancer

## Contact Form TODO
The contact CTA is static by default. Wire it to a form provider or server action if you want submissions.
