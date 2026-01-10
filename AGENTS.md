# Repository Guidelines

## Project Structure & Module Organization
- `app/` Next.js App Router entry (`layout.tsx`, `page.tsx`, `globals.css`).
- `components/` UI building blocks: `ui/` (shadcn), `sections/` (page sections like `hero.tsx`), `motion/` (Framer Motion helpers), `cloud/` (background/ambience), `common/` (layout helpers).
- `content/` is the single source of truth for copy and data (`site.ts`, `projects.ts`, `experience.ts`, `testimonials.ts`, `principles.ts`, plus `content/README.md` for the map).
- `public/` static assets (favicons, og images, avatars).
- `tests/` Playwright smoke tests.

## Build, Test, and Development Commands
- `pnpm dev`: run the local dev server.
- `pnpm build`: production build.
- `pnpm start`: run the built app.
- `pnpm typecheck`: TypeScript type checking.
- `pnpm lint`: Biome lint.
- `pnpm format`: Biome formatting.
- `pnpm test`: Playwright smoke tests.

## Coding Style & Naming Conventions
- TypeScript + React + Tailwind; prefer server components by default.
- Indentation: 2 spaces, CRLF line endings (Biome enforces).
- Components: PascalCase (`SectionHeading`), hooks `useX`, section files kebab-case in `components/sections` (e.g., `social-proof.tsx`).
- Keep user-editable content in `content/` and keep motion-only logic in `components/motion/`.
- Template metadata lives in `content/template.ts`; LLM assets live in `public/llms.txt` and `public/index.md`.

## Spacing & Layout Standards
- Use section utilities: `.section` for default vertical rhythm and `.section-tight` for narrow bands (see `app/globals.css`).
- Use `.section-gap` for consistent grid gaps and `.card-padding` for consistent card density.
- Anchored sections inherit `scroll-margin-top` to account for the sticky header.

## Testing Guidelines
- Use Playwright for a lightweight smoke spec in `tests/smoke.spec.ts`.
- Tests should verify homepage render, key sections, and nav scroll behavior.

## Commit & Pull Request Guidelines
- No established commit convention in history; use Conventional Commits (`feat:`, `fix:`, `docs:`) for consistency.
- PRs should include: a clear summary, screenshots (desktop + mobile), test results (commands run), and any linked issues.

## Security & Configuration Tips
- Keep secrets out of the repo; use `.env.local` for local values.
- Only expose client-side env vars with the `NEXT_PUBLIC_` prefix.
