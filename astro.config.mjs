// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: 'https://www.corretorpenholato.com.br', // TODO: COMPRAR DOMÍNIO NO FUTURO
  integrations: [sitemap()]
});