import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200/60 pt-16 pb-16" role="contentinfo" aria-label="Site footer">
      <div className="section-container">
        {/* Footer Top: Brand & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start space-y-4">
            <Link to="/" className="font-extrabold text-slate-900 text-2xl tracking-tight hover:opacity-90 transition-opacity">
              Haries Hussain
            </Link>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-sm">
              I help businesses build fast, SEO-friendly websites that generate leads, build credibility, and support long-term growth.
            </p>
            <p className="text-xs text-slate-400 font-medium">
              Freelance Web Developer in Nandyal, Andhra Pradesh
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/haries-hussain-shaik-06574632a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-50 border border-slate-100 hover:border-blue-500/30 hover:bg-blue-50/50 text-slate-400 hover:text-blue-600 rounded-xl transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/haries__shaik/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-50 border border-slate-100 hover:border-pink-500/30 hover:bg-pink-50/50 text-slate-400 hover:text-pink-600 rounded-xl transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@HariesHussainShaik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-50 border border-slate-100 hover:border-red-500/30 hover:bg-red-50/50 text-slate-400 hover:text-red-600 rounded-xl transition-all duration-200"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919391175096"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs md:text-sm shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.005L2 22l5.187-1.359a9.936 9.936 0 004.819 1.239h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.037-5.176-2.923-7.062A9.92 9.92 0 0012.012 2zm5.72 14.1c-.244.688-1.201 1.25-1.649 1.344-.448.094-.962.162-3.003-.662-2.612-1.054-4.285-3.705-4.416-3.879-.131-.174-1.063-1.413-1.063-2.69 0-1.277.671-1.905.91-2.162.24-.257.514-.325.688-.325.174 0 .348.001.5.01.162.008.38-.033.595.485.22.53.754 1.838.82 1.97.066.133.11.288.022.464-.088.176-.132.287-.264.442-.132.155-.277.347-.396.467-.133.133-.272.277-.117.544.154.266.688 1.13 1.474 1.83.998.89 1.838 1.167 2.097 1.298.26.13.41.11.564-.067.155-.176.663-.774.84-.1.176.674 1.373 3.013.486c-.088.177-.088.331-.132.42z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 flex flex-col space-y-4 md:pl-8">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Projects', path: '/projects' },
                { label: 'Pricing', path: '/pricing' },
                { label: 'About', path: '/about' },
                { label: 'Contact', path: '/contact' },
                { label: 'Blog', path: '/blog' }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-slate-500 hover:text-blue-600 text-sm md:text-base font-medium transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Privacy Policy', path: '/privacy-policy' },
                { label: 'Terms & Conditions', path: '/terms' },
                { label: 'Cookie Policy', path: '/cookie-policy' }
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-slate-500 hover:text-blue-600 text-sm md:text-base font-medium transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 flex flex-col space-y-2.5 text-slate-500">
              <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Contact Info</span>
              <a href="mailto:shaikharieshussain09@gmail.com" className="text-sm md:text-base font-medium hover:text-blue-600 transition-colors">
                shaikharieshussain09@gmail.com
              </a>
              <span className="text-xs font-semibold text-slate-400">Response time: &lt; 24 hours</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom: Copyright & Attribution */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-xs md:text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} Haries Hussain. All rights reserved.
          </p>
          <p className="text-[10px] md:text-xs text-slate-500 font-medium">
            Designed & developed by Haries Hussain — Web Developer in Nandyal, India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
