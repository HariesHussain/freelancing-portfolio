import React from 'react';
import { motion } from 'framer-motion';

const MidPageCTA = () => {
  const scrollToPricing = (e) => {
    e.preventDefault();
    const section = document.getElementById('pricing');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full py-14 lg:py-24 bg-[#0f172a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-5xl font-bold leading-tight text-white mb-4 lg:mb-6">
            Ready to Launch Your <span className="text-blue-400">Website</span> in <span className="text-blue-400">7 Days</span>?
          </h2>
          <p className="text-sm md:text-xl text-slate-300 mb-7 lg:mb-10 max-w-3xl mx-auto">
            Join local businesses already growing online with a premium website starting at ₹2,999
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/919391175096"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 rounded-xl bg-[#25D366] text-white font-semibold text-sm sm:text-base hover:bg-[#1ebd5a] transition-colors shadow-lg"
            >
              Get Free Quote on WhatsApp
            </a>
            <a
              href="#pricing"
              onClick={scrollToPricing}
              className="inline-flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 rounded-xl bg-white text-[#0f172a] font-semibold text-sm sm:text-base hover:bg-slate-100 transition-colors shadow-lg"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MidPageCTA;
