# Website Documentation

## 1. Project Overview
- Project type: Single-page portfolio website.
- Framework: React 19 + Vite 7.
- Styling: Tailwind CSS v4 utility classes inside JSX and `src/index.css`.
- Animations: Framer Motion.
- Routing: `react-router-dom` with `BrowserRouter` (currently only one page route rendered).
- Main purpose: Present services, projects, and contact options for lead generation.

## 2. Tech Stack
- Runtime/UI: `react`, `react-dom`
- Build/dev server: `vite`, `@vitejs/plugin-react`
- CSS tooling: `tailwindcss`, `@tailwindcss/vite`
- Motion: `framer-motion`
- Icons: `react-icons`
- Routing: `react-router-dom`
- Linting: `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`
- Extra installed but not currently used in source: `swr`, `date-fns`

## 3. Folder Structure
- `public/`: Static files served as-is (images, robots, sitemap, verification files).
- `src/`: React source code.
- `src/components/`: Reusable UI sections and infrastructure components.
- `src/pages/`: Page-level composition (`Home.jsx`).
- `src/config.jsx`: Central content/config for nav, services, projects, contact details.
- `src/seo.config.js`: Single source for domain and SEO identity/meta/schema data.
- `vite.config.js`: Vite + custom plugin that regenerates `public/sitemap.xml` and `public/robots.txt`.
- `index.html`: Static shell + fallback meta + GA snippet.
- `eslint.config.js`: ESLint rules.

## 4. Application Boot Flow
1. `index.html` loads `/src/main.jsx`.
2. `src/main.jsx` mounts React app inside `#root` with:
- `StrictMode`
- `BrowserRouter`
3. `src/App.jsx` renders:
- `Layout` (header/footer shell)
- `SEOHead` (runtime meta/schema injection)
- `Home` (all page sections)

## 5. Layout and Page Composition

### 5.1 Layout
- File: `src/components/Layout.jsx`
- Adds full-page shell:
- Top fixed `Header`
- Content area with top padding for fixed header (`pt-16 md:pt-20`)
- Bottom `Footer`

### 5.2 Home Page
- File: `src/pages/Home.jsx`
- Section render order:
1. `Hero`
2. `Services`
3. `DemoProjects`
4. `WhyChooseMe`
5. `ContactSection`

## 6. Component-by-Component Behavior

### 6.1 Header (`src/components/Header.jsx`)
- Sticky/fixed header with scroll-state visual change (`scrolled` when `window.scrollY > 20`).
- Desktop nav uses `config.NAV_ITEMS`.
- Mobile menu:
- Toggle button (`HiMenu`/`HiX`)
- Slide-in right panel with overlay (`AnimatePresence`)
- Anchor links are handled via `handleNavClick`:
- If href starts with `#`, prevents default and smooth-scrolls to matching `id`.

### 6.2 Hero (`src/components/Hero.jsx`)
- Main intro section (`id="home"`).
- Left side: heading, subtitle, CTA button.
- Right side: profile image `/hero-profile.png` with floating card decoration.
- Uses Framer Motion staggered entrance animations.
- CTA smooth-scrolls to contact section (`id="contact"`).

### 6.3 Services (`src/components/Services.jsx`)
- Section id: `services`.
- Iterates over `config.services`.
- Each card uses icon/title/description from config.
- Uses `React.cloneElement` to enforce consistent icon sizing classes.

### 6.4 Demo Projects (`src/components/DemoProjects.jsx`)
- Section id: `demo-projects`.
- Local state `showAll` controls whether to show all projects.
- Current behavior:
- Default shows first 4 (`slice(0, 4)`).
- If total projects > 4, displays “View More Projects” button.
- Cards include image, text, and external preview link (new tab).

### 6.5 Why Choose Me (`src/components/WhyChooseMe.jsx`)
- Section id: `why-choose-me`.
- Iterates `config.whyChooseMe`.
- Includes special layout case for odd item count:
- Last badge spans 2 columns on mobile for visual balance.

### 6.6 Contact Section (`src/components/ContactSection.jsx`)
- Section id: `contact`.
- Two-column layout on large screens:
- Left: lead form
- Right: contact details + WhatsApp CTA

#### Form details
- Local state:
- `formData`: `name`, `email`, `phone`, `business`, `message`
- `status`: `idle | loading | success | error`
- `errors`: field-specific validation errors
- Validation rules:
- Name: min 2 chars
- Email: regex format check
- Phone: regex `^[0-9+\-\s()]{7,15}$`
- Message: min 10 chars
- Submit flow:
1. Validate client-side
2. POST JSON to `https://formsubmit.co/ajax/shaikharieshussain09@gmail.com`
3. On success: show success panel + reset form
4. On failure: show error banner

#### Contact sidebar
- Data comes from `config.contactInfo`.
- Items rendered as links if `link` exists.
- Includes WhatsApp quick action to `https://wa.me/919391175096`.

### 6.7 Footer (`src/components/Footer.jsx`)
- Displays static brand name and dynamic current year.
- Styled as simple light footer with top border.

### 6.8 SEOHead (`src/components/SEOHead.jsx`)
- Runs in `useEffect` once after mount.
- Uses values from `SITE_URL` + `SEO` object in `src/seo.config.js`.
- Responsibilities:
- Set document title
- Upsert meta tags (description, keywords, robots, author)
- Create/update canonical link
- Inject Open Graph and Twitter cards
- Inject geo metadata
- Inject JSON-LD schema graph:
1. `WebSite`
2. `Person`
3. `LocalBusiness`
4. `BreadcrumbList`
- Removes previous `script[data-seo-ld]` before reinjecting.

