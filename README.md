# Mahamud Gazi — Portfolio

Professional portfolio (React + Vite + Tailwind CSS v4).

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Customize

| File | Purpose |
|------|---------|
| `src/data/portfolio.js` | Name, projects, skills, experience, links |
| `src/components/portfolio/` | UI sections |
| `src/style.css` | Theme colors (dark/light) |
| `public/Mahamud-Gazi-Resume.pdf` | Resume file |
| `src/App.jsx` | Section order |

### Resume button

1. Put PDF at `public/Mahamud-Gazi-Resume.pdf`
2. In `src/data/portfolio.js` set `resumeAvailable: true`

### Project links

Only add GitHub / Live Demo URLs that actually work. Incomplete projects should keep `github: null` / `demo: null`.

### Project screenshots

Set `image` on each project to an imported asset path when you have screenshots.

## Stack

- React 19
- Vite 6
- Tailwind CSS 4
- lucide-react icons
