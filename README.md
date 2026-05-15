# Trust Plumber — Enterprise Plumbing Website

Production-ready React + Tailwind website for **Trust Plumber**, a Toronto / GTA plumbing company.

Built following an enterprise SEO + CRO blueprint:
- Multi-city local SEO architecture (20+ cities × 14 services = 280+ unique landing pages possible)
- Conversion-focused funnel on every page type
- Centralised business config — change one number, it updates everywhere
- Strict anti-doorway-page architecture (uniqueness enforced)

---

## 🚀 Quick start

### 1. Prerequisites

You need **Node.js 18 or higher** installed. Check by running in terminal:

```bash
node --version
```

If you don't have it, download from [nodejs.org](https://nodejs.org/) (LTS version recommended).

### 2. Open in VS Code

1. Unzip the project folder somewhere convenient (e.g. `Documents/trust-plumber/`)
2. Open VS Code
3. **File → Open Folder…** → select the `trust-plumber` folder
4. When VS Code asks about recommended extensions in the bottom-right corner, click **"Install All"**

### 3. Install dependencies

Open the integrated terminal in VS Code:
- Mac: `Cmd + J`, or `Terminal → New Terminal`
- Windows: `Ctrl + ` ` ` (backtick), or `Terminal → New Terminal`

Then run:

```bash
npm install
```

This will take 1–2 minutes the first time. It downloads React, Tailwind, and all other dependencies into the `node_modules/` folder.

### 4. Start the development server

```bash
npm run dev
```

You should see something like:

```
  VITE v5.4.3  ready in 487 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The site is live and auto-refreshes when you save any file.

---

## 📁 Project structure

```
trust-plumber/
├── public/                      # Static files served as-is (favicon, robots.txt later)
├── src/
│   ├── assets/                  # Images, icons, fonts (local files)
│   ├── components/
│   │   ├── ui/                  # ✅ Primitive components (Button, Card, Badge…)
│   │   ├── layout/              # ✅ Container, Header, Footer (header/footer in Phase 2)
│   │   ├── sections/            # ⏳ Phase 2 — Hero, ServiceGrid, etc.
│   │   ├── forms/               # ⏳ Phase 4 — LeadForm, validation
│   │   └── seo/                 # ⏳ Phase 5 — JSON-LD schema components
│   ├── config/
│   │   ├── business.js          # ⚠️  EDIT FIRST — central business data
│   │   ├── services.js          # All plumbing services offered
│   │   └── locations.js         # All cities served (20 cities pre-loaded)
│   ├── data/                    # ⏳ Phase 2 — Page-specific content
│   ├── pages/                   # ⏳ Phase 2 — Actual page components
│   ├── hooks/                   # ⏳ Custom React hooks
│   ├── lib/
│   │   └── utils.js             # ✅ cn(), formatPhone(), telHref(), formatDate()
│   ├── styles/
│   │   └── globals.css          # ✅ Tailwind directives + base styles
│   ├── App.jsx                  # ✅ Router + all route definitions
│   └── main.jsx                 # ✅ React entry point
├── .vscode/                     # ✅ Editor settings
├── .env.example                 # Template for environment variables
├── .eslintrc.cjs                # ESLint config
├── .gitignore
├── index.html                   # ✅ HTML entry
├── package.json                 # ✅ Dependencies & scripts
├── postcss.config.js            # ✅ PostCSS for Tailwind
├── tailwind.config.js           # ✅ Full design system
├── vite.config.js               # ✅ Build config
└── README.md                    # This file

Legend:
  ✅ Built in Phase 1 (this delivery)
  ⏳ Coming in next phases
  ⚠️  Needs your input before launch
```

---

## ⚠️ Before deploying to production

The `src/config/business.js` file contains **placeholder data** that must be replaced with verified information. Search for `// TODO:` in that file.

Specifically:
- ✅ Phone number (currently a placeholder — replace with a verified Canadian number)
- ✅ License number (Ontario plumbing licence — leave `null` until verified)
- ✅ Insurance coverage amount (leave `null` until verified)
- ✅ Workmanship guarantee duration
- ✅ Trust signals (Google, HomeStars review counts — only display if real and verifiable for Trust Plumber specifically)
- ✅ Years in business, technician count
- ✅ Social media links

**Why this matters:** In Canada, the Competition Act prohibits false or misleading representations in advertising. Don't display review counts, ratings, or certifications you can't back up.

When you run `npm run dev`, the console will warn you (in red) if placeholder data is still present.

---

## 🎨 Design system

The visual style is defined entirely in `tailwind.config.js`. Key tokens:

| Token | Value | Use case |
|---|---|---|
| `bg-background` | `#F8FAFC` | Page backgrounds |
| `bg-surface` | `#FFFFFF` | Cards, modals |
| `text-primary` / `bg-primary` | `#0F2744` (navy) | Headings, primary CTAs |
| `text-accent-blue` | `#2563EB` | Links, accent CTAs |
| `text-accent-teal` | `#0F766E` | Eyebrows, secondary accents |
| `bg-emergency` | `#DC2626` | Emergency phone CTAs only |
| `bg-success` | `#16A34A` | Success states |
| `text-text-secondary` | `#334155` | Body text |
| `text-text-muted` | `#64748B` | Captions, hints |
| `border-DEFAULT` | `#E2E8F0` | Card borders, dividers |

Fonts:
- **Inter** for body text
- **Plus Jakarta Sans** for display headings

Both load from Google Fonts in `index.html`.

---

## 🛠️ Available scripts

```bash
npm run dev       # Start dev server with hot reload
npm run build     # Build for production (output: dist/)
npm run preview   # Preview the production build locally
npm run lint      # Check code with ESLint
```

---

## 🧩 Component examples

Once Phase 2 is built, here's how components will be used:

```jsx
import Button from '@/components/ui/Button'
import PhoneButton from '@/components/ui/PhoneButton'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

// Primary CTA
<Button to="/request-service" variant="primary" size="lg">
  Request Service
</Button>

// Emergency phone CTA (uses business.js automatically)
<PhoneButton emergency size="lg" label="Call 24/7" />

// Service card linking to detail page
<Card to="/services/drain-cleaning" interactive>
  <Badge variant="accent" size="sm">Same-day</Badge>
  <h3>Drain Cleaning</h3>
  <p>Slow or blocked drains, cleared the same day.</p>
</Card>
```

---

## 🚦 Phase status

This is **Phase 1: Foundation** — the skeleton is ready, the routing works, the design system is in place, and the central business config is set up.

**What's next:**

- **Phase 2** — Layout (Header, Footer, MobileStickyCTA) + Homepage with all sections
- **Phase 3** — Service pages template + 3–4 services with full content
- **Phase 4** — Location pages + Service+Location pages
- **Phase 5** — Forms, SEO schema components, blog
- **Phase 6** — Deploy to Vercel + connect Sanity CMS

---

## 📝 License

© 2025 Trust Plumber. All rights reserved.
