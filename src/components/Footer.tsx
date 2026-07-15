import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { socials } from '../data/socials';

export default function Footer() {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Brand/Logo column */}
          <div className="space-y-3">
            <span 
              onClick={() => handleScrollTo('home')} 
              className="font-display font-bold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 cursor-pointer dark:text-glow-purple"
            >
              DK.DEV
            </span>
            <p className="text-xs font-mono tracking-wide text-slate-400 dark:text-slate-500">
              class Learner implements Student
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed max-w-xs mx-auto md:mx-0">
              Learning Full Stack Web Development and continuously improving my skills through projects.
            </p>
          </div>

          {/* Quick links list */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <button
                key={link.id}
                id={`footer-link-${link.id}`}
                onClick={() => handleScrollTo(link.id)}
                className="text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Contact shortcuts + Scroll To Top */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            
            {/* Social shortcuts */}
            <div className="flex items-center space-x-3">
              <a
                id="footer-social-github"
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-purple-500/20 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-cyan-400 bg-white dark:bg-slate-900 transition-all cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="footer-social-linkedin"
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-purple-500/20 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-cyan-400 bg-white dark:bg-slate-900 transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-social-email"
                href={`mailto:${socials.email}`}
                className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-purple-500/20 text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-cyan-400 bg-white dark:bg-slate-900 transition-all cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Floating style scroll up */}
            <motion.button
              id="btn-back-to-top"
              onClick={handleBackToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-xs px-4 py-2 rounded-full cursor-pointer shadow-md shadow-purple-500/15 group"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </div>

        </div>

        {/* Divider line */}
        <div className="border-t border-slate-200/50 dark:border-slate-800/80 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Divyanshi Katiyar. All rights reserved.
          </p>
          <div className="flex items-center space-x-1.5 text-slate-400 dark:text-slate-500 text-xs font-mono">
            <span>Built with React, TS, Tailwind, Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
