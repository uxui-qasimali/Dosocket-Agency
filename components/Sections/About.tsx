import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from '../UI/SectionLabel';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Top Label Row */}
        <div className="grid md:grid-cols-12 gap-12 mb-12">
           <div className="md:col-span-4 lg:col-span-3">
              <SectionLabel text="About Us" />
           </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
           <div className="md:col-span-5 relative">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="About Visual" />
                 
                 {/* Floating Badge */}
                 <div className="absolute bottom-8 right-8 w-24 h-24 bg-white rounded-full flex items-center justify-center animate-[spin_12s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="w-20 h-20 text-dosocket-900 fill-current">
                       <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent"/>
                       <text>
                          <textPath href="#curve" className="text-[14px] font-bold uppercase tracking-widest">
                             • Since 2026 • Since 2026
                          </textPath>
                       </text>
                    </svg>
                 </div>
              </div>
           </div>

           <div className="md:col-span-7 pl-0 md:pl-12">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
              >
                  <h3 className="text-dosocket-900 text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-10 tracking-tight">
                     We help businesses with exceptional solutions—building memorable websites and digital products.
                  </h3>
                  
                  <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-xl">
                     <p>
                        As an award-winning agency, Dosocket goes beyond design to turn your vision into lasting impact and legacy.
                     </p>
                     <p>
                        We believe in the power of deep immersion. We don't just skim the surface; we dive into the core of your industry to extract insights that drive meaningful innovation.
                     </p>
                  </div>

                  <div className="mt-12 flex gap-8">
                     <div>
                        <span className="block text-4xl font-bold text-dosocket-700">50+</span>
                        <span className="text-sm text-gray-500 uppercase tracking-wider">Awards</span>
                     </div>
                     <div>
                        <span className="block text-4xl font-bold text-dosocket-700">200+</span>
                        <span className="text-sm text-gray-500 uppercase tracking-wider">Clients</span>
                     </div>
                  </div>
              </motion.div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;