# Cloud Dancer — Dev Portfolio Landing (Template)

**File:** `SPECS.md`  
**Goal:** Provide a crystal-clear blueprint so CODEX-CLI can generate a complete, high-quality open-source project without guesswork.

---

## 1) Product Summary

**Cloud Dancer** is a modern, highly-performant, single-page developer portfolio landing template inspired by **Pantone Color of the Year 2026: PANTONE 11-4201 “Cloud Dancer”** (a natural, airy off-white). The UI should feel like **soft atmosphere**: gentle gradients, cloudlike motion, crisp typography, and polished interaction details.

This is **not** a generic “one more portfolio”. It’s a template that looks like it belongs in 2026: bento grids, variable-font typography, subtle depth, micro-interactions, and motion that feels *natural* (drift, float, dissolve) rather than “look I discovered animations”.

---

## 2) Target Users

- Developers who want a portfolio that looks premium with minimal setup.
- DevRel / speakers / makers who want a “personal brand” landing page.
- OSS maintainers who want a beautiful README-driven template to fork.

---

## 3) Primary Goals (Must-Have)

1. **Outstanding first impression**  
   The homepage must feel premium in the first 2 seconds: typography, spacing, and motion.

2. **Performance-first**  
   Must ship minimal JS, keep most components server-rendered, and only use client components for motion/interaction where necessary.

3. **Easy customization**
   All user-editable content must live in a small set of files (single source of truth):
   - `content/site.ts` (name, tagline, links, SEO)
   - `content/projects.ts` (projects)
   - `content/experience.ts` (timeline)
   - `content/testimonials.ts` (optional)
   - `content/faq.ts` (optional)
   No “search through 14 components to find the text”.

4. **Modern stack**
   Next.js App Router + React + Tailwind + shadcn/ui.

5. **Shadcn + Tailwind design system**
   Use shadcn components as a baseline, but customize visuals so it doesn’t look like every other shadcn site.

6. **Accessibility**
   Keyboard navigation, visible focus states, ARIA best practices, reduced motion support.

---

## 4) Non-Goals (Explicitly Not Doing)

- No backend, no DB, no auth.
- No CMS requirement.
- No blog engine is required (optional MDX “nice to have”, but not mandatory).
- No multi-page app required (single-page landing is the default).  
  Optional additional routes are allowed (e.g. `/projects`, `/uses`) but should not be required.

---

## 5) Tech Stack

### Runtime / Framework
- **Next.js** (App Router)
- **React**
- **TypeScript**

### Styling
- **Tailwind CSS**
- **shadcn/ui** components (new-york style baseline)

### Motion
Use **Framer Motion** (or `motion` package if preferred), but:
- Keep motion components isolated in `/components/motion/*`.
- Provide `prefers-reduced-motion` fallbacks.

### Icons
- `lucide-react`

### Tooling
- **pnpm** package manager
- **Biome** for formatting + linting (fast, single-tool workflow)
- **Husky** + `lint`/`format` pre-commit (optional but recommended)

### Testing (Lightweight)
- **Playwright** for a single smoke test:
  - homepage renders
  - key sections exist
  - nav links scroll correctly

---

## 6) Key UX / UI Direction (2026 Patterns)

### Visual language
- “Air + structure”: lots of whitespace, soft layers, confident typography.
- Bento grids for content grouping.
- Subtle glass/blur surfaces over gradient backgrounds (do not overdo blur).
- Minimal borders, soft shadows, depth through contrast and grain (optional).
- Micro-interactions: hover lift, gentle glow, icon drift, text underline animations.

### Motion language (“natural as clouds”)
Avoid “springy UI toy” energy. Aim for:
- Slow drift (cloud blobs moving subtly)
- Gentle parallax (very low amplitude)
- Dissolve / fade-up reveals with slight blur
- Soft hover response (2–4px translate, subtle shadow increase)
- Background ambience: slow gradient shifts / noise textures

### Reduced motion
- When `prefers-reduced-motion: reduce`, disable:
  - continuous drifting backgrounds
  - parallax transforms
  - large transitions
  Keep simple fade-ins only.

---

## 7) Branding + Color System

### Primary brand color: Cloud Dancer
- **Pantone reference:** PANTONE 11-4201 Cloud Dancer  
- Provide practical web equivalents:
  - `--cloud-dancer-hex: #F0EEE9` (default background tint)
  - Provide a small palette around it:
    - `ink`: near-black for text
    - `mist`: cool gray for borders
    - `silver`: subtle metallic accent
    - `sky`: muted blue accent
    - `ember`: warm accent for CTA (very restrained)

> Note: Cloud Dancer is a white-ish tone. The design must remain readable and not become “all-white everything”. Use contrast and texture.

### Tailwind + CSS variables approach
Use CSS variables for theme tokens in `globals.css`:
- `--background`, `--foreground`
- `--card`, `--card-foreground`
- `--muted`, `--muted-foreground`
- `--border`, `--ring`
- `--primary`, `--primary-foreground`
- `--accent`, `--accent-foreground`

