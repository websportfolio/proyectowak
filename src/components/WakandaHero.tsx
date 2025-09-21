import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WakandaHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={heroRef} className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1665356203472-a839db7898c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZnV0dXJpc3RpYyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTg0MDA5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Futuristic architecture background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </motion.div>

      {/* Floating Character Cards */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { name: "HANNAH", subtitle: "BEACHLER", role: "PRODUCTION DESIGNER", delay: 0.5 },
            { name: "JASMINE", subtitle: "ALEXIA", role: "STORYTELLING ARTIST", delay: 0.7 },
            { name: "ALICIA", subtitle: "DÍAZ", role: "VISUAL ARTIST", delay: 0.9 }
          ].map((character, index) => (
            <motion.div
              key={character.name}
              initial={{ opacity: 0, y: 100, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: character.delay,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <div className="relative bg-black/60 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 h-80 flex flex-col justify-between overflow-hidden transform-gpu">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-green-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-green-400/60" />
                
                <div>
                  <h3 className="text-3xl font-thin text-white tracking-wider uppercase mb-2">
                    {character.name}
                  </h3>
                  <h4 className="text-xl font-thin text-green-400 tracking-wider uppercase mb-4">
                    {character.subtitle}
                  </h4>
                  <p className="text-sm text-gray-300 uppercase tracking-wide">
                    {character.role}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-transparent border border-green-400 text-green-400 px-8 py-3 rounded-full uppercase tracking-wider text-sm font-medium transition-all duration-300 hover:bg-green-400/10 hover:shadow-lg hover:shadow-green-400/25"
                >
                  <span className="relative z-10">WATCH</span>
                  <div className="absolute inset-0 bg-green-400/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Origin Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl font-thin text-white mb-4 tracking-[0.15em] uppercase">
            ORIGIN STORIES
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-6" />
          <p className="text-green-400 uppercase tracking-[0.3em] text-sm">
            FIND YOUR INSPIRATION
          </p>
          
          {/* Arrow Down */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-12"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto text-green-400">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-green-400/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-30, -120, -30],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }}
        />
      ))}
    </section>
  );
}