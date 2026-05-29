import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Framer Motion',
  'Figma',
  'WordPress',
  'SEO Tools',
  'Google Analytics',
  'Git',
  'Vercel'
];

const values = [
  {
    title: 'Quality Over Quantity',
    desc: 'I take limited projects to give each one full attention.'
  },
  {
    title: 'Mobile First',
    desc: 'Every site works perfectly on phones first.'
  },
  {
    title: 'Results Driven',
    desc: 'I build for business outcomes, not just aesthetics.'
  },
  {
    title: 'Clear Communication',
    desc: 'No ghosting, no surprises, always reachable.'
  }
];

const stats = ['4+ Projects', '100% On-time', '24hr Response', 'Starting ₹2,999'];

const About = () => {
  return (
    <>
      <SEOHead
        title="About Haries Hussain | Web Developer Nandyal"
        description="A web developer from Nandyal helping local businesses get online with fast, beautiful, affordable websites."
        keywords="Haries Hussain, web developer Nandyal, local business websites"
        canonical="https://harieshussain.tech/about"
      />

      <main>
        <section className="bg-white pt-2 pb-4 xs:pt-4 xs:pb-6 sm:py-16 lg:py-20">
          <div className="section-container">
            <div className="flex flex-row items-center gap-4 sm:gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-[60%] lg:w-3/5 text-left"
              >
                <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-slate-900 mb-2 xs:mb-4">Hi, I&apos;m Haries Hussain 👋</h1>
                <p className="text-[10px] xs:text-xs sm:text-sm md:text-base text-slate-600 mb-4 xs:mb-6 max-w-2xl">
                  A web developer from Nandyal helping local businesses get online with fast, beautiful, affordable websites.
                </p>
                <div className="flex flex-wrap gap-2 xs:gap-3 justify-start">
                  <Link to="/contact" className="btn-primary text-xs xs:text-sm px-4 py-2 xs:px-6 xs:py-3 rounded-lg xs:rounded-xl">Work With Me</Link>
                  <Link to="/projects" className="btn-secondary text-xs xs:text-sm px-4 py-2 xs:px-6 xs:py-3 rounded-lg xs:rounded-xl">See My Work</Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="w-[36%] lg:w-2/5 flex justify-end shrink-0"
              >
                <img
                  src="/hero-profile.png"
                  alt="Haries Hussain profile"
                  className="w-full max-w-[130px] xs:max-w-[160px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[360px] rounded-2xl border border-slate-200 shadow-sm"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-shell bg-slate-50">
          <div className="section-container max-w-4xl">
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-heading text-center mb-8">My Story</motion.h2>
            <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed">
              <p>
                I&apos;m Haries, a web developer based in Nandyal. I started building websites because I noticed most local businesses around me had no online presence — or worse, outdated websites that drove customers away.
              </p>
              <p>
                I specialize in building clean, fast, mobile-friendly websites specifically for small businesses, coaches, restaurants, clinics, and professionals who need a strong online presence without paying agency prices.
              </p>
              <p>
                Every website I build is designed to attract customers, build trust, and grow your business — not just look good.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell bg-white">
          <div className="section-container">
            <h2 className="section-heading text-center mb-4">Technologies I Use</h2>
            <p className="section-subtext text-center mb-10">A practical stack focused on performance, SEO, and easy maintenance.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="base-card text-center p-4 md:p-5">
                  <span className="text-sm md:text-base font-semibold text-slate-800">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-slate-50">
          <div className="section-container">
            <h2 className="section-heading text-center mb-4">What I Believe In</h2>
            <p className="section-subtext text-center mb-10">Simple principles that keep every project clear, effective, and client-friendly.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <motion.article key={value.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="base-card">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm md:text-base text-slate-600">{value.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-white">
          <div className="section-container">
            <div className="base-card">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat} className="text-center">
                    <p className="text-sm md:text-base font-semibold text-slate-900">{stat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell bg-[#0f172a]">
          <div className="section-container text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Ready to work together?</h2>
            <Link to="/contact" className="btn-primary">Start Your Project</Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;