Include **light + dark mode**, where dark mode keeps Cloud Dancer as a subtle highlight rather than a background.

---

## 8) Typography

### Requirements
- Use `next/font` with a modern variable font.
- Must look great for:
  - hero headline
  - section headings
  - body
  - small UI labels

### Recommended pairing
- Sans variable for body/UI (clean, modern)
- Optional display/serif accent for hero quote or nameplate (sparingly)

### Type scale
Define a consistent scale and apply across components:
- Hero title: 48–72px (responsive)
- Section titles: 28–36px
- Body: 16–18px
- Small UI: 12–14px

---

## 9) Page Information Architecture (Single Page)

### Global layout
- Top sticky header with nav + theme toggle
- Sections in this order:
  1. **Hero**
  2. **Social proof strip** (logos or “as seen / featured” placeholders)
  3. **About**
  4. **Featured Projects**
  5. **Skills / Toolbelt**
  6. **Experience Timeline**
  7. **Testimonials** (optional)
  8. **FAQ** (optional)
  9. **Contact CTA**
  10. Footer

### Section specs

#### 9.1 Hero
Must include:
- Name + role tagline
- Short positioning statement (1–2 lines)
- Primary CTA (e.g. “View Projects”)
- Secondary CTA (e.g. “Download Resume”)
- A “cloud ambience” visual: subtle background blobs + grain/noise + gentle drift

Interaction:
- CTA buttons with refined hover/press animations
- Optional “scroll indicator” micro animation

#### 9.2 Social Proof Strip
- Minimal, grayscale logo placeholders with hover brighten
- Or alternative: “Metrics chips” (years exp, talks, OSS stars)

#### 9.3 About
- Two-column bento:
  - left: narrative bio
  - right: quick facts (location, interests, open to work, etc.)

#### 9.4 Featured Projects
- Grid of project cards (3–6)
- Each card includes:
  - title
  - description
  - tags (stack)
  - links (GitHub, Live)
  - optional highlight metric (stars, users, etc.)
- Hover state: slight lift + gradient edge + icon micro motion

#### 9.5 Skills / Toolbelt
- Tabs or segmented control:
  - Frontend, Backend, DevOps, AI/ML, Tooling (customizable)
- Each tab shows “chips” and optionally a proficiency indicator (avoid cringe progress bars; use subtle dots or “comfort level” labels)

#### 9.6 Experience Timeline
- Vertical timeline with role cards
- Each entry includes:
  - title, org, dates
  - 2–4 bullet achievements
- Subtle scroll reveal per entry

#### 9.7 Testimonials (Optional)
- Carousel optional, but default should be a static grid to avoid heavy JS.
- If carousel is implemented, keep it lightweight and accessible.

#### 9.8 FAQ (Optional)
- Accordion using shadcn `Accordion`
- Keep answers short and practical

#### 9.9 Contact CTA
- A polished CTA panel:
  - “Let’s build something calm and powerful.”
  - Buttons: Email, LinkedIn, Calendly (optional)
- Optional small contact form:
  - If included, it must be **client-only** and use a fake submit (no backend).
  - Provide clear TODO instructions if user wants to wire it to a service.

#### 9.10 Footer
- Minimal links + copyright
- “Built with Cloud Dancer Template” link

---

## 10) Components Inventory (shadcn-first)

Use and customize these shadcn components:
- Button
- Card
- Badge
- Tabs
- Accordion
- Separator
- Tooltip
- Sheet or DropdownMenu (for mobile nav)
- Avatar (optional)
- Toast (optional)

Create custom template components:
- `CloudBackground` (ambient blobs/noise)
- `SectionHeading` (consistent headings)
- `ProjectCard`
- `Timeline`
- `ThemeToggle`
- `MagneticButton` (optional, subtle)

---

## 11) File/Folder Structure

