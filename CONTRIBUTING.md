# Contributing

Thanks for helping improve Cloud Dancer.

Maintainer: Isaac D'Césares (https://dcesares.dev)

## Running locally
```bash
pnpm install
pnpm dev
```

## Adding a component
- Prefer server components; only add client components for motion or interactivity.
- Put shadcn-style UI primitives in `components/ui/`.
- Put page sections in `components/sections/` and wire content from `content/`.

## Code style
- TypeScript + React, Tailwind for styling.
- Use Biome for formatting and linting:
```bash
pnpm lint
pnpm format
```

## Tests
Run the Playwright smoke test before submitting:
```bash
pnpm exec playwright install
pnpm test
```
