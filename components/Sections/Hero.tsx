import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FancyButton from '../UI/FancyButton';
import SplashCursor from '../UI/SplashCursor';

const Hero: React.FC = () => {
  const words = ["Global Brands", "Innovators", "Visionaries", "Market Leaders"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000); // Slower interval for letter animation
    return () => clearInterval(interval);
  }, []);

  const currentWord = words[index];

  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 }
    },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-dosocket-900">
      
      {/* Background with Fluid Splash Effect - Confined to Hero */}
      <div className="absolute inset-0 w-full h-full">
         <SplashCursor />
      </div>
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dosocket-900/80 z-10 pointer-events-none"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20 flex flex-col items-center md:items-start text-center md:text-left h-full justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {/* Top UX Tag */}
          <div className="mb-6">
             <span className="text-dosocket-muted uppercase tracking-widest text-sm font-medium">Premium Agency</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-display font-medium text-6xl md:text-8xl lg:text-[140px] leading-[0.9] text-white mb-8 tracking-tight">
            Design Agency
          </h1>
          
          {/* Subheading with Animation */}
          <div className="w-full max-w-5xl mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-x-6 gap-y-2">
              
              {/* Trusted by Text - White, No Line */}
              <h2 className="font-display font-normal text-3xl md:text-5xl text-white shrink-0 leading-none">
                Trusted by
              </h2>
              
              {/* Animated Text - Letter by Letter */}
              <div className="h-12 md:h-16 relative w-full md:w-auto overflow-hidden flex items-center justify-center md:justify-start">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentWord}
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="flex space-x-[2px]"
                    >
                      {currentWord.split("").map((char, i) => (
                        <motion.span
                          key={`${currentWord}-${i}`}
                          variants={letterVariants}
                          className={`font-display font-bold text-3xl md:text-5xl text-dosocket-accent leading-none ${char === " " ? "mr-4" : ""}`}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.div>
                  </AnimatePresence>
              </div>
            </div>
          </div>

          <p className="text-dosocket-subtext text-lg max-w-xl leading-relaxed mb-12">
             Goodbye generic websites & empty promises. We offer tools & strategies to grow your business & amplify your brand.
          </p>
          
          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <FancyButton variant="primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
               Let's Talk
            </FancyButton>
            
            <FancyButton variant="secondary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
               Featured Work
            </FancyButton>
          </div>
        </motion.div>
        
        {/* Right side Services List */}
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.5, duration: 0.8 }}
           className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block text-right pr-12"
        >
           <ul className="space-y-4 text-sm text-dosocket-muted/60 font-medium tracking-[0.1em] uppercase">
              {[
                "UI/UX Designing",
                "Web Application",
                "Web Development",
                "Digital Marketing"
              ].map((service) => (
                <li 
                  key={service}
                  className="hover:text-dosocket-accent transition-all duration-300 cursor-pointer flex items-center justify-end gap-3 group"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-service', { detail: { title: service } }))}
                >
                  <span className="group-hover:-translate-x-2 transition-transform duration-300">{service}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-dosocket-accent/30 group-hover:bg-dosocket-accent transition-colors"></div>
                </li>
              ))}
           </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;