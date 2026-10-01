// @ts-check
import imagekit from '@imagekit/astro/integration';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: "static",
  // TODO: COMPRAR DOMÍNIO NO FUTURO
  site: 'https://www.corretorpenholato.com.br',

  integrations: [
    imagekit(),
  ],
});