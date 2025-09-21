import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function WisdomGuide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Circular Background */}
        <div className="relative w-20 h-20 bg-black/80 backdrop-blur-sm border-2 border-green-400/60 rounded-full flex items-center justify-center overflow-hidden">
          {/* Animated Ring */}
          <motion.div
            className="absolute inset-0 border-2 border-green-400/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner Content */}
          <div className="relative z-10 text-center">
            <div className="w-6 h-6 mx-auto mb-1 bg-green-400/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
            </div>
            <div className="text-xs text-green-400 font-medium tracking-wider uppercase leading-none">
              <div>WISDOM</div>
              <div>GUIDE</div>
            </div>
          </div>

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-green-400/10 rounded-full opacity-0 group-hover:opacity-100"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0, 0.3, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.button>

      {/* Expanded Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-24 left-0 min-w-64"
          >
            <div className="bg-black/90 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 shadow-2xl shadow-green-400/10">
              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-green-400 text-lg font-thin tracking-wider uppercase mb-2">
                  Wisdom Guide
                </h3>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto" />
              </div>

              {/* Navigation Items */}
              <nav className="space-y-3">
                {[
                  { label: "Origin Stories", description: "Discover the legends" },
                  { label: "Hall of Limits", description: "Explore boundaries" },
                  { label: "Inspiration Garden", description: "Find your path" },
                  { label: "Zero Point", description: "Begin anew" }
                ].map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, backgroundColor: "rgba(34, 197, 94, 0.05)" }}
                    className="w-full text-left p-3 rounded-lg border border-transparent hover:border-green-400/20 transition-all duration-300 group"
                  >
                    <div className="text-white text-sm font-medium tracking-wide uppercase mb-1 group-hover:text-green-400 transition-colors">
                      {item.label}
                    </div>
                    <div className="text-gray-400 text-xs leading-relaxed">
                      {item.description}
                    </div>
                  </motion.button>
                ))}
              </nav>

              {/* Progress Indicator */}
              <div className="mt-6 pt-4 border-t border-green-400/20">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span>Journey Progress</span>
                  <span>3/4</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1">
                  <motion.div
                    className="bg-gradient-to-r from-green-400 to-green-500 h-1 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-green-400/40 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ 
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
}