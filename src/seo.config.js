// ============================================================
// SEO CONFIGURATION â€” Single Source of Truth
// ============================================================
//
// âš¡ CHANGE YOUR DOMAIN HERE ONCE â€” everything else updates automatically.
//    When you decide on .com / .in / .tech / .dev / .vercel.app etc,
//    just update SITE_URL below and rebuild.
//
// ============================================================

export const SITE_URL = 'https://harieshussain.tech'; // â† CHANGE THIS TO YOUR FINAL DOMAIN

export const SEO = {
  // â”€â”€â”€ Identity â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  name: 'Haries Hussain',
  jobTitle: 'Full Stack Web Developer',
  email: 'shaikharieshussain09@gmail.com',
  phone: '+919391175096',
  location: {
    city: 'Nandyal',
    state: 'Andhra Pradesh',
    country: 'India',
    countryCode: 'IN',
  },

  // â”€â”€â”€ Social Links for Schema â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  socialLinks: [
    'https://share.google/Yq7Igmt5GEHjpqj8G',        // Google Business Profile
    'https://jsdl.in/DT-99UUITGPDT8',                // Justdial
    'https://www.linkedin.com/in/haries-hussain-shaik-06574632a', // LinkedIn
    'https://github.com/HariesHussain',              // GitHub
    'https://www.instagram.com/haries__shaik/'       // Instagram
  ],

  // â”€â”€â”€ Page Meta â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  title: 'Haries Hussain | Freelance Web Developer in Nandyal',
  description:
    'Haries Hussain is a full stack website developer based in Nandyal, Andhra Pradesh, India. Specializing in freelance web development, portfolio websites, and landing pages.',
  keywords: [
    'web developer in Nandyal',
    'website developer in nandyal',
    'freelance web developer in nandyal',
    'full stack developer in nandyal',
    'portfolio website developer in nandyal',
    'landing page developer in nandyal',
    'React developer Nandyal',
    'SEO optimization',
    'Haries Hussain',
  ].join(', '),

  // â”€â”€â”€ Open Graph / Social â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  ogTitle: 'Haries Hussain | Freelance Web Developer in Nandyal',
  ogDescription:
    'I build premium, fast, mobile-friendly websites for businesses that want to grow. Modern design, SEO optimization, and high-converting pages.',
  ogImage: '/hero-profile.png', // resolved dynamically via SITE_URL

  // â”€â”€â”€ Services (for Schema) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  services: [
    'Business Websites',
    'Portfolio Websites',    'Landing Pages',
    'Website Redesign',
    'SEO Optimization',
  ],
};

