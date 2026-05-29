import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';

const statItems = [
    { value: 4, suffix: '+', label: 'Projects' },
    { value: 100, suffix: '%', label: 'Satisfaction' },
    { value: 24, suffix: 'hr', label: 'Response' },
    { value: 3, suffix: '+', label: 'Clients' }
];

const CountUp = ({ value, suffix, label, delay = 0 }) => {
    const [display, setDisplay] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(0, value, {
            duration: 1.2,
            delay,
            ease: 'easeOut',
            onUpdate: (latest) => setDisplay(Math.round(latest))
        });

        return () => controls.stop();
    }, [isInView, value, delay]);

    return (
        <div ref={ref} className="bg-white/5 border border-white/10 backdrop-blur-xs p-2.5 xs:p-4 sm:p-5 rounded-xl xs:rounded-2xl text-center hover:bg-white/8 hover:border-white/15 transition-all duration-300 shadow-inner group">
            <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:scale-103 transition-transform duration-300">
                {display}
                {suffix}
            </p>
            <p className="text-[10px] xs:text-xs md:text-sm text-slate-300 font-semibold mt-0.5 xs:mt-1 sm:mt-1.5">
                {label}
            </p>
        </div>
    );
};

const StatsBar = () => {
    return (
        <section className="w-full bg-[#0f172a] py-4 xs:py-6 sm:py-8 lg:py-10" id="stats-bar">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 xs:gap-4 md:gap-6 items-center"
                >
                    {statItems.map((item, index) => (
                        <CountUp
                            key={item.label}
                            value={item.value}
                            suffix={item.suffix}
                            label={item.label}
                            delay={index * 0.1}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default StatsBar;
