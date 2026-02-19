import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../../types';

import SectionLabel from '../UI/SectionLabel';

const faqs: FaqItem[] = [
// ... existing faqs ...
  { id: '1', question: 'What is your core UX & branding process?', answer: 'We start with deep discovery, move to strategic wireframing, then visual design, and finally rigorous testing. Our process is iterative and collaborative.' },
  { id: '2', question: 'Can you redesign our enterprise software?', answer: 'Absolutely. We specialize in transforming complex legacy systems into intuitive, modern interfaces that improve user efficiency.' },
  { id: '3', question: 'Which solution is best for me, Custom or CMS?', answer: 'It depends on your scalability needs. For marketing sites, Framer/Webflow is great. For web apps, custom React development is preferred.' },
  { id: '4', question: 'Do you work with startups?', answer: 'Yes, we love working with ambitious startups. We have specific packages designed to help MVPs get to market quickly with high impact.' },
  { id: '5', question: 'Need coding to edit my site?', answer: 'Not if we build it on Webflow or Framer. We hand over a fully editable CMS so your marketing team can make changes without code.' },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
           <SectionLabel text="Need clarity? Find it here" />
           <h2 className="font-display font-bold text-5xl md:text-6xl text-dosocket-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
           <div className="flex justify-center -space-x-4 mb-4">
              {[1,2,3,4].map(i => (
                 <img key={i} src={`https://picsum.photos/seed/face${i}/50/50`} className="w-10 h-10 rounded-full border-2 border-white" alt="Team" />
              ))}
              <div className="w-10 h-10 rounded-full bg-dosocket-900 border-2 border-white flex items-center justify-center text-xs text-white">+</div>
           </div>
           <p className="text-gray-500 text-sm">Get instant answers — our team is ready to help.</p>
        </div>

        <div className="max-w-3xl mx-auto">
           {faqs.map((faq, index) => (
              <div key={faq.id} className="mb-4">
                 <button 
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className={`w-full flex items-center justify-between p-6 md:p-8 rounded-2xl text-left transition-all duration-300 ${openId === faq.id ? 'bg-gray-50' : 'bg-transparent border border-gray-200 hover:border-dosocket-700/30'}`}
                 >
                    <div className="flex gap-6 items-center">
                       <span className="font-mono text-gray-300 text-sm">00{index + 1}</span>
                       <span className={`font-display font-medium text-lg md:text-xl ${openId === faq.id ? 'text-dosocket-700' : 'text-dosocket-900'}`}>
                          {faq.question}
                       </span>
                    </div>
                    <ChevronDown className={`text-gray-400 transition-transform duration-300 ${openId === faq.id ? 'rotate-180 text-dosocket-700' : ''}`} />
                 </button>
                 <AnimatePresence>
                    {openId === faq.id && (
                       <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                       >
                          <div className="p-6 md:p-8 pt-0 pl-16 md:pl-20 text-gray-600 leading-relaxed">
                             {faq.answer}
                          </div>
                       </motion.div>
                    )}
                 </AnimatePresence>
              </div>
           ))}
        </div>
        
        <div className="flex justify-center mt-12 gap-4">
           <button className="bg-dosocket-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors">See All Answer</button>
           <button className="bg-white border border-gray-200 text-dosocket-900 px-8 py-3 rounded-full text-sm font-medium hover:border-dosocket-900 transition-colors flex items-center gap-2">Talk to Chatbot</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;