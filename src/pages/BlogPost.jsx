import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiLink, HiCheck } from 'react-icons/hi';
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import { config } from '../config.jsx';

// Helper to parse simple markdown-style links: [Link Text](url)
const renderTextWithLinks = (text) => {
  if (!text) return null;
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const linkText = match[1];
    const linkUrl = match[2];
    const isExternal = linkUrl.startsWith('http') || linkUrl.startsWith('tel:') || linkUrl.startsWith('mailto:');
    
    if (isExternal) {
      parts.push(
        <a key={match.index} href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
          {linkText}
        </a>
      );
    } else {
      parts.push(
        <Link key={match.index} to={linkUrl} className="text-blue-600 hover:underline font-semibold">
          {linkText}
        </Link>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

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

const BlogPost = () => {
  const { slug } = useParams();
  const posts = config.blogPosts || [];
  
  // Find current post
  const post = posts.find((p) => p.slug === slug);

  const [copied, setCopied] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const shareUrl = post ? `https://harieshussain.tech/blog/${post.slug}` : '';

  const handleCopyLink = () => {
    if (!shareUrl) return;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setStatusMsg('Link copied to clipboard successfully!');
      setTimeout(() => {
        setCopied(false);
      }, 3000);
      setTimeout(() => {
        setStatusMsg('');
      }, 5000);
    }).catch(() => {
      setStatusMsg('Failed to copy link. Please copy the URL from address bar.');
    });
  };

  const handleInstagramShare = () => {
    if (!shareUrl) return;
    
    // Check if the user is on a mobile device
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobileDevice && navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: shareUrl
      }).then(() => {
        setStatusMsg('Shared successfully!');
        setTimeout(() => setStatusMsg(''), 4000);
      }).catch((err) => {
        if (err.name !== 'AbortError') {
          copyLinkAndSuggestInstagram();
        }
      });
    } else {
      copyLinkAndSuggestInstagram();
    }
  };

  const copyLinkAndSuggestInstagram = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setStatusMsg('Instagram does not support direct website sharing. The link has been copied.');
      setTimeout(() => {
        setCopied(false);
      }, 3000);
      setTimeout(() => {
        setStatusMsg('');
      }, 6000);
    }).catch(() => {
      setStatusMsg('Please copy the URL from the browser address bar to share on Instagram.');
    });
  };

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center py-20 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-6">The guide you are looking for might have been moved or renamed.</p>
          <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
            <HiArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  // Related articles (excluding current one, limited to 2)
  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <SEOHead
        title={`${post.title} | Haries Hussain`}
        description={post.summary}
        keywords={post.keywords || `${post.category.toLowerCase()} guide, web development india, Haries Hussain`}
        canonical={`https://harieshussain.tech/blog/${post.slug}`}
        schemaType="article"
        faqData={post.faqs}
        articleData={post}
      />

      <main>
        {/* Article Header */}
        <section className="section-shell bg-white pt-16 pb-12">
          <div className="section-container max-w-3xl">
            <div className="mb-6">
              <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                <HiArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs bg-blue-50 text-blue-600 font-bold px-2.5 py-0.5 rounded-md">
                {post.category}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 pt-3 border-t border-slate-100 text-xs text-slate-400 font-medium">
              <span>By <Link to="/about" className="text-blue-600 hover:text-blue-700 transition-colors">{post.author}</Link></span>
              <span className="text-slate-300">•</span>
              <span>Published: {formatDate(post.publishedAt)}</span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="section-shell bg-slate-50 py-12">
          <div className="section-container max-w-3xl">
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="base-card space-y-8 text-slate-700 leading-relaxed text-sm md:text-base"
            >
              {post.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  {section.heading && (
                    <h2 className="text-lg md:text-xl font-bold text-slate-900 mt-6 first:mt-0">
                      {section.heading}
                    </h2>
                  )}
                  {Array.isArray(section.text) ? (
                    section.text.map((paragraph, pIdx) => (
                      <p key={pIdx}>{renderTextWithLinks(paragraph)}</p>
                    ))
                  ) : (
                    section.text && <p>{renderTextWithLinks(section.text)}</p>
                  )}

                  {/* Bullet points support */}
                  {section.list && (
                    <ul className="list-disc pl-5 space-y-2 text-slate-700">
                      {section.list.map((item, lIdx) => (
                        <li key={lIdx}>{renderTextWithLinks(item)}</li>
                      ))}
                    </ul>
                  )}

                  {/* Numerical lists support */}
                  {section.numberedList && (
                    <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                      {section.numberedList.map((item, lIdx) => (
                        <li key={lIdx}>{renderTextWithLinks(item)}</li>
                      ))}
                    </ol>
                  )}

                  {/* Pricing and Comparison Tables support */}
                  {section.table && (
                    <div className="overflow-x-auto my-4 border border-slate-200/85 rounded-2xl">
                      <table className="w-full text-left text-sm text-slate-700 border-collapse">
                        <thead>
                          <tr className="bg-slate-100/80 border-b border-slate-200">
                            {section.table.headers.map((h, i) => (
                              <th key={i} className="p-3.5 font-bold text-slate-900">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3.5">{renderTextWithLinks(cell)}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}

              {/* FAQs Section */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                    Frequently Asked Questions (FAQ)
                  </h2>
                  <div className="space-y-6">
                    {post.faqs.map((faq, fIdx) => (
                      <div key={fIdx} className="space-y-2">
                        <h3 className="font-bold text-slate-900 text-base">
                          {faq.question}
                        </h3>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                          {renderTextWithLinks(faq.answer)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Section */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                  Share this article
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  {/* WhatsApp */}
                  <a
                    href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' - ' + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200/60 hover:border-green-500/20 hover:bg-green-50/30 text-slate-600 hover:text-green-600 rounded-xl transition-all duration-200 text-sm font-semibold"
                    aria-label="Share on WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200/60 hover:border-blue-500/20 hover:bg-blue-50/30 text-slate-600 hover:text-blue-600 rounded-xl transition-all duration-200 text-sm font-semibold"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  {/* Twitter / X */}
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200/60 hover:border-slate-800/10 hover:bg-slate-100/50 text-slate-600 hover:text-slate-900 rounded-xl transition-all duration-200 text-sm font-semibold"
                    aria-label="Share on X (Twitter)"
                  >
                    <FaTwitter className="w-4 h-4" />
                    <span>X</span>
                  </a>

                  {/* Instagram */}
                  <button
                    onClick={handleInstagramShare}
                    className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200/60 hover:border-pink-500/20 hover:bg-pink-50/30 text-slate-600 hover:text-pink-600 rounded-xl transition-all duration-200 text-sm font-semibold"
                    aria-label="Share on Instagram"
                  >
                    <FaInstagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </button>

                  {/* Copy Link */}
                  <button
                    onClick={handleCopyLink}
                    className={`flex items-center gap-2 px-4 py-2.5 border rounded-xl transition-all duration-200 text-sm font-semibold ${
                      copied
                        ? 'bg-green-50 border-green-200 text-green-600'
                        : 'bg-slate-50 border-slate-200/60 hover:border-blue-500/20 hover:bg-blue-50/30 text-slate-600 hover:text-blue-600'
                    }`}
                    aria-label="Copy article link"
                  >
                    {copied ? <HiCheck className="w-4 h-4" /> : <HiLink className="w-4 h-4" />}
                    <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
                  </button>
                </div>

                {/* Helpful status tip */}
                {statusMsg && (
                  <p className="mt-3 text-xs text-slate-500 bg-slate-100/65 border border-slate-200/50 px-3 py-2 rounded-lg inline-block">
                    {statusMsg}
                  </p>
                )}
              </div>

              {/* In-article CTA card */}
              <div className="mt-12 p-6 md:p-8 bg-blue-50/40 border border-blue-100/80 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base md:text-lg">Need a website that attracts customers and builds trust?</h3>
                  <p className="text-slate-600 text-xs md:text-sm">Let's discuss your project and create a website tailored to your business goals.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
                  <Link to="/contact" className="btn-primary py-2.5 px-5 text-sm w-full sm:w-auto text-center shrink-0 whitespace-nowrap">
                    Start Your Project
                  </Link>
                  <Link to="/contact" className="btn-secondary py-2.5 px-5 text-sm w-full sm:w-auto text-center shrink-0 whitespace-nowrap">
                    Contact Me
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="section-shell bg-white py-16 border-t border-slate-100">
            <div className="section-container max-w-3xl">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 text-center md:text-left">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((rPost) => (
                  <article key={rPost.slug} className="p-5 border border-slate-200/60 hover:border-blue-500/20 shadow-[0_8px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.04)] hover:-translate-y-1 rounded-2xl transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] bg-slate-100 text-slate-500 font-bold px-2 py-0.5 rounded-md mb-3 inline-block">
                        {rPost.category}
                      </span>
                      <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                        <Link to={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                        {rPost.summary}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-50 text-[10px] text-slate-400 font-medium">
                      <span>{formatDate(rPost.publishedAt)}</span>
                      <Link to={`/blog/${rPost.slug}`} className="text-blue-600 hover:underline font-semibold">
                        Read Guide →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

export default BlogPost;
