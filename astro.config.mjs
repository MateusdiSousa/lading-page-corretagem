// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.penholato-corretor.com.br', // TODO: COMPRAR DOMÍNIO NO FUTURO
  integrations: [sitemap()]
});