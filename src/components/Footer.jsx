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
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-sm">
              I help businesses build fast, SEO-friendly websites that generate leads, build credibility, and support long-term growth.
            </p>
            <p className="text-xs text-slate-600 font-medium">
              Freelance Web Developer in Nandyal, Andhra Pradesh
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/haries-hussain-shaik-06574632a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-50 border border-slate-100 hover:border-blue-500/30 hover:bg-blue-50/50 text-slate-600 hover:text-blue-600 rounded-xl transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/haries__shaik/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-50 border border-slate-100 hover:border-pink-500/30 hover:bg-pink-50/50 text-slate-600 hover:text-pink-600 rounded-xl transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@HariesHussainShaik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-50 border border-slate-100 hover:border-red-500/30 hover:bg-red-50/50 text-slate-600 hover:text-red-600 rounded-xl transition-all duration-200"
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
                  <path d="M 17.472 14.382 c -.297 -.149 -1.758 -.867 -2.03 -.967 -.273 -.099 -.471 -.148 -.67 .15 -.197 .297 -.767 .966 -.94 1.164 -.173 .199 -.347 .223 -.644 .075 -.297 -.15 -1.255 -.463 -2.39 -1.475 -.883 -.788 -1.48 -1.761 -1.653 -2.059 -.173 -.297 -.018 -.458 .13 -.606 .134 -.133 .298 -.347 .446 -.52 .149 -.174 .198 -.298 .298 -.497 .099 -.198 .05 -.371 -.025 -.52 -.075 -.149 -.669 -1.612 -.916 -2.207 -.242 -.579 -.487 -.5 -.669 -.51 a 12.8 12.8 0 0 0 -.57 -.01 c -.198 0 -.52 .074 -.792 .372 -.272 .297 -1.04 1.016 -1.04 2.479 0 1.462 1.065 2.875 1.213 3.074 .149 .198 2.096 3.2 5.077 4.487 .709 .306 1.262 .489 1.694 .625 .712 .227 1.36 .195 1.871 .118 .571 -.085 1.758 -.719 2.006 -1.413 .248 -.694 .248 -1.289 .173 -1.413 -.074 -.124 -.272 -.198 -.57 -.347 m -5.421 7.403 h -.004 a 9.87 9.87 0 0 1 -5.031 -1.378 l -.361 -.214 -3.741 .982 .998 -3.648 -.235 -.374 a 9.86 9.86 0 0 1 -1.51 -5.26 c .001 -5.45 4.436 -9.884 9.888 -9.884 2.64 0 5.122 1.03 6.988 2.898 a 9.825 9.825 0 0 1 2.893 6.994 c -.003 5.45 -4.437 9.884 -9.885 9.884 m 8.413 -18.297 A 11.815 11.815 0 0 0 12.05 0 C 5.495 0 .16 5.335 .157 11.892 c 0 2.096 .547 4.142 1.588 5.945 L .057 24 l 6.305 -1.654 a 11.882 11.882 0 0 0 5.683 1.448 h .005 c 6.554 0 11.89 -5.335 11.893 -11.893 a 11.821 11.821 0 0 0 -3.48 -8.413 Z" />
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
                  <Link to={link.path} className="text-slate-600 hover:text-blue-600 text-sm md:text-base font-medium transition-colors">
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
                  <Link to={link.path} className="text-slate-600 hover:text-blue-600 text-sm md:text-base font-medium transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 flex flex-col space-y-2.5 text-slate-600">
              <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Contact Info</span>
              <a href="mailto:shaikharieshussain09@gmail.com" className="text-sm md:text-base font-medium hover:text-blue-600 transition-colors">
                shaikharieshussain09@gmail.com
              </a>
              <span className="text-xs font-semibold text-slate-600">Response time: &lt; 24 hours</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom: Copyright & Attribution */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-xs md:text-sm text-slate-600 font-medium">
            © {new Date().getFullYear()} Haries Hussain. All rights reserved.
          </p>
          <p className="text-[10px] md:text-xs text-slate-600 font-medium">
            Designed & developed by Haries Hussain — Web Developer in Nandyal, India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
