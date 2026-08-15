# Kerbdrop

The Kerbdrop practice site: positioning, case studies, and a blog. Built with
[Astro](https://astro.build). Every piece of content is a plain YAML or
Markdown file — no code to touch to update anything.

## Structure — everything you'd edit

- **`src/data/practice.yaml`** — the one file for identity, positioning, the
  thesis statement, the "Where I work" specializations, the condensed
  engagement history, credentials, and the founding year shown in the
  footer. Plain YAML, no code.
- **`src/content/casework/*.md`** — one file per case study. YAML frontmatter
  up top (title, sector, client, stack, duration, team size, role, outcome)
  and the write-up as Markdown below it.
- **`src/content/blog/*.md`** — one file per blog post, same YAML-frontmatter-
  plus-Markdown shape.

Nothing else needs editing for a content change. The `.astro` files under
`src/pages/` and `src/layouts/` are display logic — they read whatever's in
the files above and lay it out; you shouldn't need to open them to update
what the site says.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`.

## Editing the practice identity, thesis, or specializations

Open `src/data/practice.yaml` in any text editor. It's a single YAML
document — change a value, save, commit, push. Cloudflare rebuilds
automatically (see below).

## Adding or editing a case study

Add a new Markdown file to `src/content/casework/`, or edit an existing one.
Each file needs this frontmatter shape:

```yaml
---
title: "Case study title"
hook: "One-line summary shown on the card."
sector: "Industry"
client: "Client name"                 # optional
stack: ["Tech", "Tags", "Here"]
duration: "1 year"                    # optional — shown in the stat strip
teamSize: 8                           # optional
role: "Your title on this engagement" # optional
outcome: "One-line outcome."          # optional
order: 1                              # display order, lower = first
status: "live"                        # "draft" hides it from the site
---

## The situation
...

## What I built
...

## Why this matters now
...
```

`status: draft` keeps a case study out of the live site entirely — useful for
drafting one before it's ready (see `jfr-observability-diagnosis.md` for an
example). Flip it to `live` when it's done.

## Publishing a blog post

```bash
npm run new-post "Title of the thing"
```

This creates a pre-filled Markdown file in `src/content/blog/` with today's
date and `draft: true`. The frontmatter shape:

```yaml
---
title: "Post title"
description: "One-line summary shown on the /blog list."
date: 2026-08-15                # YYYY-MM-DD, no time zone fuss
tags: ["meta"]                  # optional
draft: true                     # flip to false to publish
---

Write the post here in Markdown.
```

Write your post, flip `draft` to `false`, then:

```bash
git add -A
git commit -m "post: title of the thing"
git push
```

## Design system

Colors, fonts, and the card/panel treatment all live in
`src/styles/global.css` as CSS custom properties — nothing is hardcoded in
individual pages. The palette is defined once for light mode and overridden
under `:root[data-theme="dark"]` for dark mode; every page automatically
respects both. Typeface is Inter (display and body) plus IBM Plex Mono for
tags, labels, and dates. The nav includes a working light/dark toggle that
remembers the visitor's choice.

If you want to adjust the accent color, background, or spacing scale, that
file is the only place to do it — page templates just reference the token
names (`bg-paper`, `text-accent`, `.panel`, etc.) and pick up whatever's
defined there.

## Deploying to Cloudflare (free)

Cloudflare's current onboarding path deploys static sites as a **Worker with
static assets**, not the older "Pages" flow — the dashboard now shows a
"Deploy command" (`npx wrangler deploy`) instead of a separate build-output-
directory field. That config lives in `wrangler.jsonc` at the project root,
already set up in this repo to point at `./dist`.

1. Push this project to a new GitHub repository.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com), go to
   **Compute (Workers)** → **Create** → connect your GitHub repo.
3. Cloudflare auto-fills the build settings from this repo — confirm:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
4. Click **Deploy**. You'll get a `*.workers.dev` URL.
5. Custom domain: from the Worker's dashboard page, **Settings → Domains &
   Routes → Add**. Free SSL included.
6. Update `site` in `astro.config.mjs` to your real domain once you have one
   — this is used for the sitemap and RSS feed.

**Node version:** same note as before — this project needs Node ≥22.12, and
the `.node-version` file at the project root handles that automatically for
the build step.

From then on, every `git push` to your main branch triggers a new build and
deploy automatically — edit a YAML or Markdown file, push, and the live site
updates in about a minute. No dashboard visits, no code changes.

## What's included

- Astro content collections for the blog, case studies, and practice data
  (all type-checked against a schema — a malformed YAML/Markdown file fails
  the build with a clear error instead of shipping broken)
- Tailwind CSS v4 with a custom design token system
- MDX support if you ever want components inside a post or case study
- Sitemap generation
- `wrangler.jsonc` pre-configured for Cloudflare Workers static-asset deploys
