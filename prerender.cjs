const fs = require('fs');
const path = require('path');

// 1. Load blog data
const loadBlogPosts = () => {
  const content = fs.readFileSync(path.resolve(__dirname, 'src/blogData.jsx'), 'utf-8');
  const cleanContent = content.replace(/export const blogPosts =/, 'module.exports =');
  const tempModule = { exports: {} };
  const fn = new Function('module', 'exports', cleanContent);
  fn(tempModule, tempModule.exports);
  return tempModule.exports;
};

let blogPosts = [];
try {
  blogPosts = loadBlogPosts();
} catch (err) {
  console.error('[Prerender] Error loading blog posts:', err);
}

const SITE_URL = 'https://www.harieshussain.tech';

// 2. Define routes and metadata
const staticRoutes = [
  {
    path: '/',
    title: 'Haries Hussain | Premium Web Development Agency in Nandyal',
    description: 'Custom website development for businesses in India. High-converting, mobile-first websites with built-in SEO, delivered in 7 days. Business websites, landing pages, and portfolio websites starting at ₹2,999.',
    keywords: 'website developer in Nandyal, custom website development India, business website design, affordable website development, freelance web developer Nandyal, website development near me, Haries Hussain'
  },
  {
    path: '/about',
    title: 'About Haries Hussain | Freelance Web Developer in Nandyal, Andhra Pradesh',
    description: 'Haries Hussain is a freelance web developer from Nandyal, Andhra Pradesh, specializing in fast, affordable, mobile-first business websites for small businesses, clinics, restaurants, and professionals across India.',
    keywords: 'Haries Hussain, Shaik Haries Hussain, Haries Hussain Shaik, Haries Shaik, Haris Hussain, web developer Nandyal, freelance web developer Andhra Pradesh, Haries Hussain Nandyal, about Haries Hussain'
  },
  {
    path: '/services',
    title: 'Web Design Services by Haries Hussain | Custom Web Development',
    description: 'Professional website development services in Nandyal, India — custom business websites, landing page design, portfolio websites, website redesign, and SEO optimization. Affordable packages from ₹2,999.',
    keywords: 'website development services India, business website design, custom website development Nandyal, landing page design, website redesign services, portfolio website developer, affordable website India, SEO-friendly website development, React website development, freelance web developer India'
  },
  {
    path: '/projects',
    title: 'Web Design Projects | Haries Hussain Portfolio',
    description: 'View real website projects designed and developed for local businesses in India — dental clinics, schools, cafes, fitness platforms, and more. Built with React, optimized for speed and Google rankings.',
    keywords: 'web design portfolio India, website projects Nandyal, business website examples, restaurant website design, school website development, clinic website design, React website portfolio, Haries Hussain projects'
  },
  {
    path: '/pricing',
    title: 'Website Design Pricing | Haries Hussain — ₹2,999 Onwards',
    description: 'Transparent website development pricing in India. Business websites from ₹2,999 to ₹12,999 with no hidden costs. Compare Basic, Standard, and Premium plans for small businesses, clinics, and startups.',
    keywords: 'website development cost India, website design price, affordable website India, cheap website for small business, freelance web developer pricing, website cost Nandyal, how much does a website cost India'
  },
  {
    path: '/contact',
    title: 'Contact Haries Hussain | Freelance Web Developer Nandyal',
    description: 'Ready to start your website project? Get in touch with Haries Hussain for a free consultation. Response within 24 hours. Based in Nandyal, Andhra Pradesh.',
    keywords: 'hire website developer India, get website built India, contact web developer Nandyal, freelance web developer near me, website development inquiry, Haries Hussain contact'
  },
  {
    path: '/blog',
    title: 'Business & Web Development Blog | Haries Hussain',
    description: 'Practical guides and articles about web development, website costs in India, local SEO, website planning, and marketing strategies for local businesses and clinics.',
    keywords: 'web development blog, local SEO guide, website planning checklist, website cost India, small business web developer Nandyal'
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Premium Web Solutions',
    description: 'Privacy policy details for Haries Hussain Portfolio and Web Agency services.',
    keywords: 'privacy policy, Haries Hussain privacy'
  },
  {
    path: '/terms',
    title: 'Terms & Conditions | Premium Web Solutions',
    description: 'Terms and conditions details for Haries Hussain Portfolio and Web Agency services.',
    keywords: 'terms and conditions, Haries Hussain terms'
  },
  {
    path: '/cookie-policy',
    title: 'Cookie Policy | Premium Web Solutions',
    description: 'Cookie policy details for Haries Hussain Portfolio and Web Agency services.',
    keywords: 'cookie policy, Haries Hussain cookies'
  },
  {
    path: '/testimonials',
    title: 'Client Reviews & Testimonials | Haries Hussain Portfolio',
    description: 'Read reviews and client testimonials from local business owners and clinics who launched their sites with Haries Hussain.',
    keywords: 'client reviews, web developer reviews, Haries Hussain testimonials'
  }
];

// 3. Add blog routes dynamically
const blogRoutes = blogPosts.map(post => ({
  path: `/blog/${post.slug}`,
  title: `${post.title} | Haries Hussain`,
  description: post.summary,
  keywords: post.keywords || `${post.category.toLowerCase()} guide, web development india, Haries Hussain`,
  isArticle: true,
  image: post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/hero-profile.webp`
}));

const allRoutes = [...staticRoutes, ...blogRoutes];

// 4. Read compiled dist/index.html
const distPath = path.resolve(__dirname, 'dist');
const indexPath = path.resolve(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('[Prerender] Error: dist/index.html not found. Run npm run build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, 'utf-8');

console.log(`[Prerender] Generating server-visible HTML files for ${allRoutes.length} routes...`);

allRoutes.forEach(route => {
  const canonical = `${SITE_URL}${route.path}`;
  const title = route.title;
  const description = route.description;
  const keywords = route.keywords;
  const isArticle = route.isArticle || false;
  const ogImage = route.image || `${SITE_URL}/hero-profile.webp`;

  let html = baseHtml;

  // Replace default title
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);

  // Replace default description meta
  const descRegex = /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i;
  if (descRegex.test(html)) {
    html = html.replace(descRegex, `<meta name="description" content="${description}" />`);
  }

  // Inject route-specific canonical and social SEO tags in <head>
  const injection = `
  <!-- Server-Rendered SEO Tags -->
  <link rel="canonical" href="${canonical}" />
  <meta name="keywords" content="${keywords}" />
  <meta property="og:type" content="${isArticle ? 'article' : 'website'}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${ogImage}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${ogImage}" />`;

  html = html.replace('</head>', `${injection}\n</head>`);

  // Write file to target location
  if (route.path === '/') {
    // Write directly to dist/index.html for root route
    fs.writeFileSync(indexPath, html);
    console.log(`[Prerender] Generated: dist/index.html (/)`);
  } else {
    const routeFolder = path.resolve(distPath, route.path.substring(1));
    fs.mkdirSync(routeFolder, { recursive: true });
    fs.writeFileSync(path.resolve(routeFolder, 'index.html'), html);
    console.log(`[Prerender] Generated: dist/${route.path.substring(1)}/index.html`);
  }
});

console.log('[Prerender] Server-visible HTML prerendering completed successfully.');
