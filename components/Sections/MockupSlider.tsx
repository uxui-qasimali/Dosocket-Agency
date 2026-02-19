import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mockups = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2642&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop"
];

const MockupSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % mockups.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + mockups.length) % mockups.length);
  };

  return (
    <section className="py-20 bg-dosocket-900 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="relative group">
          
          {/* Slider Container */}
          <div className="relative h-[400px] md:h-[700px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={mockups[currentIndex]}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="w-full h-full object-cover"
                alt={`Mockup ${currentIndex + 1}`}
              />
            </AnimatePresence>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dosocket-900/40 to-transparent pointer-events-none"></div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-10 pointer-events-none">
            <button 
              onClick={prev}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-dosocket-accent hover:text-dosocket-900 transition-all duration-300 pointer-events-auto shadow-xl"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-dosocket-accent hover:text-dosocket-900 transition-all duration-300 pointer-events-auto shadow-xl"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {mockups.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === idx ? 'w-10 bg-dosocket-accent' : 'w-2 bg-white/30'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupSlider;
