// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Live domain (used for canonical URLs, sitemap and schema).
const SITE = 'https://cmhomeremedies.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/'),
    }),
  ],
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
});
