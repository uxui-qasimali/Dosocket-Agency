import React, { useRef, useState } from 'react';
import SocialIcons from './UI/SocialIcons';

const Footer: React.FC = () => {
  const brandName = "Dosocket";
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse move to determine proximity to each letter
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    // Simple logic: determine which letter index is closest based on width subdivision
    // A more complex version would calculate exact distance, but index-based is cleaner for this layout
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const widthPerChar = rect.width / brandName.length;
    const index = Math.floor(x / widthPerChar);
    
    setHoveredIndex(Math.max(0, Math.min(brandName.length - 1, index)));
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <footer className="bg-black pt-24 pb-12 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div 
          ref={containerRef}
          className="flex justify-center mb-12 group cursor-default select-none relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
           <h1 className="font-display font-bold text-[18vw] leading-none tracking-tighter flex">
              {brandName.split('').map((char, index) => {
                // Calculate style based on distance from hovered index
                let blur = 0;
                let scale = 1;
                let opacity = 1;
                let color = '#1F2937'; // gray-800 default

                if (hoveredIndex !== null) {
                  const dist = Math.abs(hoveredIndex - index);
                  // The closer to the cursor, the sharper and brighter
                  if (dist === 0) {
                     blur = 0;
                     scale = 1.1;
                     color = '#A4FEEB'; // accent
                     opacity = 1;
                  } else if (dist === 1) {
                     blur = 2;
                     scale = 1.05;
                     color = '#CDEBE4'; // subtext
                     opacity = 0.8;
                  } else {
                     blur = 6 + (dist * 2);
                     scale = 0.95;
                     color = '#1F2937';
                     opacity = 0.3;
                  }
                } else {
                   // Default state (no hover)
                   color = '#1F2937';
                   opacity = 1;
                   blur = 0;
                }

                return (
                  <span 
                    key={index} 
                    className="transition-all duration-300 ease-out will-change-transform"
                    style={{
                       color: color,
                       filter: `blur(${blur}px)`,
                       transform: `scale(${scale})`,
                       opacity: opacity
                    }}
                  >
                    {char}
                  </span>
                );
              })}
           </h1>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
           <div className="md:col-span-2">
              <div className="flex flex-col md:flex-row gap-8">
                 <a href="mailto:info@Dosocket.com" className="px-8 py-3 rounded-[0.8em] border border-white/20 text-sm hover:bg-white hover:text-black transition-colors text-center">
                    info@Dosocket.com
                 </a>
                 <a href="tel:+8801756028551" className="px-8 py-3 rounded-[0.8em] border border-white/20 text-sm hover:bg-white hover:text-black transition-colors text-center">
                    +8801756-028551
                 </a>
              </div>
              <div className="mt-8 text-dosocket-muted text-xs">
                 <p className="mb-1"><span className="text-white/40">Main Office:</span> 1280 Dev GT Street</p>
                 <p><span className="text-white/40">Second Office:</span> Rampura Bansri</p>
              </div>
           </div>

           <div>
              <ul className="space-y-4 text-sm text-dosocket-muted">
                 <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-dosocket-accent transition-colors">Services</button></li>
                 <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-dosocket-accent transition-colors">Project</button></li>
                 <li><button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-dosocket-accent transition-colors">About</button></li>
                 <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-dosocket-accent transition-colors">Contact</button></li>
              </ul>
           </div>

           <div>
              {/* Removed Blog and Workflow as requested */}
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-white/5">
           <div className="flex gap-8 text-xs text-white/40 mb-4 md:mb-0">
              <a href="#">Privacy Policy</a>
              <span>2023, Dosocket</span>
           </div>
           <div className="flex gap-4">
              <SocialIcons />
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
