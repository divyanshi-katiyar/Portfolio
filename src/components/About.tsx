import { Code2, Sparkles, BookOpen, Heart, BrainCircuit, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const cards = [
    {
      icon: <Terminal className="w-6 h-6 text-purple-500" />,
      title: 'Who I Am',
      description: 'A B.Tech Computer Science student at VIT Bhopal University. I am passionate about learning full stack technologies and building clean web layouts.',
    },
    {
      icon: <BrainCircuit className="w-6 h-6 text-blue-500" />,
      title: 'Coding Focus',
      description: 'Developing strong foundational problem-solving skills using core data structures, algorithms, and object-oriented programming methodologies.',
    },
    {
      icon: <BookOpen className="w-6 h-6 text-cyan-500" />,
      title: 'Learning Journey',
      description: 'Constantly practicing modern frontend frameworks, state management tools, and modular API structures to develop complete web pages.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-pink-500" />,
      title: 'Career Objective',
      description: 'Aspiring software developer aiming to build accessible, responsive, and reliable application experiences while continuously improving coding skills.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.8 } },
  };

  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Background Decorators */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[35%] h-[35%] rounded-full bg-purple-500/5 blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-purple-500/10 dark:bg-purple-500/20 px-3 py-1 rounded-full text-purple-700 dark:text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Discover Divyanshi</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white"
          >
            About My Journey
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg font-light leading-relaxed"
          >
            I believe building software is an exciting process of logic and layout. Here is a brief look at what motivates me as a Computer Science student.
          </motion.p>
        </div>

        {/* Story & Objective Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-2xl font-display font-semibold text-slate-800 dark:text-slate-100 flex items-center space-x-2">
              <Heart className="w-5 h-5 text-red-500 fill-red-500/10" />
              <span>Building with Passion and Curiosity</span>
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              I'm Divyanshi Katiyar, a B.Tech Computer Science student who is currently learning Full Stack Web Development. I enjoy turning ideas into responsive web applications and continuously improving my programming skills through hands-on projects.
            </p>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              My goal is to become a skilled software developer by learning, building, and sharing my work. I am passionate about crafting clean user experiences, developing responsive layouts, and continuously expanding my developer toolkit.
            </p>

            {/* Quick Metrics - Honest details instead of fake stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 dark:text-glow-purple">VIT Bhopal</div>
                <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase mt-1">University</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 dark:text-glow-cyan">B.Tech CSE</div>
                <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase mt-1">Degree</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">2023 - 2027</div>
                <div className="text-[10px] font-mono tracking-wider text-slate-400 uppercase mt-1">Timeline</div>
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="lg:col-span-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass-panel p-6 rounded-2xl flex flex-col space-y-4 hover:shadow-lg dark:hover:shadow-purple-500/5 hover:border-purple-500/20 transition-all duration-300"
                >
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit self-start shadow-sm border border-slate-200/25 dark:border-white/5">
                    {card.icon}
                  </div>
                  <h4 className="text-lg font-display font-semibold text-slate-800 dark:text-white">
                    {card.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed flex-grow">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
