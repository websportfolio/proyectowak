import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { WakandaHero } from './components/WakandaHero';
import { OriginStories } from './components/OriginStories';
import { InspirationGarden } from './components/InspirationGarden';
import { WisdomGuide } from './components/WisdomGuide';
import { ZeroLimitsHeader } from './components/ZeroLimitsHeader';
import { GeometricBackground } from './components/GeometricBackground';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  return (
    <div ref={containerRef} className="relative bg-black min-h-screen">
      {/* Fixed Header */}
      <ZeroLimitsHeader />
      
      {/* Geometric Background */}
      <GeometricBackground scrollProgress={smoothProgress} />
      
      {/* Content Sections */}
      <div className="relative z-10">
        <WakandaHero />
        <OriginStories />
        <InspirationGarden />
        
        {/* Final Zero Section */}
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
          
          {/* Animated Green Elements */}
          <div className="absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px bg-gradient-to-b from-transparent via-green-400 to-transparent"
                style={{
                  left: `${10 + i * 8}%`,
                  height: '100%',
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleY: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, margin: "-20%" }}
            className="text-center z-10"
          >
            <motion.div
              className="w-32 h-32 mx-auto mb-8 relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full border-2 border-green-400/30 rounded-full" />
              <div className="absolute inset-4 border border-green-400 rounded-full" />
              <div className="absolute inset-1/2 w-2 h-2 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-green-400/50" />
            </motion.div>

            <h2 className="text-8xl md:text-9xl font-thin text-white mb-8 tracking-[0.2em] uppercase">
              ZERO
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-8" />
            <p className="text-xl text-green-100 max-w-2xl mx-auto leading-relaxed uppercase tracking-wider">
              EL PUNTO DE PARTIDA HACIA LO EXTRAORDINARIO
            </p>
          </motion.div>
        </section>
      </div>

      {/* Wisdom Guide Navigation */}
      <WisdomGuide />
    </div>
  );
}