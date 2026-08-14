# my-online-resume

A personal résumé site with a blog, built with [Astro](https://astro.build).

## Structure

- `src/data/resume.ts` — **edit this file to update your résumé content.** Name, title,
  summary, links, experience, education, skills — all in one typed file.
- `src/content/blog/` — blog posts as Markdown files. One file = one post.
- `src/pages/index.astro` — the résumé page (reads from `resume.ts`).
- `src/pages/blog/` — blog index and post template (reads from `src/content/blog/`).

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`.

## Publishing a blog post

```bash
npm run new-post "Title of the thing"
```

This creates a pre-filled Markdown file in `src/content/blog/` with today's date
and `draft: true`. Write your post, flip `draft` to `false`, then:

```bash
git add -A
git commit -m "post: title of the thing"
git push
```

Cloudflare Pages rebuilds and deploys automatically on push (see below).

## Deploying to Cloudflare Pages (free)

1. Push this project to a new GitHub repository.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com) → **Workers & Pages** →
   **Create application** → **Pages** → **Connect to Git**.
3. Select the repo. Cloudflare auto-detects Astro; confirm these build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. You'll get a `*.pages.dev` URL immediately.
5. Optional: **Custom domains** tab → add your own domain (free SSL included).
6. Update `site` in `astro.config.mjs` to your real domain once you have one —
   this is used for the sitemap and RSS feed.

From then on, every `git push` to your main branch triggers a new build and
deploy automatically — no dashboard visits needed to publish a post.

## What's included

- Astro content collections for the blog (type-checked frontmatter)
- Tailwind CSS v4 with a custom design token system
- MDX support if you want components inside posts
- Sitemap generation
