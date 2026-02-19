import React, { useState } from 'react';
import { Quote, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '../UI/SectionLabel';

const testimonialsData = [
// ... existing data ...
   {
      id: 1,
      name: "Crist Lily",
      role: "General Manager at Mozil",
      image: "https://picsum.photos/seed/person1/400/500",
      text: "Dosocket didn't just design for us — they delivered innovative solutions that truly drove results. Their creative vision gave us a refined product.",
      rating: 5
   },
   {
      id: 2,
      name: "James Anderson",
      role: "CTO at TechFlow",
      image: "https://picsum.photos/seed/person2/400/500",
      text: "The team at Dosocket is simply world-class. They took our complex requirements and turned them into a seamless user experience.",
      rating: 5
   },
   {
      id: 3,
      name: "Sarah Jenkins",
      role: "Founder at StartUp X",
      image: "https://picsum.photos/seed/person3/400/500",
      text: "Working with them was a game changer. The level of professionalism and creativity is unmatched in the industry right now.",
      rating: 5
   },
   {
      id: 4,
      name: "Michael Chen",
      role: "Director at CreativeInc",
      image: "https://picsum.photos/seed/person4/400/500",
      text: "Exceptional delivery speed and quality. They understood our brand voice immediately and translated it perfectly into the design.",
      rating: 5
   },
   {
      id: 5,
      name: "Emily Davis",
      role: "VP Marketing at Core",
      image: "https://picsum.photos/seed/person5/400/500",
      text: "A truly collaborative partner. They helped us reimagine our digital presence from the ground up.",
      rating: 5
   }
];

const Testimonials: React.FC = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const nextTestimonial = () => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
   };
   
   const prevTestimonial = () => {
      setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
   };

   // Get the current active item and the next two for the right side
   const activeItem = testimonialsData[currentIndex];
   const nextItem1 = testimonialsData[(currentIndex + 1) % testimonialsData.length];
   const nextItem2 = testimonialsData[(currentIndex + 2) % testimonialsData.length];

   return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-12">
           <div>
              <SectionLabel text="Voice of Trust" />
              <h2 className="font-display font-bold text-5xl md:text-6xl text-dosocket-900 tracking-tight">Testimonial</h2>
           </div>
           
           {/* Original Top Button - Removed as requested to place below */}
        </div>

        <div className="grid lg:grid-cols-12 gap-6 h-[600px] lg:h-[550px] mb-8">
           {/* LARGE ACTIVE CARD - LEFT SIDE */}
           <div className="lg:col-span-8 h-full relative">
              <AnimatePresence mode="popLayout">
                 <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "anticipate" }}
                    className="h-full bg-dosocket-700 rounded-3xl p-8 md:p-12 relative shadow-2xl overflow-hidden text-white flex flex-col justify-center"
                 >
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                       <Quote size={120} className="text-white transform rotate-12" />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10 h-full">
                       <div className="h-full max-h-[400px] w-full rounded-2xl overflow-hidden relative shadow-lg">
                             <img src={activeItem.image} alt={activeItem.name} className="w-full h-full object-cover" />
                       </div>
                       <div className="flex flex-col justify-center">
                          <h3 className="font-display font-bold text-3xl mb-2">{activeItem.name}</h3>
                          <p className="text-sm font-medium text-dosocket-accent uppercase tracking-widest mb-8">{activeItem.role}</p>
                          <p className="font-display text-2xl leading-relaxed mb-8 opacity-90 italic">"{activeItem.text}"</p>
                          <div className="flex text-yellow-400 text-sm">★★★★★</div>
                       </div>
                    </div>
                 </motion.div>
              </AnimatePresence>
           </div>

           {/* SMALLER CARDS - RIGHT SIDE */}
           <div className="lg:col-span-4 flex flex-col gap-6 h-full">
               
               {/* Top Right Card */}
               <motion.div 
                  key={nextItem1.id + "-top"}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex-1 bg-gray-50 border border-gray-100 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden group cursor-pointer hover:border-dosocket-accent/50 transition-colors"
                  onClick={nextTestimonial}
               >
                  <div className="flex items-center gap-4 mb-4">
                     <img src={nextItem1.image} alt={nextItem1.name} className="w-12 h-12 rounded-full object-cover" />
                     <div>
                        <h4 className="font-bold text-dosocket-900">{nextItem1.name}</h4>
                        <p className="text-xs text-gray-500">{nextItem1.role}</p>
                     </div>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">"{nextItem1.text}"</p>
               </motion.div>

               {/* Bottom Right Card */}
               <motion.div 
                  key={nextItem2.id + "-bottom"}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex-1 bg-gray-50 border border-gray-100 rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden group cursor-pointer hover:border-dosocket-accent/50 transition-colors"
               >
                   <div className="flex items-center gap-4 mb-4">
                     <img src={nextItem2.image} alt={nextItem2.name} className="w-12 h-12 rounded-full object-cover" />
                     <div>
                        <h4 className="font-bold text-dosocket-900">{nextItem2.name}</h4>
                        <p className="text-xs text-gray-500">{nextItem2.role}</p>
                     </div>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">"{nextItem2.text}"</p>
               </motion.div>

           </div>
        </div>

        {/* Navigation Buttons Below Testimonials */}
        <div className="flex justify-end lg:justify-start gap-6 mt-12">
             <button 
                onClick={prevTestimonial}
                className="w-16 h-16 rounded-full border-2 border-dosocket-accent flex items-center justify-center text-dosocket-accent hover:bg-dosocket-accent hover:text-dosocket-900 transition-all duration-500 group shadow-lg"
             >
                <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
             </button>
             
             <button 
                onClick={nextTestimonial}
                className="group relative px-10 h-16 rounded-full bg-dosocket-900 text-white flex items-center gap-4 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
             >
                <span className="relative z-10 font-bold tracking-[0.2em] uppercase text-sm">NEXT</span>
                <span className="relative z-10 w-10 h-10 rounded-2xl bg-dosocket-accent text-dosocket-900 flex items-center justify-center group-hover:scale-110 transition-all duration-500 rotate-12 group-hover:rotate-0">
                   <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-dosocket-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
             </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;