import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

const services = [
  {
    icon: '🎨',
    title: 'Website Design',
    tagline: 'Custom UI/UX designs for your brand',
    what: 'Custom visual design tailored to represent your corporate brand identity. We focus on modern aesthetics, sleek typography, clean color palettes, and interactive user journeys to create layouts that captivate your audience.',
    who: 'Companies needing visual mockups, corporate branding refreshes, startups planning new platforms.',
    includes: [
      'Custom UI/UX layout design',
      'Figma source files delivered',
      'High-fidelity page mockups',
      'Harmonious typography & color palettes',
      'Interactive user journey wireframes'
    ],
    process: [
      'Brand research & wireframing',
      'Interactive design mockups in Figma',
      'Review, styling adjustments, and asset handoff'
    ],
    delivery: '4-6 days',
    price: '₹4,999',
    cta: 'Get Custom Design'
  },
  {
    icon: '🏢',
    title: 'Business Websites',
    tagline: 'Your complete corporate online presence',
    what: 'Fully responsive, multi-page business websites designed specifically for companies, clinics, service firms, and local agencies. Perfect for building instant credibility and converting prospects.',
    who: 'Salons, clinics, consultants, restaurants, corporate agencies.',
    includes: [
      'Up to 5 custom layout pages',
      'Lead contact form with email routing',
      'Google Maps & social media integration',
      'Fully responsive (Mobile & Desktop)',
      'Basic on-page SEO configuration'
    ],
    process: [
      'Structure & copywriting alignment',
      'Responsive frontend development in React',
      'Performance testing, domain mapping & launch'
    ],
    delivery: '7-10 days',
    price: '₹5,999',
    cta: 'Build Corporate Site'
  },
  {
    icon: '📄',
    title: 'Landing Pages',
    tagline: 'Turn digital traffic into customers',
    what: 'Single-page landing layouts specifically designed for paid advertising campaigns or product launches. Built with rapid load times and direct call-to-actions to maximize signups or calls.',
    who: 'Coaches, advertisers, tutors, single-service providers, event hosts.',
    includes: [
      'Focused single-page layout',
      'Direct WhatsApp and Call hooks',
      'High-converting lead form integration',
      'Speed optimized (under 2s loading)',
      'Mobile-first responsive styling'
    ],
    process: [
      'Conversion-copywriting outline',
      'Speed-focused frontend development',
      'CRM integration and campaign tracking setup'
    ],
    delivery: '3-5 days',
    price: '₹2,999',
    cta: 'Create Landing Page'
  },
  {
    icon: '✨',
    title: 'Portfolio Websites',
    tagline: 'Showcase your work and attract opportunities',
    what: 'A personal branding portfolio designed for freelancers, photographers, designers, job seekers, and corporate executives. Highlight your achievements, skills, and past projects cleanly.',
    who: 'Freelancers, consultants, creative designers, job seekers.',
    includes: [
      'Past work project showcase grid',
      'Downloadable resume/CV link',
      'Skills and experience timeline',
      'Contact form & social icons',
      'Smooth micro-animations'
    ],
    process: [
      'Asset aggregation & layout design',
      'Clean interactive grid coding',
      'SEO validation and portfolio launch'
    ],
    delivery: '4-6 days',
    price: '₹2,999',
    cta: 'Build My Portfolio'
  },
  {
    icon: '🔄',
    title: 'Website Redesign',
    tagline: 'Upgrade your slow or outdated website',
    what: 'Redesign and rebuild your existing site to look modern, load fast, and work perfectly on mobile devices. We preserve your domain SEO authority while rewriting outdated codebase structures.',
    who: 'Business owners with slow, non-responsive, or ancient website layouts.',
    includes: [
      'Complete layout modernization',
      'Mobile responsiveness conversion',
      'Vite & Tailwind CSS speed upgrades',
      'Security audit & code cleanup',
      'Link preservation (no 404 breaks)'
    ],
    process: [
      'Layout audit & content mapping',
      'Visual redesign and migration coding',
      'Speed testing and final deployment sync'
    ],
    delivery: '7-14 days',
    price: '₹4,999',
    cta: 'Redesign My Website'
  },
  {
    icon: '🛠️',
    title: 'Maintenance & Support',
    tagline: 'Keep your website secure and up to date',
    what: 'Ongoing technical maintenance, monthly database backups, page speed checkups, secure host configuration, and text or image updates so you can focus completely on your business.',
    who: 'Corporate clients needing continuous updates, security checks, and support.',
    includes: [
      'Monthly secure backup copies',
      'Page speed & performance checkups',
      'Hosting & domain configuration checks',
      'Monthly text/image updates included',
      'Priority emergency fix support'
    ],
    process: [
      'Website codebase onboarding',
      'Automated backup & tracking setups',
      'Continuous monthly updates and health monitoring'
    ],
    delivery: 'Ongoing support',
    price: '₹1,999/mo',
    cta: 'Start Support Plan'
  }
];

