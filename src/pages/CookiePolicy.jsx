import React from 'react';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  return (
    <>
      <SEOHead
        title="Cookie Policy | Premium Web Solutions"
        description="Cookie policy details for Haries Hussain Portfolio and Web Agency services."
        canonical="https://harieshussain.tech/cookie-policy"
      />

      <main>
        <section className="section-shell bg-white py-16">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Cookie Policy</h1>
            <p className="section-subtext">Last Updated: May 29, 2026</p>
          </div>
        </section>

        <section className="section-shell bg-slate-50 py-12 md:py-16">
          <div className="section-container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="base-card space-y-8 text-slate-600 leading-relaxed text-sm md:text-base"
            >
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files stored on your computer or mobile device when you visit websites. They are widely used to make websites work more efficiently, improve speed, remember preferences, and provide analytics information to the site owners.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">2. How We Use Cookies</h2>
                <p className="mb-3">
                  We use cookies for a limited number of essential and performance purposes, including:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Essential Cookies:</strong> Required to enable standard navigation and core website functions. Without these, parts of our site may not function.</li>
                  <li><strong>Functional Cookies:</strong> Used to remember preferences (such as saving your choice on the cookie consent banner in your local browser storage).</li>
                  <li><strong>Analytics Cookies:</strong> Help us measure website traffic, referral pathways, and identify popular projects/services. This allows us to improve website loading speeds and visual structures.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">3. Google Analytics Tracking</h2>
                <p>
                  Our website integrates Google Analytics, a web analysis service provided by Google. Google Analytics uses cookies to collect aggregate data regarding visitor behaviors and browser details. We utilize this information solely to evaluate visitor numbers and improve page load responsiveness. All IP addresses are anonymized where possible, and no personal contact details (such as names or emails) are shared with Google.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">4. Managing Your Preferences</h2>
                <p className="mb-3">
                  You have the right to decide whether to accept or reject cookies:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Cookie Consent Banner:</strong> When you first visit, you are presented with our consent banner. Accepting stores a preference in your browser, hiding the banner for future sessions.</li>
                  <li><strong>Browser Settings:</strong> You can configure or block cookies by adjusting your web browser settings (e.g., in Chrome, Safari, Firefox, or Edge). Consult your browser's Help menu for specific instructions. Note that disabling essential cookies may impact your user experience.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">5. Updates to This Policy</h2>
                <p>
                  We may revise this Cookie Policy occasionally to reflect updates in tracking technologies or regulatory changes. Any modifications will be posted here with an updated modification date.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="text-xs text-slate-600">Questions about cookie settings?</p>
                  <p className="text-sm font-bold text-slate-900">shaikharieshussain09@gmail.com</p>
                </div>
                <a
                  href="mailto:shaikharieshussain09@gmail.com"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-sm transition hover:bg-blue-700 hover:scale-105 duration-200"
                >
                  Email Support
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CookiePolicy;
