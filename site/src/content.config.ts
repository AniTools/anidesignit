import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/* Keystatic's image fields are conditional (upload | url), so they land in JSON
   as { discriminant, value }. Resolve() in one place so pages just read a string. */
const imageRef = z
  .object({ discriminant: z.enum(['upload', 'url']), value: z.string().nullable() })
  .transform((v) => v.value ?? '');

const projects = defineCollection({
  /* Keystatic writes these as .mdoc — YAML frontmatter plus a Markdoc body,
     rendered by the @astrojs/markdoc integration. */
  loader: glob({ pattern: '*.mdoc', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    order: z.number().default(100),
    year: z.string(),
    role: z.string(),
    client: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    tools: z.array(z.string()).default([]),
    heroImage: imageRef,
    gallery: z.array(imageRef).default([]),
    liveUrl: z.string().optional(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    keyLesson: z.string().default(''),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    passwordProtected: z.boolean().default(false),
    password: z.string().optional(),
    testimonial: z
      .object({ quote: z.string().default(''), author: z.string().default('') })
      .default({ quote: '', author: '' }),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(100),
    icon: z.string(),
    description: z.string(),
  }),
});

const site = defineCollection({
  loader: file('./src/content/site/copy.json', { parser: (text) => [{ id: 'copy', ...JSON.parse(text) }] }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    heroSubtitle: z.string(),
    heroBody: z.string(),
    seoTitle: z.string().default(''),
    seoDescription: z.string().default(''),
    aboutHeading: z.string(),
    aboutSubtitle: z.string(),
    aboutBody: z.array(z.string()).default([]),
    aboutTools: z.array(z.string()).default([]),
    portrait: z.string(),
    resumes: z.array(z.object({ label: z.string(), file: z.string().nullable() })).default([]),
    testimonials: z
      .array(z.object({ quote: z.string(), name: z.string(), role: z.string().default('') }))
      .default([]),
    reviewsUrl: z.string().optional(),
    clients: z
      .array(z.object({ name: z.string(), logo: imageRef, href: z.string().optional() }))
      .default([]),
    funFactHeading: z.string().default(''),
    funFactBody: z.string().default(''),
    servicesEyebrow: z.string(),
    servicesSubtitle: z.string(),
    contactHeading: z.string(),
    contactBody: z.string(),
    email: z.string(),
    phone: z.string().optional(),
    location: z.string(),
    booking: z.string(),
    social: z.array(z.object({ label: z.string(), icon: z.string(), href: z.string() })).default([]),
    lottieHero: z.string().optional(),
    lottieAbout: z.string().optional(),
    lottieContact: z.string().optional(),
  }),
});

export const collections = { projects, services, site };
