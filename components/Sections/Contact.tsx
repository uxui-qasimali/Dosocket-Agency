import React, { useState } from 'react';
import AnimatedInput from '../UI/AnimatedInput';
import SectionLabel from '../UI/SectionLabel';

const Contact: React.FC = () => {
// ... existing state ...
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [formData, setFormData] = useState({
     name: '',
     email: '',
     phone: '',
     company: ''
  });
  
  const services = ['Web Development', 'UI/UX Design', 'App Development', 'QA & Maintenance', 'Template Design', '3D Animation'];
  const budgets = ['< $1k', '$1k - $5k', '$5k - $10k', '$10k - $20k', '$20k - $50k', '$50k+'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(i => i !== service) : [...prev, service]
    );
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-12">
          
           <div className="md:col-span-4 lg:col-span-3">
              <SectionLabel text="Contact" />
           </div>

           <div className="md:col-span-8 lg:col-span-9 bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-16 shadow-lg">
              <div className="mb-12">
                 <h2 className="font-display font-bold text-4xl md:text-5xl text-dosocket-900 mb-4">Start a Project</h2>
                 <p className="text-gray-500">Let's build something extraordinary together.</p>
              </div>

              <form className="space-y-6">
                 {/* 01. Name */}
                 <div className="flex gap-4 items-start">
                    <span className="text-dosocket-accent font-mono text-lg mt-4">01</span>
                    <AnimatedInput 
                       name="name"
                       label="What's your name?" 
                       value={formData.name}
                       onChange={handleInputChange}
                    />
                 </div>

                 {/* 02. Email */}
                 <div className="flex gap-4 items-start">
                    <span className="text-dosocket-accent font-mono text-lg mt-4">02</span>
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
                    <span className="text-dosocket-accent font-mono text-lg mt-4">03</span>
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
                    <span className="text-dosocket-accent font-mono text-lg mt-4">04</span>
                    <AnimatedInput 
                       name="company"
                       label="What's your company/organization name?" 
                       value={formData.company}
                       onChange={handleInputChange}
                    />
                 </div>

                 {/* 05. Services */}
                 <div className="flex gap-4 items-start">
                    <span className="text-dosocket-accent font-mono text-lg mt-2">05</span>
                    <div className="w-full">
                        <label className="block text-lg font-bold text-dosocket-900 mb-6">What services are you looking for?</label>
                        <div className="relative">
                           <select 
                              className="w-full bg-transparent border-b-2 border-gray-200 focus:border-dosocket-900 outline-none py-4 text-dosocket-900 transition-colors appearance-none cursor-pointer"
                              onChange={(e) => toggleService(e.target.value)}
                              value=""
                           >
                              <option value="" disabled>Select a service</option>
                              {services.map(service => (
                                 <option key={service} value={service}>{service}</option>
                              ))}
                           </select>
                           <div className="mt-4 flex flex-wrap gap-2">
                              {selectedServices.map(service => (
                                 <span key={service} className="px-4 py-2 bg-dosocket-900 text-white rounded-[0.8em] text-sm flex items-center gap-2">
                                    {service}
                                    <button type="button" onClick={() => toggleService(service)} className="hover:text-dosocket-accent">×</button>
                                 </span>
                              ))}
                           </div>
                        </div>
                    </div>
                 </div>

                 {/* 06. Budget */}
                 <div className="flex gap-4 items-start">
                    <span className="text-dosocket-accent font-mono text-lg mt-2">06</span>
                    <div className="w-full">
                        <label className="block text-lg font-bold text-dosocket-900 mb-6">What have you budgeted for this project?</label>
                        <div className="relative">
                           <select 
                              className="w-full bg-transparent border-b-2 border-gray-200 focus:border-dosocket-900 outline-none py-4 text-dosocket-900 transition-colors appearance-none cursor-pointer"
                              onChange={(e) => setSelectedBudget(e.target.value)}
                              value={selectedBudget}
                           >
                              <option value="" disabled>Select a budget range</option>
                              {budgets.map(budget => (
                                 <option key={budget} value={budget}>{budget}</option>
                              ))}
                           </select>
                        </div>
                    </div>
                 </div>

                 {/* 07. Project Details */}
                 <div className="flex gap-4 items-start">
                    <span className="text-dosocket-accent font-mono text-lg mt-4">07</span>
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

                 <div className="flex flex-col md:flex-row items-center gap-6 justify-end pt-8">
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