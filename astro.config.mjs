import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site URL: www is the canonical host; Render redirects the apex to it (OD10 resolved).
export default defineConfig({
  site: 'https://www.shirleyswellbeingcic.co.uk',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
