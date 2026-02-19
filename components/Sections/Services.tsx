import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../../types';
import SectionLabel from '../UI/SectionLabel';

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
    title: 'Web-flow Design',
    description: 'Scalable, high-performance web applications built for growth. We specialize in creating complex dashboards and enterprise solutions.',
    tags: ['SaaS Design', 'React/Next.js', 'Dashboard Architecture']
  },
  {
    id: '03',
    number: '003',
    title: 'Framer Development',
    description: 'Robust front-end and back-end development. We write clean, semantic code optimized for speed and SEO.',
    tags: ['Full Stack', 'CMS Integration', 'API Development']
  },
  {
    id: '04',
    number: '004',
    title: 'Product Design',
    description: 'Data-driven strategies to amplify your brand presence. We help you reach your target audience through targeted campaigns.',
    tags: ['SEO & SEM', 'Social Media', 'Content Strategy']
  },
  {
    id: '05',
    number: '005',
    title: 'Design Development',
    description: 'Bridging the gap between design and code. We ensure every pixel is perfectly translated into a functional product.',
    tags: ['Design Systems', 'Handoff', 'Technical Design']
  }
];

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('01');

  useEffect(() => {
    const handleOpenService = (e: any) => {
      const serviceTitle = e.detail.title;
      const service = servicesData.find(s => s.title.toLowerCase().includes(serviceTitle.toLowerCase()));
      if (service) {
        setActiveId(service.id);
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('open-service', handleOpenService);
    return () => window.removeEventListener('open-service', handleOpenService);
  }, []);

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Left Sticky Header */}
          <div className="md:col-span-4 lg:col-span-3">
             <div className="sticky top-32">
                <SectionLabel text="How we create impact" />
                <h2 className="font-display font-bold text-6xl text-dosocket-900 mb-6 tracking-tight">Services</h2>
                <p className="text-dosocket-500 text-base leading-relaxed max-w-xs">
                   Creative, Scalable Digital Solutions for modern brands.
                </p>
             </div>
          </div>

          {/* Right Accordion List */}
          <div className="md:col-span-8 lg:col-span-9 flex flex-col">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className={`border-t border-gray-200`}
                onMouseEnter={() => setActiveId(service.id)}
              >
                <div
                  className="w-full flex items-center justify-between py-12 px-4 md:px-6 text-left group cursor-pointer transition-all duration-500 ease-in-out"
                >
                  <div className="flex items-center gap-8 md:gap-16">
                    <span className="font-mono text-gray-400 text-sm">{service.number}</span>
                    <h3 className={`font-display text-2xl md:text-5xl transition-all duration-500 ease-in-out ${activeId === service.id ? 'text-dosocket-700 translate-x-4' : 'text-gray-400'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <span className={`transition-all duration-500 ease-in-out ${activeId === service.id ? 'rotate-180 text-dosocket-700' : 'text-gray-300'}`}>
                     <ArrowUpRight size={32} className={`transition-transform duration-500 ${activeId === service.id ? "rotate-45" : ""}`} />
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {activeId === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 pb-16 pl-16 md:pl-24">
                        <div className="grid lg:grid-cols-12 gap-12">
                           {/* Image/Visual for Service */}
                           <div className="hidden lg:block lg:col-span-4">
                              <div className="aspect-square rounded-2xl bg-dosocket-surface overflow-hidden relative shadow-xl">
                                 <img src={`https://picsum.photos/seed/${service.id}/600/600`} alt={service.title} className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700" />
                              </div>
                           </div>
                           
                           {/* Content */}
                           <div className="lg:col-span-8 flex flex-col justify-center">
                              <span className="text-xs uppercase tracking-[0.2em] text-gray-400 block mb-6 font-bold">Categories</span>
                              <div className="flex flex-wrap gap-3 mb-10">
                                {service.tags.map(tag => (
                                  <span key={tag} className="px-5 py-2.5 rounded-full border border-gray-200 text-dosocket-900 text-xs font-medium hover:border-dosocket-700 hover:bg-dosocket-accent/10 transition-all cursor-default bg-gray-50">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <p className="text-gray-600 text-xl leading-relaxed mb-8 max-w-2xl">
                                {service.description}
                              </p>
                              <a href="#" className="inline-flex items-center gap-2 text-dosocket-700 text-sm font-bold uppercase tracking-widest group">
                                 <span className="border-b-2 border-dosocket-700/20 group-hover:border-dosocket-700 transition-all">See all details</span>
                                 <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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