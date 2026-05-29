import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight, HiSparkles, HiLightningBolt, HiDeviceMobile, HiSearch, HiChat, HiShieldCheck } from 'react-icons/hi';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import SEOHead from '../components/SEOHead';
import { config } from '../config.jsx';

const Home = () => {
  const whyChooseMePillars = [
    {
      icon: <HiSparkles className="w-6 h-6" />,
      title: 'Premium Modern Design',
      desc: 'No generic, dated templates. We build custom, visually stunning interfaces with tailored layouts, premium typography, and subtle animations.'
    },
    {
      icon: <HiLightningBolt className="w-6 h-6" />,
      title: 'Fast 7-Day Launches',
      desc: 'We value speed. Our structured design-to-code workflow guarantees a fully polished, responsive corporate site launched in just one week.'
    },
    {
      icon: <HiDeviceMobile className="w-6 h-6" />,
      title: 'Flawless Mobile UX',
      desc: 'Every layout is designed mobile-first, ensuring high speed and seamless performance on smartphones, tablets, and desktops.'
    },
    {
      icon: <HiSearch className="w-6 h-6" />,
      title: 'Built-in SEO Best Practices',
      desc: 'A gorgeous site is useless without traffic. We implement modern semantic HTML structures, metadata tags, and speed audits so you rank higher.'
    },
    {
      icon: <HiChat className="w-6 h-6" />,
      title: 'Transparent Communication',
      desc: 'Direct contact with us via WhatsApp. You get daily progress updates, instant revision loops, and clear documentation with zero jargon.'
    },
    {
      icon: <HiShieldCheck className="w-6 h-6" />,
      title: 'Reliable Support',
      desc: 'Every launch comes with dedicated post-deployment support to help with technical questions, content updates, and server maintenance.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Premium Web Agency | Custom Web Development"
        description="We build high-converting, premium, custom websites for startups and corporate businesses in 7 days."
        keywords="web design agency, custom website developer, speed optimized portfolio, local seo nandyal"
        canonical="https://harieshussain.tech"
      />

      <main role="main">
        {/* 1. Hero Section (contains greeting, headline, CTA, profile picture) */}
        <Hero />

        {/* Stats Bar (sits right under hero as intro stats) */}
        <StatsBar />

        {/* 2. Services Preview (3 featured services) */}
        <section 
          className="py-20 md:py-24 bg-white relative overflow-hidden border-b border-blue-500/5"
          style={{
            background: 'radial-gradient(circle at 10% 20%, rgba(239, 246, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%), #ffffff'
          }}
        >
          <div className="section-container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Services Preview</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-4">Core Service Solutions</h2>
              <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto">
                Bespoke design and development tailored for corporate clients. We prioritize speed, branding, and search engine visibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {config.services.slice(0, 3).map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-slate-200/70 p-6 lg:p-8 rounded-[1.75rem] shadow-[0_8px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.05)] hover:-translate-y-1 hover:border-blue-500/20 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-4 lg:mb-6 p-3 bg-slate-50 border border-slate-100 text-blue-600 rounded-xl inline-block group-hover:bg-blue-50 group-hover:scale-105 transition-all duration-300">
                      {React.cloneElement(service.icon, { className: 'w-6 h-6 text-blue-600' })}
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-800 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 text-sm md:text-base shadow-xs"
              >
                View All Services <HiArrowRight className="w-4 h-4 text-slate-600" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Featured Projects Preview */}
        <section 
          className="py-20 md:py-24 bg-slate-50 relative overflow-hidden border-b border-blue-500/5"
          style={{
            background: 'radial-gradient(circle at 90% 80%, rgba(239, 246, 255, 0.7) 0%, rgba(248, 250, 252, 0) 60%), #f8fafc'
          }}
        >
          <div className="section-container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Our Work</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-4">Featured Projects</h2>
              <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto">
                Explore a selected preview of websites built to load fast, capture leads, and rank on Google.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {config.demoProjects.slice(0, 2).map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-slate-200/70 rounded-[2rem] lg:rounded-[2.25rem] overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:border-slate-300/80 transition-all duration-300 flex flex-col group animate-fadeIn"
                >
                  <div className="aspect-video overflow-hidden border-b border-slate-100 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                      <p className="text-xs text-slate-500 italic mb-4">{project.problemSolution}</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">{project.description}</p>
                    </div>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all duration-200 shadow-sm text-sm w-fit mt-auto"
                    >
                      Preview Live Project
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-800 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 text-sm md:text-base shadow-xs"
              >
                View All Projects <HiArrowRight className="w-4 h-4 text-slate-600" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Me Section (integrated here as a trust-building block) */}
        <section 
          className="py-20 md:py-24 bg-white relative overflow-hidden border-b border-blue-500/5"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(239, 246, 255, 0.4) 0%, rgba(255, 255, 255, 0) 80%), #ffffff'
          }}
        >
          <div className="section-container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Core Principles</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-4">Why Choose Me?</h2>
              <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto">
                I combine design aesthetics with clean development process to deliver premium corporate digital assets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseMePillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-slate-50/50 border border-slate-200/50 p-6 md:p-8 rounded-[1.75rem] shadow-[0_4px_20px_rgba(15,23,42,0.01)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.03)] hover:bg-white hover:border-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-start group"
                >
                  <div className="mb-5 p-3 bg-white text-blue-600 border border-slate-200/50 rounded-xl inline-block w-fit group-hover:bg-blue-50 group-hover:scale-105 transition-all duration-300">
                    {React.cloneElement(pillar.icon, { className: 'w-6 h-6 text-blue-600' })}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{pillar.title}</h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Testimonials Section (reviews) */}
        <section 
          className="py-20 md:py-24 bg-slate-50 relative overflow-hidden border-b border-blue-500/5"
          style={{
            background: 'radial-gradient(circle at 10% 90%, rgba(239, 246, 255, 0.7) 0%, rgba(248, 250, 252, 0) 60%), #f8fafc'
          }}
        >
          <div className="section-container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Social Proof</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-4">What Our Clients Say</h2>
              <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto">
                Real feedback from corporate agencies and local businesses who launched their custom sites with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {config.testimonials.slice(0, 3).map((test, index) => (
                <motion.div
                  key={test.clientName}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-slate-200/70 p-6 md:p-8 rounded-[1.75rem] shadow-[0_8px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 transition-all duration-300 relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 text-amber-500 mb-4">
                      {[...Array(test.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-700 italic text-sm md:text-base leading-relaxed mb-6">
                      &quot;{test.review}&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-3 border-t border-slate-50 pt-4 mt-auto">
                    <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
                      {test.initials}
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold text-xs md:text-sm leading-tight">{test.clientName}</p>
                      <p className="text-slate-500 text-[10px] md:text-xs mt-0.5">{test.businessName}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Final Call-to-Action Section */}
        <section className="py-20 bg-[#0f172a] text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
          <div className="section-container relative z-10 max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Start Your Web Agency Journey Today</h2>
            <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Have a project in mind? Contact us today to plan your timeline and get your custom corporate website running.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-200 shadow-md text-sm md:text-base"
              >
                Start Your Project
              </Link>
              <a
                href="https://wa.me/919391175096"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-8 py-3.5 rounded-xl font-bold shadow-md"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
