import React, { Suspense, lazy } from 'react';
import Header from './Header';
import Footer from './Footer';

const StickyCTA = lazy(() => import('./StickyCTA'));
const CookieConsent = lazy(() => import('./CookieConsent'));

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden">
      <Header />
      <main className="pt-16 md:pt-20 pb-[56px] md:pb-0">
        {children}
      </main>
      <Footer />
      <Suspense fallback={null}>
        <CookieConsent />
        <StickyCTA />
      </Suspense>
    </div>
  );
};

export default Layout;
