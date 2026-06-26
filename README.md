# marie.dev — projects page

Cosmic-themed Astro site. Stars, constellation reveals on scroll, per-project accent colors.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Deploy to Vercel (free)

1. Push this folder to a GitHub repo
2. Go to vercel.com → New Project → import the repo
3. Vercel auto-detects Astro — just click Deploy
4. Your site is live at yourname.vercel.app in ~60 seconds

## Add a project

Open `src/pages/index.astro` and add an entry to the `projects` array:

```js
{
  title:       'My New Project',
  description: 'What it does in 2 sentences.',
  tags:        ['Python', 'FastAPI'],
  github:      'https://github.com/yourrepo',
  demo:        'https://yourapp.com',   // optional
  accent:      'purple',                // purple | mint | pink | blue
},
```

Save the file — the page updates instantly in dev mode.

## File structure

```
src/
  components/
    StarField.astro           — twinkling canvas background
    ConstellationCanvas.astro — lines connecting revealed cards
    Nav.astro                 — top navigation
    ProjectCard.astro         — individual project card
  pages/
    index.astro               — main page
  styles/
    global.css                — design tokens + base styles
public/
  favicon.svg
```
