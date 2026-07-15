import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export default function AbstractHeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring configuration for elegant mouse lag/inertia
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax layers transform mappings
  // Deeper layers move less, closer layers move more
  const layer1X = useTransform(smoothX, [-300, 300], [-15, 15]);
  const layer1Y = useTransform(smoothY, [-300, 300], [-15, 15]);

  const layer2X = useTransform(smoothX, [-300, 300], [-30, 30]);
  const layer2Y = useTransform(smoothY, [-300, 300], [-30, 30]);

  const layer3X = useTransform(smoothX, [-300, 300], [-45, 45]);
  const layer3Y = useTransform(smoothY, [-300, 300], [-45, 45]);

  const layer4X = useTransform(smoothX, [-300, 300], [-60, 60]);
  const layer4Y = useTransform(smoothY, [-300, 300], [-60, 60]);

  useEffect(() => {
    // Check if device is mobile to disable heavy parallax computations
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate coordinates relative to the center of the container
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Scale down movement bounds
      mouseX.set(x * 0.5);
      mouseY.set(y * 0.5);
    };

    const handleMouseLeave = () => {
      // Return smoothly to center on leave
      mouseX.set(0);
      mouseY.set(0);
    };

    const container = containerRef.current;
    if (container && !isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      if (container) {
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [isMobile, mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[480px] sm:max-w-[520px] flex items-center justify-center overflow-visible select-none perspective-1000"
    >
      {/* ================= LAYER 1: Deepest Aurora Ambient Mesh Glows ================= */}
      <motion.div
        style={{ x: isMobile ? 0 : layer1X, y: isMobile ? 0 : layer1Y }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Soft Pink/Purple Rotating Ambient Orb */}
        <motion.div
          animate={{
            scale: [1, 1.15, 0.9],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-[80px]"
        />

        {/* Soft Blue/Cyan Floating Ambient Orb */}
        <motion.div
          animate={{
            scale: [1, 0.9, 1.15],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/25 blur-[90px]"
        />
      </motion.div>

      {/* ================= LAYER 2: Fluid Organic Mesh Ribbons & Curves ================= */}
      <motion.div
        style={{ x: isMobile ? 0 : layer2X, y: isMobile ? 0 : layer2Y }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full opacity-70 dark:opacity-85 mix-blend-screen dark:mix-blend-lighten filter drop-shadow-[0_0_30px_rgba(168,85,247,0.15)]"
        >
          {/* Animated Wave Ribbon 1 */}
          <motion.path
            d="M50,200 C100,100 150,300 200,200 C250,100 300,300 350,200"
            fill="none"
            stroke="url(#gradient1)"
            strokeWidth="10"
            strokeLinecap="round"
            animate={{
              d: [
                "M50,200 C110,80 140,320 200,200 C260,80 290,320 350,200",
                "M50,200 C90,120 160,280 200,200 C240,120 310,280 350,200",
                "M50,200 C110,80 140,320 200,200 C260,80 290,320 350,200"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          {/* Animated Wave Ribbon 2 */}
          <motion.path
            d="M50,200 C100,300 150,100 200,200 C250,300 300,100 350,200"
            fill="none"
            stroke="url(#gradient2)"
            strokeWidth="6"
            strokeLinecap="round"
            animate={{
              d: [
                "M50,200 C90,280 160,120 200,200 C240,280 310,120 350,200",
                "M50,200 C120,320 130,80 200,200 C270,320 280,80 350,200",
                "M50,200 C90,280 160,120 200,200 C240,280 310,120 350,200"
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          {/* Defining gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* ================= LAYER 3: Translucent Glassmorphism Floating Shapes ================= */}
      <motion.div
        style={{ x: isMobile ? 0 : layer3X, y: isMobile ? 0 : layer3Y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        {/* Central Large Rotating Neon Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-purple-500/30 dark:border-cyan-500/20 flex items-center justify-center"
        >
          {/* Inner Accent Ring */}
          <div className="w-[240px] h-[240px] rounded-full border border-double border-blue-500/20" />
        </motion.div>

        {/* Floating Organic Glassmorphic Shield (Blob 1) */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute w-56 h-56 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] bg-gradient-to-br from-white/10 to-white/5 dark:from-slate-900/40 dark:to-slate-950/20 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl flex items-center justify-center overflow-hidden"
        >
          {/* Inner Glow Stripe */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/15 opacity-40 mix-blend-overlay" />
          
          {/* Decorative glowing lines on the glass blob */}
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full opacity-60 blur-[1px]" />
        </motion.div>

        {/* Small Companion Translucent Orb */}
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-12 right-12 w-20 h-20 rounded-full bg-white/15 dark:bg-slate-900/50 backdrop-blur-lg border border-white/30 dark:border-slate-800/80 shadow-lg flex items-center justify-center"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-60 animate-pulse" />
        </motion.div>
      </motion.div>

      {/* ================= LAYER 4: Foreground High-Contrast Elements & Particles ================= */}
      <motion.div
        style={{ x: isMobile ? 0 : layer4X, y: isMobile ? 0 : layer4Y }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Curved Floating Neon Tube */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotate: [5, -5, 5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-16 left-8 w-24 h-12 rounded-full border-t-2 border-r-2 border-cyan-400 dark:border-cyan-300 opacity-60 blur-[0.5px]"
        />

        {/* Floating Geometric Element: Plus (+) Accent 1 */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 right-8 text-purple-500/60 dark:text-purple-400/80 font-bold text-xl font-sans"
        >
          +
        </motion.div>

        {/* Floating Geometric Element: Circle Accent 2 */}
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className="absolute bottom-1/4 right-16 w-3 h-3 rounded-full border-2 border-pink-500/50"
        />

        {/* Tiny Floating Geometric Element: Triangle Accent 3 */}
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-4 w-4 h-4 border-l border-b border-blue-400/50 rotate-45"
        />

        {/* Sparkle 1 */}
        <motion.div
          animate={{
            opacity: [0.3, 0.9, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-1/3 w-2 h-2 rounded-full bg-white dark:bg-cyan-300 text-glow-cyan"
        />

        {/* Sparkle 2 */}
        <motion.div
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.7, 1.1, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
          className="absolute bottom-28 right-1/3 w-1.5 h-1.5 rounded-full bg-white dark:bg-purple-300 text-glow-purple"
        />
      </motion.div>
    </div>
  );
}
