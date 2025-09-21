import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef} 
      className="h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Layered Background Elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/40 to-black/80"
        style={{ y: backgroundY }}
      />
      
      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
      >
        <div className="grid grid-cols-16 grid-rows-10 gap-px h-full w-full">
          {Array.from({ length: 160 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-cyan-400/20"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.8, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 4,
                delay: (i % 20) * 0.1,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Central Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-30%" }}
          className="relative mb-12"
        >
          {/* Central Circle */}
          <div className="w-32 h-32 mx-auto relative">
            <motion.div
              className="w-full h-full border-2 border-white/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 border border-cyan-400/50 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Orbital Elements */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/70 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transformOrigin: `0 ${60 + i * 10}px`,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-30%" }}
          className="text-5xl md:text-7xl font-thin text-white mb-6 tracking-widest"
        >
          FOREVER
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-30%" }}
          className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-light"
        >
          En el infinito de posibilidades, cada momento se convierte en eternidad
        </motion.p>
      </motion.div>

      {/* Floating Geometric Shapes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 border border-white/20"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </section>
  );
}