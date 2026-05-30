# Haries Hussain Portfolio

A professional, high-performance business portfolio and SEO blog system designed for a freelance website developer. Built with a modern static architecture using React 19, Vite, and Tailwind CSS, this codebase is engineered for maximum speed, visual excellence, search engine crawlability, and local domain authority.

- **Production URL:** [https://harieshussain.tech](https://harieshussain.tech)
- **Author:** Haries Hussain (Business Website Developer)
- **Primary Focus:** High-converting business websites, landing pages, local SEO optimization, and clinic/education web systems.

---

## ✨ Features

- 🎨 **Premium Aesthetics** - Curved HSL tailored color schemes, subtle micro-animations (Framer Motion), glassmorphism details, and responsive layouts.
- ⚡ **Lightning Performance** - Custom-coded frontend architecture achieving 95+ performance scores on Google Lighthouse. Loads in under 2.5 seconds on mobile data connections.
- 🔍 **SEO Infrastructure** - Built-in JSON-LD schemas, robots.txt directives, dynamic sitemap indexing, and customized meta tags per page.
- 📝 **SEO Blog Hub** - A dedicated `/blog` area hosting 10 long-form, target-optimized resources targeting commercial, local, and brand keywords.
- 🤖 **AI-Agent Ready** - Features a custom `llms.txt` file facilitating search and indexing by AI discoverability systems.
- 📱 **Mobile-First Responsive Layouts** - Optimized for mobile tap targets and navigation, accommodating over 70% of Indian mobile web traffic.

---

## 🛠️ Tech Stack

| Component | Technology | Version | Description / Purpose |
| :--- | :--- | :--- | :--- |
| **Core Framework** | React | 19.2.0 | High-performance UI rendering |
| **Build & Dev Tool** | Vite | 7.2.2 | Dev server and optimized code-split builds |
| **Styling** | Tailwind CSS | 4.1.17 | Modern utility-first CSS styling system |
| **Animations** | Framer Motion | 12.23.24 | Hardware-accelerated UI transitions |
| **Routing** | React Router | 7.9.5 | Client-side routing configurations |
| **Icons** | React Icons | 5.5.0 | FontAwesome, Hi-Icons, etc. |
| **Date Formatting** | Date-fns | 4.1.0 | Standardized date helpers |

---

## 🔍 SEO & Schema Implementations

The project utilizes a centralized metadata and structured data manager, [SEOHead.jsx](src/components/SEOHead.jsx). On every page mount, it dynamically constructs and injects a unified JSON-LD script block containing:

- **Person Schema:** Standardizes branding to `"Haries Hussain"` while embedding 10+ alternate names (e.g. `Shaik Haries Hussain`, `Haries Hussain Shaik`, `Haries Web Developer`) for search result coverage.
- **Organization Schema:** Connects the brand name to worksFor references and contact points.
- **WebSite Schema:** Registers page URL, description, and publisher details.
- **ProfessionalService & LocalBusiness Schema:** Set up on `/services` to define clinic/local business targeting across Nandyal, Kurnool, and Andhra Pradesh.
- **BreadcrumbList Schema:** Dynamically parses URL paths to output hierarchical breadcrumb trails to search engines.
- **FAQPage Schema:** Converts structured FAQ data automatically into rich-result search snippets.
- **BlogPosting (Article) Schema:** Automatically generates publishing timestamps, publisher references, and cover assets for crawl bots.

---

## 📝 Blog Content Architecture

The blog is organized as a **Pillar-Cluster network** to build strong topical authority:
- **Pillar Content:** Website development cost analysis, local business website value, and local SEO blueprints.
- **Cluster Content:** Comparisons (Website vs. Social Media), hiring guides, checklists (10 Essential Features), diagnostic guides (Common Mistakes), and vertical-specific funnels (Clinic design, Coaching center leads).
- **Internal Linking:** Every article contains explicit anchor links to Services, Pricing, and Contact pages, alongside at least 2 cross-linked related guides, preventing orphaned paths.

---

## 🚀 Deployment & Build Tasks

### Prerequisites
- Node.js (v18 or higher)
- npm package manager

### Standard Development
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Compile for production
npm run build
```

### Sitemap & Robots Generation
Vite is configured via [vite.config.js](vite.config.js) to automate SEO synchronization on every build execution. The plug-in:
1. Loads current configuration files.
2. Scans `src/blogData.jsx` using regex to extract dynamic blog slugs.
3. Automatically writes a valid `public/sitemap.xml` mapping search priorities:
   - Home: `1.0`
   - Services, Projects, Pricing: `0.9`
   - Blog: `0.8`
   - Blog posts, About, Contact: `0.7`
   - Legal (Privacy, Terms, Cookies): `0.3`
4. Writes `public/robots.txt` specifying allowances and disallowing development configs.

### Vercel / Netlify Deployment Notes
This repository is configured as a fully static React application:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Routing Fallback:** Ensure your hosting platform handles client-side routing. On Vercel, this is handled via a `vercel.json` rewrite rule; on Netlify, configure a redirection rule (`/* /index.html 200`) in `_redirects` or `netlify.toml` so reloads on `/blog` or `/pricing` don't trigger 404 errors.

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static Assets
│   ├── projects/          # Client project screenshots
│   ├── favicon.svg        # Site favicon
│   ├── robots.txt         # Auto-generated crawl instructions
│   ├── sitemap.xml        # Auto-generated XML sitemap
│   └── llms.txt           # AI discovery and policy index
│
├── src/
│   ├── components/        # Shared UI Components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── SEOHead.jsx    # Metadata and Schema injection
│   │   └── Layout.jsx
│   │
│   ├── pages/             # Route views
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Pricing.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx       # Blog index listing page
│   │   └── BlogPost.jsx   # Article detail page
│   │
│   ├── blogData.jsx       # Blog posts dataset
│   ├── config.jsx         # Global parameters
│   ├── seo.config.js      # Primary SEO settings
│   ├── main.jsx           # React mounting script
│   ├── App.jsx            # Routing and layouts
│   └── index.css          # Core CSS stylesheet
│
├── package.json           # Project manifest
└── vite.config.js         # Build settings & SEO scripts
```

---

## 📞 Contact & Support

- **Website:** [https://harieshussain.tech](https://harieshussain.tech)
- **Email:** [shaikharieshussain09@gmail.com](mailto:shaikharieshussain09@gmail.com)
- **WhatsApp:** [+91 93911 75096](https://wa.me/919391175096)
