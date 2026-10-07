import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site URL: www is the canonical host; Render redirects the apex to it.
// build.format 'file' emits about.html, which Render serves at /about. SeoHead strips
// the extension so canonicals match the served URL; the sitemap uses the same clean form.
const NOT_IN_SITEMAP = ['/stories', '/get-involved', '/404'];

export default defineConfig({
  site: 'https://www.shirleyswellbeingcic.co.uk',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({ filter: (page) => !NOT_IN_SITEMAP.some((p) => new URL(page).pathname.replace(/\/$/, '') === p) }),
  ],
  devToolbar: { enabled: false },
});
