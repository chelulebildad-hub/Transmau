# Trans Mau Orchards & Honey

Marketing website for **Trans Mau Orchards & Honey** — a sustainable agribusiness at the edge of the Mau Forest in Olenguruone, Nakuru County, Kenya. Premium fruit seedlings, commercial orchards, natural honey & bee products, farmer training and agritourism.

> _"Plant today, harvest prosperity tomorrow."_

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) (warm, earthy custom theme)
- [React Router](https://reactrouter.com/) (multi-page)
- shadcn-style UI primitives, [Lucide](https://lucide.dev/) icons
- Fonts: Fraunces (headings) + Inter (body)

## Pages

Home · About · Seedlings · Orchards · Honey & Bees · Training & Visits · Contact

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Project structure

```
public/images/          Brand logo + photography
src/
  components/
    ui/                 Button, Card, Badge, Reveal
    sections/           Hero, About, Products, Beekeeping, ...
    Layout.jsx          Navbar + Footer shell (shared)
    PageHero.jsx        Inner-page banner
    CtaBand.jsx         Call-to-action band
  pages/                One file per route
  App.jsx               Router
```

## Deployment

Configured for SPA hosting with client-side routing:

- **Netlify** — `public/_redirects`
- **Vercel** — `vercel.json`

Build command: `npm run build` · Output directory: `dist`
