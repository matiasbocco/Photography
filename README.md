# Photography Portfolio — Matias Juan Bocco

**Live site →** [matiasbocco.github.io/Photography](https://matiasbocco.github.io/Photography)

A fully hand-coded photography portfolio built with pure HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies. Each line written from scratch to showcase photos taken across Argentina, Brazil, Spain, Italy, and the United States.

---

## Galleries

| Category | Highlights | Count |
|----------|-----------|-------|
| **Sports** | Belgrano 4-0 Sarmiento · Pumas vs All Blacks · Córdoba 2025 | 57 photos |
| **Wildlife** | Miramar de Ansenuza 2025 | 11 photos |
| **Automobiles** | Classic & sport cars | 23 photos |
| **Landscapes** | Argentina · Brazil · Spain · Italy · Wyoming 2026 | 24 photos |

---

## Features

- **Dark minimalist homepage** — full-screen hero with parallax background, preview grid of recent work, and about strip
- **Cinematic intro slideshow** — 5-image fullscreen slider with smooth CSS transitions and fade-to-black
- **Preview grid** — curated selection of recent photos grouped by category with hover labels
- **Lightbox** — full-screen image viewer with keyboard navigation (← → ESC) and touch swipe support
- **Scroll fade-in** — images animate into view as the user scrolls, with staggered timing per column
- **Blur-up loading** — images start blurred and sharpen progressively as they load (no layout shift)
- **Lazy loading** — native `loading="lazy"` + `<link rel="preload">` for above-the-fold images
- **Responsive** — mobile-first adjustments: vertical hero photo on small screens, collapsible nav, aspect-ratio-aware gallery images
- **Sticky navigation** — fixed dark navbar across all pages
- **About page** — profile card with email reveal (no mailto spam) and social links
- **SEO + Open Graph** — meta tags on every page for social sharing previews
- **Zero dependencies** — no npm, no webpack, no React. One CSS file, one JS file.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic elements, Open Graph meta) |
| Styles | CSS3 — custom properties, Grid, keyframe animations, responsive media queries |
| Logic | Vanilla JavaScript — IntersectionObserver, touch events, dynamic DOM |
| Fonts | Google Fonts — Montserrat 300 / 600 |
| Hosting | GitHub Pages |

---

## Project Structure

```
Photography/
├── index.html              # Landing page — hero, preview grid, about strip
├── style.css               # All styles — variables, grid, animations, lightbox, responsive
├── HTML/
│   ├── sports.html         # Sports gallery (57 photos)
│   ├── fauna.html          # Wildlife gallery (11 photos)
│   ├── cars.html           # Automobile gallery (23 photos)
│   ├── landscapes.html     # Landscapes gallery (24 photos)
│   ├── about.html          # About page with profile card
│   └── script.js           # Lightbox, scroll animations, blur-up, swipe
└── Fotos/
    ├── Deportes/           # Sports photos
    ├── fauna/              # Wildlife photos
    ├── cars/               # Automobile photos
    ├── landscapes/         # Landscape photos (foto1–foto24)
    └── Yo/                 # Profile photo
```

---

## Run Locally

```bash
git clone https://github.com/MatiasBocco/Photography.git
cd Photography
# Open index.html in any browser — no server required
```

Or with Python's built-in server:

```bash
python -m http.server 8000
# Visit http://localhost:8000
```

---

## Design Decisions

**No JavaScript frameworks** — the site is a static gallery. React or Vue would add hundreds of KB for zero benefit. Pure JS keeps it instant.

**Dark minimalist aesthetic** — `#0a0a0a` background, white text, `#00D4FF` cyan accent. Minimal noise, maximum focus on the photos.

**CSS Grid for galleries** — `minmax(250px, 1fr)` reflows automatically. Horizontal images span two columns on desktop, collapse to single column with preserved aspect ratio on mobile.

**IntersectionObserver for animations** — scroll events fire on every pixel and hurt performance. IntersectionObserver fires only when elements enter the viewport.

**Blur-up instead of skeleton screens** — the actual image loads and sharpens in place. No layout shift, no placeholder flicker.

**`background-attachment: scroll` on mobile** — `fixed` parallax breaks on iOS Safari and Chrome for Android. Switched to `scroll` with a portrait-oriented photo for small screens.

**Email reveal on click** — hides the address from scrapers without sacrificing usability.

---

## Author

**Matias Juan Bocco** — Córdoba, Argentina

- Instagram: [@matias_bocco](https://www.instagram.com/matias_bocco/)
- LinkedIn: [Matías Juan Bocco](https://www.linkedin.com/in/mat%C3%ADas-juan-bocco-01a1a3405/)
- Email: matiasjbocco@gmail.com

---

© 2026 Matias Juan Bocco — All rights reserved.
