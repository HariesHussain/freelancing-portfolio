import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { config } from '../config.jsx';

const Projects = () => {
  return (
    <>
      <SEOHead
        title="Web Design Projects | Haries Hussain Portfolio"
        description="View real website projects designed and developed for local businesses in India — dental clinics, schools, cafes, fitness platforms, and more. Built with React, optimized for speed and Google rankings."
        keywords="web design portfolio India, website projects Nandyal, business website examples, restaurant website design, school website development, clinic website design, React website portfolio, Haries Hussain projects"
        canonical="https://harieshussain.tech/projects"
      />

      <main>
        <section className="section-shell bg-white">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">My Work</h1>
            <p className="section-subtext">A few projects showing how I help local businesses build trust, improve speed, and get more inquiries online.</p>
          </div>
        </section>

        <section className="section-shell bg-slate-50">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 2xl:gap-10 3xl:gap-12">
              {config.demoProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="base-card"
                >
                  <div className="rounded-xl overflow-hidden border border-slate-200/50 shadow-xs mb-5">
                    <img
                      src={project.image}
                      alt={`${project.title} — website designed by Haries Hussain`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{project.title}</h2>
                  <p className="text-sm md:text-base text-slate-500 italic mb-3">{project.problemSolution}</p>
                  <p className="text-sm md:text-base text-slate-600 mb-4">{project.description}</p>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies?.map((tech) => (
                      <span key={tech} className="text-xs bg-slate-100 text-slate-700 border border-slate-200/80 rounded-md px-2.5 py-0.5 font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.results.map((result) => (
                      <span key={result} className="text-xs bg-green-50 text-green-700 border border-green-200 rounded-full px-2 py-0.5 font-medium">
                        {result}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Preview Live Project
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
