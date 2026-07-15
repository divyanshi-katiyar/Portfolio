import { useState } from 'react';
import { FolderGit2, Github, ExternalLink, SlidersHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projects, Project } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Frontend' | 'Full Stack' | 'Other'>('All');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    return project.category === filter;
  });

  const categories: Array<'All' | 'Frontend' | 'Full Stack' | 'Other'> = [
    'All',
    'Frontend',
    'Full Stack',
    'Other',
  ];

  return (
    <section 
      id="projects" 
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[10%] right-[5%] w-[45%] h-[45%] rounded-full bg-cyan-500/5 blur-[110px]" />
        <div className="absolute top-[10%] left-[5%] w-[35%] h-[35%] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 dark:bg-blue-500/20 px-3 py-1 rounded-full text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            My Recent Creations
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg font-light leading-relaxed"
          >
            A list of responsive layouts and core applications built using modern web technologies.
          </motion.p>
        </div>

        {/* Projects Grid with layout transitions */}
        {projects.length > 0 ? (
          <>
            {/* Filter Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 border-b border-slate-200/60 dark:border-slate-800 pb-6">
              <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 text-sm font-mono">
                <SlidersHorizontal className="w-4 h-4 text-purple-500" />
                <span>FILTER BY CATEGORY:</span>
              </div>
              
              {/* Categories Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full border transition-all duration-300 cursor-pointer ${
                      filter === cat
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 border-transparent text-white shadow-md'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-purple-500/30 hover:text-purple-600 dark:hover:text-cyan-400'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9, y: 15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group glass-panel rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-purple-500/5 hover:border-purple-500/20 transition-all duration-300 flex flex-col h-full bg-white dark:bg-slate-900"
                  >
                    {/* Project Image Panel */}
                    <div className="relative aspect-video overflow-hidden border-b border-slate-100 dark:border-slate-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Category Pill Over Image */}
                      <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/10">
                        {project.category}
                      </div>
                    </div>

                    {/* Content Panel */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        {/* Project Title */}
                        <h3 className="text-xl font-display font-semibold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        
                        {/* Short Description */}
                        <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech stack & Actions */}
                      <div>
                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md font-mono text-[10px] border border-slate-200/25 dark:border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                          <a
                            id={`proj-${project.id}-github`}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center space-x-2 flex-grow py-2 px-4 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                          >
                            <Github className="w-4 h-4" />
                            <span>Code</span>
                          </a>
                          
                          <a
                            id={`proj-${project.id}-demo`}
                            href={project.demoUrl}
                            className="flex items-center justify-center space-x-2 flex-grow py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg text-xs font-medium hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-md shadow-purple-500/10"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* More Projects Coming Soon card */}
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  className="group border-2 border-dashed border-purple-500/20 dark:border-slate-800 rounded-2xl p-8 flex flex-col justify-center items-center text-center h-full min-h-[350px] bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-cyan-500/5 opacity-50" />
                  <div className="p-4 bg-purple-500/10 dark:bg-cyan-500/10 rounded-full border border-purple-500/20 dark:border-cyan-500/20 mb-4 animate-pulse">
                    <FolderGit2 className="w-8 h-8 text-purple-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-slate-800 dark:text-white mb-2">
                    More Coming Soon
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed max-w-xs">
                    I am actively learning new full-stack tools and building responsive web applications. Stay tuned for updates!
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center p-12 border border-dashed border-purple-500/25 dark:border-slate-800 rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm max-w-xl mx-auto"
          >
            <div className="p-4 bg-purple-500/10 dark:bg-cyan-500/10 rounded-full border border-purple-500/20 dark:border-cyan-500/20 mb-4 animate-pulse">
              <FolderGit2 className="w-8 h-8 text-purple-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-display font-semibold text-slate-800 dark:text-white mb-2">
              My Projects
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-light">
              Projects will be added here as I build and complete them.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}
