import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { config } from '../config.jsx';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name (min 2 characters)";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message is too short (min 10 characters)";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear specific error as user types
    if (errors[e.target.name]) {
        setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');

    try {
      const response = await fetch("https://formsubmit.co/ajax/shaikharieshussain09@gmail.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            _subject: "New Lead from Portfolio",
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            Business: formData.business || 'Not provided',
            Message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', business: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6 text-slate-900"
            >
                Let's Build Something Great
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-slate-600"
            >
                Contact me to discuss your next project, request a quote, or just say hello.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-8 items-start">
            
            {/* Left Side: Form Layout */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-3 bg-white border border-slate-200/70 rounded-[2.25rem] p-6 lg:p-12 shadow-[0_10px_40px_rgba(15,23,42,0.03)]"
            >
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center"
                  >
                    <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold mb-2 text-green-900">Message Sent Successfully!</h3>
                    <p className="text-green-700">I've received your request and will get back to you shortly over email.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-6 px-6 py-2 bg-green-100 hover:bg-green-200 text-green-800 font-medium rounded-full transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 text-left">
                        <label htmlFor="name" className="text-sm font-semibold text-slate-700 pl-1">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 transition-all font-medium placeholder-slate-400 disabled:opacity-50 ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/50'}`}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-red-500 text-xs font-medium pl-1">{errors.name}</p>}
                      </div>
                      <div className="space-y-2 text-left">
                        <label htmlFor="email" className="text-sm font-semibold text-slate-700 pl-1">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 transition-all font-medium placeholder-slate-400 disabled:opacity-50 ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/50'}`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs font-medium pl-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2 text-left">
                        <label htmlFor="phone" className="text-sm font-semibold text-slate-700 pl-1">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 transition-all font-medium placeholder-slate-400 disabled:opacity-50 ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/50'}`}
                          placeholder="+91 1234567890"
                        />
                        {errors.phone && <p className="text-red-500 text-xs font-medium pl-1">{errors.phone}</p>}
                      </div>
                       <div className="space-y-2 text-left">
                        <label htmlFor="business" className="text-sm font-semibold text-slate-700 pl-1">Business Name <span className="font-normal text-slate-400 text-xs">(Optional)</span></label>
                        <input
                          type="text"
                          id="business"
                          name="business"
                          value={formData.business}
                          onChange={handleChange}
                          disabled={status === 'loading'}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all font-medium placeholder-slate-400 disabled:opacity-50"
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 text-left">
                      <label htmlFor="message" className="text-sm font-semibold text-slate-700 pl-1">How can I help you? *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                        className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 transition-all font-medium resize-none placeholder-slate-400 disabled:opacity-50 ${errors.message ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-500/50'}`}
                        placeholder="Tell me about your project scope, timeline, and goals..."
                      />
                      {errors.message && <p className="text-red-500 text-xs font-medium pl-1">{errors.message}</p>}
                    </div>

                    {status === 'error' && (
                      <div className="text-red-700 text-sm bg-red-50 p-4 rounded-xl border border-red-200 text-left font-medium">
                        Oops! Something went wrong sending the email. Please try again or reach out directly using the alternative contact methods.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-slate-900 text-white font-bold rounded-xl px-6 py-4 mt-6 hover:bg-blue-600 disabled:opacity-80 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-slate-900/10 flex items-center justify-center space-x-3 text-lg"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <span>Send Request</span>
                      )}
                    </button>
                  </form>
                )}
            </motion.div>

            {/* Right Side: Contact Sidebar */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-2 space-y-8 lg:sticky lg:top-32"
            >
                <div className="bg-slate-900 rounded-[2.25rem] border border-slate-800 p-6 lg:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.08)] text-white relative overflow-hidden flex flex-col h-full">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    
                    <h3 className="text-2xl font-bold mb-8 relative z-10 text-white">Contact Information</h3>
                    
                    <div className="space-y-4 relative z-10 flex-grow">
                        {config.contactInfo.map((info, idx) => (
                            <a 
                                key={idx}
                                href={info.link || '#'}
                                target={info.link ? "_blank" : undefined}
                                rel={info.link ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-4 group bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/15 p-4 rounded-2xl transition-all duration-300 shadow-inner"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                                    <span className="text-white">
                                        {React.cloneElement(info.icon, { className: 'w-5 h-5 text-current' })}
                                    </span>
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <span className="text-xs text-slate-400 font-medium mb-0.5">{info.label}</span>
                                    <span className="text-sm md:text-base text-white font-semibold group-hover:text-blue-400 transition-colors break-all">{info.value}</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* WhatsApp Priority CTA */}
                    <div className="mt-12 pt-8 border-t border-slate-800/80 relative z-10">
                        <p className="text-slate-400 font-medium leading-relaxed mb-6 text-sm">
                            I generally respond within 24 hours. For urgent business inquiries or if you prefer messaging natively:
                        </p>
                        <a
                            href="https://wa.me/919391175096"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white py-4 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-[#25D366]/20"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                            </svg>
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
