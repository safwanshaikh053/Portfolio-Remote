# Mohammed Safwan — Portfolio

Next.js 14 (App Router) + Tailwind CSS + Framer Motion + shadcn/ui-style
components. Single-page, light/dark toggle, corporate navy & steel-blue
theme.

## Run it locally (Windows)

1. Install [Node.js LTS](https://nodejs.org) if you don't have it.
2. Open PowerShell/CMD in this folder and install dependencies:
   ```
   npm install
   ```
3. Start the dev server:
   ```
   npm run dev
   ```
4. Open http://localhost:3000

## Swap in your own photo later

Right now the hero uses an "MS" initials mark instead of a photo. To add
one:
1. Drop your photo into `public/`, e.g. `public/profile.jpg`.
2. In `components/hero.tsx`, replace the `<span className="font-display ...">MS</span>`
   block with a Next.js `<Image src="/profile.jpg" alt="Mohammed Safwan" fill className="object-cover" />`
   (import `Image` from `next/image` at the top of the file).

## Deploy to Vercel

**Option A — GitHub + Vercel dashboard (recommended)**
1. Create a new empty repo on GitHub.
2. In this project folder:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. Go to https://vercel.com → **Add New Project** → import that GitHub repo.
4. Vercel auto-detects Next.js — leave all settings as default and click **Deploy**.
5. You'll get a live `*.vercel.app` URL in about 2 minutes. Every push to `main` auto-redeploys.

**Option B — Vercel CLI (no GitHub needed)**
```
npm install -g vercel
vercel login
vercel
```
Follow the prompts (accept defaults) — this deploys a preview URL.
Run `vercel --prod` to push it live.

## Project structure

```
app/            Route + global styles
components/     Page sections (hero, about, skills, projects, education, contact)
components/ui/  Reusable shadcn-style primitives (Button)
lib/            cn() class-merging helper
public/         Résumé PDF served at /Mohammed_Safwan_Resume.pdf
```

## Content sourced from your résumé

Name, contact links, skills, projects (Nexnid-ERP, OrderHub), and
education were pulled directly from `Safwan_Resume_ATS.pdf`. Update the
data arrays at the top of `components/projects.tsx`, `components/skills.tsx`,
and `components/education.tsx` any time your details change.
