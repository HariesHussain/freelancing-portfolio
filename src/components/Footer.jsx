import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-white border-t border-slate-200" role="contentinfo" aria-label="Site footer">
      <div className="section-container text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-extrabold text-slate-900 text-xl tracking-tight">Haries Hussain</div>
        <p className="text-sm text-slate-500 font-medium">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
