import React from 'react';
import { motion } from 'framer-motion';
import { HiSearch, HiPencilAlt, HiCode, HiCheckCircle } from 'react-icons/hi';

const processSteps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'Understanding your goals',
        icon: <HiSearch className="w-5 h-5 lg:w-6 lg:h-6" />
    },
    {
        number: '02',
        title: 'Design',
        description: 'Wireframes and visual design',
        icon: <HiPencilAlt className="w-5 h-5 lg:w-6 lg:h-6" />
    },
    {
        number: '03',
        title: 'Develop',
        description: 'Clean fast code',
        icon: <HiCode className="w-5 h-5 lg:w-6 lg:h-6" />
    },
    {
        number: '04',
        title: 'Deliver',
        description: 'Testing and launching',
        icon: <HiCheckCircle className="w-5 h-5 lg:w-6 lg:h-6" />
    }
];

const MyProcess = () => {
    return (
        <section className="py-12 lg:py-24 bg-slate-50" id="my-process">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-8 lg:mb-16"
                >
                    <h2 className="text-2xl md:text-5xl font-bold mb-3 lg:mb-6 text-slate-900">
                        How I Work
                    </h2>
                    <p className="text-sm md:text-xl text-slate-600">
                        A clear process that keeps your project smooth, transparent, and delivery-focused.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.12 } }
                    }}
                    className="relative grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6"
                >
                    <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-slate-200" />

                    {processSteps.map((step) => (
                        <motion.article
                            key={step.number}
                            variants={{
                                hidden: { opacity: 0, y: 22 },
                                show: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                            className="relative bg-white border border-slate-200 rounded-2xl p-5 lg:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#0f172a] text-white text-sm font-extrabold shadow-md">
                                    {step.number}
                                </span>
                                <span className="text-[#3b82f6] bg-blue-50 p-2 rounded-lg">
                                    {step.icon}
                                </span>
                            </div>
                            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-1.5">
                                {step.title}
                            </h3>
                            <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.article>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-8 lg:mt-12 text-center"
                >
                    <p className="text-sm text-slate-500 mb-3">
                        Your website could be live in 7 days. Start now →
                    </p>
                    <a
                        href="https://wa.me/919391175096"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-blue-500 text-blue-600 text-sm font-medium hover:bg-blue-50 transition-colors"
                    >
                        Chat on WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default MyProcess;
