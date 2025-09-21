import { motion, MotionValue } from 'motion/react';

interface GeometricBackgroundProps {
  scrollProgress: MotionValue<number>;
}

export function GeometricBackground({ scrollProgress }: GeometricBackgroundProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        {/* Vertical Lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-green-400 to-transparent h-full"
            style={{ left: `${i * 5}%` }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleY: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />
        ))}
        
        {/* Horizontal Lines */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-green-400 to-transparent w-full"
            style={{ top: `${i * 7}%` }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              delay: i * 0.15,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      {Array.from({ length: 25 }).map((_, i) => {
        const shapes = ['circle', 'hexagon', 'triangle', 'square'];
        const shape = shapes[i % shapes.length];
        
        return (
          <motion.div
            key={`shape-${i}`}
            className={`absolute opacity-20 ${
              shape === 'circle' ? 'w-3 h-3 bg-green-400/30 rounded-full' :
              shape === 'hexagon' ? 'w-4 h-4 border border-green-400/30' :
              shape === 'triangle' ? 'w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-green-400/30' :
              'w-3 h-3 border border-green-400/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              ...(shape === 'hexagon' && {
                clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'
              })
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              rotate: [0, 360],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        );
      })}

      {/* Ambient Light Rays */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`ray-${i}`}
            className="absolute w-px bg-gradient-to-b from-green-400/0 via-green-400/40 to-green-400/0"
            style={{
              left: `${10 + i * 10}%`,
              height: '200%',
              transformOrigin: 'bottom center',
              rotate: `${-20 + i * 5}deg`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleY: [0, 1, 0],
              rotate: [`${-20 + i * 5}deg`, `${-15 + i * 5}deg`, `${-20 + i * 5}deg`],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Pulsing Nodes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-1 h-1 bg-green-400 rounded-full"
          style={{
            left: `${15 + i * 7}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0.3, 1, 0.3],
            boxShadow: [
              '0 0 0px rgba(34, 197, 94, 0.3)',
              '0 0 20px rgba(34, 197, 94, 0.8)',
              '0 0 0px rgba(34, 197, 94, 0.3)'
            ],
          }}
          transition={{
            duration: 3,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-green-400/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-green-400/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-green-400/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-green-400/20" />
    </div>
  );
}