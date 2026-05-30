// ============================================================
// SEO CONFIGURATION â€” Single Source of Truth
// ============================================================
//
// âš¡ CHANGE YOUR DOMAIN HERE ONCE â€” everything else updates automatically.
//    When you decide on .com / .in / .tech / .dev / .vercel.app etc,
//    just update SITE_URL below and rebuild.
//
// ============================================================

export const SITE_URL = 'https://harieshussain.tech'; // ← CHANGE THIS TO YOUR FINAL DOMAIN

export const SEO = {
  // ─── Identity ───────────────────────────────────────────
  name: 'Haries Hussain',
  fullName: 'Haries Hussain',
  jobTitle: 'Full Stack Web Developer',
  email: 'shaikharieshussain09@gmail.com',
  phone: '+919391175096',
  location: {
    city: 'Nandyal',
    state: 'Andhra Pradesh',
    country: 'India',
    countryCode: 'IN',
  },

  // ─── Personal Brand: Name Variations (for Schema.org alternateNames) ──
  alternateNames: [
    'Shaik Haries Hussain',
    'Haries Hussain Shaik',
    'Haries Shaik',
    'Haris Hussain',
    'Haris Shaik',
    'Haries Web Developer',
    'Haries Website Developer',
    'Haries Hussain Web Developer',
    'Haries Hussain Nandyal',
    'Haries Hussain Andhra Pradesh',
  ],

  // ─── Social Links for Schema ──
  socialLinks: [
    'https://share.google/Yq7Igmt5GEHjpqj8G',        // Google Business Profile
    'https://jsdl.in/DT-99UUITGPDT8',                // Justdial
    'https://www.linkedin.com/in/haries-hussain-shaik-06574632a', // LinkedIn
    'https://github.com/HariesHussain',              // GitHub
    'https://www.instagram.com/haries__shaik/',       // Instagram
    'https://www.youtube.com/@HariesHussainShaik',   // YouTube
  ],

  // â”€â”€â”€ Page Meta â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  title: 'Haries Hussain | Freelance Web Developer in Nandyal, Andhra Pradesh',
  description:
    'Haries Hussain is a full stack website developer based in Nandyal, Andhra Pradesh, India. Specializing in freelance web development, business websites, portfolio websites, and landing pages for local businesses.',
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
    'Shaik Haries Hussain',
    'Haries Hussain Shaik',
    'Haries Shaik',
    'Haris Hussain',
    'Haries Hussain web developer',
    'Haries Hussain Nandyal',
  ].join(', '),

  // â”€â”€â”€ Open Graph / Social â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  ogImage: '/hero-profile.webp', // resolved dynamically via SITE_URL

  // â”€â”€â”€ Services (for Schema) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  
};

