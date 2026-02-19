import React from 'react';
import { StatItem } from '../../types';

import SectionLabel from '../UI/SectionLabel';

const stats: StatItem[] = [
// ... existing stats ...
  { id: '1', label: 'Years of Service', value: '05', description: 'Consistently delivering quality.' },
  { id: '2', label: 'Awards Won', value: '08', description: 'Recognition for excellence.' },
  { id: '3', label: 'Creative Minds', value: '50+', description: 'A diverse team of experts.' },
  { id: '4', label: 'Satisfied Clients', value: '200+', description: 'Building lasting partnerships.' },
];

const Achievements: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none">
        <h2 className="text-[12vw] md:text-[15vw] leading-none font-display font-bold text-gray-50 tracking-tighter">
          ACHIEVEMENT
        </h2>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
         <div className="mb-16 md:w-1/2">
            <SectionLabel text="Our Impact" />
            <h3 className="font-display text-5xl md:text-7xl text-dosocket-900 leading-[1.1] tracking-tight">
               Every design we create <span className="text-gray-400 italic">tells a story of success.</span>
            </h3>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat) => (
               <div key={stat.id} className="bg-white/80 backdrop-blur-sm border border-gray-100 p-6 md:p-8 rounded-2xl hover:border-dosocket-700/20 hover:shadow-lg transition-all duration-500 group">
                  <span className="block text-xs uppercase tracking-widest text-gray-400 mb-8">{stat.label}</span>
                  <div className="font-display font-bold text-5xl md:text-6xl text-dosocket-900 mb-4 group-hover:text-dosocket-700 transition-colors">
                     {stat.value}
                  </div>
                  <p className="text-xs text-gray-500">{stat.description}</p>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Achievements;