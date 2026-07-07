# Shreevishnu K — Portfolio

A dark-themed, glassmorphic personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy

1. **Resume** — drop your real resume PDF into `public/resume/` and rename it to
   `Shreevishnu_K_Resume.pdf` (or update the path in `components/Resume.tsx`).
2. **Contact details** — update `email`, `phone`, `github`, and `linkedin` in `lib/data.ts`.
3. **Contact form** — the form in `components/Contact.tsx` currently just shows a "sent" state.
   Wire it to a real email service such as Formspree, Resend, or EmailJS before going live.
4. **Project links** — replace the placeholder `#` links in `lib/data.ts` with real GitHub repos,
   live demo URLs, and case studies.
5. **Favicon** — add a `favicon.ico` to the `app/` folder (Next.js picks it up automatically).
6. **Domain** — update `siteUrl` in `app/layout.tsx` and the sitemap URL in `app/sitemap.ts` /
   `public/robots.txt` once you know your final domain.
7. **Profile photo** — swap the placeholder avatar block in `components/About.tsx` for an
   `next/image` with your real photo.

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo directly at vercel.com — no configuration changes are needed.

## Project structure

```
app/            Routes, layout, global styles, sitemap, 404 page
components/     All UI sections (Hero, About, Skills, Projects, etc.)
lib/data.ts     All editable content — names, links, projects, skills
public/         Static assets, resume PDF, robots.txt
```

## What's included

- Sticky navbar with scroll-spy active states and mobile menu
- Animated hero with typing effect, floating gradient orbs, and particles
- Scroll-triggered fade/slide animations throughout (Framer Motion)
- Animated stat counters, skill cards, project cards with tilt-on-hover
- Vertical timelines for Experience and Education
- Certification cards, embedded resume viewer, contact form
- Scroll progress bar, back-to-top button, ambient cursor glow (desktop only)
- SEO metadata, Open Graph tags, dynamic sitemap, robots.txt, custom 404
- Respects `prefers-reduced-motion`; visible focus states for keyboard users

## Not included (add if you need them)

- A light theme toggle (the brief specifies a dark theme as the primary look —
  add a `next-themes` toggle if you want a light mode too)
- Real analytics/SEO verification tags
- Wired-up contact form backend
