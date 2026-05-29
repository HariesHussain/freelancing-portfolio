import React from 'react';
import { useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const ProjectDetail = () => {
  const { projectSlug } = useParams();

  return (
    <>
      <SEOHead canonical={`https://harieshussain.tech/projects/${projectSlug || ''}`} />
      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">Project detail page for: {projectSlug}</main>
    </>
  );
};

export default ProjectDetail;
