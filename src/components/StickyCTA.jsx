import React from 'react';
import { motion } from 'framer-motion';

const StickyCTA = () => {
  return (
    <motion.div
      initial={{ y: 56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-slate-200 shadow-[0_-6px_18px_rgba(15,23,42,0.12)]"
      style={{ height: '56px' }}
    >
      <div className="grid grid-cols-2 h-full">
        <a
          href="https://wa.me/919391175096"
          target="_blank"
          rel="noopener noreferrer"
          className="h-full inline-flex items-center justify-center bg-[#25D366] text-white font-semibold text-sm"
        >
          💬 WhatsApp Now
        </a>
        <a
          href="tel:+919391175096"
          className="h-full inline-flex items-center justify-center bg-[#0f172a] text-white font-semibold text-sm"
        >
          📞 Call Now
        </a>
      </div>
    </motion.div>
  );
};

export default StickyCTA;
