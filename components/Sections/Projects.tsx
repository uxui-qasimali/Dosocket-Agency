import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../../types';
import { motion } from 'framer-motion';

const projects: ProjectItem[] = [
  {
    id: '1',
    title: 'Mind Care',
    category: 'Mental Health App',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    tags: ['App Design', 'UX Research']
  },
  {
    id: '2',
    title: 'Muscle Burner',
    category: 'Fitness Tracker',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2574&auto=format&fit=crop',
    tags: ['Branding', 'UI Design']
  },
  {
    id: '3',
    title: 'AI Finance',
    category: 'Fintech Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    tags: ['Dashboard', 'SaaS']
  }
];

const categories = ["All Work", "UI/UX Design", "Web Development", "Digital Marketing"];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Work");

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Row */}
        <div className="grid md:grid-cols-12 gap-12 mb-16 items-start">
           <div className="md:col-span-3">
              {/* Empty or small label */}
           </div>
           
           <div className="md:col-span-6 text-center">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Crafted with Vision, Delivered as</p>
              <h2 className="font-display font-bold text-5xl md:text-6xl text-dosocket-900">Project</h2>
              <p className="mt-6 text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                 Our work reflects a perfect balance of bold creativity & technical precision. We don't just make things look great— we make them work beautifully.
              </p>
           </div>

           <div className="md:col-span-3 text-right hidden md:block">
              <ul className="text-sm space-y-3">
                 {categories.map(cat => (
                    <li 
                      key={cat} 
                      className={`cursor-pointer transition-colors ${activeCategory === cat ? 'text-dosocket-700 font-bold' : 'text-gray-400 hover:text-dosocket-700'}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                       {cat}
                    </li>
                 ))}
              </ul>
           </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="group cursor-pointer relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5] bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Professional Overlay */}
                <div className="absolute inset-0 bg-dosocket-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6 text-center">
                   <h3 className="text-2xl font-display font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                   <p className="text-sm text-dosocket-accent mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.category}</p>
                   <div className="w-12 h-12 rounded-full bg-white text-dosocket-900 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                      <ArrowUpRight size={20} />
                   </div>
                </div>
              </div>
              
              <div className="flex justify-between items-end">
                 <div>
                    <h3 className="text-xl font-display font-bold text-dosocket-900">{project.title}</h3>
                    <p className="text-gray-500 text-xs mt-1">{project.category}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Featured Project */}
        <div className="relative rounded-[2.5rem] overflow-hidden group cursor-pointer h-[500px] md:h-[650px] bg-gray-900">
           <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop" alt="Fly Better" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
           
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
           
           <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
              <div className="max-w-3xl transform group-hover:-translate-y-4 transition-transform duration-500">
                 <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 leading-tight">Emirates Beta (Fly Better)</h3>
                 <p className="text-gray-300 text-lg mb-8 max-w-xl">
                   Your ultimate travel companion — book flights, manage trips, and enjoy seamless ticketing experience.
                 </p>
                 
                 <div className="flex gap-4">
                    <button className="px-8 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-dosocket-accent transition-colors">
                       View Case Study
                    </button>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;