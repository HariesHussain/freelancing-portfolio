import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { config } from '../config.jsx';

const DemoProjects = () => {
    const [showAll, setShowAll] = useState(false);

    const displayedProjects = showAll ? config.demoProjects : config.demoProjects.slice(0, 4);

    return (
        <section className="py-24 relative overflow-hidden bg-white" id="demo-projects">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-slate-900"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600"
                    >
                        Experience the quality, speed, and premium feel of the websites I build.
                    </motion.p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6 lg:gap-12">
                    {displayedProjects.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="group relative rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
                        >
                            <div className="aspect-video overflow-hidden relative border-b border-slate-100">
                                <img 
                                    src={project.image} 
                                    alt={`${project.title} — Premium web project by Haries Hussain`}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    loading="lazy"
                                    width="800"
                                    height="500"
                                />
                                {/* Soft overlay on hover */}
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500 pointer-events-none" />
                            </div>
                            
                            <div className="p-3 sm:p-5 lg:p-10 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-[13px] sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-3 lg:mb-4 text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1 sm:line-clamp-none">
                                        {project.title}
                                    </h3>
                                    <p className="text-[10px] sm:text-xs lg:text-sm text-slate-500 italic mb-2 sm:mb-3">
                                        {project.problemSolution}
                                    </p>
                                    <p className="text-slate-600 text-[10px] sm:text-sm lg:text-base mb-3 sm:mb-6 lg:mb-8 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-6">
                                        {project.results?.map((result) => (
                                            <span
                                                key={result}
                                                className="text-xs bg-green-50 text-green-700 border border-green-200 rounded-full px-2 py-0.5"
                                            >
                                                {result}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <a 
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6 lg:px-8 py-1.5 sm:py-3 lg:py-4 bg-slate-900 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-600/30 w-full sm:w-fit text-[10px] sm:text-base whitespace-nowrap mt-auto"
                                >
                                    Preview
                                    <svg className="w-3 h-3 sm:w-5 sm:h-5 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {!showAll && config.demoProjects.length > 4 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-10 lg:mt-16 text-center"
                    >
                        <button 
                            onClick={() => setShowAll(true)}
                            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm text-sm sm:text-base"
                        >
                            View More Projects
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default DemoProjects;
