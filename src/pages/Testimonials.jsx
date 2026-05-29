import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { config } from '../config.jsx';

const Testimonials = () => {
  return (
    <>
      <SEOHead
        title="Client Testimonials | Haries Hussain"
        description="Read real client feedback on website quality, communication, and delivery experience."
        keywords="client testimonials web developer india, website client reviews"
        canonical="https://harieshussain.tech/testimonials"
      />

      <main>
        <section className="section-shell bg-white">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Client Testimonials</h1>
            <p className="section-subtext">Real feedback from business owners I worked with.</p>
          </div>
        </section>

        <section className="section-shell bg-slate-50">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {config.testimonials.map((item, index) => (
                <motion.article
                  key={`${item.clientName}-${index}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="base-card"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-sm">{item.initials}</div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm md:text-base">{item.clientName}</p>
                      <p className="text-xs md:text-sm text-slate-500">{item.businessName}</p>
                    </div>
                  </div>
                  <p className="text-blue-600 text-sm mb-3">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</p>
                  <p className="text-sm md:text-base text-slate-600">{item.review}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Testimonials;
