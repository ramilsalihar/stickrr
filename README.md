# Stickrr

Your face. 12 moods. One sticker pack.

Landing page for Stickrr — upload one selfie, get a 12-expression sticker pack
for Telegram, WhatsApp & Discord in 60 seconds.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- Plain CSS with design tokens (`src/styles/tokens.css`) — no CSS framework

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Structure

```
src/
  styles/
    tokens.css        # Stickrr design system: palette, type scale, sticker/peel effects
    landing.css       # page-specific layout & components
  components/
    faces.jsx         # 12 SVG sticker expressions (placeholder art) + die-cut wrappers
    UploadZone.jsx    # drag & drop / tap-to-browse selfie uploader
    MagicReveal.jsx   # before → after grid with cooking progress
  sections/           # Hero, HowItWorks, StylePicker, SocialProof, Pricing, FooterCTA, Footer
  hooks/
    useReveal.js      # reveal-on-scroll entrance animations
  App.jsx             # top bar + upload "magic moment" state machine
```

## Notes

- The sticker faces are hand-built SVG placeholders standing in for AI-generated
  art. Swap each `<Face>` for an `<img>` of a real render, keeping the die-cut
  wrapper.
- The upload flow is a front-end demo: dropping a selfie plays the ~2.4s
  "cooking" animation, then shows Add to Telegram / Download pack. No backend
  is wired up yet.
- All motion is gated on `prefers-reduced-motion`.
