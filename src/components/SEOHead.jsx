import { useEffect } from 'react';
import { SITE_URL, SEO } from '../seo.config.js';
import { config } from '../config.jsx';

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  schemaType, // 'about' | 'services' | 'article'
  faqData, // Array of { q, a } or { question, answer }
  articleData, // Object of { title, summary, publishedAt, author, image }
}) => {
  useEffect(() => {
    const resolvedTitle = title || SEO.title;
    const resolvedDescription = description || SEO.description;
    const resolvedKeywords = keywords || SEO.keywords;
    
    // Normalize all canonical URLs to the preferred SITE_URL
    let resolvedCanonical = canonical || `${SITE_URL}${window.location.pathname}`;
    if (resolvedCanonical.includes('https://harieshussain.tech')) {
      resolvedCanonical = resolvedCanonical.replace('https://harieshussain.tech', SITE_URL);
    }

    const ogImageFull = `${SITE_URL}${SEO.ogImage}`;

    document.title = resolvedTitle;

    const setMeta = (attr, attrValue, content) => {
      let el = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', resolvedDescription);
    setMeta('name', 'keywords', resolvedKeywords);
    setMeta('name', 'author', SEO.name);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', resolvedCanonical);

    setMeta('property', 'og:type', schemaType === 'article' ? 'article' : 'website');
    setMeta('property', 'og:site_name', `${SEO.name} - ${SEO.jobTitle}`);
    setMeta('property', 'og:title', resolvedTitle);
    setMeta('property', 'og:description', resolvedDescription);
    setMeta('property', 'og:url', resolvedCanonical);
    setMeta('property', 'og:image', ogImageFull);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:locale', 'en_IN');

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', resolvedTitle);
    setMeta('name', 'twitter:description', resolvedDescription);
    setMeta('name', 'twitter:image', ogImageFull);

    setMeta('name', 'geo.region', SEO.location.countryCode);
    setMeta('name', 'geo.placename', `${SEO.location.city}, ${SEO.location.state}, ${SEO.location.country}`);

    const existingLd = document.querySelector('script[data-seo-ld]');
    if (existingLd) existingLd.remove();

    // ─── CONSTRUCT RICH STRUCTURED DATA GRAPH ───
    const schemaGraph = [
      // ─── Person Schema (global — present on every page for brand SEO) ───
      {
        '@type': 'Person',
        '@id': `${SITE_URL}/#person`,
        name: SEO.name,
        alternateName: SEO.alternateNames || [],
        url: `${SITE_URL}/about`,
        image: `${SITE_URL}${SEO.ogImage}`,
        email: SEO.email,
        telephone: SEO.phone,
        jobTitle: SEO.jobTitle,
        description: `${SEO.fullName || SEO.name} is a ${SEO.jobTitle} based in ${SEO.location.city}, ${SEO.location.state}, ${SEO.location.country}. Specializing in business websites, landing pages, and SEO-optimized web development.`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: SEO.location.city,
          addressRegion: SEO.location.state,
          addressCountry: SEO.location.countryCode,
        },
        sameAs: SEO.socialLinks,
        worksFor: { '@id': `${SITE_URL}/#organization` },
        knowsAbout: ['Web Development', 'React', 'SEO', 'UI/UX Design', 'Landing Pages', 'Responsive Web Design'],
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: `${SEO.name} Web Solutions`,
        url: SITE_URL,
        logo: `${SITE_URL}${SEO.ogImage}`,
        sameAs: SEO.socialLinks,
        founder: { '@id': `${SITE_URL}/#person` },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: SEO.phone,
          contactType: 'sales',
          email: SEO.email,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: resolvedCanonical,
        name: resolvedTitle,
        description: resolvedDescription,
        inLanguage: 'en-IN',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ];

    // Dynamic Breadcrumb Schema
    const pathname = window.location.pathname;
    if (pathname && pathname !== '/') {
      const parts = pathname.split('/').filter(Boolean);
      const breadcrumbElements = [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
      ];

      let currentPath = '';
      parts.forEach((part, index) => {
        currentPath += `/${part}`;
        const name = part
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        breadcrumbElements.push({
          '@type': 'ListItem',
          position: index + 2,
          name: name,
          item: `${SITE_URL}${currentPath}`,
        });
      });

      schemaGraph.push({
        '@type': 'BreadcrumbList',
        '@id': `${resolvedCanonical}/#breadcrumb`,
        itemListElement: breadcrumbElements,
      });
    }

    // Enhanced Person Schema for /about (extends the global Person with additional detail)
    if (schemaType === 'about') {
      // The global Person is already in the graph; find and extend it
      const personIdx = schemaGraph.findIndex(s => s['@id'] === `${SITE_URL}/#person`);
      if (personIdx !== -1) {
        schemaGraph[personIdx].mainEntityOfPage = `${SITE_URL}/about`;
      }
    }

    // Service Schema for /services
    if (schemaType === 'services') {
      schemaGraph.push({
        '@type': ['ProfessionalService', 'LocalBusiness'],
        '@id': `${resolvedCanonical}/#service`,
        name: `${SEO.name} Web Solutions`,
        description: 'Professional website development agency offering custom business websites, landing pages, portfolio websites, website redesign, SEO optimization, and maintenance services across India.',
        url: `${SITE_URL}/services`,
        telephone: SEO.phone,
        email: SEO.email,
        founder: { '@id': `${SITE_URL}/#person` },
        address: {
          '@type': 'PostalAddress',
          addressLocality: SEO.location.city,
          addressRegion: SEO.location.state,
          addressCountry: SEO.location.countryCode,
        },
        areaServed: [
          { '@type': 'City', name: 'Nandyal' },
          { '@type': 'City', name: 'Kurnool' },
          { '@type': 'State', name: 'Andhra Pradesh' },
          { '@type': 'State', name: 'Telangana' },
          { '@type': 'Country', name: 'India' },
        ],
        priceRange: '₹2,999 - ₹12,999',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Web Design and Development Services',
          itemListElement: config.services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.description,
            },
          })),
        },
      });
    }

    // FAQ Schema
    if (faqData && Array.isArray(faqData) && faqData.length > 0) {
      schemaGraph.push({
        '@type': 'FAQPage',
        '@id': `${resolvedCanonical}/#faq`,
        mainEntity: faqData.map((item) => ({
          '@type': 'Question',
          name: item.q || item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a || item.answer,
          },
        })),
      });
    }

    // Article & Author Schema — references the global Person
    if (schemaType === 'article' && articleData) {
      schemaGraph.push({
        '@type': 'BlogPosting',
        '@id': `${resolvedCanonical}/#article`,
        headline: articleData.title,
        description: articleData.summary,
        image: `${SITE_URL}${articleData.image || SEO.ogImage}`,
        datePublished: articleData.publishedAt,
        author: { '@id': `${SITE_URL}/#person` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        mainEntityOfPage: resolvedCanonical,
      });
    }

    const schema = {
      '@context': 'https://schema.org',
      '@graph': schemaGraph,
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-ld', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const ldScript = document.querySelector('script[data-seo-ld]');
      if (ldScript) ldScript.remove();
    };
  }, [title, description, keywords, canonical, schemaType, faqData, articleData]);

  return null;
};

export default SEOHead;
