// astro.config.mjs

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Убедитесь, что Tailwind подключен здесь
  integrations: [tailwind()],

  // Убедитесь, что здесь НЕТ старой секции vite: { plugins: [tailwindcss()] }
});