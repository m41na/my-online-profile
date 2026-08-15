// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: update to your real domain once you connect one in Cloudflare Pages
  site: 'https://kerbdrop.pages.dev',
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