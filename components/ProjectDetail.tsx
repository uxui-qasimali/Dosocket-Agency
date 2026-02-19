import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import Button from './UI/Button';
import Navbar from './Navbar';
import Footer from './Footer';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock data for project details
  const project = {
    title: id === 'featured' ? 'Emirates Beta (Fly Better)' : 'Mind Care App',
    category: id === 'featured' ? 'Travel Experience' : 'Mental Health Platform',
    image: id === 'featured' 
      ? 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop'
      : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    description: 'A comprehensive digital transformation project aimed at redefining the user journey for modern travelers. We focused on creating a seamless, intuitive, and visually stunning experience that bridges the gap between physical and digital travel touchpoints.',
    tools: ['Figma', 'React Native', 'Node.js', 'AWS', 'Framer'],
    liveLink: 'https://example.com',
    breakdown: 'Our approach was rooted in deep user research and iterative prototyping. We mapped out every possible user interaction to ensure that the final product was not only functional but also emotionally resonant.',
    caseStudy: {
      problem: 'The existing travel ecosystem was fragmented, causing significant friction for users during booking and trip management. Users often felt overwhelmed by complex interfaces and lack of real-time updates.',
      solution: 'We developed a unified platform that integrates all travel services into a single, cohesive interface. By leveraging real-time data and personalized AI recommendations, we provided users with a tailored travel experience.',
      results: [
        '45% increase in user engagement within the first 3 months.',
        '30% reduction in booking abandonment rates.',
        '98% positive user feedback on the new interface design.'
      ]
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-dosocket-900 font-bold uppercase tracking-widest text-xs mb-12 hover:text-dosocket-700 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-dosocket-700 font-bold uppercase tracking-[0.2em] text-xs block mb-4">
                  {project.category}
                </span>
                <h1 className="text-5xl md:text-8xl font-display font-bold text-dosocket-900 mb-8 leading-[1.1] tracking-tight">
                  {project.title}
                </h1>
                <p className="text-gray-600 text-xl leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 flex flex-col justify-end">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="text-dosocket-900 font-bold uppercase tracking-widest text-xs mb-6">Tools Used</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-dosocket-900 text-xs font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
                <Button variant="primary" className="w-full" onClick={() => window.open(project.liveLink, '_blank')}>
                  Visit Live Site <ExternalLink size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="rounded-[3rem] overflow-hidden mb-32 shadow-2xl aspect-[16/9]"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>

          {/* Detailed Breakdown */}
          <div className="grid lg:grid-cols-12 gap-12 mb-32">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-display font-bold text-dosocket-900 sticky top-32">Detailed Breakdown</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-gray-600 text-xl leading-relaxed">
                {project.breakdown}
              </p>
            </div>
          </div>

          {/* Case Study Section */}
          <div className="bg-dosocket-900 rounded-[4rem] p-10 md:p-20 text-white mb-32">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20">
                <span className="text-dosocket-accent font-bold uppercase tracking-[0.3em] text-xs block mb-4">Case Study</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold">Problem & Solution</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-16 mb-20">
                <div>
                  <h4 className="text-dosocket-accent font-bold uppercase tracking-widest text-xs mb-6">The Problem</h4>
                  <p className="text-dosocket-subtext text-lg leading-relaxed">
                    {project.caseStudy.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-dosocket-accent font-bold uppercase tracking-widest text-xs mb-6">Our Solution</h4>
                  <p className="text-dosocket-subtext text-lg leading-relaxed">
                    {project.caseStudy.solution}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-20">
                <h4 className="text-dosocket-accent font-bold uppercase tracking-widest text-xs mb-10 text-center">The Results</h4>
                <div className="grid md:grid-cols-3 gap-8">
                  {project.caseStudy.results.map((result, idx) => (
                    <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center">
                      <CheckCircle2 size={32} className="text-dosocket-accent mb-6" />
                      <p className="text-dosocket-text font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Next Project CTA */}
          <div className="text-center py-20 border-t border-gray-100">
            <span className="text-gray-400 font-bold uppercase tracking-widest text-xs block mb-6">Next Project</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-dosocket-900 mb-12 hover:text-dosocket-700 transition-colors cursor-pointer">
              Muscle Burner App
            </h2>
            <Button variant="outline" onClick={() => navigate('/project/2')}>View Next Project</Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
