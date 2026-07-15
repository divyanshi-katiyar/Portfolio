import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useDarkMode } from './hooks/useDarkMode';
import { useActiveSection } from './hooks/useActiveSection';

export default function App() {
  const { theme, toggleTheme } = useDarkMode();
  const sectionIds = ['home', 'about', 'projects', 'certificates', 'education', 'contact'];
  const activeSection = useActiveSection(sectionIds);
  
  // State to track scroll percentage for progress indicator
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="portfolio-root" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-purple-500/30 selection:text-purple-900 dark:selection:bg-cyan-500/20 dark:selection:text-cyan-200 overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div 
        id="scroll-progress-indicator"
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Bar */}
      <Navbar 
        activeSection={activeSection} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      {/* Main Sections */}
      <main className="relative">
        <Hero onScrollTo={handleScrollTo} />
        <About />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
