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
        
        // Parse blog slugs from blogData.jsx
        const blogDataPath = path.resolve(__dirname, 'src/blogData.jsx');
        const blogDataContent = fs.readFileSync(blogDataPath, 'utf-8');
        const blogSlugRegex = /slug:\s*"([^"]+)"/g;
        const blogSlugs = [];
        let slugMatch;
        while ((slugMatch = blogSlugRegex.exec(blogDataContent)) !== null) {
          blogSlugs.push(slugMatch[1]);
        }

        const today = new Date().toISOString().split('T')[0];
        const staticPages = [
          { path: '', changefreq: 'daily', priority: '1.0' },
          { path: '/services', changefreq: 'weekly', priority: '0.9' },
          { path: '/projects', changefreq: 'weekly', priority: '0.9' },
          { path: '/pricing', changefreq: 'weekly', priority: '0.9' },
          { path: '/blog', changefreq: 'weekly', priority: '0.8' },
          { path: '/about', changefreq: 'weekly', priority: '0.7' },
          { path: '/contact', changefreq: 'weekly', priority: '0.7' },
          { path: '/privacy-policy', changefreq: 'weekly', priority: '0.3' },
          { path: '/terms', changefreq: 'weekly', priority: '0.3' },
          { path: '/cookie-policy', changefreq: 'weekly', priority: '0.3' }
        ];

        let urls = staticPages.map(item => `  <url>
    <loc>${siteUrl}${item.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n');

        blogSlugs.forEach(slug => {
          urls += `\n  <url>
    <loc>${siteUrl}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
        });

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated dynamically by Vite plug-in from seo.config.js & blogData.jsx -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        const robots = `# ============================================================
# robots.txt — Production Search Engine Instructions
# ============================================================
# Website: ${siteUrl}
# Target: Search engine crawlers and indexing spiders
# ============================================================

User-agent: *

# Crawl Allowances
Allow: /
Allow: /blog/
Allow: /services/
Allow: /projects/
Allow: /pricing/
Allow: /about/
Allow: /contact/

# Block Development & Temporary Files
Disallow: /dist/
Disallow: /node_modules/
Disallow: /temp/
Disallow: /tmp/
Disallow: /*.config.js
Disallow: /*.json
Disallow: /*.log

# XML Sitemap Location
Sitemap: ${siteUrl}/sitemap.xml`;

        fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), sitemap);
        fs.writeFileSync(path.resolve(__dirname, 'public/robots.txt'), robots);
        console.log('\n[SEO Sync] Updated sitemap.xml and robots.txt with all static and dynamic paths under:', siteUrl, '\n');
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
