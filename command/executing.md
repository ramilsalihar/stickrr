# Executing

## Prerequisites

- Node.js 18+
- npm

## Commands

```bash
# Install dependencies
npm install

# Start dev server (localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Stack

- **React 18** — UI
- **Vite 6** — bundler and dev server
- **Vanilla CSS** — styles in `src/styles/`

## Entry Points

- `index.html` — HTML shell
- `src/main.jsx` — React root mount
- `src/App.jsx` — top-level component, composes all sections
