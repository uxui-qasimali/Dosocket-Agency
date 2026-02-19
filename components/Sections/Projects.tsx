import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../../types';
import { motion } from 'framer-motion';
import SectionLabel from '../UI/SectionLabel';
import FancyButton from '../UI/FancyButton';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

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
  },
  {
    id: '4',
    title: 'Eco Store',
    category: 'E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2670&auto=format&fit=crop',
    tags: ['Web Design', 'Shopify']
  },
  {
    id: '5',
    title: 'Travel Buddy',
    category: 'Travel Guide App',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2642&auto=format&fit=crop',
    tags: ['Mobile App', 'UI/UX']
  },
  {
    id: '6',
    title: 'Smart Home',
    category: 'IoT Control Hub',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop',
    tags: ['IoT', 'Dashboard']
  }
];

const categories = ["All Work", "UI/UX Design", "Web Development", "Digital Marketing"];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All Work");
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Row */}
        <div className="grid md:grid-cols-12 gap-12 mb-16 items-start">
           <div className="md:col-span-3">
              <SectionLabel text="Our Portfolio" />
           </div>
           
           <div className="md:col-span-6 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-bold">Crafted with Vision, Delivered as</p>
              <h2 className="font-display font-bold text-5xl md:text-8xl text-dosocket-900 tracking-tight">Project</h2>
              <p className="mt-8 text-gray-600 text-base md:text-lg max-w-md mx-auto leading-relaxed">
                 Our work reflects a perfect balance of bold creativity & technical precision. We don't just make things look great— we make them work beautifully.
              </p>
           </div>

           <div className="md:col-span-3 text-right hidden md:block">
              <ul className="text-sm space-y-4">
                 {categories.map(cat => (
                    <li 
                      key={cat} 
                      className={`cursor-pointer transition-all duration-300 uppercase tracking-widest text-xs font-bold ${activeCategory === cat ? 'text-dosocket-700' : 'text-gray-400 hover:text-dosocket-700'}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                       {cat}
                    </li>
                 ))}
              </ul>
           </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="group cursor-pointer relative"
              whileHover={{ y: -15 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="relative overflow-hidden rounded-3xl mb-8 aspect-[4/5] bg-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Professional Overlay */}
                <div className="absolute inset-0 bg-dosocket-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white p-8 text-center">
                   <h3 className="text-3xl font-display font-bold mb-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">{project.title}</h3>
                   <p className="text-sm text-dosocket-accent mb-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out uppercase tracking-widest font-bold">{project.category}</p>
                   <div className="w-16 h-16 rounded-2xl bg-dosocket-accent text-dosocket-900 flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-500 delay-200 rotate-12 group-hover:rotate-0">
                      <ArrowUpRight size={28} />
                   </div>
                </div>
              </div>
              
              <div className="flex justify-between items-end px-2">
                 <div>
                    <h3 className="text-2xl font-display font-bold text-dosocket-900 mb-1">{project.title}</h3>
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{project.category}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mb-24">
           <Button variant="dark-outline" onClick={() => navigate('/projects')}>
              View All Projects
           </Button>
        </div>

        {/* Big Featured Project */}
        <div 
          className="relative rounded-[3rem] overflow-hidden group cursor-pointer h-[600px] md:h-[750px] bg-gray-900 shadow-2xl"
          onClick={() => navigate('/project/featured')}
        >
           <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop" alt="Fly Better" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-1000 group-hover:scale-105" />
           
           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
           
           <div className="absolute bottom-0 left-0 w-full p-10 md:p-20">
              <div className="max-w-3xl transform group-hover:-translate-y-6 transition-transform duration-700 ease-out">
                 <div className="mb-6">
                    <span className="px-4 py-2 rounded-full bg-dosocket-accent text-dosocket-900 text-xs font-bold uppercase tracking-widest">Featured Case Study</span>
                 </div>
                 <h3 className="text-4xl sm:text-5xl md:text-8xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight">Emirates Beta (Fly Better)</h3>
                 <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                   Your ultimate travel companion — book flights, manage trips, and enjoy seamless ticketing experience.
                 </p>
                 
                 <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white text-dosocket-900 flex items-center justify-center group-hover:bg-dosocket-accent transition-colors duration-500">
                       <ArrowUpRight size={32} />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;