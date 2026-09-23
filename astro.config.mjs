// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const isBusiness = process.env.SITE_TARGET === 'business';

export default defineConfig({
  // Real domains, now that both are actually connected in Cloudflare.
  // Differs by build target so the sitemap/canonical URLs are correct
  // for whichever site this build produces.
  site: isBusiness ? 'https://kerbdrop.com' : 'https://smaina.kerbdrop.com',
  vite: {
    plugins: [tailwindcss()]
  },

  // Dual light/dark syntax-highlighting themes for code blocks — without
  // this, Shiki bakes a single fixed theme (github-dark by default) into
  // every code block regardless of the site's own light/dark toggle. CSS
  // in global.css switches between them based on the same [data-theme]
  // attribute the theme toggle sets on <html>.
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },

  integrations: [
    mdx({
      shikiConfig: {
        themes: {
          light: 'github-light',
          dark: 'github-dark',
        },
      },
    }),
    sitemap(),
  ]
});