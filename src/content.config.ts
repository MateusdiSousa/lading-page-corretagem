import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const relatedSchema = z.array(
  z.object({
    type: z.enum([
      'imovel',
      'bairro',
      'artigo',
    ]),

    slug: z.string(),
  })
).optional();

const imoveis = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/imoveis',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    slug: z.string(),

    location: z.object({
      neighborhood: z.string(),
      city: z.string(),
      region: z.string()
    }),
    
    price: z.object({
      min: z.number().optional(),
      max: z.number().optional(),
    }).optional(),

    financing: z.object({
      mcmv: z.boolean().optional(),
      fgts: z.boolean().optional(),
    }).optional(),

    related: relatedSchema,

    property: z.object({
      bedrooms: z.number(),
      bathrooms: z.number(),
      parking: z.number().optional(),
      balcony: z.boolean().optional(),
    }),
  }),
});

const bairros = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/bairros',
  }),

  schema: z.object({
    title: z.string(),
    related: relatedSchema,
    slug: z.string(),
    description: z.string(),
    image: z.string().optional(),
    city: z.string(),
    state: z.string(),
  }),
});

const artigos = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/artigos',
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    related: relatedSchema,
    description: z.string(),
    image: z.string().optional(),
    category: z.string().optional(),
    date: z.coerce.date().optional(),
    readTime: z.number().optional(),
  }),
});



export const collections = {
  artigos,
  bairros,
  imoveis
};