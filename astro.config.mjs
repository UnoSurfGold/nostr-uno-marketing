import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Note: site is the canonical marketing origin used for sitemap + OG.
// During Phase A this is a placeholder; Phase B will switch to https://nostr.uno
export default defineConfig({
  site: 'https://nostr-uno-marketing.pages.dev',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
