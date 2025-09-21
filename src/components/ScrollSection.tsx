import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ScrollSectionProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  reversed?: boolean;
}

export function ScrollSection({ 
  title, 
  subtitle, 
  description, 
  backgroundImage, 
  reversed = false 
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={sectionRef} 
      className="h-screen relative flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <ImageWithFallback
          src={backgroundImage}
          alt={`${title} background`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, y: textY }}
        className={`relative z-10 max-w-7xl mx-auto px-8 ${
          reversed ? 'ml-auto text-right' : 'mr-auto text-left'
        }`}
      >
        <div className={`max-w-2xl ${reversed ? 'ml-auto' : 'mr-auto'}`}>
          <motion.div
            initial={{ opacity: 0, x: reversed ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-20%" }}
            className="mb-4"
          >
            <span className="text-sm tracking-[0.3em] text-white/60 uppercase">
              {subtitle}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: reversed ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-20%" }}
            className="text-6xl md:text-8xl font-thin text-white mb-8 tracking-wide leading-none"
          >
            {title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-20%" }}
            className={`w-24 h-px bg-gradient-to-r ${
              reversed ? 'from-white to-transparent ml-auto' : 'from-transparent to-white mr-auto'
            } mb-8`}
            style={{ transformOrigin: reversed ? 'right' : 'left' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-20%" }}
            className="text-xl text-white/80 leading-relaxed font-light"
          >
            {description}
          </motion.p>

          {/* Animated Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            viewport={{ once: true, margin: "-20%" }}
            className={`mt-12 flex ${reversed ? 'justify-end' : 'justify-start'}`}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white/40 rounded-full mx-1"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4] 
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Corner Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        viewport={{ once: true }}
        className={`absolute ${reversed ? 'top-8 left-8' : 'bottom-8 right-8'} z-10`}
      >
        <div className="w-16 h-16 border border-white/20 rotate-45" />
      </motion.div>
    </section>
  );
}