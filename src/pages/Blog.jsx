import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { config } from '../config.jsx';

// Timezone-safe helper to format YYYY-MM-DD to "Month DD, YYYY"
const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const year = parts[0];
  const monthIdx = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  if (monthIdx < 0 || monthIdx > 11 || isNaN(day)) return dateStr;
  return `${months[monthIdx]} ${day}, ${year}`;
};

const Blog = () => {
  const posts = config.blogPosts || [];

  return (
    <>
      <SEOHead
        title="Web Design & SEO Blog | Haries Hussain"
        description="Practical guides on website pricing in India, local SEO strategies, landing page vs website comparisons, and digital marketing tips for small business owners."
        keywords="website cost India 2026, how much does a website cost, landing page vs website, local SEO tips India, website design guide, small business website tips, web development blog India, Haries Hussain blog"
        canonical="https://harieshussain.tech/blog"
      />

      <main>
        {/* Header Hero Section */}
        <section className="section-shell bg-white py-16">
          <div className="section-container text-center">
            <span className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Resources & Insights
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-4">
              Web Design & Business Growth Blog
            </h1>
            <p className="section-subtext">
              Expert insights and practical guides on web design, local SEO, and digital marketing strategies to accelerate your business growth.
            </p>
          </div>
        </section>

        {/* Blog Post List Section */}
        <section className="section-shell bg-slate-50 py-12 md:py-16">
          <div className="section-container max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="base-card flex flex-col justify-between"
                >
                  <div>
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs bg-blue-50 text-blue-600 font-bold px-2.5 py-0.5 rounded-md">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-600 font-medium">
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    {/* Summary */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {post.summary}
                    </p>
                  </div>

                  {/* Footer Row */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-600 font-medium">
                      {formatDate(post.publishedAt)}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs md:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Read Article →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
