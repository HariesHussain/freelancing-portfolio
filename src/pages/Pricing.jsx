import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

const plans = [
  {
    name: 'Basic',
    price: '₹2,999',
    bestFor: 'Landing pages, simple portfolios',
    delivery: '3-5 days',
    popular: false,
    included: [
      '1 page design',
      'Mobile responsive',
      'WhatsApp button',
      'Basic SEO setup',
      'Contact form',
      '2 revision rounds',
      '15 days support'
    ],
    excluded: ['No CMS/blog', 'No custom animations']
  },
  {
    name: 'Standard',
    price: '₹6,999',
    bestFor: 'Business websites, full portfolios',
    delivery: '7-10 days',
    popular: true,
    included: [
      'Up to 5 pages',
      'Mobile responsive',
      'WhatsApp + Call integration',
      'Google Maps embed',
      'SEO optimization',
      'Contact form with email',
      '3 revision rounds',
      '30 days support',
      'Basic animations'
    ],
    excluded: ['No web apps']
  },
  {
    name: 'Premium',
    price: '₹12,999',
    bestFor: 'Full business websites with SEO',
    delivery: '10-14 days',
    popular: false,
    included: [
      'Up to 10 pages',
      'Advanced animations',
      'Full SEO setup',
      'Google Analytics setup',
      'Google Search Console',
      'WhatsApp + Call + Form',
      '5 revision rounds',
      '60 days support',
      'Speed optimization',
      'Sitemap + robots.txt'
    ],
    excluded: []
  }
];

const addOns = [
  'WhatsApp Chat Widget — ₹499',
  'Google Maps Setup — ₹299',
  'Extra Revision Round — ₹499',
  'Logo Design — ₹999',
  'Content Writing (per page) — ₹499',
  '1 Year Maintenance — ₹2,999'
];

const comparisonRows = [
  { feature: 'Pages', basic: '1', standard: 'Up to 5', premium: 'Up to 10' },
  { feature: 'Mobile Responsive', basic: 'Yes', standard: 'Yes', premium: 'Yes' },
  { feature: 'SEO Setup', basic: 'Basic', standard: 'Optimized', premium: 'Full Setup' },
  { feature: 'Revision Rounds', basic: '2', standard: '3', premium: '5' },
  { feature: 'Support', basic: '15 days', standard: '30 days', premium: '60 days' }
];

const faqs = [
  { q: 'Do I pay full amount upfront?', a: '50% advance, 50% after final delivery' },
  { q: 'What payment methods?', a: 'UPI, GPay, PhonePe, Bank Transfer' },
  { q: 'Can I upgrade my plan later?', a: 'Yes, you can always upgrade' },
  {
    q: 'Is domain and hosting included?',
    a: 'Hosting and domain fees are charged separately. However, I handle the complete deployment, secure domain connection, and hosting setup to ensure your website is live and running smoothly.'
  },
  {
    q: 'Where do you host the websites you build?',
    a: 'Depending on project requirements, I typically deploy websites using modern hosting platforms such as Vercel and Netlify to ensure fast performance, security, reliability, and global availability.'
  },
  {
    q: 'How much does a 5-page business website cost?',
    a: 'A standard 5-page responsive business website with SEO, contact forms, and Google Maps starts at ₹6,999 with the Standard plan. This includes mobile-first design, on-page SEO, and 30 days of post-launch support.'
  },
  {
    q: 'Is a React website better than template builders for my business?',
    a: 'React websites load significantly faster, rank better on Google, and offer superior mobile performance. While templates are popular, custom React-based sites deliver better Core Web Vitals scores and require less maintenance.'
  },
  {
    q: 'What is the difference between a cheap website and a professional one?',
    a: 'A cheap template website may look generic and load slowly, hurting your Google rankings. A professional custom website is designed for your brand, optimized for speed, built for mobile, and structured for SEO to actually generate leads.'
  },
  {
    q: 'How long does website development take?',
    a: 'A single landing page takes 3-5 days. A 5-page business website takes 7-10 days. A full 10-page website with advanced SEO takes 10-14 days. Timeline starts after requirements are finalized.'
  }
];

