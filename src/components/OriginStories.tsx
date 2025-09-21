import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function OriginStories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const statues = [
    { title: "LEGACY", description: "Honor the ancestors who paved the way for innovation" },
    { title: "WISDOM", description: "Learn from the knowledge passed down through generations" },
    { title: "VISION", description: "See beyond the present to shape the future" }
  ];

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
          src="https://images.unsplash.com/photo-1611054477654-d0e64ff49795?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwc3RhdHVlcyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTg0MDA5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Ancient statues architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </motion.div>

      {/* Architectural Frame */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-green-400/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-2 h-full bg-gradient-to-b from-green-400/20 to-transparent" />
        <div className="absolute top-1/4 left-0 w-full h-2 bg-gradient-to-r from-green-400/20 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-8 text-center"
      >
        {/* Statue Pedestals with READ buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {statues.map((statue, index) => (
            <motion.div
              key={statue.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-20%" }}
              className="relative group"
            >
              {/* Pedestal */}
              <div className="relative h-64 mb-6">
                {/* Statue Silhouette */}
                <div className="absolute inset-x-1/4 top-8 bottom-16 bg-gradient-to-b from-gray-600/60 to-gray-800/80 backdrop-blur-sm rounded-lg" />
                
                {/* Glowing Base */}
                <div className="absolute bottom-0 inset-x-1/3 h-16 bg-gradient-to-t from-green-400/20 to-transparent rounded-lg" />
                
                {/* Hexagonal Button */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + index * 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.button
                    whileHover={{ scale: 1.1, rotateZ: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative w-20 h-20 bg-black/80 border-2 border-green-400 flex items-center justify-center group-hover:bg-green-400/10 transition-all duration-300"
                    style={{ clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)' }}
                  >
                    <span className="text-green-400 text-xs font-medium tracking-wider uppercase">READ</span>
                    <div className="absolute inset-0 bg-green-400/20 scale-0 group-hover:scale-100 transition-transform duration-300" 
                         style={{ clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)' }} />
                  </motion.button>
                </motion.div>
              </div>

              {/* Text */}
              <h3 className="text-2xl font-thin text-white tracking-wider uppercase mb-3">
                {statue.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto">
                {statue.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true, margin: "-30%" }}
          className="text-center"
        >
          <p className="text-green-400 text-sm uppercase tracking-[0.3em] mb-2">
            Close your mind to the
          </p>
          <p className="text-white text-lg uppercase tracking-wider">
            INSPIRATION
          </p>
          <p className="text-gray-300 text-sm mt-2">
            This place carries more purpose than simply being pleasing to the eye.
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Geometric Elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 border border-green-400/30"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 3) * 20}%`,
            clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5
          }}
        />
      ))}
    </section>
  );
}