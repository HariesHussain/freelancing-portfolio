import React from 'react';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Premium Web Solutions"
        description="Privacy policy details for Haries Hussain Portfolio and Web Agency services."
        canonical="https://harieshussain.tech/privacy-policy"
      />

      <main>
        <section className="section-shell bg-white py-16">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
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
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">1. Introduction</h2>
                <p>
                  Welcome to Haries Hussain Portfolio & Agency ("we", "our", "us"). We value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website (https://harieshussain.tech) or contract our services.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">2. Information We Collect</h2>
                <p className="mb-3">
                  We may collect personal identification information from you in a variety of ways, including when you visit our site, fill out a contact form, request a quote, or chat with us on WhatsApp. This information may include:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Contact Details:</strong> Your name, email address, phone number (including WhatsApp), and business name.</li>
                  <li><strong>Project Scope:</strong> Details about your business needs, website requirements, pages, and preferences shared during inquiry.</li>
                  <li><strong>Technical Usage:</strong> Browser types, operating system, IP address, referral sources, and pageviews tracked via basic analytics tools.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">3. How We Use Your Data</h2>
                <p className="mb-3">
                  We use the information we collect to operate, maintain, and improve our services, including:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>To contact you regarding your project inquiry and deliver consultations/quotes.</li>
                  <li>To design, code, and deploy your custom corporate website.</li>
                  <li>To analyze site performance, fix bugs, and refine user experience.</li>
                  <li>To comply with legal obligations or protect our intellectual property.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">4. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking files to understand how visitors interact with our website. You can instruct your browser to refuse cookies or notify you when a cookie is sent. For details, please review our Cookie Policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">5. Data Sharing and Third Parties</h2>
                <p>
                  We do not sell, trade, or rent your personal identification information to third parties. We may use trusted service providers (like web hosts, email routing tools such as FormSubmit, and analytics suites) to assist us in operations, provided they agree to keep this information strictly confidential.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">6. Security</h2>
                <p>
                  The security of your personal data is critical to us. We employ standard industry safeguards (including SSL encryption) to protect your details. However, please remember that no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">7. Your Rights</h2>
                <p>
                  Depending on your location, you may have the right to request access to, deletion of, or changes to the personal data we hold about you. To execute these rights, please email us directly.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">8. Changes to This Privacy Policy</h2>
                <p>
                  We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page with an updated modification date.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="text-xs text-slate-400">Need clarification?</p>
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

export default PrivacyPolicy;
