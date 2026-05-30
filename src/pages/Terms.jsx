import React from 'react';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <>
      <SEOHead
        title="Terms & Conditions | Premium Web Solutions"
        description="Terms and conditions details for Haries Hussain Portfolio and Web Agency services."
        canonical="https://harieshussain.tech/terms"
      />

      <main>
        <section className="section-shell bg-white py-16">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Terms & Conditions</h1>
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
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">1. Agreement to Terms</h2>
                <p>
                  By accessing or using the services provided by Haries Hussain Portfolio & Agency ("we", "our", "us") on our website (https://harieshussain.tech), you agree to be bound by these Terms & Conditions. If you do not agree to all of these terms, please do not use our website or hire us for services.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">2. Services Offered</h2>
                <p>
                  We offer custom website design, web development, landing page creation, portfolio site builds, SEO optimization, and website maintenance. The exact scope, timeline, and deliverables for each project will be outlined in a separate written agreement or project proposal between us and the client.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">3. Client Obligations</h2>
                <p className="mb-3">
                  To ensure successful and timely delivery of services, clients agree to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide all necessary website content, images, assets, logo files, and information in a timely manner.</li>
                  <li>Provide clear feedback and prompt approvals at each review stage of development.</li>
                  <li>Hold necessary rights, licensing, or permissions for all images, content, and data provided to us.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">4. Fees, Payments & Deliveries</h2>
                <p className="mb-3">
                  Our service fees are based on the pricing plans shown on the website or custom quotes.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Payments must be made in accordance with the agreed milestones or upfront schedule.</li>
                  <li>Deliverables are transferred to the client's hosting server or control only upon receipt of full payment.</li>
                  <li>Deposits or milestone payments are non-refundable once design and development work has officially commenced.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">5. Intellectual Property & Ownership</h2>
                <p>
                  Upon full receipt of payment, the final custom website code and design assets created for the client will belong to the client. We retain the right to showcase the completed work, project screenshots, and case studies on our portfolio website and marketing materials, unless explicitly agreed otherwise in writing.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">6. Limitation of Liability</h2>
                <p>
                  In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages (including, but not limited to, loss of profits, revenue, data, or website traffic) arising from the use of our services, server downtime, third-party hosting issues, or API integration errors.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">7. Governing Law</h2>
                <p>
                  These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any legal action, dispute, or proceeding arising out of or relating to these Terms & Conditions shall be subject to the exclusive jurisdiction of the competent courts located in Nandyal District, Andhra Pradesh, India.
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">8. Changes to Terms</h2>
                <p>
                  We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of our website or services following any updates constitutes acceptance of the new terms.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="text-xs text-slate-400">Have questions about our terms?</p>
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

export default Terms;
