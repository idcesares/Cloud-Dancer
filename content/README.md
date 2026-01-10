# Content Guide

All user-editable copy and data live in `content/`. Update these files to personalize the template.

## Files
- `site.ts` — Name, headline, short bio, location, links, SEO (title/description/keywords/OG image/twitter/locale), nav, and skills groups.
- `projects.ts` — Featured projects (title, description, tags, links, highlights).
- `experience.ts` — Timeline entries (role, company, period, bullets, tech).
- `testimonials.ts` — Optional testimonials with quotes and avatars.
- `principles.ts` — Optional principles cards (title, description, icon key).
- `template.ts` — Template metadata (creator + project links). Update only if you are forking the template itself.

## Quick edits
1. Update `site.ts` with your name, links, and CTA targets.
2. Replace project cards in `projects.ts`.
3. Add your roles in `experience.ts` (4 entries recommended for the carousel).
4. Swap avatars in `public/avatars/` and update `testimonials.ts`.
5. Replace `public/og.png` with a 1200x630 image for sharing previews.

## Tips
- Keep text short; this layout favors compact, scannable copy.
- Icons are mapped in `components/sections/skills.tsx` and `components/sections/principles.tsx`.