## 7. Central Content and Data Source (`src/config.jsx`)
- This file controls most visible business content.
- `developer.name`: brand text in header.
- `NAV_ITEMS`: menu labels + in-page anchors.
- `services`: service cards.
- `whyChooseMe`: trust badges.
- `demoProjects`: project cards (title/description/image/demoLink).
- `contactInfo`: email, mobile, location cards.

Note:
- Icon JSX is stored directly inside config entries. Components render/clone those icon elements.

## 8. SEO Source of Truth (`src/seo.config.js`)
- `SITE_URL`: canonical domain used everywhere SEO-related.
- `SEO` object stores:
- Identity (name, role, email, phone, location)
- Social links (`sameAs` for schema)
- Meta title/description/keywords
- Open Graph title/description/image path
- Service list for structured data catalog

## 9. SEO File Generation Pipeline
- File: `vite.config.js`
- Custom plugin `generateSeoFiles()` executes in `buildStart`.
- It reads `src/seo.config.js`, extracts `SITE_URL` via regex, then rewrites:
- `public/sitemap.xml`
- `public/robots.txt`

Implications:
- `npm run dev` and `npm run build` can overwrite these two public files.
- Manual edits in those files are not persistent unless plugin logic is changed.

## 10. Static HTML Shell (`index.html`)
- Includes fallback static meta tags for non-JS crawlers.
- Includes favicon reference (`/favicon.svg`).
- Includes GA4 script with measurement ID `G-DV22ZPHD3Y`.
- Includes accessibility skip link (`href="#home"`).
- Adds preconnect hints for Google Fonts and DNS prefetch for `formsubmit.co`.

## 11. Global Styling (`src/index.css`)
- Imports Tailwind: `@import "tailwindcss";`
- Base layer:
- Global border color utility via `@apply border-slate-200`
- Body background/text + system font stack
- Utility layer:
- Custom `shimmer` keyframe + `.shimmer` class
- Additional global rules:
- `html { scroll-behavior: smooth; }`
- Section paint/layout containment and transform hints
- WebKit scrollbar styling for light theme

`src/App.css` is currently empty.

## 12. Public Assets and SEO Verification Files
- `public/hero-profile.png`: hero image + og image path in SEO config.
- `public/projects/*.png`: project thumbnails.
- `public/favicon.svg`: tab icon.
- `public/googlecfa264e9601c4487.html`: Google verification file.
- `public/BingSiteAuth.xml`: Bing verification file.
- `public/robots.txt`: crawler rules (auto-generated by Vite plugin).
- `public/sitemap.xml`: sitemap (auto-generated by Vite plugin).

## 13. Scripts and Commands
- `npm run dev`: start local dev server.
- `npm run build`: production build into `dist/`.
- `npm run preview`: preview production build locally.
- `npm run lint`: ESLint checks for JS/JSX files.

## 14. Linting Rules (`eslint.config.js`)
- Applies to `**/*.{js,jsx}`.
- Uses:
- JS recommended
- React hooks recommended-latest
- React refresh Vite rules
- Ignores `dist`.
- Custom rule:
- `no-unused-vars` errors unless variable starts with uppercase or underscore pattern.

## 15. Current Architecture Notes
- Router is initialized but app currently acts as single-page anchor-scrolling site.
- Most content is static and config-driven; no backend.
- Form submission depends on third-party FormSubmit availability.
- Analytics script is directly embedded in `index.html` (no consent mode logic yet).

## 16. How to Update Common Things

### Change domain everywhere
1. Edit `SITE_URL` in `src/seo.config.js`.
2. Run `npm run build` (or `npm run dev`) to regenerate `robots.txt` and `sitemap.xml`.

### Change displayed content
- Edit `src/config.jsx`:
- nav labels/anchors
- services
- projects
- contact details

### Change SEO text/schema
- Edit `src/seo.config.js`:
- title/description/keywords/og fields
- social links
- service names used in schema catalog

### Change sections/order on homepage
- Edit `src/pages/Home.jsx`.

### Change animations
- Update `motion.*` props and variant objects in each component.

## 17. Known Risks / Things to Watch
- Encoding artifacts are present in some comments/text (visible as garbled characters in a few files). Safe but worth normalizing to UTF-8 clean ASCII where possible.
- `swr` and `date-fns` are installed but unused; they add dependency surface.
- Custom `vite.config.js` regex expects `SITE_URL` in a specific single-quoted export format.
- Form submission has no spam protection/captcha.

## 18. Dependency Between Key Files
- `src/seo.config.js` -> consumed by:
- `src/components/SEOHead.jsx`
- `vite.config.js` plugin for `robots.txt` and `sitemap.xml`
- `src/config.jsx` -> consumed by:
- `Header.jsx`, `Services.jsx`, `WhyChooseMe.jsx`, `DemoProjects.jsx`, `ContactSection.jsx`
- `index.html` fallback meta can differ from runtime `SEOHead` if not kept aligned.

## 19. Deployment Notes
- Output is static build (`dist/`) suitable for Vercel/Netlify/static hosting.
- Ensure SPA fallback rewrite is configured if future routes are added.
- After domain changes, verify:
- `https://<domain>/sitemap.xml`
- `https://<domain>/robots.txt`
- canonical URL/meta output in page source/devtools.

## 20. Quick Maintenance Checklist
1. Run `npm run lint`.
2. Run `npm run build`.
3. Check contact form submit success/error behavior.
4. Validate all nav anchors scroll correctly.
5. Verify project links open properly.
6. Verify SEO tags/schema in browser devtools.
7. Confirm regenerated `public/robots.txt` and `public/sitemap.xml` match target domain.
