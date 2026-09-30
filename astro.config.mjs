// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: "static",

  // TODO: COMPRAR DOMÍNIO NO FUTURO
  site: 'https://www.corretorpenholato.com.br',

  integrations: [sitemap()],
  adapter: cloudflare()
});