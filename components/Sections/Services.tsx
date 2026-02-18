import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../../types';

const servicesData: ServiceItem[] = [
  {
    id: '01',
    number: '001',
    title: 'UI/UX Designing',
    description: 'We craft intuitive and engaging user experiences. From wireframes to high-fidelity prototypes, our design process ensures your product is not only beautiful but functional.',
    tags: ['Design Audits', 'UX Research', 'Prototyping']
  },
  {
    id: '02',
    number: '002',
    title: 'Web Application',
    description: 'Scalable, high-performance web applications built for growth. We specialize in creating complex dashboards and enterprise solutions.',
    tags: ['SaaS Design', 'React/Next.js', 'Dashboard Architecture']
  },
  {
    id: '03',
    number: '003',
    title: 'Web Development',
    description: 'Robust front-end and back-end development. We write clean, semantic code optimized for speed and SEO.',
    tags: ['Full Stack', 'CMS Integration', 'API Development']
  },
  {
    id: '04',
    number: '004',
    title: 'Digital Marketing',
    description: 'Data-driven strategies to amplify your brand presence. We help you reach your target audience through targeted campaigns.',
    tags: ['SEO & SEM', 'Social Media', 'Content Strategy']
  }
];

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('01');

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Left Sticky Header */}
          <div className="md:col-span-4 lg:col-span-3">
             <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                   <span className="w-12 h-[1px] bg-dosocket-border"></span>
                   <span className="text-dosocket-900 text-xs font-bold uppercase tracking-widest">
                     How we create impact
                   </span>
                </div>
                <h2 className="font-display font-bold text-5xl text-dosocket-900 mb-4">Services</h2>
                <p className="text-dosocket-500 text-sm leading-relaxed max-w-xs">
                   Creative, Scalable Digital Solutions for modern brands.
                </p>
             </div>
          </div>

          {/* Right Accordion List */}
          <div className="md:col-span-8 lg:col-span-9 flex flex-col">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className={`border-t border-gray-200 transition-all duration-150`}
                onMouseEnter={() => setActiveId(service.id)}
              >
                <div
                  className="w-full flex items-center justify-between py-10 px-4 md:px-6 text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className="font-mono text-gray-400 text-sm">{service.number}</span>
                    <h3 className={`font-display text-2xl md:text-4xl transition-colors duration-150 ${activeId === service.id ? 'text-dosocket-700' : 'text-gray-400'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <span className={`transition-transform duration-150 ${activeId === service.id ? 'rotate-180 text-dosocket-700' : 'text-gray-300'}`}>
                     <ArrowUpRight size={28} className={activeId === service.id ? "rotate-45" : ""} />
                  </span>
                </div>

                <AnimatePresence>
                  {activeId === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 pb-12 pl-16 md:pl-24">
                        <div className="grid lg:grid-cols-12 gap-8">
                           {/* Image/Visual for Service */}
                           <div className="hidden lg:block lg:col-span-4">
                              <div className="aspect-square rounded-xl bg-dosocket-surface overflow-hidden relative">
                                 <img src={`https://picsum.photos/seed/${service.id}/400/400`} alt={service.title} className="w-full h-full object-cover opacity-80" />
                              </div>
                           </div>
                           
                           {/* Content */}
                           <div className="lg:col-span-8">
                              <span className="text-xs uppercase tracking-widest text-gray-400 block mb-4">Categories</span>
                              <div className="flex flex-wrap gap-2 mb-8">
                                {service.tags.map(tag => (
                                  <span key={tag} className="px-4 py-2 rounded-full border border-gray-200 text-dosocket-900 text-xs hover:border-dosocket-700 transition-colors cursor-default bg-gray-50">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                {service.description}
                              </p>
                              <a href="#" className="text-dosocket-700 text-sm underline underline-offset-4 decoration-dosocket-700/30 hover:decoration-dosocket-700 transition-all font-medium">
                                 See all details
                              </a>
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="border-t border-gray-200"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;