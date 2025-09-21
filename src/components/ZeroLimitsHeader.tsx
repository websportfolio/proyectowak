import { motion } from 'motion/react';

export function ZeroLimitsHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-8 left-8 z-50"
    >
      <div className="flex flex-col">
        <motion.h1 
          className="text-green-400 font-thin tracking-[0.15em] uppercase"
          animate={{ 
            textShadow: [
              "0 0 10px rgba(34, 197, 94, 0.3)",
              "0 0 20px rgba(34, 197, 94, 0.6)",
              "0 0 10px rgba(34, 197, 94, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          THE HALL OF
        </motion.h1>
        <motion.h2 
          className="text-white text-2xl font-thin tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          ZERO LIMITS
        </motion.h2>
      </div>
    </motion.header>
  );
}