```

.
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ globals.css
│  ├─ opengraph-image.tsx        (optional)
│  └─ sitemap.ts                 (optional)
├─ components/
│  ├─ ui/                        (shadcn generated components)
│  ├─ sections/
│  │  ├─ hero.tsx
│  │  ├─ social-proof.tsx
│  │  ├─ about.tsx
│  │  ├─ projects.tsx
│  │  ├─ skills.tsx
│  │  ├─ timeline.tsx
│  │  ├─ testimonials.tsx
│  │  ├─ faq.tsx
│  │  └─ contact.tsx
│  ├─ motion/
│  │  ├─ fade-in.tsx
│  │  ├─ drift.tsx
│  │  └─ use-reduced-motion.ts
│  ├─ cloud/
│  │  ├─ cloud-background.tsx
│  │  └─ noise-overlay.tsx
│  └─ common/
│     ├─ container.tsx
│     ├─ section-heading.tsx
│     ├─ theme-toggle.tsx
│     └─ site-header.tsx
├─ content/
│  ├─ site.ts
│  ├─ projects.ts
│  ├─ experience.ts
│  ├─ testimonials.ts
│  └─ faq.ts
├─ public/
│  ├─ favicon.ico
│  ├─ og.png                      (optional placeholder)
│  └─ avatars/                    (optional)
├─ styles/
│  └─ tokens.css                  (optional; can be in globals.css)
├─ tests/
│  └─ smoke.spec.ts
├─ .github/
│  ├─ workflows/ci.yml
│  ├─ FUNDING.yml                 (optional)
│  └─ ISSUE_TEMPLATE/             (optional)
├─ LICENSE
├─ README.md
├─ CONTRIBUTING.md
├─ CODE_OF_CONDUCT.md
├─ biome.json
├─ package.json
├─ tsconfig.json
├─ next.config.ts
└─ components.json                (shadcn config)

```

---

## 12) Content Model (TypeScript)

### `content/site.ts`
Must contain:
- name
- headline
- shortBio
- location
- avatarUrl
- links: github, linkedin, x, email, website
- CTAs: primary, secondary
- SEO: title, description, keywords, ogImage
- “OpenGraph handle” fields (optional)

### `content/projects.ts`
Each project:
- title
- description
- tags: string[]
- hrefLive?
- hrefRepo?
- featured: boolean
- highlights?: string[]

### `content/experience.ts`
Each entry:
- role
- company
- period
- bullets: string[]
- tech?: string[]

---

## 13) Performance Requirements

1. **Server Components by default**
   - Sections should be server components unless they truly need client interactivity.
   - Motion wrappers may be client, but keep them minimal.

2. **Image optimization**
   - Use `next/image` everywhere.
   - Avoid heavy background videos.

3. **Bundle discipline**
   - No “animation library everywhere”.
   - Only import motion where needed.

4. **Targets**
   - Lighthouse Performance: 90+ (baseline)
   - Accessibility: 95+
   - SEO: 90+

---

## 14) Accessibility Requirements

- Semantic headings and landmarks (`main`, `nav`, `footer`)
- Visible focus outlines
- Keyboard accessible menus
- Proper aria labels for icon-only buttons
- Reduced motion support
- Color contrast compliant for text and UI controls

---

## 15) SEO Requirements

- Correct metadata in `app/layout.tsx`
- OpenGraph + Twitter cards
- `sitemap.ts` and `robots.txt` (optional but recommended)
- Good heading structure (H1 once, H2 per section)

---

## 16) Repository / OSS Requirements

### License
- **MIT** license by default

### Docs
- `README.md` must include:
  - what it is
  - demo screenshot
  - features
  - stack
  - setup steps
  - customization guide (pointing to `/content`)
  - deployment guide (Vercel recommended)
- `CONTRIBUTING.md`:
  - how to run
  - how to add a component
  - code style rules
- `CODE_OF_CONDUCT.md` (Contributor Covenant is fine)

### CI
GitHub Actions workflow:
- install deps
- typecheck
- biome check
- run Playwright smoke test

---

## 17) Development Scripts (package.json)

Must include:
- `dev`
- `build`
- `start`
- `typecheck`
- `lint` (Biome)
- `format` (Biome)
- `test` (Playwright)

---

## 18) CODEX-CLI Implementation Instructions (Step-by-Step)

CODEX-CLI must generate the project with the following procedure:

1. Create Next.js app with TypeScript and App Router.
2. Install Tailwind CSS and configure.
3. Initialize shadcn/ui and generate required components into `components/ui`.
4. Add content files in `/content` and wire them into sections.
5. Build all sections under `components/sections`.
6. Implement `CloudBackground` ambience layer with:
   - CSS gradients
   - optional noise overlay
   - subtle drifting blobs (motion)
7. Add dark mode and theme toggle.
8. Add Biome config + scripts.
9. Add Playwright smoke test.
10. Add documentation and OSS files.
11. Ensure build passes and `pnpm dev` runs cleanly.

---

## 19) Acceptance Criteria Checklist

The project is “done” when:

- [ ] `pnpm dev` runs successfully on first try.
- [ ] Homepage displays all sections listed in IA.
- [ ] Theme toggle works (light/dark).
- [ ] Animations feel subtle and “cloud-like”, not arcade-like.
- [ ] Content is editable exclusively from `/content/*`.
- [ ] Lighthouse scores are strong (goal: Perf 90+).
- [ ] Playwright smoke test passes.
- [ ] README explains setup + customization clearly.
- [ ] Repo includes MIT License + Contributing + CoC.

---

## 20) Design “North Star” (Keep This Spirit)

Cloud Dancer should feel like:
- a calm studio,
- a clean desk,
- sunlight through curtains,
- and a tiny bit of magic in the air.

Not sterile. Not loud. Just quietly impressive.