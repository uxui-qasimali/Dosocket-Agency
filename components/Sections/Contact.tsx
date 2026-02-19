import React, { useState, useRef, useEffect } from 'react';
import AnimatedInput from '../UI/AnimatedInput';
import SectionLabel from '../UI/SectionLabel';
import { ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  
  const serviceRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
     name: '',
     email: '',
     phone: '',
     company: '',
     details: ''
  });
  
  const services = ['Web Development', 'UI/UX Design', 'App Development', 'QA & Maintenance', 'Template Design', '3D Animation'];
  const budgets = ['< $1k', '$1k - $5k', '$5k - $10k', '$10k - $20k', '$20k - $50k', '$50k+'];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (serviceRef.current && !serviceRef.current.contains(event.target as Node)) {
        setIsServiceOpen(false);
      }
      if (budgetRef.current && !budgetRef.current.contains(event.target as Node)) {
        setIsBudgetOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(i => i !== service) : [...prev, service]
    );
    // Don't close on selection to allow multiple
  };

  const handleBudgetSelect = (budget: string) => {
    setSelectedBudget(budget);
    setIsBudgetOpen(false);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12">
          
           <div className="md:col-span-4 lg:col-span-3">
              <div className="sticky top-32">
                 <SectionLabel text="Get in Touch" />
                 <h2 className="font-display font-bold text-6xl text-dosocket-900 mb-6 tracking-tight">Contact</h2>
                 <p className="text-dosocket-500 text-base leading-relaxed max-w-xs">
                    Ready to start your next project? We are here to help.
                 </p>
              </div>
           </div>

           <div className="md:col-span-8 lg:col-span-9 bg-gray-50 border border-gray-100 rounded-3xl p-6 md:p-12 shadow-lg">
              <div className="mb-8">
                 <h2 className="font-display font-bold text-3xl md:text-5xl text-dosocket-900 mb-4">Start a Project</h2>
                 <p className="text-gray-500">Let's build something extraordinary together.</p>
              </div>

              <form className="space-y-[18px]">
                 {/* 01. Name */}
                 <div className="flex gap-4 items-start">
                    <span className="text-dosocket-accent font-mono text-lg mt-4 hidden sm:block">01</span>
                    <AnimatedInput 
                       name="name"
                       label="What's your name?" 
                       value={formData.name}
                       onChange={handleInputChange}
                    />
                 </div>

                 {/* 02. Email */}
                 <div className="flex gap-4 items-start">
                    <span className="text-dosocket-accent font-mono text-lg mt-4 hidden sm:block">02</span>
                    <AnimatedInput 
                       name="email"
                       label="What's your email address?" 
                       type="email" 
                       value={formData.email}
                       onChange={handleInputChange}
                    />
                 </div>
                 
                 {/* 03. Phone */}
                 <div className="flex gap-4 items-start">
                    <span className="text-dosocket-accent font-mono text-lg mt-4 hidden sm:block">03</span>
                    <AnimatedInput 
                       name="phone"
                       label="What's your phone number?" 
                       type="tel" 
                       value={formData.phone}
                       onChange={handleInputChange}
                    />
                 </div>

                 {/* 04. Company */}
                 <div className="flex gap-4 items-start">
                    <span className="text-dosocket-accent font-mono text-lg mt-4 hidden sm:block">04</span>
                    <AnimatedInput 
                       name="company"
                       label="What's your company/organization name?" 
                       value={formData.company}
                       onChange={handleInputChange}
                    />
                 </div>

                 {/* 05. Services */}
                 <div className="flex gap-4 items-start z-20 relative">
                    <span className="text-dosocket-accent font-mono text-lg mt-2 hidden sm:block">05</span>
                    <div className="w-full relative" ref={serviceRef}>
                        <label className="block text-lg font-bold text-dosocket-900 mb-4">What services are you looking for?</label>
                        
                        <div 
                           className="w-full bg-transparent border-b-2 border-gray-200 cursor-pointer py-4 flex justify-between items-center group hover:border-dosocket-900 transition-colors"
                           onClick={() => setIsServiceOpen(!isServiceOpen)}
                        >
                           <span className={`${selectedServices.length > 0 ? 'text-dosocket-900 font-medium' : 'text-gray-400'}`}>
                              {selectedServices.length > 0 ? `${selectedServices.length} services selected` : 'Select services'}
                           </span>
                           <ChevronDown className={`transition-transform duration-300 ${isServiceOpen ? 'rotate-180' : ''}`} />
                        </div>

                        <AnimatePresence>
                           {isServiceOpen && (
                              <motion.div 
                                 initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                 animate={{ opacity: 1, y: 0, scale: 1 }}
                                 exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                 className="absolute top-full left-0 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 mt-2 z-50 grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[300px] overflow-y-auto"
                              >
                                 {services.map(service => (
                                    <div 
                                       key={service}
                                       onClick={() => toggleService(service)}
                                       className={`p-3 rounded-xl cursor-pointer transition-all flex items-center justify-between ${selectedServices.includes(service) ? 'bg-dosocket-900 text-white' : 'hover:bg-gray-50 text-gray-600'}`}
                                    >
                                       <span className="text-sm font-medium">{service}</span>
                                       {selectedServices.includes(service) && <span className="w-2 h-2 rounded-full bg-dosocket-accent"></span>}
                                    </div>
                                 ))}
                              </motion.div>
                           )}
                        </AnimatePresence>

                        <div className="mt-4 flex flex-wrap gap-2">
                           {selectedServices.map(service => (
                              <span key={service} className="px-4 py-2 bg-dosocket-900 text-white rounded-[0.8em] text-sm flex items-center gap-2 animate-fadeIn">
                                 {service}
                                 <button type="button" onClick={(e) => { e.stopPropagation(); toggleService(service); }} className="hover:text-dosocket-accent">
                                    <X size={14} />
                                 </button>
                              </span>
                           ))}
                        </div>
                    </div>
                 </div>

                 {/* 06. Budget */}
                 <div className="flex gap-4 items-start z-10 relative">
                    <span className="text-dosocket-accent font-mono text-lg mt-2 hidden sm:block">06</span>
                    <div className="w-full relative" ref={budgetRef}>
                        <label className="block text-lg font-bold text-dosocket-900 mb-4">What have you budgeted for this project?</label>
                        
                        <div 
                           className="w-full bg-transparent border-b-2 border-gray-200 cursor-pointer py-4 flex justify-between items-center group hover:border-dosocket-900 transition-colors"
                           onClick={() => setIsBudgetOpen(!isBudgetOpen)}
                        >
                           <span className={`${selectedBudget ? 'text-dosocket-900 font-medium' : 'text-gray-400'}`}>
                              {selectedBudget || 'Select a budget range'}
                           </span>
                           <ChevronDown className={`transition-transform duration-300 ${isBudgetOpen ? 'rotate-180' : ''}`} />
                        </div>

                        <AnimatePresence>
                           {isBudgetOpen && (
                              <motion.div 
                                 initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                 animate={{ opacity: 1, y: 0, scale: 1 }}
                                 exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                 className="absolute top-full left-0 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 mt-2 z-50 grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[300px] overflow-y-auto"
                              >
                                 {budgets.map(budget => (
                                    <div 
                                       key={budget}
                                       onClick={() => handleBudgetSelect(budget)}
                                       className={`p-3 rounded-xl cursor-pointer transition-all flex items-center justify-between ${selectedBudget === budget ? 'bg-dosocket-900 text-white' : 'hover:bg-gray-50 text-gray-600'}`}
                                    >
                                       <span className="text-sm font-medium">{budget}</span>
                                       {selectedBudget === budget && <span className="w-2 h-2 rounded-full bg-dosocket-accent"></span>}
                                    </div>
                                 ))}
                              </motion.div>
                           )}
                        </AnimatePresence>
                    </div>
                 </div>

                 {/* 07. Project Details */}
                 <div className="flex gap-4 items-start">
                    <span className="text-dosocket-accent font-mono text-lg mt-4 hidden sm:block">07</span>
                    <div className="w-full">
                       <AnimatedInput 
                          name="details"
                          label="Tell us about your project" 
                          value={formData.details}
                          onChange={handleInputChange}
                          multiline
                       />
                    </div>
                 </div>

                 <div className="flex flex-col md:flex-row items-center gap-6 justify-end pt-4">
                    <button type="submit" className="bg-dosocket-900 text-white px-12 py-4 rounded-[0.8em] font-bold hover:bg-dosocket-700 transition-all w-full md:w-auto transform active:scale-95 shadow-xl flex items-center gap-2 justify-center group">
                       Send Proposal
                       <span className="w-2 h-2 rounded-full bg-dosocket-accent group-hover:scale-150 transition-transform"></span>
                    </button>
                 </div>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
