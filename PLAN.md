# Portfolio Redesign Plan — Media Buyer / GHL Expert / AI Vibe Coder

## Overview
Complete rebuild from static HTML to **Astro** with a dark futuristic/techy design.
Repositions from "junior full-stack dev" → **Media Buyer | GHL Automation Expert | Web Developer & AI Vibe Coder**.

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Astro 5.x** | Zero JS by default, islands architecture, static output for GitHub Pages |
| Styling | **Tailwind CSS 4** | Utility-first, fast iteration, dark theme support built-in |
| Animations | **CSS animations + Intersection Observer** | Lightweight, no heavy libs. Fade-ins, counters, reveals |
| Toast | **sileo** (`npm install sileo`) | Per user request — contact form feedback, copy-to-clipboard confirmations |
| Icons | **Lucide Icons** (via astro-icon) | Modern, consistent, lightweight SVG icons |
| Fonts | **Inter** (body) + **Space Grotesk** (headings) + **JetBrains Mono** (code/accent) | Modern tech aesthetic |
| Deploy | **GitHub Pages** via Astro static adapter | Same domain, zero config change |

---

## Design System

### Color Palette (Dark Futuristic)
```
Background:     #050507 (near-black)
Surface:        #0f1117 (card backgrounds)
Surface-2:      #1a1d27 (elevated surfaces)
Border:         #1e2130 (subtle borders)
Border-glow:    rgba(99, 102, 241, 0.15) (indigo glow borders)

Primary:        #6366f1 (Indigo — main accent)
Primary-glow:   #818cf8 (lighter indigo for hover/glow)
Secondary:      #06b6d4 (Cyan — secondary accent)
Success:        #10b981 (Emerald — metrics/results)

Text-primary:   #f1f5f9 (near-white)
Text-secondary: #94a3b8 (muted grey)
Text-muted:     #475569 (very muted)

Gradient:       linear-gradient(135deg, #6366f1, #06b6d4) (hero gradient text)
```

### Visual Effects
- **Glassmorphism** cards: `backdrop-blur-xl bg-white/5 border border-white/10`
- **Dot grid** background pattern on hero section
- **Subtle glow** effects on hover (box-shadow with accent color)
- **Gradient text** for key headings (indigo → cyan)
- **Noise texture** overlay for depth
- **Smooth scroll** with section reveal animations

---

## Page Structure & Sections

### 1. Navigation (Top bar, not sidebar)
- Fixed top, glassmorphism background on scroll
- Logo/name on left: "RT" monogram or "Ramuel De Luna"
- Nav links: Services | Results | Work | Stack | Contact
- CTA button: "Let's Talk" (scrolls to contact or opens calendar)
- Mobile: hamburger → slide-in menu

### 2. Hero Section
- Full viewport height
- Dot grid / subtle animated gradient background
- **Main headline** with gradient text:
  > "I Scale Brands with Meta Ads, GHL Automations & AI-Powered Web Experiences"
- **Subtitle** (text-secondary):
  > "Media Buyer · GoHighLevel Expert · Web Developer & AI Vibe Coder"
- **Two CTA buttons**: "View My Work" (ghost) + "Book a Call" (filled gradient)
- **Floating tech badges** or subtle orbit animation with tool logos (Meta, GHL, React, etc.)
- **Status indicator**: "🟢 Available for projects" (small pill badge)

### 3. About / Intro Section
- Brief 2-3 sentence personal intro
- Focus on the VALUE you deliver, not biography
- Photo with glassmorphism frame + glow accent
- Key differentiators in pill/badge format:
  - "Meta Ads Certified" | "GHL Partner" | "AI-Powered Development" | "Full-Stack Builder"

### 4. Services Section (3 Core Pillars)
Cards with icon + title + description + key deliverables

**Card 1: Meta Advertising**
- Icon: Target/crosshair
- Title: "Meta Ads Management"
- Description: Strategic Facebook & Instagram advertising — audience research, creative strategy, campaign optimization, pixel/CAPI setup
- Deliverables: Campaign Strategy · Audience Research · A/B Testing · Retargeting · ROAS Optimization

**Card 2: GHL CRM & Automations**
- Icon: Workflow/automation
- Title: "GoHighLevel Automations"
- Description: End-to-end CRM automation — lead capture, nurture sequences, appointment booking, pipeline management
- Deliverables: Workflow Automations · Lead Nurturing · Pipeline Setup · SMS/Email Sequences · Appointment Booking

**Card 3: Web Development & AI**
- Icon: Code/sparkles
- Title: "AI-Powered Web Development"
- Description: Modern, high-performance websites and landing pages built with cutting-edge tools and AI-assisted development
- Deliverables: Landing Pages · Full Websites · Speed Optimization · AI Integration · Custom Solutions

### 5. Results / Metrics Section
Animated counter stats in a grid, glassmorphism cards:
- **Ad Spend Managed** (e.g., "$XXX,XXX+")
- **ROAS Average** (e.g., "X.Xx")
- **Leads Generated** (e.g., "XX,XXX+")
- **GHL Automations Built** (e.g., "XX+")
- **Projects Delivered** (e.g., "XX+")
- **Client Satisfaction** (e.g., "100%")

> Note: User will provide real numbers — using placeholders for now

### 6. Portfolio / Case Studies Section
- Filtered tabs: "All" | "Meta Ads" | "GHL Builds" | "Web Development"
- Card layout with:
  - Screenshot/mockup
  - Project title
  - Category badge
  - Brief result/metric highlight
  - Hover: overlay with "View Details" link
- Include real GHL builds, ad campaign results, websites built

