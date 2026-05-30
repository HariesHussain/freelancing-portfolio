import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent-accepted');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent-accepted', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          className="fixed bottom-[72px] left-4 right-4 md:bottom-6 md:right-6 md:left-auto md:max-w-[380px] bg-white/95 backdrop-blur-xs border border-slate-200/80 rounded-xl shadow-[0_8px_24px_rgba(15,23,42,0.06)] z-[99] p-4"
        >
          <div className="flex flex-col gap-3">
            <p className="text-[11px] md:text-xs text-slate-600 leading-normal font-normal">
              We use cookies and analytics tools to enhance your browsing experience. By continuing to use this website, you agree to our{' '}
              <Link to="/privacy-policy" className="text-blue-600 hover:underline font-medium">Privacy Policy</Link>,{' '}
              <Link to="/terms" className="text-blue-600 hover:underline font-medium">Terms & Conditions</Link>, and{' '}
              <Link to="/cookie-policy" className="text-blue-600 hover:underline font-medium">Cookie Policy</Link>.
            </p>
            <div className="flex items-center justify-between pt-2.5 border-t border-slate-100/80">
              <Link
                to="/cookie-policy"
                className="text-[10px] md:text-xs font-bold text-slate-600 hover:text-slate-800 transition-colors"
              >
                Read Cookie Policy
              </Link>
              <button
                onClick={handleAccept}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-3.5 py-1.5 rounded-lg text-[10px] md:text-xs shadow-sm transition hover:scale-105 duration-200 cursor-pointer"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
