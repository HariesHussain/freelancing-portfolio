import { useEffect } from 'react';
import { SITE_URL, SEO } from '../seo.config.js';

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
}) => {
  useEffect(() => {
    const resolvedTitle = title || SEO.title;
    const resolvedDescription = description || SEO.description;
    const resolvedKeywords = keywords || SEO.keywords;
    const resolvedCanonical = canonical || `${SITE_URL}/`;
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

    setMeta('property', 'og:type', 'website');
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

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: resolvedCanonical,
          name: `${SEO.name} - ${SEO.jobTitle}`,
          description: resolvedDescription,
          inLanguage: 'en-IN',
          publisher: { '@id': `${SITE_URL}/#person` },
        },
        {
          '@type': 'Person',
          '@id': `${SITE_URL}/#person`,
          name: SEO.name,
          url: `${SITE_URL}/`,
          image: ogImageFull,
          email: SEO.email,
          telephone: SEO.phone,
          jobTitle: SEO.jobTitle,
          address: {
            '@type': 'PostalAddress',
            addressLocality: SEO.location.city,
            addressRegion: SEO.location.state,
            addressCountry: SEO.location.countryCode,
          },
          sameAs: SEO.socialLinks,
        },
      ],
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
  }, [title, description, keywords, canonical]);

  return null;
};

export default SEOHead;
