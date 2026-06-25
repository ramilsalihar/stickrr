# Project Overview

## What is Stickrr

Stickrr is an AI-powered sticker pack generator. Users upload a photo (or take one), generate stickers via AI, customize mood and style, then export to messaging platforms or print. Monetized per sticker pack.

## Tech Stack

| Layer | Choice |
|-------|--------|
| UI framework | React 18 |
| Bundler | Vite 6 |
| Styling | Vanilla CSS (component-scoped) |
| Language | JavaScript (JSX) |
| Package manager | npm |

## Current Source Structure

```
src/
├── App.jsx              # Root component — composes all sections
├── main.jsx             # ReactDOM.createRoot entry
├── sections/            # Page sections (Hero, Pricing, Footer, etc.)
├── components/          # Shared UI primitives (UploadZone, MagicReveal, faces)
├── hooks/               # Custom React hooks
└── styles/              # Global and section CSS
```

## Sections

| File | Purpose |
|------|---------|
| `Hero.jsx` | Above-the-fold intro with CTA |
| `HowItWorks.jsx` | 3-step process explanation |
| `StylePicker.jsx` | Style selection UI |
| `SocialProof.jsx` | Testimonials / trust signals |
| `Pricing.jsx` | Pricing tiers |
| `FooterCTA.jsx` | Bottom conversion CTA |
| `Footer.jsx` | Links, legal, socials |

## Key Components

| File | Purpose |
|------|---------|
| `UploadZone.jsx` | Drag-and-drop / file picker for photo upload |
| `MagicReveal.jsx` | Scroll-triggered reveal animation |
| `faces.jsx` | Face/avatar UI elements |

## Product Flow

```
1. Upload / Camera    →  user uploads photo or takes one in-browser
2. AI Generation      →  AI model generates sticker pack from photo + prompt
3. Prompt Input       →  user describes desired sticker style/theme
4. Template Gallery   →  browse pre-made sticker template styles
5. Mood Selection     →  pick sticker mood (happy, savage, cute, hype, etc.)
6. Export             →  download in platform format
7. Payment            →  pay per sticker pack before export
```

## Export Targets

| Platform | Format |
|----------|--------|
| Telegram | `.webp` pack |
| WhatsApp | `.webp` sticker pack |
| Discord | `.png` / `.gif` emojis |
| PDF | print-ready sheet |
| iOS | iMessage sticker pack |
| Android | keyboard sticker pack |

## Features

| Feature | Description |
|---------|-------------|
| Image upload | Drag-and-drop or file picker |
| Camera capture | In-browser photo capture |
| AI generation | AI model takes photo + prompt → sticker pack |
| Prompt input | User describes style/theme for generation |
| Template gallery | Pre-made sticker styles to choose from |
| Mood selector | Emotional tone of stickers (happy, savage, cute…) |
| Multi-platform export | Telegram, WhatsApp, Discord, PDF, iOS, Android |
| Payment | Per-pack payment gate before export |

## Roadmap / Build Order

1. Image upload + camera capture
2. AI model integration (photo + prompt → sticker output)
3. Template gallery UI
4. Mood selector
5. Export pipeline per platform
6. Payment integration (Stripe or similar)
7. Migrate flat structure to Feature Sliced Architecture (see [feature-sliced-architecture.md](./feature-sliced-architecture.md))
8. Add routing (React Router or TanStack Router)
9. TypeScript migration when team grows

## Related Docs

- [Executing](./executing.md) — how to run the project
- [Feature Sliced Architecture](./feature-sliced-architecture.md) — folder structure pattern
- [Writing Widgets](./writing-widgets.md) — how to build widget-layer components