### 7. Tech Stack / Tools Section
Visual grid of tools organized by category:
- **Advertising**: Meta Business Suite, Facebook Ads Manager, Meta Pixel, CAPI
- **CRM & Automation**: GoHighLevel, Zapier, Make (Integromat)
- **Development**: HTML/CSS/JS, React, Astro, Tailwind, Node.js
- **AI Tools**: ChatGPT, Claude, Cursor, v0, GitHub Copilot
- **Design**: Figma, Canva
- Each tool as a small card with logo + name, subtle hover glow

### 8. Testimonials Section
- Carousel or stacked cards
- Client photo + name + company
- Quote text
- Star rating (optional)
- Glassmorphism card style with quote icon accent

### 9. Contact Section
- Split layout: Info left, Form right
- Info side:
  - Email (with copy-to-clipboard → sileo toast)
  - Location
  - Social links (LinkedIn, Facebook, GitHub)
  - "Book a Call" button (link to Calendly or GHL booking page)
- Form side:
  - Name, Email, Service (dropdown: Meta Ads / GHL / Web Dev / Other), Message
  - Submit button with loading state
  - Success/error → **sileo toast notifications**

### 10. Footer
- Minimal: © 2024 Ramuel De Luna · Built with Astro & AI
- Social icon links
- Back-to-top button

---

## File Structure (Astro Project)

```
RTDeluna.github.io/
├── astro.config.mjs          # Astro config with GitHub Pages adapter
├── tailwind.config.mjs       # Tailwind dark theme + custom colors
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── profile.png
│   │   ├── portfolio/         # Project screenshots
│   │   ├── tools/             # Tool/tech logos
│   │   └── testimonials/      # Client photos
│   └── fonts/                 # Self-hosted fonts (optional)
├── src/
│   ├── layouts/
│   │   └── Layout.astro       # Base HTML layout (head, meta, fonts, scripts)
│   ├── components/
│   │   ├── Nav.astro           # Top navigation
│   │   ├── Hero.astro          # Hero section
│   │   ├── About.astro         # About/intro section
│   │   ├── Services.astro      # Service pillars
│   │   ├── Results.astro       # Metrics/stats counters
│   │   ├── Portfolio.astro     # Portfolio/case studies grid
│   │   ├── TechStack.astro     # Tools & technologies
│   │   ├── Testimonials.astro  # Social proof
│   │   ├── Contact.astro       # Contact form + info
│   │   ├── Footer.astro        # Footer
│   │   └── ui/
│   │       ├── GlassCard.astro      # Reusable glassmorphism card
│   │       ├── GradientText.astro   # Gradient text wrapper
│   │       ├── SectionTitle.astro   # Section heading component
│   │       ├── Counter.astro        # Animated number counter
│   │       └── Badge.astro          # Pill badge component
│   ├── styles/
│   │   └── global.css          # Tailwind directives + custom CSS (noise, grids, glows)
│   ├── scripts/
│   │   ├── toast.ts            # sileo toast integration
│   │   ├── animations.ts       # Intersection Observer scroll animations
│   │   ├── counter.ts          # Animated counter logic
│   │   └── nav.ts              # Mobile nav toggle + scroll spy
│   ├── data/
│   │   ├── services.ts         # Service card data
│   │   ├── portfolio.ts        # Portfolio items data
│   │   ├── testimonials.ts     # Testimonial data
│   │   ├── techstack.ts        # Tools/tech data
│   │   └── metrics.ts          # Results numbers
│   └── pages/
│       └── index.astro         # Main page (composes all sections)
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Actions deploy to Pages
```

---

## Implementation Order

1. **Scaffold Astro project** — init, install deps (tailwind, sileo, astro-icon)
2. **Design system setup** — Tailwind config, global CSS (colors, fonts, effects)
3. **Layout + Nav** — Base layout, responsive navigation
4. **Hero section** — Gradient text, CTAs, background effects
5. **About section** — Personal intro, badges
6. **Services section** — 3 pillar cards with glassmorphism
7. **Results section** — Animated metric counters
8. **Portfolio section** — Filterable project grid
9. **Tech Stack section** — Tool logo grid
10. **Testimonials section** — Carousel/cards
11. **Contact section** — Form + sileo toasts
12. **Footer + polish** — Final section, scroll animations, mobile testing
13. **Performance** — Image optimization, lighthouse audit
14. **Deploy** — GitHub Actions workflow for Astro → GitHub Pages

---

## Key Migrations from Old Site

| Old | New |
|-----|-----|
| Static HTML (652 lines in one file) | Astro components (modular, maintainable) |
| Bootstrap 5 grid | Tailwind CSS utility classes |
| Sidebar navigation | Top fixed nav with glassmorphism |
| Blue accent (#149ddd) | Indigo/Cyan gradient (#6366f1 → #06b6d4) |
| "Full-Stack Developer" positioning | "Media Buyer · GHL Expert · AI Vibe Coder" |
| Basic project screenshots | Results-driven case studies with metrics |
| Generic web dev services | 3 focused pillars (Ads, GHL, AI Dev) |
| ~8MB page weight | Optimized, zero-JS-by-default with Astro |
| Manual vendor libs (4.2MB) | npm managed, tree-shaken |
| No build pipeline | Astro build + GitHub Actions CI/CD |

---

## Questions Resolved
- ✅ Stack: Astro
- ✅ GHL focus: CRM & Automations
- ✅ Ad platform: Meta (Facebook/Instagram)
- ✅ Design: Dark futuristic/techy
- ✅ Toast lib: sileo

## Placeholder Content (User to provide)
- Real ad spend / ROAS / lead generation numbers for Results section
- Updated portfolio items (GHL builds, ad campaign results)
- Updated testimonials
- Professional headshot / photo
- Calendar booking link (Calendly / GHL)
- Updated bio text focused on media buying + GHL
