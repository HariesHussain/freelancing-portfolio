import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';

const Hero = () => {
  const handleAnchor = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-white pt-2 pb-4 xs:pt-4 xs:pb-6 sm:py-20 md:py-28 lg:py-32 flex items-center min-h-0 sm:min-h-[680px] lg:min-h-[calc(100vh-80px)] lg:max-h-[850px]"
      style={{
        background: 'radial-gradient(circle at 82% 50%, rgba(219, 234, 254, 0.45) 0%, rgba(255, 255, 255, 0) 50%), #ffffff'
      }}
    >
      {/* Decorative Blur Spheres (Soft, Non-obtrusive) */}
      <motion.div
        animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-[5%] w-24 h-24 md:w-36 md:h-36 rounded-full bg-blue-100/40 blur-3xl pointer-events-none"
      />

      <div className="section-container relative z-10 w-full">
        <div className="flex flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 w-full">
          {/* Left Column: Text & Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-[60%] lg:w-[58%] text-left flex flex-col justify-center items-start"
          >
            {/* Intro Badge */}
            <div className="inline-flex items-center gap-1.5 xs:gap-2 bg-white border border-slate-200 px-2.5 py-1 xs:px-4 xs:py-2 rounded-full shadow-sm text-[10px] xs:text-xs sm:text-sm mb-3 xs:mb-6 font-semibold text-blue-600 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>Hi, I'm Haries</span>
            </div>

            {/* Headline */}
            <h1 className="text-sm xs:text-base sm:text-2xl md:text-3xl lg:text-[clamp(2.25rem,4.2vw,3.75rem)] font-extrabold tracking-tight leading-[1.2] text-slate-900 mb-2 xs:mb-4 sm:mb-6 w-full max-w-[620px] 2xl:max-w-[720px] 3xl:max-w-[800px] 4xl:max-w-[900px]">
              <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                High-Converting Websites<br className="hidden md:inline" /> for Growing Businesses
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl mx-auto lg:mx-0 mb-4 xs:mb-6 sm:mb-8 leading-relaxed">
              I design and develop modern websites that build credibility, generate leads, and help businesses stand out in a competitive market.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-start flex-wrap gap-2 xs:gap-4 w-full">
              <a
                href="#contact"
                onClick={(e) => handleAnchor(e, 'contact')}
                className="inline-flex items-center justify-center px-4 py-2 xs:px-6 xs:py-3 md:px-8 md:py-4 rounded-lg xs:rounded-xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-blue-600/10 text-[10px] xs:text-xs sm:text-sm md:text-base cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              >
                Start Your Project
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-4 py-2 xs:px-6 xs:py-3 md:px-8 md:py-4 rounded-lg xs:rounded-xl border border-slate-200 text-slate-800 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm text-[10px] xs:text-xs sm:text-sm md:text-base cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              >
                View My Work
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Profile Image & Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="w-[36%] lg:w-[35%] flex justify-end relative shrink-0"
          >
            <div className="relative w-full max-w-[130px] xs:max-w-[160px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[380px] xl:max-w-[400px] 2xl:max-w-[440px] 3xl:max-w-[480px] 4xl:max-w-[520px]">
              {/* Gentle blue glow effect behind hero profile photo */}
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl xs:rounded-[2rem] lg:rounded-[2.5rem] blur-3xl -translate-x-2 -translate-y-2 pointer-events-none scale-105" />
              {/* Image Container with Elegant Rounded Corners */}
              <div className="rounded-2xl xs:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] lg:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] bg-white aspect-[4/5] relative z-10">
                <img
                  src="/hero-profile.png"
                  alt="Haries Hussain — Web Developer"
                  className="w-full h-full object-cover select-none"
                  width="700"
                  height="875"
                />
              </div>

              {/* Overlapping Floating Feature Card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -bottom-3 -left-3 xs:-bottom-5 xs:-left-5 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md px-2.5 py-1.5 xs:px-4 xs:py-3 sm:px-5 sm:py-4 rounded-lg xs:rounded-2xl shadow-lg sm:shadow-xl border border-slate-100 flex items-center gap-1.5 xs:gap-3 z-10 whitespace-nowrap select-none scale-75 xs:scale-85 sm:scale-100 origin-bottom-left"
              >
                <div className="w-7 h-7 xs:w-10 xs:h-10 lg:w-11 lg:h-11 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-inner">
                  <HiSparkles className="w-3.5 h-3.5 xs:w-5 xs:w-5" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-[10px] xs:text-sm lg:text-base leading-none">Premium Design</p>
                  <p className="text-slate-500 text-[8px] xs:text-xs font-semibold mt-1">High Converting</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
