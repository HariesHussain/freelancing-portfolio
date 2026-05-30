import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const NotFound = () => {
  return (
    <>
      <SEOHead title="Page Not Found | Haries Hussain" canonical="https://harieshussain.tech/404" />
      <main className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">404 - Page Not Found</h1>
        <p className="text-slate-600 mb-8">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-blue-600 transition-colors"
        >
          Go Home
        </Link>
      </main>
    </>
  );
};

export default NotFound;
