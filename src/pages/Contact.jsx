import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    message: '',
    email: ''
  });
  const [showDetails, setShowDetails] = useState(false);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name';
    }

    const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      nextErrors.phone = 'Please enter a valid WhatsApp number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (showDetails && formData.email.trim() && !emailRegex.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');

    try {
      const response = await fetch('https://formsubmit.co/ajax/shaikharieshussain09@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: 'New Lead from Contact Page',
          Name: formData.name,
          WhatsApp: formData.phone,
          Business: formData.business || 'Not provided',
          Email: formData.email || 'Not provided',
          Message: formData.message || 'Not provided'
        })
      });

      if (!response.ok) throw new Error('Submit failed');

      setStatus('success');
      setFormData({ name: '', phone: '', business: '', message: '', email: '' });
      setShowDetails(false);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Haries Hussain | Web Developer Nandyal"
        description="Let’s Build Your Website. Share your project details and get a response within 24 hours."
        keywords="contact web developer Nandyal, whatsapp web developer"
        canonical="https://harieshussain.tech/contact"
      />

      <main>
        <section className="section-shell bg-white">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Let&apos;s Build Your Website</h1>
            <p className="section-subtext">Tell me about your project and I&apos;ll get back to you within 24 hours</p>
          </div>
        </section>

        <section className="section-shell bg-slate-50">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 2xl:gap-12 3xl:gap-16">
              <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="base-card">
                {status === 'success' ? (
                  <div className="text-center bg-green-50 border border-green-200 rounded-xl p-6">
                    <h2 className="text-xl font-bold text-green-800 mb-2">Thanks! Your request is received.</h2>
                    <p className="text-sm md:text-base text-green-700 mb-4">I will reach out within 24 hours.</p>
                    <button onClick={() => setStatus('idle')} className="btn-secondary">Send Another Request</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                        className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-200'}`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">WhatsApp Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                        className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-200'}`}
                        placeholder="+91 93911 75096"
                      />
                      {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
                    </div>

                    {!showDetails && (
                      <button type="button" onClick={() => setShowDetails(true)} className="text-sm text-blue-600 font-medium underline underline-offset-2">
                        + Add project details
                      </button>
                    )}

                    {showDetails && (
                      <>
                        <div className="space-y-2">
                          <label htmlFor="business" className="text-sm font-semibold text-slate-700">Business Name</label>
                          <input
                            id="business"
                            name="business"
                            type="text"
                            value={formData.business}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-200"
                            placeholder="Your business name"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-200'}`}
                            placeholder="name@example.com"
                          />
                          {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-semibold text-slate-700">Project Details</label>
                          <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-200"
                            placeholder="Tell me what you need..."
                          />
                        </div>
                      </>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {['Free Consultation', 'No Commitment', 'Reply in 24hrs', '3 Free Revisions'].map((chip) => (
                        <span key={chip} className="text-xs bg-slate-100 border border-slate-200 text-slate-600 rounded-full px-2.5 py-1">{chip}</span>
                      ))}
                    </div>

                    {status === 'error' && (
                      <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl p-3">
                        Couldn&apos;t send right now. Please try again or use WhatsApp.
                      </p>
                    )}

                    <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
                      {status === 'loading' ? 'Sending...' : 'Start Free Consultation'}
                    </button>
                  </form>
                )}
              </motion.div>

              <motion.aside 
                initial={{ opacity: 0, y: 12 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                className="rounded-[2.25rem] bg-[#0f172a] text-white p-6 md:p-8 border border-slate-800 shadow-[0_20px_50px_rgba(15,23,42,0.08)] flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Contact Info</h2>
                  <ul className="space-y-4 mb-8">
                    <li className="bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/15 p-4 rounded-xl transition-all duration-300 flex items-center gap-3">
                      <span className="text-xl">📧</span>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Email Address</p>
                        <p className="text-sm font-semibold text-white break-all">shaikharieshussain09@gmail.com</p>
                      </div>
                    </li>
                    <li className="bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/15 p-4 rounded-xl transition-all duration-300 flex items-center gap-3">
                      <span className="text-xl">📱</span>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">WhatsApp</p>
                        <p className="text-sm font-semibold text-white">+91 9391175096</p>
                      </div>
                    </li>
                    <li className="bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/15 p-4 rounded-xl transition-all duration-300 flex items-center gap-3">
                      <span className="text-xl">📍</span>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Location</p>
                        <p className="text-sm font-semibold text-white">Nandyal, India</p>
                      </div>
                    </li>
                    <li className="bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/15 p-4 rounded-xl transition-all duration-300 flex items-center gap-3">
                      <span className="text-xl">⏰</span>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Availability</p>
                        <p className="text-sm font-semibold text-white">Mon-Sat, 9am-8pm IST</p>
                      </div>
                    </li>
                    <li className="bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/15 p-4 rounded-xl transition-all duration-300 flex items-center gap-3">
                      <span className="text-xl">⚡</span>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Response Time</p>
                        <p className="text-sm font-semibold text-white">Within 24 hours</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <a href="https://wa.me/919391175096" target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full mt-auto">
                  Chat on WhatsApp
                </a>
              </motion.aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;

