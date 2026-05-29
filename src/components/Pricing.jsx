import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { config } from '../config.jsx';

const Pricing = () => {
    const scrollToContact = (e) => {
        e.preventDefault();
        const section = document.getElementById('contact');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-12 lg:py-24 bg-white" id="pricing">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-5xl font-bold mb-3 lg:mb-6 text-slate-900"
                    >
                        Simple Pricing. No Hidden Costs.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-xl text-slate-600"
                    >
                        Plans from ₹2,999 to ₹12,999 — pick what fits your business
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                    {config.pricing.map((plan, index) => (
                        <motion.article
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.3 }}
                            className={`relative rounded-2xl border p-6 lg:p-8 shadow-sm transition-all duration-300 ${
                                plan.isPopular
                                    ? 'bg-blue-600 border-blue-600 text-white'
                                    : 'bg-white border-slate-200 text-slate-900'
                            }`}
                        >
                            {plan.isPopular && (
                                <span className="absolute -top-3 right-5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold">
                                    Popular
                                </span>
                            )}

                            <h3 className="text-xl lg:text-2xl font-bold mb-2">{plan.name}</h3>
                            <p className={`text-sm mb-4 ${plan.isPopular ? 'text-blue-100' : 'text-slate-600'}`}>
                                {plan.subtitle}
                            </p>
                            <p className="text-3xl lg:text-4xl font-extrabold mb-2">{plan.price}</p>
                            <p className={`text-sm mb-2 ${plan.isPopular ? 'text-blue-100' : 'text-slate-600'}`}>
                                {plan.deliveryTime}
                            </p>
                            <p className={`text-sm mb-1 ${plan.isPopular ? 'text-blue-100' : 'text-slate-600'}`}>
                                {plan.revisions}
                            </p>
                            <p className={`text-sm mb-6 ${plan.isPopular ? 'text-blue-100' : 'text-slate-600'}`}>
                                {plan.support}
                            </p>

                            <ul className="space-y-2.5 mb-5">
                                {plan.includedFeatures.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2.5">
                                        <FaCheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${plan.isPopular ? 'text-white' : 'text-blue-600'}`} />
                                        <span className={`text-sm leading-relaxed ${plan.isPopular ? 'text-blue-50' : 'text-slate-600'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className={`rounded-xl border p-3 mb-5 ${plan.isPopular ? 'border-blue-300/40 bg-blue-500/20' : 'border-slate-200 bg-slate-50'}`}>
                                <p className={`text-xs font-semibold mb-2 ${plan.isPopular ? 'text-blue-50' : 'text-slate-700'}`}>
                                    Not Included
                                </p>
                                <ul className="space-y-2">
                                    {plan.notIncluded.map((item) => (
                                        <li key={item} className="flex items-start gap-2.5">
                                            <FaTimesCircle className={`w-4 h-4 mt-0.5 shrink-0 ${plan.isPopular ? 'text-blue-100' : 'text-slate-500'}`} />
                                            <span className={`text-xs leading-relaxed ${plan.isPopular ? 'text-blue-100' : 'text-slate-600'}`}>
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className={`rounded-xl border p-3 mb-6 ${plan.isPopular ? 'border-blue-300/40 bg-blue-500/20' : 'border-slate-200 bg-slate-50'}`}>
                                <p className={`text-xs font-semibold mb-2 ${plan.isPopular ? 'text-blue-50' : 'text-slate-700'}`}>
                                    Add-ons
                                </p>
                                <ul className="space-y-1.5">
                                    {plan.addOns.map((addon) => (
                                        <li key={addon} className={`text-xs ${plan.isPopular ? 'text-blue-100' : 'text-slate-600'}`}>
                                            {addon}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="#contact"
                                onClick={scrollToContact}
                                className={`inline-flex items-center justify-center w-full px-5 py-3 rounded-xl font-semibold transition-all ${
                                    plan.isPopular
                                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                                        : 'bg-slate-900 text-white hover:bg-blue-600'
                                }`}
                            >
                                Get Started
                            </a>
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-8 lg:mt-12 text-center"
                >
                    <p className="text-sm md:text-base text-slate-600">
                        Not sure which plan?{' '}
                        <a
                            href="https://wa.me/919391175096"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 font-semibold hover:text-blue-700"
                        >
                            WhatsApp me — I&apos;ll suggest the right one in 2 minutes
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
