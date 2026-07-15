import { ArrowRight, Download, Mail, Terminal, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import AbstractHeroVisual from './AbstractHeroVisual';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

const RESUME_URL = '/Divyanshi_Resume.pdf';

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Dynamic Animated Gradient Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-[120px] animate-drift-slow" />
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-[140px] animate-drift-medium" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 blur-[130px] animate-drift-slow" />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Interactive Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        <motion.div 
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/5 w-6 h-6 rounded-full bg-purple-500/20 dark:bg-purple-500/30 backdrop-blur-sm border border-white/10"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-cyan-500/20 dark:bg-cyan-500/30 backdrop-blur-sm border border-white/10"
        />
        <motion.div 
          animate={{ y: [0, -10, 0], x: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-2/3 left-1/3 w-4 h-4 rounded-full bg-blue-500/20 dark:bg-blue-500/30 backdrop-blur-sm border border-white/10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-6">
            
            {/* Tagline Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/20 dark:border-purple-500/30 px-4 py-1.5 rounded-full text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold tracking-wide self-center lg:self-start"
            >
              <Terminal className="w-4 h-4 text-purple-500 animate-pulse" />
              <span>B.Tech Computer Science Student</span>
            </motion.div>

            {/* Core Titles */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white"
              >
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 dark:text-glow-purple">
                  Divyanshi Katiyar
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-700 dark:text-slate-200"
              >
                Computer Science Student &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 dark:text-glow-cyan">
                  Full Stack Learner
                </span>
              </motion.h2>
            </div>

            {/* Professional Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              I enjoy learning by building projects. I am passionate about crafting clean user experiences, developing responsive layouts, and diving deeper into full-stack web technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                id="hero-btn-projects"
                onClick={() => onScrollTo('projects')}
                className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium rounded-full shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-btn-contact"
                onClick={() => onScrollTo('contact')}
                className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 font-medium rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <Mail className="w-4 h-4 text-purple-500" />
                <span>Contact Me</span>
              </button>

              <a
                id="hero-btn-resume"
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-3.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Abstract Hero Visual (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <AbstractHeroVisual />
          </div>
        </div>

        {/* Scroll Indicator Chevron */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => onScrollTo('about')}>
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-2">SCROLL DOWN</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-purple-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
