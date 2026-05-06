# Biraj Bogati — Portfolio

A modern, animated portfolio website built with **React 19**, **TypeScript**, **TanStack Start**, **Tailwind CSS v4**, and **Framer Motion**. It showcases my work as a Full‑Stack / Backend developer — featuring my skills, work experience, and projects.

Live: https://birajbogati.lovable.app

## Tech Stack

- **Framework:** TanStack Start (React 19 + Vite 7, SSR-ready)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4, semantic design tokens (OKLCH), shadcn/ui
- **Animations:** Framer Motion
- **Routing:** TanStack Router (file-based)
- **Tooling:** Bun, ESLint, Prettier

## Features

- Fully responsive dark-themed UI with gradient accents
- Smooth scroll & page transition animations
- Dedicated routes: Home, About, Projects, Contact (SEO-friendly)
- Centralized portfolio data in `src/data/portfolio.ts`
- Reusable section / navbar / footer components

## Project Structure

```
src/
├── components/      # Navbar, Footer, Section, shadcn/ui
├── data/            # portfolio.ts (skills, projects, experience)
├── routes/          # File-based routes (index, about, projects, contact)
├── styles.css       # Tailwind v4 + design tokens
└── router.tsx
```

## Getting Started

Requirements: [Bun](https://bun.sh) (or Node.js 20+).

```bash
# Install dependencies
bun install

# Start the dev server (http://localhost:8080)
bun run dev

# Production build
bun run build

# Preview the production build
bun run preview
```

## Docker

Build and run with Docker:

```bash
# Build the image
docker build -t biraj-portfolio .

# Run it (http://localhost:8080)
docker run --rm -p 8080:8080 biraj-portfolio
```

Or with docker-compose:

```bash
docker compose up --build
```

## Scripts

| Script | Description |
| --- | --- |
| `bun run dev` | Start the Vite dev server |
| `bun run build` | Production build |
| `bun run preview` | Preview the production build |
| `bun run lint` | Run ESLint |
| `bun run format` | Format with Prettier |

## Contact

- **Email:** birajbogati2@gmail.com
- **GitHub:** https://github.com/birajbogati
- **LinkedIn:** https://www.linkedin.com/in/biraj-bogati

## License

MIT © Biraj Bogati