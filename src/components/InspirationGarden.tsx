import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function InspirationGarden() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef} 
      className="h-screen relative flex items-center overflow-hidden"
    >
      {/* Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1724893973195-1457c02e3931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGdhcmRlbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTg0MDA5NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tropical garden architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </motion.div>

      {/* Flowing Green Lines */}
      <div className="absolute inset-0 z-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <motion.path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M0,300 Q400,100 800,300 T1200,300"
            stroke="url(#gradient2)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
              <stop offset="50%" stopColor="rgba(34, 197, 94, 0.8)" />
              <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
              <stop offset="50%" stopColor="rgba(34, 197, 94, 0.4)" />
              <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-20%" }}
          >
            <h2 className="text-6xl md:text-8xl font-thin text-white mb-6 tracking-[0.1em] uppercase leading-tight">
              INSPIRATION
            </h2>
            <h3 className="text-4xl md:text-6xl font-thin text-green-400 mb-8 tracking-[0.15em] uppercase">
              GARDEN
            </h3>
            
            <div className="w-32 h-px bg-gradient-to-r from-green-400 to-transparent mb-8" />
            
            <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
              WHERE INGENUITY OVERFLOWS
            </p>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              You've made great strides toward finding your gift. Your legacy is a continuous 
              journey and it does not end here.
            </p>
          </motion.div>

          {/* Right Side - Interactive Element */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-20%" }}
            className="relative"
          >
            {/* Central Orb */}
            <div className="relative w-64 h-64 mx-auto">
              <motion.div
                className="w-full h-full border-2 border-green-400/40 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <motion.div
                  className="w-48 h-48 border border-green-400/60 rounded-full flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    className="w-32 h-32 bg-gradient-radial from-green-400/20 to-transparent rounded-full flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Orbital Elements */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-green-400/80 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: `0 ${80 + i * 15}px`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </div>

            {/* Flowing Particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400/60 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Background Geometry */}
      <div className="absolute inset-0 z-0 opacity-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-green-400/20"
            style={{
              left: `${5 + i * 6}%`,
              top: `${10 + (i % 4) * 20}%`,
              width: '40px',
              height: '40px',
              clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    </section>
  );
}