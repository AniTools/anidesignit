import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';
import node from '@astrojs/node';

/* Keystatic's admin UI is a ~2.8MB React app and its API routes need a server.
   None of that belongs on the public site, so the CMS is mounted only while
   `astro dev` is running. Check both process.argv and NODE_ENV for reliability. */
const isDev =
  process.argv.includes('dev') ||
  process.env.NODE_ENV === 'development';

export default defineConfig({
  site: 'https://anidesignit.com',
  output: 'static',
  ...(isDev ? { adapter: node({ mode: 'standalone' }) } : {}),
  integrations: [markdoc(), ...(isDev ? [react(), keystatic()] : [])],
  image: {
    domains: ['firebasestorage.googleapis.com', 'res.cloudinary.com', 'images.unsplash.com'],
  },
});
