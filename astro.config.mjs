import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site URL: replace with the confirmed domain once DNS is set up (open decision OD10).
export default defineConfig({
  site: 'https://shirleyswellbeingcic.co.uk',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
