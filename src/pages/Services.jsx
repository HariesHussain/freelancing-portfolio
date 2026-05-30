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
      'Source design layout files delivered',
      'High-fidelity page mockups',
      'Harmonious typography & color palettes',
      'Interactive user journey wireframes'
    ],
    process: [
      'Brand research & wireframing',
      'Interactive layout and design mockups',
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
    a: 'Hosting and domain fees are charged separately. However, I handle the complete deployment, secure domain connection, and hosting setup to ensure your website is live and running smoothly.'
  },
  {
    q: 'Where do you host the websites you build?',
    a: 'Depending on project requirements, I typically deploy websites using modern hosting platforms such as Vercel and Netlify to ensure fast performance, security, reliability, and global availability.'
  },
  {
    q: 'How are revision rounds managed?',
    a: 'Every project comes with 3 dedicated rounds of design and code reviews. We check mockups and interactive setups together before going live.'
  },
  {
    q: 'Do you build SEO-friendly websites?',
    a: 'Yes. Every website includes semantic HTML, meta tags, sitemap generation, and Core Web Vitals optimization as standard. Advanced SEO setup with Google Search Console and Analytics is available in the Premium plan.'
  },
  {
    q: 'Can you build an ecommerce or online store website?',
    a: 'We specialize in service-based business websites and landing pages. For basic product showcases with inquiry forms, we can build custom solutions. For full ecommerce with payment gateways, we recommend our Premium plan.'
  },
  {
    q: 'Do you offer website maintenance after launch?',
    a: 'Yes. We offer monthly website maintenance plans starting at ₹1,999/month covering backups, speed checkups, security monitoring, and content updates so your website stays fast and secure.'
  },
  {
    q: 'What technology stack do you use?',
    a: 'We build websites using React, Vite, and Tailwind CSS for maximum speed and modern design. This stack delivers faster load times and better Google rankings compared to traditional template-based site builders.'
  }
];

const Services = () => {
  return (
    <>
      <SEOHead
        title="Web Design Services by Haries Hussain | Custom Web Development"
        description="Professional website development services in Nandyal, India — custom business websites, landing page design, portfolio websites, website redesign, and SEO optimization. Affordable packages from ₹2,999."
        keywords="website development services India, business website design, custom website development Nandyal, landing page design, website redesign services, portfolio website developer, affordable website India, SEO-friendly website development, React website development, freelance web developer India"
        canonical="https://harieshussain.tech/services"
        schemaType="services"
        faqData={faqItems}
      />

      <main>
        <section className="section-shell bg-white py-16">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Services</h1>
            <p className="section-subtext">Premium web development services tailored to help your business rank and convert visitors.</p>
          </div>
        </section>

        {services.map((service, index) => (
          <section 
            key={service.title} 
            className={`section-shell ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'} py-16 md:py-20 border-b border-blue-500/5`}
            style={{
              background: index % 2 === 0 
                ? 'radial-gradient(circle at 10% 30%, rgba(239, 246, 255, 0.8) 0%, rgba(248, 250, 252, 0) 60%), #f8fafc'
                : 'radial-gradient(circle at 90% 30%, rgba(239, 246, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%), #ffffff'
            }}
          >
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
                      <p className="text-xs text-slate-600">Delivery: <span className="font-semibold text-slate-700">{service.delivery}</span></p>
                      <p className="text-xs text-slate-600">Investment: <span className="font-bold text-blue-600 text-sm">{service.price}</span></p>
                    </div>
                    <a
                      href="https://wa.me/919391175096"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp px-6 py-2.5"
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

