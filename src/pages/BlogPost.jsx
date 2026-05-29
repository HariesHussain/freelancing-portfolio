import React from 'react';
import { useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <>
      <SEOHead canonical={`https://harieshussain.tech/blog/${slug || ''}`} />
      <main className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">Blog post page for: {slug}</main>
    </>
  );
};

export default BlogPost;
