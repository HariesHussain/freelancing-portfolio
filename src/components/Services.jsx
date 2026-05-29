import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config.jsx';

const Services = () => {
    return (
        <section className="py-12 lg:py-24 relative overflow-hidden bg-white" id="services">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-5xl font-bold mb-3 lg:mb-6 text-slate-900"
                    >
                        {config.servicesHeading}
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-xl text-slate-600"
                    >
                        {config.servicesSubheading}
                    </motion.p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
                    {config.services.map((service, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 * index }}
                            className="bg-white border border-slate-200 p-4 lg:p-8 rounded-xl lg:rounded-2xl hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 group"
                        >
                            <div className="mb-3 lg:mb-6 p-2 lg:p-4 bg-slate-50 text-blue-600 rounded-lg lg:rounded-xl inline-block group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                                {React.cloneElement(service.icon, { className: 'w-5 h-5 lg:w-8 lg:h-8 text-blue-600' })}
                            </div>
                            <h3 className="text-sm lg:text-2xl font-bold mb-1.5 lg:mb-4 text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 text-xs lg:text-base leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-8 lg:mt-12 text-center"
                >
                    <a
                        href="#pricing"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-blue-500 text-blue-600 text-sm font-medium hover:bg-blue-50 transition-colors"
                    >
                        See Pricing for These Services →
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
