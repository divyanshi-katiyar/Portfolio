import { GraduationCap, Calendar, BookOpen, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { educationList } from '../data/education';

export default function Education() {
  return (
    <section 
      id="education" 
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background Decorators */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[130px]" />
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 dark:bg-blue-500/20 px-3 py-1 rounded-full text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            My Education History
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg font-light leading-relaxed"
          >
            My formal computer science curriculum, academic focus, and specialized training pathways.
          </motion.p>
        </div>

        {/* Timeline Axis container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central spine line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 transform -translate-x-1/2 hidden md:block" />
          {/* Mobile left-side spine line */}
          <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 md:hidden" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {educationList.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={edu.id}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline node dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-500 transform -translate-x-1/2 flex items-center justify-center shadow-lg z-10">
                    <GraduationCap className="w-3.5 h-3.5 text-white" />
                  </div>

                  {/* Spacer for structural balance on large screens */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Card content block */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', duration: 0.8, delay: index * 0.1 }}
                    className="w-full md:w-[45%] pl-10 md:pl-0"
                  >
                    <div className="glass-panel p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-purple-500/5 hover:border-purple-500/20 transition-all duration-300 relative">
                      
                      {/* Date Badge */}
                      <span className="inline-flex items-center space-x-1.5 text-xs text-purple-600 dark:text-cyan-400 font-semibold font-mono mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{edu.duration}</span>
                      </span>

                      {/* Degree & Inst */}
                      <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1.5">
                        {edu.institution}
                      </h4>

                      {/* Grade Badge */}
                      {edu.grade && (
                        <div className="mt-4 inline-flex items-center space-x-1.5 px-3 py-1 bg-purple-500/10 dark:bg-purple-500/25 border border-purple-500/20 rounded-full">
                          <Star className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 fill-purple-600/10" />
                          <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 font-mono">
                            {edu.grade}
                          </span>
                        </div>
                      )}

                      {/* Description info */}
                      <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Specialized course lists */}
                      <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                        <div className="flex items-center space-x-1.5 text-xs text-slate-400 dark:text-slate-500 font-mono font-semibold uppercase tracking-wider mb-3">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Key Coursework:</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.courses.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md font-mono text-[10px] border border-slate-200/25 dark:border-white/5"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
