# Infinity Home Care — Website

Marketing website for **Infinity Home Care** (`infinityhumanity.com`).

A simple, fast, static 4-page site — **Home, Services, About, Contact** — built with plain
HTML and [Tailwind CSS](https://tailwindcss.com/). No backend, no framework: it can be
hosted on any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

## Project structure

```
.
├── index.html            # Home
├── services.html         # Services
├── about.html            # About
├── contact.html          # Contact
├── src/input.css         # Tailwind source (edit this)
├── css/styles.css        # Built, minified CSS (generated — do not edit by hand)
├── js/main.js            # Mobile nav toggle + footer year
├── assets/images/        # Put real logo / photos here (see below)
├── tailwind.config.js    # Brand colors, fonts
└── package.json
```

## Getting started

Requires [Node.js](https://nodejs.org/) (v18+).

```bash
# 1. Install the one dev dependency (Tailwind CLI)
npm install

# 2. Build the CSS (outputs css/styles.css)
npm run build:css

# 3. Preview locally (then open http://localhost:8000)
npm run serve
# ...or any static server, e.g.  npx serve .
```

While editing styles/markup, run the watcher so CSS rebuilds automatically:

```bash
npm run watch:css
```

> **Note:** `css/styles.css` is generated. If the site looks unstyled, you simply haven't
> run `npm run build:css` yet.

### No-build fallback (optional)
If you ever want zero build tooling, you can replace the
`<link rel="stylesheet" href="./css/styles.css" />` in each page with the Tailwind CDN:
`<script src="https://cdn.tailwindcss.com"></script>` (plus an inline config for the brand
colors). The CLI build above is recommended for production — it's smaller and has no runtime
dependency.

## ⚠️ Placeholders to fill in

Search the project for `TODO` and replace these before going live:

| Item            | Where it appears                               | Current placeholder            |
| --------------- | ---------------------------------------------- | ------------------------------ |
| Phone number    | Header "Call Us" button, footers, CTAs, Contact | `tel:+10000000000` / `(000) 000-0000` |
| Physical address| Footers, Contact page                          | `123 Example Street, Your City, ST 00000` |
| Business hours  | Contact page                                   | `Mon–Fri, 9am–5pm`             |
| State program   | Home "Did you know?" section                   | generic Medicaid wording       |
| Map embed       | Contact page (commented-out `<iframe>`)        | paste your Google Maps embed URL |
| Social image    | `og:image`/`twitter:image` in every `<head>`   | `assets/images/og-image.jpg` (add a real 1200×630 image) |
| JSON-LD NAP     | `<script type="application/ld+json">` on Home & Contact | placeholder phone/address/areaServed |

> **SEO/meta already wired:** each page has a canonical URL, Open Graph + Twitter card tags,
> an SVG favicon (`favicon.svg`), `robots.txt`, `sitemap.xml`, and `HomeHealthCareService`
> structured data. Update the placeholder NAP (name/address/phone) in the JSON-LD and the
> share image, and you're set.

The email (`info@infinityhumanity.com`) and company name are already set throughout.

Because this is plain HTML, the **header nav** and **footer** are duplicated in all four
pages. When you change one (e.g. the phone number), update it in every `.html` file so they
stay in sync. A quick find-and-replace across the four files is the easiest way.

## Images

The hero and feature areas currently use styled gradient placeholders with icons so nothing
looks broken. To use real photos, drop them in `assets/images/` and replace the placeholder
`<div>`s with `<img src="./assets/images/your-photo.jpg" alt="…" class="…">`.

## Branding

Brand colors and fonts live in `tailwind.config.js`:

- **Primary** teal `#0d9488` (with `-dark`, `-darker`, `-light` shades)
- **Coral** accent `#f97362`
- **Cream** background `#fffaf3`
- Fonts: Poppins (headings) + Inter (body), loaded from Google Fonts

Change a value there, then re-run `npm run build:css`.

## Deploying

Any static host works. Point your `infinityhumanity.com` domain at it.

- **Netlify / Cloudflare Pages / Vercel:** build command `npm run build:css`, publish
  directory `.` (the repo root).
- **GitHub Pages:** commit the built `css/styles.css` and serve the repo root.
