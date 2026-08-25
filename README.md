# Adeel Khan — Portfolio Website

A modern, animated portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** — inspired by premium developer portfolios with a dark theme, glassmorphism, and smooth scroll animations.

## Features

- Hero section with portrait and animated stats
- About, Services, Skills, Projects, Experience, Testimonials, Contact
- Content sourced from resume, Fiverr, Upwork, and LinkedIn
- Fully responsive with mobile navigation
- Optimized for GitHub Pages deployment

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Deploy to GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `adeel-portfolio` (or any name you prefer)
3. Keep it **Public**
4. Click **Create repository**

### Step 2 — Push your code

```bash
cd adeel-portfolio
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/adeel-portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3 — Update the base path (if repo name differs)

Open `vite.config.ts` and set `base` to match your repo name:

```ts
base: '/your-repo-name/',
```

If you use a custom domain (e.g. `adeelkhan.dev`), set:

```ts
base: '/',
```

### Step 4 — Deploy

```bash
npm run deploy
```

This builds the site and pushes the `dist` folder to the `gh-pages` branch.

### Step 5 — Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select branch: `gh-pages` / folder: `/ (root)`
3. Click **Save**
4. Your site will be live at: `https://YOUR_USERNAME.github.io/adeel-portfolio/`

> First deploy may take 2–5 minutes to go live.

## Custom Domain (Optional)

1. Add a `CNAME` file in `/public` with your domain (e.g. `adeelkhan.com`)
2. In GitHub Pages settings, enter your custom domain
3. Add DNS records at your domain provider pointing to GitHub Pages

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Lucide Icons
- gh-pages

## License

MIT — feel free to customize and use for your own portfolio.
