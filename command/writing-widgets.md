# Writing Widgets

Widgets are self-contained UI blocks that compose features and entities into meaningful sections of the page. Think: Hero section, Navbar, Pricing block, Footer.

## Widget vs Feature vs Section

| Type | Owns state? | Fetches data? | Reusable? | Example |
|------|-------------|---------------|-----------|---------|
| Widget | Sometimes | Sometimes | Yes | `HeroWidget`, `PricingWidget` |
| Feature | Yes | Yes | Yes | `UploadFeature`, `CheckoutFeature` |
| Section | No | No | Rarely | Layout wrapper only |

A widget orchestrates — it imports features and entities, composes them, and knows about layout. It does not own raw business logic.

## File Structure

```
src/widgets/hero/
├── index.js          # Public API — export only what callers need
├── ui/
│   ├── Hero.jsx      # Main component
│   └── Hero.module.css
└── model/
    └── useHero.js    # Local state/logic if needed
```

## Writing a Widget

```jsx
// src/widgets/hero/ui/Hero.jsx

import { UploadZone } from '@/features/upload';
import { StickerPreview } from '@/entities/sticker';

export function Hero() {
  return (
    <section className="hero">
      <h1>Turn photos into stickers</h1>
      <UploadZone />
      <StickerPreview />
    </section>
  );
}
```

```js
// src/widgets/hero/index.js
export { Hero } from './ui/Hero';
```

Consumers import only from the index:
```js
import { Hero } from '@/widgets/hero';
```

## Rules

1. Widget imports only from: `features/`, `entities/`, `shared/`
2. Widget never imports from `pages/` or `app/`
3. No raw API calls inside widget — delegate to a feature
4. One widget = one `index.js` public boundary
5. CSS lives inside the widget folder, not in a global stylesheet

## Naming

- PascalCase component: `HeroWidget`, `PricingWidget`, `StylePickerWidget`
- kebab-case folder: `hero/`, `pricing/`, `style-picker/`
- Keep the word "Widget" in the component name when the same name exists in another layer (e.g., to distinguish from `PricingFeature`)

## Current Widgets in Stickrr

Current code in `src/sections/` maps directly to widgets:

| File | Future widget |
|------|---------------|
| `Hero.jsx` | `widgets/hero/` |
| `HowItWorks.jsx` | `widgets/how-it-works/` |
| `Pricing.jsx` | `widgets/pricing/` |
| `SocialProof.jsx` | `widgets/social-proof/` |
| `StylePicker.jsx` | `widgets/style-picker/` |
| `FooterCTA.jsx` | `widgets/footer-cta/` |
| `Footer.jsx` | `widgets/footer/` |
