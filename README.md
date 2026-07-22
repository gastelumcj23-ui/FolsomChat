# FolsomChat

Your AI-powered guide to Folsom, California.

## Stack

- **Next.js 15** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** — animations
- **next-themes** — dark mode
- **Lucide React** — icons

## Getting Started

### Prerequisites

Install [Node.js 20+](https://nodejs.org/) if you don't have it.

### Run locally

```bash
cd FolsomChat
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── home/         # Homepage sections
│   ├── layout/       # Header, Footer, MobileNav
│   ├── providers/    # Theme provider
│   ├── shared/       # Shared components
│   └── ui/           # UI primitives
└── lib/              # Config, utilities
```

## Roadmap

| Phase | Status | Scope |
|-------|--------|-------|
| **Phase 1** | ✅ Current | Foundation, homepage, nav, dark mode |
| **Phase 2** | Planned | Directories, events, search |
| **Phase 3** | Planned | AI chat, interactive map |

## License

Private — All rights reserved.
