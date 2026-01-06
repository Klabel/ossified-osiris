// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lifter.kz', // Замените на ваш реальный домен!
  integrations: [tailwind(), sitemap()],
});