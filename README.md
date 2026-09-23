# Kerbdrop

Two sites, one repo: **kerbdrop.com** (business/vendor-facing) and
**smaina.kerbdrop.com** (personal practitioner site) — positioning and case
studies. Built with [Astro](https://astro.build). Every piece of content is
a plain YAML or Markdown file — no code to touch to update anything.

## Two sites from one codebase

Both sites share the same design system, case studies, and specializations —
they differ in framing, not substance. Which one a build produces is decided
by the `SITE_TARGET` environment variable:

| | `smaina.kerbdrop.com` (personal) | `kerbdrop.com` (business) |
|---|---|---|
| Build command | `npm run build:personal` | `npm run build:business` |
| Output directory | `dist` | `dist-business` |
| Wrangler config | `wrangler.jsonc` | `wrangler.business.jsonc` |
| Nav | Work, Contact | Services, Case Studies, Contact |
| Voice | First-person, practitioner | Company voice, subcontract-oriented |
| Page style | Multi-page | Single page, full-bleed alternating sections |

This means **two separate Cloudflare Worker projects**, both connected to
the same GitHub repo, each with its own build command and its own domain —
see the deploy section below.

## Structure — everything you'd edit

- **`src/data/practice.yaml`** — one file, two entries: `personal:` and
  `business:`. Specializations, engagements, and credentials are
  intentionally duplicated between them (they're the same facts read by two
  audiences) — edit both if a fact changes. The `business:` entry has an
  extra `capabilities:` block (differentiators) that powers the "Why
  Kerbdrop" section and doesn't exist on the personal side.
- **`src/content/casework/*.md`** — one file per case study, shared
  automatically by both sites. YAML frontmatter up top (title, sector,
  client, stack, duration, team size, role, outcome) and the write-up as
  Markdown below it.

Nothing else needs editing for a content change. The `.astro` files under
`src/pages/` and `src/layouts/` are display logic — they read whatever's in
the files above and lay it out; you shouldn't need to open them to update
what the site says.

## Local development

```bash
npm install
npm run dev              # personal site, default SITE_TARGET
npm run dev:business      # business site
```

Visit `http://localhost:4321`.

## Editing the practice identity, thesis, or specializations

Open `src/data/practice.yaml` in any text editor. Find the `personal:` or
`business:` entry (or both, if the fact is true for both) and change the
value. Save, commit, push. Cloudflare rebuilds both sites automatically
(see below).

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

## Design system

Colors, fonts, and the card/panel treatment all live in
`src/styles/global.css` as CSS custom properties — nothing is hardcoded in
individual pages. Personal and business use genuinely different palettes,
both defined here: personal's is light/dark toggleable (`:root[data-theme
="dark"]`), business is a separate, warm, light-only palette scoped under
`:root[data-site="business"]` that overrides the same token names. Typeface
is Inter (display and body) plus IBM Plex Mono for tags and labels on the
personal site; business drops the monospace treatment for plain uppercase
sans.

If you want to adjust either palette or the spacing scale, that file is the
only place to do it — page templates just reference the token names
(`bg-paper`, `text-accent`, `.panel`, etc.) and pick up whatever's defined
there for whichever site is building.

## Deploying to Cloudflare (free)

Cloudflare's current onboarding path deploys static sites as a **Worker with
static assets**, not the older "Pages" flow — the dashboard shows a "Deploy
command" (`npx wrangler deploy`) instead of a separate build-output-
directory field. That config lives in `wrangler.jsonc` (personal site) and
`wrangler.business.jsonc` (business site) at the project root.

Because this is two sites from one repo, you connect the **same GitHub
repo to two separate Cloudflare Worker projects** — one per site. They
build independently and deploy to independent domains; a push to `main`
triggers both.

**Project 1 — personal site (`smaina.kerbdrop.com`):**

If this is already deployed (it is, as of this setup), no changes needed —
the original `npm run build` script still works unchanged, since
`SITE_TARGET` defaults to `personal` when unset. Steps below are for
setting this project up from scratch:

1. Push this project to a new GitHub repository.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com), go to
   **Compute (Workers)** → **Create** → connect your GitHub repo.
3. Build settings:
   - Build command: `npm run build:personal`
   - Deploy command: `npx wrangler deploy`
4. Click **Deploy**. Then add the custom domain: Worker's dashboard page →
   **Settings → Domains & Routes → Add** → `smaina.kerbdrop.com`.

**Project 2 — business site (`kerbdrop.com`):**
1. Same dashboard → **Compute (Workers)** → **Create** → connect the
   **same** GitHub repo again (Cloudflare allows multiple Worker projects
   per repo).
2. Build settings — note both differ from Project 1:
   - Build command: `npm run build:business`
   - Deploy command: `npx wrangler deploy --config wrangler.business.jsonc`
3. Click **Deploy**. Add the custom domain: `kerbdrop.com`. If the domain
   used to point somewhere else (an old app, a parking page), an existing
   DNS record may need to be removed first before Cloudflare will let you
   add it as a Custom Domain.

**Node version:** this project needs Node ≥22.12, and the `.node-version`
file at the project root handles that automatically for the build step, for
both projects.

From then on, every `git push` to your main branch triggers a new build and
deploy on **both** projects automatically — edit `practice.yaml` or a case
study, push once, and both sites update within about a minute.

## What's included

- Astro content collections for case studies and practice data (all
  type-checked against a schema — a malformed YAML/Markdown file fails the
  build with a clear error instead of shipping broken)
- Two-site setup from one codebase (`SITE_TARGET` env var), sharing design
  system, case studies, and specializations while differing in framing and
  palette
- Tailwind CSS v4 with a custom design token system, two distinct palettes
- MDX support if you ever want components inside a case study
- Sitemap generation, with the correct domain per site
- `wrangler.jsonc` / `wrangler.business.jsonc` pre-configured for Cloudflare
  Workers static-asset deploys
