// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site bilingue : le français est servi à la racine « / », l'anglais sous « /en/ ».
export default defineConfig({
  site: 'https://porfolio-rita-merveille.vercel.app',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-CA', en: 'en-CA' } },
    }),
  ],
});