const Pricing = () => {
  return (
    <>
      <SEOHead
        title="Website Design Pricing | Haries Hussain — ₹2,999 Onwards"
        description="Transparent website development pricing in India. Business websites from ₹2,999 to ₹12,999 with no hidden costs. Compare Basic, Standard, and Premium plans for small businesses, clinics, and startups."
        keywords="website development cost India, website design price, affordable website India, cheap website for small business, freelance web developer pricing, website cost Nandyal, how much does a website cost India"
        canonical="https://harieshussain.tech/pricing"
        faqData={faqs}
      />

      <main>
        <section className="section-shell bg-white">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Simple Pricing. No Hidden Costs.</h1>
            <p className="section-subtext">Honest prices for quality websites. Pay only for what you need.</p>
          </div>
        </section>

        <section className="section-shell bg-slate-50">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-10 3xl:gap-12">
              {plans.map((plan) => (
                <motion.article
                  key={plan.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`base-card relative ${plan.popular ? 'ring-2 ring-blue-600/80 shadow-[0_20px_40px_rgba(37,99,235,0.06)] md:scale-102 hover:md:scale-103' : ''}`}
                  style={plan.popular ? { background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)' } : undefined}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 right-5 rounded-full bg-blue-600 text-white px-3 py-1 text-xs font-bold">POPULAR</span>
                  )}
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">{plan.name}</h2>
                  <p className="text-3xl font-extrabold text-blue-600 mb-2">{plan.price}</p>
                  <p className="text-sm text-slate-600 mb-1"><span className="font-semibold">Best for:</span> {plan.bestFor}</p>
                  <p className="text-sm text-slate-600 mb-4"><span className="font-semibold">Delivery:</span> {plan.delivery}</p>

                  <ul className="space-y-2 mb-4">
                    {plan.included.map((item) => (
                      <li key={item} className="text-sm text-slate-600">✅ {item}</li>
                    ))}
                    {plan.excluded.map((item) => (
                      <li key={item} className="text-sm text-slate-500">❌ {item}</li>
                    ))}
                  </ul>

                  <a href="https://wa.me/919391175096" target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">Choose {plan.name}</a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-white">
          <div className="section-container">
            <h2 className="section-heading text-center mb-12">Add-ons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {addOns.map((item) => (
                <div key={item} className="base-card p-5 text-sm md:text-base text-slate-700">+ {item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-slate-50">
          <div className="section-container">
            <h2 className="section-heading text-center mb-12">Plan Comparison</h2>
            <div className="overflow-x-auto base-card p-0">
              <table className="min-w-full text-sm md:text-base">
                <thead className="bg-slate-50 border-b border-slate-200/60">
                  <tr>
                    <th className="text-left p-4 font-bold text-slate-900">Feature</th>
                    <th className="text-left p-4 font-bold text-slate-900">Basic</th>
                    <th className="text-left p-4 font-bold text-slate-900">Standard</th>
                    <th className="text-left p-4 font-bold text-slate-900">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-t border-slate-200">
                      <td className="p-4 font-medium text-slate-800">{row.feature}</td>
                      <td className="p-4 text-slate-600">{row.basic}</td>
                      <td className="p-4 text-slate-600">{row.standard}</td>
                      <td className="p-4 text-slate-600">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section-shell bg-white">
          <div className="section-container max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl">
            <h2 className="section-heading text-center mb-12">Pricing FAQ</h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details key={item.q} className="base-card p-4 md:p-5">
                  <summary className="cursor-pointer font-semibold text-slate-900">{item.q}</summary>
                  <p className="mt-2 text-sm md:text-base text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[#0f172a]">
          <div className="section-container text-center max-w-3xl">
            <p className="text-sm md:text-base text-slate-300 mb-5">Not sure which plan fits your business?</p>
            <a href="https://wa.me/919391175096" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              WhatsApp me for a 2-minute recommendation
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Pricing;

