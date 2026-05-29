import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// A simple Vite plugin to keep sitemap.xml and robots.txt in sync with seo.config.js
function generateSeoFiles() {
  return {
    name: 'generate-seo-files',
    buildStart() {
      const seoConfigPath = path.resolve(__dirname, 'src/seo.config.js');
      const content = fs.readFileSync(seoConfigPath, 'utf-8');
      const match = content.match(/export const SITE_URL = '([^']+)'/);
      
      if (match && match[1]) {
        const siteUrl = match[1];
        
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated dynamically by Vite plug-in from seo.config.js -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

        const robots = `# robots.txt — Haries Hussain Portfolio
# Generated dynamically by Vite plug-in from seo.config.js
User-agent: *
Allow: /
Disallow: /assets/

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml`;

        fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), sitemap);
        fs.writeFileSync(path.resolve(__dirname, 'public/robots.txt'), robots);
        console.log('\n[SEO Sync] Updated sitemap.xml and robots.txt to use:', siteUrl, '\n');
      }
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  build: {
    charset: 'utf-8',
  },
  plugins: [
    tailwindcss(),
    react(),
    generateSeoFiles() // Synchronize domain on every dev start and build
  ],
  server: {
    host: true, // Listens on all local IPs
  }
})
