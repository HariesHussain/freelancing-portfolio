import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { config } from '../config.jsx';

const Testimonials = () => {
    const mobileTrackRef = useRef(null);

    useEffect(() => {
        const track = mobileTrackRef.current;
        if (!track) return;

        const step = 1;
        const intervalMs = 20;

        const interval = setInterval(() => {
            if (!track) return;

            const maxScrollLeft = track.scrollWidth - track.clientWidth;
            if (track.scrollLeft >= maxScrollLeft - 1) {
                track.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                track.scrollBy({ left: step, behavior: 'auto' });
            }
        }, intervalMs);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 lg:py-24 relative overflow-hidden bg-white" id="testimonials">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-5xl font-bold mb-3 lg:mb-6 text-[#0f172a]"
                    >
                        Client Testimonials
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-xl text-slate-600"
                    >
                        Real feedback from businesses I have worked with.
                    </motion.p>
                </div>

                <div
                    ref={mobileTrackRef}
                    className="md:hidden flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {config.testimonials.map((testimonial, index) => (
                        <motion.article
                            key={`${testimonial.clientName}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="min-w-[85%] snap-center bg-white border border-slate-200 p-4 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#3b82f6]/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] font-bold text-sm flex items-center justify-center">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-[#0f172a]">{testimonial.clientName}</h3>
                                    <p className="text-xs text-slate-600">{testimonial.businessName}</p>
                                </div>
                            </div>
                            <p className="text-[#3b82f6] text-sm mb-2" aria-label={`${testimonial.rating} out of 5 stars`}>
                                {'?'.repeat(testimonial.rating)}{'?'.repeat(5 - testimonial.rating)}
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed">{testimonial.review}</p>
                        </motion.article>
                    ))}
                </div>

                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {config.testimonials.map((testimonial, index) => (
                        <motion.article
                            key={`${testimonial.clientName}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white border border-slate-200 p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#3b82f6]/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-11 h-11 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] font-bold text-sm flex items-center justify-center">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-[#0f172a]">{testimonial.clientName}</h3>
                                    <p className="text-sm text-slate-600">{testimonial.businessName}</p>
                                </div>
                            </div>
                            <p className="text-[#3b82f6] text-base mb-3" aria-label={`${testimonial.rating} out of 5 stars`}>
                                {'?'.repeat(testimonial.rating)}{'?'.repeat(5 - testimonial.rating)}
                            </p>
                            <p className="text-sm text-slate-600 leading-relaxed">{testimonial.review}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
