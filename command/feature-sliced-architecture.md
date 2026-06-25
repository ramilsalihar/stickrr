# Feature Sliced Architecture

FSD is a frontend architectural methodology that organizes code by business domain and UI responsibility, not by file type.

## Layer Hierarchy (top → bottom)

```
src/
├── app/          # App init, providers, global styles, routing
├── pages/        # Full route views, compose widgets + features
├── widgets/      # Self-contained UI blocks (header, hero, sidebar)
├── features/     # User interactions tied to business logic (upload, auth)
├── entities/     # Business objects + their UI (User, Product, Order)
├── shared/       # Reusable primitives — ui, api, lib, config, types
```

Upper layers can import from lower layers. Lower layers CANNOT import from upper layers.

```
app → pages → widgets → features → entities → shared
```

## Rules

- Each layer is a folder under `src/`
- Each layer contains **slices** — folders named by domain (e.g., `features/upload/`, `entities/sticker/`)
- Each slice has **segments**: `ui/`, `model/`, `api/`, `lib/`, `config/`
- Slices expose a public API via `index.js` — only import from that, never from internals

## Segment Guide

| Segment | Contents |
|---------|----------|
| `ui/` | React components for this slice |
| `model/` | State, hooks, business logic |
| `api/` | Server calls, mutations, queries |
| `lib/` | Helpers specific to this slice |
| `config/` | Constants, feature flags |

## Current Project Structure (pre-FSD)

Stickrr is currently flat. Migration path:

```
src/sections/   → pages/ or widgets/
src/components/ → widgets/ or shared/ui/
src/hooks/      → shared/lib/ or features/*/model/
src/styles/     → shared/config/ or app/styles/
```

## Why FSD

- Scales without becoming a mess of `/utils` and `/helpers`
- Clear ownership — know exactly where code lives
- Safe to refactor slices in isolation
- Onboarding: new dev finds any feature in under 30 seconds
