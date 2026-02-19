import React, { useState } from 'react';
import SectionLabel from '../UI/SectionLabel';
import { Github, Linkedin, Twitter, Globe, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  country: string;
  image: string;
  experience: string;
  specialty: string;
  bio: string;
  socials: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    portfolio?: string;
    globe?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Qasim Ali',
    role: 'Co-Founder & UI/UX Designer',
    country: 'Pakistan',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    experience: '5+ Years Exp.',
    specialty: 'Product Design',
    bio: 'Qasim is a visionary designer with a passion for creating intuitive and beautiful user experiences. He has led design teams for multiple successful startups.',
    socials: {
      linkedin: '#',
      twitter: '#',
      portfolio: '#'
    }
  },
  {
    id: '2',
    name: 'Abdul Rehman',
    role: 'Co-Founder & Sr. Web Dev',
    country: 'Pakistan',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
    experience: '6+ Years Exp.',
    specialty: 'Full Stack Dev',
    bio: 'Abdul Rehman is a technical wizard who specializes in building scalable web applications. His expertise spans across the entire stack, from server management to frontend optimization.',
    socials: {
      linkedin: '#',
      github: '#',
      portfolio: '#'
    }
  },
  {
    id: '3',
    name: 'Abdul Basit',
    role: 'Sr. Lead Gen & HR Manager',
    country: 'Pakistan',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
    experience: '4+ Years Exp.',
    specialty: 'Talent Acquisition',
    bio: 'Abdul Basit excels in identifying top talent and driving growth through strategic lead generation. He ensures the team is always staffed with the best minds.',
    socials: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: '4',
    name: 'MD. Ahosun Habib',
    role: 'Sr. Digital Marketing',
    country: 'Bangladesh',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop',
    experience: '5+ Years Exp.',
    specialty: 'SEO & Campaigns',
    bio: 'Ahosun is a digital marketing strategist who knows how to amplify brand presence. His data-driven approach ensures maximum ROI for marketing campaigns.',
    socials: {
      linkedin: '#',
      globe: '#'
    }
  }
];

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-32 bg-dosocket-surface/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center max-w-3xl mx-auto">
           <div className="flex justify-center mb-6">
             <SectionLabel text="Our Team" />
           </div>
           <h2 className="font-display font-bold text-5xl md:text-6xl text-dosocket-900 tracking-tight mb-6">
              Meet the <span className="text-dosocket-accent bg-dosocket-900 px-4 py-1 rounded-xl transform -rotate-2 inline-block">Minds</span>
           </h2>
           <p className="text-gray-600 text-lg">
              A collective of visionaries, creators, and strategists dedicated to redefining the digital landscape. AA
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex justify-center">
               <div className="team-card-parent">
                  <div className="team-card">
                     <div className="team-card-logo">
                        <span className="circle circle1" />
                        <span className="circle circle2" />
                        <span className="circle circle3" />
                        <span className="circle circle4" />
                        <span className="circle circle5">
                           <span className="font-display font-bold text-white text-xs">DS</span>
                        </span>
                     </div>
                     <div className="team-card-glass" />
                     <div className="team-card-content">
                        <div className="relative z-20 mb-4 rounded-full overflow-hidden w-20 h-20 border-2 border-white/50 shadow-md">
                           <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <span className="team-card-title">{member.name}</span>
                        <span className="team-card-text">{member.role}</span>
                        <div className="mt-4 flex flex-col gap-1">
                           <span className="text-[10px] uppercase tracking-widest text-dosocket-900/60 font-bold">{member.country}</span>
                           <span className="text-xs font-medium text-dosocket-900/80">{member.experience}</span>
                           <span className="text-xs font-medium text-dosocket-900/80">{member.specialty}</span>
                        </div>
                     </div>
                     <div className="team-card-bottom">
                        <div className="social-buttons-container">
                           <button className="social-button">
                              <Linkedin size={14} className="text-dosocket-900" />
                           </button>
                           <button className="social-button">
                              <Twitter size={14} className="text-dosocket-900" />
                           </button>
                           <button className="social-button">
                              <Globe size={14} className="text-dosocket-900" />
                           </button>
                        </div>
                        <div className="view-more" onClick={() => setSelectedMember(member)}>
                           <button className="view-more-button">About Me</button>
                           <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-dosocket-accent">
                  <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-dosocket-900">{selectedMember.name}</h3>
                  <p className="text-dosocket-accent font-medium text-sm uppercase tracking-wider">{selectedMember.role}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 leading-relaxed">{selectedMember.bio}</p>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <span className="block text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Experience</span>
                    <span className="font-display font-bold text-dosocket-900">{selectedMember.experience}</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                    <span className="block text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">Specialty</span>
                    <span className="font-display font-bold text-dosocket-900">{selectedMember.specialty}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                 <a href={selectedMember.socials.portfolio || '#'} className="flex-1 bg-dosocket-900 text-white py-3 rounded-xl font-bold text-center hover:bg-dosocket-700 transition-colors">
                    View Portfolio
                 </a>
                 <div className="flex gap-2">
                    {selectedMember.socials.linkedin && (
                       <a href={selectedMember.socials.linkedin} className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-200 hover:border-dosocket-900 hover:text-dosocket-900 transition-colors">
                          <Linkedin size={20} />
                       </a>
                    )}
                    {selectedMember.socials.twitter && (
                       <a href={selectedMember.socials.twitter} className="w-12 h-12 flex items-center justify-center rounded-xl border border-gray-200 hover:border-dosocket-900 hover:text-dosocket-900 transition-colors">
                          <Twitter size={20} />
                       </a>
                    )}
                 </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .team-card-parent {
          width: 290px;
          height: 380px; /* Increased height for content */
          perspective: 1000px;
        }

        .team-card {
          height: 100%;
          border-radius: 50px;
          background: linear-gradient(135deg, #A4FEEB 0%, #ffffff 100%); /* Dosocket Accent to White */
          transition: all 0.5s ease-in-out;
          transform-style: preserve-3d;
          box-shadow: rgba(5, 71, 17, 0) 40px 50px 25px -40px, rgba(5, 71, 17, 0.2) 0px 25px 25px -5px;
          position: relative;
        }

        .team-card-glass {
          transform-style: preserve-3d;
          position: absolute;
          inset: 8px;
          border-radius: 55px;
          border-top-right-radius: 100%;
          background: linear-gradient(0deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.8) 100%);
          transform: translate3d(0px, 0px, 25px);
          border-left: 1px solid white;
          border-bottom: 1px solid white;
          transition: all 0.5s ease-in-out;
        }

        .team-card-content {
          padding: 50px 30px 0px 30px;
          transform: translate3d(0, 0, 26px);
          position: relative;
          z-index: 10;
        }

        .team-card-title {
          display: block;
          color: #041F1A; /* Dosocket Dark */
          font-weight: 900;
          font-size: 20px;
          font-family: var(--font-display);
          line-height: 1.2;
        }

        .team-card-text {
          display: block;
          color: rgba(4, 31, 26, 0.7);
          font-size: 14px;
          margin-top: 8px;
          font-weight: 500;
        }

        .team-card-bottom {
          padding: 10px 12px;
          transform-style: preserve-3d;
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transform: translate3d(0, 0, 26px);
        }

        .team-card-bottom .view-more {
          display: flex;
          align-items: center;
          width: 40%;
          justify-content: flex-end;
          transition: all 0.2s ease-in-out;
          cursor: pointer;
        }

        .team-card-bottom .view-more:hover {
          transform: translate3d(0, 0, 10px);
        }

        .team-card-bottom .view-more .view-more-button {
          background: none;
          border: none;
          color: #041F1A;
          font-weight: bolder;
          font-size: 12px;
          cursor: pointer;
        }

        .team-card-bottom .view-more .svg {
          fill: none;
          stroke: #041F1A;
          stroke-width: 3px;
          max-height: 15px;
        }

        .social-buttons-container {
          display: flex;
          gap: 10px;
          transform-style: preserve-3d;
        }

        .social-button {
          width: 30px;
          aspect-ratio: 1;
          padding: 5px;
          background: rgb(255, 255, 255);
          border-radius: 50%;
          border: none;
          display: grid;
          place-content: center;
          box-shadow: rgba(5, 71, 17, 0.5) 0px 7px 5px -5px;
          cursor: pointer;
        }

        .social-button:first-child {
          transition: transform 0.2s ease-in-out 0.4s, box-shadow 0.2s ease-in-out 0.4s;
        }

        .social-button:nth-child(2) {
          transition: transform 0.2s ease-in-out 0.6s, box-shadow 0.2s ease-in-out 0.6s;
        }

        .social-button:nth-child(3) {
          transition: transform 0.2s ease-in-out 0.8s, box-shadow 0.2s ease-in-out 0.8s;
        }

        .social-button:hover {
          background: #041F1A;
          color: white;
        }
        
        .social-button:hover svg {
           color: white;
           stroke: white;
        }

        .team-card-logo {
          position: absolute;
          right: 0;
          top: 0;
          transform-style: preserve-3d;
        }

        .team-card-logo .circle {
          display: block;
          position: absolute;
          aspect-ratio: 1;
          border-radius: 50%;
          top: 0;
          right: 0;
          box-shadow: rgba(100, 100, 111, 0.2) -10px 10px 20px 0px;
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          background: rgba(4, 31, 26, 0.2); /* Dosocket Dark transparent */
          transition: all 0.5s ease-in-out;
        }

        .team-card-logo .circle1 {
          width: 170px;
          transform: translate3d(0, 0, 20px);
          top: 8px;
          right: 8px;
        }

        .team-card-logo .circle2 {
          width: 140px;
          transform: translate3d(0, 0, 40px);
          top: 10px;
          right: 10px;
          -webkit-backdrop-filter: blur(1px);
          backdrop-filter: blur(1px);
          transition-delay: 0.4s;
        }

        .team-card-logo .circle3 {
          width: 110px;
          transform: translate3d(0, 0, 60px);
          top: 17px;
          right: 17px;
          transition-delay: 0.8s;
        }

        .team-card-logo .circle4 {
          width: 80px;
          transform: translate3d(0, 0, 80px);
          top: 23px;
          right: 23px;
          transition-delay: 1.2s;
        }

        .team-card-logo .circle5 {
          width: 50px;
          transform: translate3d(0, 0, 100px);
          top: 30px;
          right: 30px;
          display: grid;
          place-content: center;
          transition-delay: 1.6s;
          background: #041F1A;
        }

        /* Hover Effects */
        .team-card-parent:hover .team-card {
          transform: rotate3d(1, 1, 0, 30deg);
          box-shadow: rgba(5, 71, 17, 0.3) 30px 50px 25px -40px, rgba(5, 71, 17, 0.1) 0px 25px 30px 0px;
        }

        .team-card-parent:hover .team-card .team-card-bottom .social-buttons-container .social-button {
          transform: translate3d(0, 0, 50px);
          box-shadow: rgba(5, 71, 17, 0.2) -5px 20px 10px 0px;
        }

        .team-card-parent:hover .team-card .team-card-logo .circle2 {
          transform: translate3d(0, 0, 60px);
        }

        .team-card-parent:hover .team-card .team-card-logo .circle3 {
          transform: translate3d(0, 0, 80px);
        }

        .team-card-parent:hover .team-card .team-card-logo .circle4 {
          transform: translate3d(0, 0, 100px);
        }

        .team-card-parent:hover .team-card .team-card-logo .circle5 {
          transform: translate3d(0, 0, 120px);
        }
      `}</style>
    </section>
  );
};

export default Team;
