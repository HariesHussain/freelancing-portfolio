import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config.jsx';

const WhyChooseMe = () => {
    return (
        <section className="py-12 lg:py-24 relative overflow-hidden bg-slate-50" id="why-choose-me">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-5xl font-bold mb-3 lg:mb-6 text-slate-900"
                    >
                        Why Choose Me?
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-xl text-slate-600"
                    >
                        I focus on delivering high-quality, reliable, and premium results tailored to your specific business needs.
                    </motion.p>
                </div>
                
                <div className="grid grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-3 md:gap-6">
                    {config.whyChooseMe.map((item, index) => {
                        const isLast = index === config.whyChooseMe.length - 1;
                        const isOddTotal = config.whyChooseMe.length % 2 !== 0;
                        return (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.05 * index }}
                                className={`bg-white border border-slate-200 shadow-sm px-4 py-3 md:px-6 md:py-4 rounded-2xl lg:rounded-full flex flex-col lg:flex-row items-center lg:justify-start gap-2 lg:gap-3 hover:shadow-md hover:border-blue-500/30 hover:-translate-y-0.5 transition-all duration-300 text-center lg:text-left ${isLast && isOddTotal ? 'col-span-2 lg:col-span-1 max-w-[50%] lg:max-w-none mx-auto lg:mx-0' : ''}`}
                            >
                                <div className="text-blue-600">
                                    {item.icon}
                                </div>
                                <span className="text-slate-800 font-medium text-xs md:text-base">
                                    {item.title}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-8 lg:mt-12 text-center"
                >
                    <p className="text-sm text-slate-500 mb-3">
                        Sounds like what you need?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-blue-500 text-blue-600 text-sm font-medium hover:bg-blue-50 transition-colors"
                    >
                        Get Free Quote
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseMe;
