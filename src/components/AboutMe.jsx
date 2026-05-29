import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config.jsx';

const AboutMe = () => {
    return (
        <section className="py-12 lg:py-24 bg-white" id="about-me">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl md:text-5xl font-bold mb-4 lg:mb-6 text-[#0f172a]">
                            About Me
                        </h2>
                        <p className="text-sm md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                            {config.aboutMe.bio}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="grid grid-cols-2 gap-3 lg:gap-5"
                    >
                        {config.aboutMe.stats.map((stat, index) => (
                            <motion.article
                                key={`${stat.label}-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="bg-white border border-slate-200 rounded-2xl p-4 lg:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#3b82f6]/30 transition-all duration-300"
                            >
                                <p className="text-2xl lg:text-3xl font-extrabold text-[#3b82f6] mb-1">
                                    {stat.value}
                                </p>
                                <p className="text-xs lg:text-sm font-semibold text-[#0f172a]">
                                    {stat.label}
                                </p>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
