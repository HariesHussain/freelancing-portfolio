import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { config, NAV_ITEMS } from '../config.jsx';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xs py-3' : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="section-container px-4 md:px-8 lg:px-16" role="navigation" aria-label="Main navigation">
          <div className="flex items-center justify-between w-full">
            <Link to="/" className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight hover:opacity-80 transition-opacity">
              {config.developer.name}
            </Link>

            <nav className="hidden lg:flex items-center gap-4 lg:gap-6 xl:gap-8">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`text-xs lg:text-[14px] xl:text-[15px] font-semibold transition-colors py-2 whitespace-nowrap ${
                      active ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors" aria-label="Toggle menu">
              {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl border-l border-slate-200 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6 pt-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {config.developer.name}
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 -mr-2 text-slate-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 rounded-lg"
                    aria-label="Close menu"
                  >
                    <HiX className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex-1">
                  {NAV_ITEMS.map((item) => {
                    const active = isActive(item.path);
                    return (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 mb-1 rounded-lg text-sm font-semibold transition-colors ${
                          active ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-auto">
                  <a href="https://wa.me/919391175096" onClick={() => setIsMobileMenuOpen(false)} target="_blank" rel="noopener noreferrer" className="block w-full text-center mb-3 px-4 py-3.5 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition shadow-sm">
                    💬 Chat on WhatsApp
                  </a>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center px-4 py-3.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-blue-600 transition shadow-sm">
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
