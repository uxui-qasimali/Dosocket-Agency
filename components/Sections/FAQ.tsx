import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FaqItem } from '../../types';
import SectionLabel from '../UI/SectionLabel';

const faqs: FaqItem[] = [
  { id: '1', question: 'What is your core UX & branding process?', answer: 'We start with deep discovery, move to strategic wireframing, then visual design, and finally rigorous testing. Our process is iterative and collaborative.' },
  { id: '2', question: 'Can you redesign our enterprise software?', answer: 'Absolutely. We specialize in transforming complex legacy systems into intuitive, modern interfaces that improve user efficiency.' },
  { id: '3', question: 'Which solution is best for me, Custom or CMS?', answer: 'It depends on your scalability needs. For marketing sites, Framer/Webflow is great. For web apps, custom React development is preferred.' },
  { id: '4', question: 'Do you work with startups?', answer: 'Yes, we love working with ambitious startups. We have specific packages designed to help MVPs get to market quickly with high impact.' },
  { id: '5', question: 'Need coding to edit my site?', answer: 'Not if we build it on Webflow or Framer. We hand over a fully editable CMS so your marketing team can make changes without code.' },
  { id: '6', question: 'How long does a typical project take?', answer: 'Timelines vary by scope. A typical branding and website project takes 4-8 weeks, while complex web apps can take 3-6 months.' },
  { id: '7', question: 'Do you offer post-launch support?', answer: 'Yes, we offer various maintenance packages to ensure your digital product remains secure, up-to-date, and optimized.' },
  { id: '8', question: 'What is your payment structure?', answer: 'We typically require a 50% deposit to start, with the remaining balance due upon project completion and approval.' },
  { id: '9', question: 'Can you help with content creation?', answer: 'We can assist with content strategy and copywriting, or work with your existing content team to ensure the design supports your message.' },
  { id: '10', question: 'Do you work internationally?', answer: 'Yes, we work with clients globally. We use tools like Slack, Zoom, and Figma to maintain seamless communication across time zones.' },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
           
           {/* Left Side Content */}
           <div className="lg:col-span-4">
              <div className="sticky top-32">
                 <SectionLabel text="Common Queries" />
                 <h2 className="font-display font-bold text-5xl md:text-6xl text-dosocket-900 mb-8 tracking-tight">
                    Frequently Asked Questions
                 </h2>
                 <p className="text-gray-500 text-lg mb-8">
                    Everything you need to know about our process, pricing, and deliverables. Can't find what you're looking for?
                 </p>
                 <div className="bg-dosocket-900 p-8 rounded-3xl border border-dosocket-border/20 shadow-xl">
                    <div className="w-12 h-12 rounded-full bg-dosocket-accent flex items-center justify-center mb-4 text-dosocket-900">
                       <MessageCircle size={24} />
                    </div>
                    <h4 className="font-bold text-white text-xl mb-2">Still have questions?</h4>
                    <p className="text-sm text-gray-300 mb-6">Our team is ready to provide the answers you need.</p>
                    <button 
                       onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                       className="bg-white text-dosocket-900 px-8 py-3 rounded-[0.8em] text-sm font-bold uppercase tracking-widest hover:bg-dosocket-accent transition-colors w-full"
                    >
                       Contact Support
                    </button>
                 </div>
              </div>
           </div>

           {/* Right Side Accordion */}
           <div className="lg:col-span-8">
              <div className="max-w-3xl mx-auto">
                 {faqs.map((faq, index) => (
                    <div key={faq.id} className="mb-4">
                       <button 
                          onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                          className={`w-full flex items-center justify-between p-6 md:p-8 rounded-2xl text-left transition-all duration-300 ${openId === faq.id ? 'bg-gray-50' : 'bg-transparent border border-gray-200 hover:border-dosocket-700/30'}`}
                       >
                          <div className="flex gap-6 items-center">
                             <span className="font-mono text-gray-300 text-sm hidden md:block">00{index + 1}</span>
                             <span className={`font-display font-medium text-lg md:text-xl ${openId === faq.id ? 'text-dosocket-700' : 'text-dosocket-900'}`}>
                                {faq.question}
                             </span>
                          </div>
                          <ChevronDown className={`text-gray-400 transition-transform duration-300 shrink-0 ${openId === faq.id ? 'rotate-180 text-dosocket-700' : ''}`} />
                       </button>
                       <AnimatePresence>
                          {openId === faq.id && (
                             <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                             >
                                <div className="p-6 md:p-8 pt-0 pl-6 md:pl-20 text-gray-600 leading-relaxed">
                                   {faq.answer}
                                </div>
                             </motion.div>
                          )}
                       </AnimatePresence>
                    </div>
                 ))}
              </div>
              
              <div className="flex justify-center mt-12 gap-4">
                 <button className="bg-dosocket-900 text-white px-8 py-3 rounded-[0.8em] text-sm font-medium hover:bg-black transition-colors">See All Answer</button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
