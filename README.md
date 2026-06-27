# Personal Website

A minimal, static personal site built with [Astro](https://astro.build). Three pages:
home/intro (`/`), experience (`/work`), and projects (`/projects`).

## Develop locally

```bash
npm install      # first time only
npm run dev      # serves at http://localhost:4321 with live reload
```

## Where to edit

| What | File |
| --- | --- |
| Your name, role, intro, email, social links | `src/config.ts` |
| Work experience | `src/pages/work.astro` (the `experience` array) |
| Projects | `src/pages/projects.astro` (the `projects` array) |
| Home page layout | `src/pages/index.astro` |
| Colors, fonts, spacing | `src/styles/global.css` (top of file) |
| Favicon | `public/favicon.svg` |

No backend, no database — it's all static HTML generated at build time.

## Build

```bash
npm run build    # outputs static site to dist/
npm run preview  # preview the production build locally
```

## Deploy (GitHub Pages — free)

1. Create a new repo on GitHub and push this folder to it (`main` branch).
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every
   push to `main`. First push triggers the first deploy.

Your site goes live at `https://<username>.github.io/<repo>/`.
> If using that project URL (not a custom domain), uncomment and set `base` in
> `astro.config.mjs` to `"/<repo>"` so links resolve correctly.

## Custom domain

1. Buy a domain from a registrar (see options below).
2. Add a file `public/CNAME` containing just your domain, e.g. `janedoe.dev`.
3. In **Settings → Pages → Custom domain**, enter the domain and enable
   *Enforce HTTPS*.
4. At your registrar's DNS, point the domain at GitHub Pages:
   - **Apex** (`janedoe.dev`): four `A` records → `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **www** subdomain: a `CNAME` record → `<username>.github.io`
5. Set `site` in `astro.config.mjs` to `https://janedoe.dev` and keep `base` as `/`.

DNS can take up to an hour to propagate.

### Where to buy a domain
Any registrar works. Cost is typically ~$10–15/year for a `.com`/`.dev`.
- **Cloudflare Registrar** — at-cost pricing, no markup, clean DNS UI.
- **Namecheap** — popular, inexpensive, good UX.
Avoid registrars that hike the renewal price after year one.
