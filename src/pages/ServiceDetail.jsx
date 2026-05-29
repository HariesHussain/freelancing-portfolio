import React from 'react';
import { useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const ServiceDetail = () => {
  const { serviceSlug } = useParams();

  return (
    <>
      <SEOHead canonical={`https://harieshussain.tech/services/${serviceSlug || ''}`} />
      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">Service detail page for: {serviceSlug}</main>
    </>
  );
};

export default ServiceDetail;
