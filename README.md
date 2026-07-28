# 🌟 Lyndazfolio v2.0

> **Personal Portfolio** of **Lynda Benabdessadok** — Junior Web Developer from Paris  
> *Crafting pixel-perfect experiences where Y2K nostalgia meets modern design systems.*

[![Live Site](https://img.shields.io/badge/Live-lyndazfolio.vercel.app-blue?style=for-the-badge)](https://lyndazfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Lyn1603-333?style=for-the-badge&logo=github)](https://github.com/Lyn1603/lyndazportfolio)
[![Built with Lovable](https://img.shields.io/badge/Built%20with-Lovable-5E4DFF?style=for-the-badge)](https://lovable.dev)

---

## 📋 Table of Contents

- [About This Portfolio](#-about-this-portfolio)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Scripts & Commands](#-scripts--commands)
- [Project Showcase](#-project-showcase)
- [Skills & Expertise](#-skills--expertise)
- [File Structure Deep Dive](#-file-structure-deep-dive)
- [Styling & Design](#-styling--design)
- [Deployment](#-deployment)
- [Contributing & Building](#-contributing--building)
- [Contact](#-contact)

---

## 🎯 About This Portfolio

This is the **v2.0 reimagining** of my 2022 Y2K pixel-art desktop project. The original was a manifesto that "tech is for cool kids" — now it's evolved into a fully-featured, modern portfolio showcasing my journey as a junior web developer.

**Key Philosophy:**
- Y2K nostalgia meets contemporary design
- Pixel-perfect experiences with performance-first approach
- Responsive across all devices (mobile-first)
- Accessibility & semantic HTML throughout
- Clean, maintainable TypeScript + React codebase

---

## ✨ Features

✅ **Animated Starry Background** — Custom CSS animations with parallax effect  
✅ **Project Showcase** — 4 featured projects with live links and tech stacks  
✅ **Responsive Design** — Mobile, tablet, desktop optimized  
✅ **Dark Theme** — Eye-friendly Y2K aesthetic with custom color palette  
✅ **File-Based Routing** — TanStack Router for seamless navigation  
✅ **Meta & SEO** — Open Graph, description tags for social sharing  
✅ **Fast Load Times** — Image lazy-loading, optimized builds  
✅ **Custom Favicon** — PNG favicon in `/public`  
✅ **Component Library** — Radix UI + Tailwind CSS for consistent UI  
✅ **TypeScript** — Full type safety across the codebase  

---

## 🛠️ Tech Stack

### 🎨 Frontend

| Category | Technologies |
|----------|--------------|
| **Framework** | TanStack Start (v1.168.26) + React 19 |
| **Routing** | TanStack Router (v1.170.16) with file-based routing |
| **Language** | TypeScript 5.8+ (strict mode) |
| **Styling** | Tailwind CSS 4.2.1 + custom CSS |
| **Component System** | Radix UI (20+ components) |
| **Form Handling** | React Hook Form 7.71.2 + Zod validation |
| **UI Utilities** | clsx, class-variance-authority, tailwind-merge |
| **Icons** | Lucide React 0.575 (195+ icons) |
| **Animations** | Custom CSS + tw-animate-css |
| **Data Visualization** | Recharts 2.15.4 |
| **State Management** | TanStack React Query 5.101.1 |
| **Toasts** | Sonner 2.0.7 |
| **Carousel** | Embla Carousel React 8.6.0 |

### 🔧 Development

| Tool | Version | Purpose |
|------|---------|---------|
| **Build Tool** | Vite 8.0.16 | Lightning-fast builds via HMR |
| **TypeScript** | 5.8.3 | Type safety & DX |
| **ESLint** | 9.32.0 | Code linting |
| **Prettier** | 3.7.3 | Code formatting |
| **Node.js** | 18+ | Runtime |
| **Package Manager** | npm / Bun | Dependency management |

### 🌐 Deployment

| Service | Purpose |
|---------|---------|
| **Vercel** | Hosting + CI/CD |
| **GitHub** | Version control + Actions |
| **Sitemap Generator** | XML sitemap for SEO |

---

## 📂 Project Architecture

```
lyndazportfolio/
├── public/                    # Static assets served as-is
│   ├── favicon.png           # Custom favicon
│   └── ...
├── src/
│   ├── routes/               # File-based routing (TanStack Router)
│   │   ├── __root.tsx        # Root layout component
│   │   ├── index.tsx         # Homepage (/): Hero, Projects, Stack, Footer
│   │   ├── about.tsx         # About page (/about): Bio, Hobbies, Contact
│   │   ├── README.md         # Routes documentation
│   │   └── sitemap[.]xml.ts  # SEO sitemap generator
│   │
│   ├── components/           # Reusable React components
│   │   ├── ui/              # Radix UI + Tailwind wrapped components
│   │   ├── nav/             # Navigation & header
│   │   ├── footer/          # Footer components
│   │   └── ...
│   │
│   ├── lib/                 # Utility functions & helpers
│   │   ├── utils.ts         # Common helpers
│   │   └── ...
│   │
│   ├── assets/              # Images & media files
│   │   ├── project-bloop.jpg        # Music studio screenshot
│   │   ├── project-trocadero.jpg    # Paris monument screenshot
│   │   ├── project-pokedex.jpg      # Pokédex app screenshot
│   │   └── project-appphone.jpg     # Mobile UI screenshot
│   │
│   ├── styles/              # Global styles
│   │   └── styles.css       # Tailwind imports + custom animations
│   │
│   ├── router.tsx           # Router configuration & type definitions
│   ├── start.ts             # Application entry point
│   └── server.ts            # Server configuration (SSR/SSG)
│
├── vite.config.ts           # Vite build configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts        # Tailwind customization (colors, fonts, animations)
├── eslint.config.js         # ESLint rules
├── .prettierrc               # Prettier formatting
├── package.json             # Dependencies & scripts
├── package-lock.json        # Lock file for reproducible installs
├── README.md                # This file
├── .gitignore               # Git exclusions
└── .lovable/                # Lovable.dev configuration

```

### 📁 Detailed Directory Breakdown

**`src/routes/`** — File-based Routing
- Each `.tsx` file becomes a route automatically
- `index.tsx` → `/` (homepage)
- `about.tsx` → `/about` (about page)
- `__root.tsx` → Global layout wrapper for all routes
- Each route exports a `head()` function for metadata (SEO)

**`src/components/`** — Reusable UI Components
- Wrapped Radix UI components with Tailwind styling
- Custom portfolio components (Hero, ProjectCard, etc.)
- Well-typed with TypeScript interfaces

**`src/assets/`** — Project Screenshots & Media
- JPEG images optimized for web
- Imported into React components as modules
- Lazy-loaded in project sections

**`src/styles/css`** — Global Styling
- Tailwind CSS directive includes (@tailwind)
- Custom keyframe animations (stars, hero slide, scanlines)
- CSS variable definitions for theme colors

---

## 🚀 Getting Started

### Prerequisites

Ensure you have these installed:
- **Node.js** v18.0.0 or higher (check with `node --version`)
- **npm** v9+ or **Bun** v1.0+ (check with `npm --version` or `bun --version`)
- **Git** (for version control)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Lyn1603/lyndazportfolio.git
cd lyndazportfolio

# 2. Install dependencies
npm install
# or with Bun:
bun install

# 3. Start the development server
npm run dev
# Visit http://localhost:5173 (or the port shown in terminal)
```

### Verify Installation

You should see:
```
VITE v8.0.16  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  press h + enter to show help
```

---

## 📋 Scripts & Commands

### Development

```bash
# Start dev server with hot module replacement (HMR)
npm run dev

# Start dev server in a specific mode
npm run dev -- --host 0.0.0.0  # Access from other machines
```

### Building

```bash
# Build for production
npm run build
# Output: dist/ folder ready for deployment

# Build in development mode (for debugging)
npm run build:dev

# Preview production build locally
npm run preview
# Visit http://localhost:4173 to test the build
```

### Code Quality

```bash
# Lint all files (ESLint)
npm run lint
# Fix linting errors automatically
npm run lint -- --fix

# Format code (Prettier)
npm run format

# Check & build types
npm run build  # TypeScript is checked during build
```

---

## 📈 Project Showcase

### 1. **Bloop** — Music Creation Studio
- **Live**: [bloop-on.cloud](https://bloop-on.cloud/)
- **Tech Stack**: Web Audio API, Modern JavaScript, Cloud Hosting
- **Features**: Browser-based music composition, mix tracks, zero-install
- **Status**: Latest project featured

### 2. **Trocadero** — Paris Monument Guide
- **Live**: [trocadero-lynda-benabdessadok.vercel.app](https://trocadero-lynda-benabdessadok.vercel.app/)
- **Tech Stack**: HTML5, SCSS architecture, Vanilla JavaScript
- **Features**: Semantic HTML, responsive design, guided tour
- **Status**: Live site deployed on Vercel

### 3. **Pokedex** — REST API Explorer
- **Live**: [js-a2-lynda-co.vercel.app](https://js-a2-lynda-co.vercel.app/)
- **Tech Stack**: Vanilla JavaScript, REST/Fetch API, Responsive UI
- **Features**: Search Pokemon, fetch from PokéAPI, list & detail views
- **Status**: Game app / Learning project

### 4. **App-Phone** — Mobile Contacts Interface
- **Live**: [app-phone-lynda-benabdessadok-lepw.vercel.app](https://app-phone-lynda-benabdessadok-lepw.vercel.app/)
- **Tech Stack**: HTML, CSS, Mobile-first design
- **Features**: Phone contacts UI, small screen optimization, snappy interactions
- **Status**: Mobile UI showcase

---

## 🎓 Skills & Expertise

### Frontend Development
- **HTML5**: Semantic markup, accessibility (a11y)
- **CSS3**: Flexbox, Grid, animations, responsive design
- **JavaScript**: Modern ES6+, async/await, fetch API, DOM manipulation
- **React**: Hooks, components, state management, best practices
- **TypeScript**: Strict mode, interfaces, generics, type safety

### Styling & Design
- **Tailwind CSS**: Utility-first styling, custom configs, responsive design
- **SCSS/SASS**: Mixins, variables, nesting, architecture patterns
- **CSS Animations**: Keyframes, transitions, transform effects
- **Responsive Design**: Mobile-first approach, breakpoints, accessibility

### Backend & Data
- **PHP**: Server-side scripting, form handling
- **Python**: Automation, data processing
- **REST APIs**: Fetching, consuming, designing endpoints
- **Database Concepts**: Basic SQL, CRUD operations

### Tools & DevOps
- **Git & GitHub**: Version control, branching, pull requests, CI/CD
- **Vercel**: Deployment, preview environments, automatic builds
- **GitHub Actions**: CI/CD workflows, automated testing/linting
- **Vite**: Modern build tooling, HMR, optimization
- **npm/Bun**: Package management, scripts, dependency resolution

### Design & UX
- **Photoshop**: Image editing, asset creation
- **Figma**: UI/UX design, prototyping, component libraries
- **Monitoring & Analytics**: Checkly (uptime monitoring), Zapier (automation)

### Soft Skills
- Junior Product Manager perspective (digital product strategy)
- User experience focus (usability, accessibility)
- Clean code practices & documentation
- Continuous learning mindset

---

## 🎨 Styling & Design System

### Color Palette (Custom Tailwind)
Defined in `tailwind.config.ts`:

```javascript
colors: {
  'indigo-night': '#1a1a2e',      // Dark background
  'lavender-glow': '#d4d4ff',     // Primary text
  'star-bright': '#ffffff',        // Highlights
  'accent-pink': '#ff006e',        // Call-to-action
  'border-dim': 'rgba(255,255,255,0.1)',
}
```

### Typography
- **Display Font**: Geometric sans-serif (uppercase, tracking)
- **Body Font**: Clean, readable sans-serif
- **Mono Font**: Monospace for technical details

### Animations
- **Star Particles**: Floating + twinkling effect
- **Hero Slide**: Entrance animation on load
- **Bounce**: Scroll indicator
- **Scanlines**: Retro CRT effect overlay

### Responsive Breakpoints
- **Mobile**: < 640px (default)
- **Tablet**: 640px–1024px (sm, md, lg breakpoints)
- **Desktop**: 1024px+ (xl, 2xl)

---

## 🌐 Deployment

### Automatic Deployment (Vercel + GitHub Integration)
1. Push changes to GitHub
2. Vercel automatically builds & deploys
3. Preview URL generated for every push
4. Production deploy on merge to main

### Manual Deployment

```bash
# 1. Build the project
npm run build

# 2. Deploy to Vercel (requires CLI)
npm install -g vercel
vercel deploy

# Or push to GitHub and Vercel handles it automatically
git push origin main
```

### Environment Variables
Create `.env.local` for local development (not committed):
```env
VITE_API_URL=https://api.example.com
VITE_PUBLIC_KEY=your_key_here
```

---

## 🛠️ Contributing & Building

### Workflow for Local Development

1. **Create a feature branch**
   ```bash
   git checkout -b feature/add-testimonials
   ```

2. **Make changes & test locally**
   ```bash
   npm run dev          # See changes live
   npm run lint         # Check code quality
   npm run format       # Auto-format
   ```

3. **Commit with clear messages**
   ```bash
   git add .
   git commit -m "feat: add testimonials section"
   ```

4. **Push & create a Pull Request**
   ```bash
   git push origin feature/add-testimonials
   ```

### TypeScript Compilation

TypeScript is checked automatically during build:
```bash
npm run build  # Will fail if type errors exist
```

To check types without building:
```bash
npx tsc --noEmit
```

### Code Style

ESLint + Prettier enforce consistent style:
```bash
npm run lint -- --fix  # Auto-fix lint issues
npm run format         # Auto-format all files
```

---

## 🎯 SEO & Meta Information

### Open Graph Tags
Each page exports metadata for social sharing:
```typescript
head: () => ({
  meta: [
    { title: "Lyndazfolio — Junior Web Developer" },
    { name: "description", content: "Portfolio..." },
    { property: "og:title", content: "..." },
    { property: "og:description", content: "..." },
  ],
})
```

### Sitemap
Auto-generated XML sitemap at `/sitemap.xml` for search engines.

### SEO Best Practices
✅ Semantic HTML (nav, main, section, footer, article)  
✅ Alt text on all images  
✅ Mobile-responsive (mobile-first)  
✅ Fast load times (Vite optimized)  
✅ Clean URL structure  
✅ Meta tags for all pages  

---

## 📞 Contact & Links

- **Email**: [lylyben74@gmail.com](mailto:lylyben74@gmail.com)
- **GitHub**: [@Lyn1603](https://github.com/Lyn1603/lyndazportfolio)
- **Discord**: [Join Server](https://discord.gg/ku3YfnPW)
- **Portfolio Live**: [lyndazfolio.vercel.app](https://lyndazfolio.vercel.app)

---

## 📚 Resources & Learning

- [TanStack Start Docs](https://tanstack.com/start/latest)
- [TanStack Router Docs](https://tanstack.com/router/latest)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Components](https://www.radix-ui.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Vite Guide](https://vitejs.dev/guide)

---

## 📄 License & Attribution

**© 2022–2026 Lynda Benabdessadok**  
IIM Digital School Paris

Built with ❤️, Lovable AI, and starry skies ✨

### Built With Lovable

This project is built with [Lovable](https://lovable.dev), a platform that combines AI with human creativity for rapid web development.

- **Lovable Config**: `.lovable/` directory
- **Sync**: GitHub ↔ Lovable (bidirectional)
- **Philosophy**: Describe → Build → Own

---

## 🗺️ Roadmap (Future Enhancements)

- [ ] Blog section with MDX articles
- [ ] Dark/Light theme toggle
- [ ] Contact form with email notifications
- [ ] Project filtering by tech stack
- [ ] Analytics dashboard
- [ ] Performance monitoring (Checkly integration)
- [ ] Internationalization (i18n)
- [ ] Advanced animations with Framer Motion
- [ ] API for project data

---

## 🐛 Known Issues & Limitations

- Scanlines effect may cause slight performance impact on older devices
- Star particles animation is GPU-accelerated but still visible in performance tools
- Image optimization could be improved with WebP fallbacks

---

## ✅ Checklist for First-Time Contributors

- [ ] Install Node.js 18+
- [ ] Clone the repo: `git clone ...`
- [ ] Install deps: `npm install`
- [ ] Run dev: `npm run dev`
- [ ] Test: `npm run lint && npm run build`
- [ ] Create feature branch
- [ ] Make changes & commit
- [ ] Push & create PR

---

**Happy building! 🚀✨**