const faqItems = [
  {
    q: 'How long does it take?',
    a: 'Design and landing pages take 3-5 days. Standard business websites take 7-10 days. Complex custom websites take 10-14 days.'
  },
  {
    q: 'What assets do I need to provide?',
    a: 'You will need to provide your business information, services list, logo if available, and any images. I can source high-quality royalty-free images if required.'
  },
  {
    q: 'Is hosting and domain included?',
    a: 'Hosting and domain setup are charged separately. I will help you set up and map your custom domains securely on platforms like Vercel or Hostinger.'
  },
  {
    q: 'How are revision rounds managed?',
    a: 'Every project comes with 3 dedicated rounds of design and code reviews. We check mockups and interactive setups together before going live.'
  }
];

const Services = () => {
  return (
    <>
      <SEOHead
        title="Web Design Services | Custom Web Development"
        description="Explore our range of web design and development services: Business Websites, Landing Pages, Website Redesigns, and Maintenance plans."
        keywords="web design services india, business website design, portfolio website developer"
        canonical="https://harieshussain.tech/services"
      />

      <main>
        <section className="section-shell bg-white py-16">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Services</h1>
            <p className="section-subtext">Premium web development services tailored to help your business rank and convert visitors.</p>
          </div>
        </section>

        {services.map((service, index) => (
          <section key={service.title} className={`section-shell ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'} py-16 md:py-20`}>
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 3xl:gap-16 4xl:gap-20 items-start"
              >
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <span className="inline-flex items-center justify-center bg-blue-50 rounded-xl p-3 mb-4 text-2xl">{service.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">{service.title}</h2>
                  <p className="text-blue-600 font-semibold mb-4 text-sm md:text-base">{service.tagline}</p>
                  <p className="text-slate-600 text-sm md:text-base mb-4 leading-relaxed">{service.what}</p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed"><span className="font-bold text-slate-800">Best for:</span> {service.who}</p>
                </div>

                <div className={`base-card ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Key Benefits</h3>
                  <ul className="space-y-2 mb-5">
                    {service.includes.map((item) => (
                      <li key={item} className="text-sm md:text-base text-slate-600 flex items-start gap-2">
                        <span className="text-blue-600">✓</span> {item}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 pt-2 border-t border-slate-100">Workflow Process</h3>
                  <ol className="space-y-2 mb-6 list-decimal pl-5">
                    {service.process.map((step) => (
                      <li key={step} className="text-sm md:text-base text-slate-600 leading-relaxed">
                        {step}
                      </li>
                    ))}
                  </ol>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <p className="text-xs text-slate-400">Delivery: <span className="font-semibold text-slate-700">{service.delivery}</span></p>
                      <p className="text-xs text-slate-400">Investment: <span className="font-bold text-blue-600 text-sm">{service.price}</span></p>
                    </div>
                    <a
                      href="https://wa.me/919391175096"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp px-6 py-2.5 rounded-xl font-bold shadow-sm"
                    >
                      {service.cta}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        <section className="section-shell bg-slate-50">
          <div className="section-container max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl">
            <h2 className="section-heading text-center mb-12">Services FAQ</h2>
            <div className="space-y-4">
              {faqItems.map((item, idx) => (
                <motion.details
                  key={item.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04 }}
                  className="base-card p-4 md:p-5"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900">{item.q}</summary>
                  <p className="mt-2 text-sm md:text-base text-slate-600">{item.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[#0f172a]">
          <div className="section-container text-center max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Let&apos;s Build the Right Website for Your Business</h2>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-8">Tell me your business goal on WhatsApp and I&apos;ll recommend the best service package in 2 minutes.</p>
            <a href="https://wa.me/919391175096" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Get Free Quote on WhatsApp</a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;

