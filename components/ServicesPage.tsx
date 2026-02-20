import React, { useState, useEffect } from 'react';
import SectionLabel from './UI/SectionLabel';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const serviceId = searchParams.get('id');
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const services = [
    {
      id: 'ui-ux',
      title: "UI/UX Designing",
      description: "We craft intuitive and engaging user experiences. From wireframes to high-fidelity prototypes, our design process ensures your product is not only beautiful but functional.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Interaction Design", "Design Systems"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
      details: "Our UI/UX design process is user-centered and data-driven. We start by understanding your users and their needs through in-depth research. Then, we create wireframes and prototypes to test and iterate on our designs. Finally, we deliver high-fidelity visual designs that are both beautiful and functional. We believe that good design is not just about how it looks, but how it works."
    },
    {
      id: 'web-app',
      title: "Web Application",
      description: "Scalable, high-performance web applications built for growth. We specialize in creating complex dashboards and enterprise solutions.",
      features: ["SaaS Development", "Dashboard Architecture", "React & Next.js", "Performance Optimization", "Cloud Integration"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      details: "We build robust and scalable web applications using the latest technologies. Whether you need a simple dashboard or a complex enterprise solution, we have the expertise to deliver. Our team of experienced developers follows best practices to ensure your application is secure, performant, and easy to maintain."
    },
    {
      id: 'web-dev',
      title: "Web Development",
      description: "Robust front-end and back-end development. We write clean, semantic code optimized for speed and SEO.",
      features: ["Full Stack Development", "CMS Integration", "API Development", "E-commerce Solutions", "Maintenance & Support"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop",
      details: "Our web development services cover everything from front-end to back-end. We use modern frameworks and tools to build websites that are fast, responsive, and SEO-friendly. We also offer CMS integration, API development, and e-commerce solutions to help you grow your business online."
    },
    {
      id: 'digital-marketing',
      title: "Digital Marketing",
      description: "Data-driven strategies to amplify your brand presence. We help you reach your target audience through targeted campaigns.",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Email Marketing", "Analytics & Reporting"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      details: "We help you reach your target audience and achieve your business goals through data-driven digital marketing strategies. Our services include SEO, SEM, social media marketing, content strategy, and email marketing. We also provide detailed analytics and reporting to help you track your progress and optimize your campaigns."
    }
  ];

  useEffect(() => {
    if (serviceId) {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        setSelectedService(service);
      } else {
        setSelectedService(null);
      }
    } else {
      setSelectedService(null);
    }
  }, [serviceId]);

  const handleBack = () => {
    setSearchParams({});
    setSelectedService(null);
  };

  if (selectedService) {
     return (
        <section className="py-32 bg-white min-h-screen">
           <div className="container mx-auto px-6 lg:px-12">
              <button onClick={handleBack} className="flex items-center gap-2 text-dosocket-900 font-bold mb-8 hover:text-dosocket-accent transition-colors">
                 <ArrowLeft size={20} /> Back to Services
              </button>
              
              <div className="grid lg:grid-cols-2 gap-12">
                 <div>
                    <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl mb-8">
                       <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
                    </div>
                 </div>
                 <div>
                    <SectionLabel text="Service Detail" />
                    <h1 className="font-display font-bold text-5xl md:text-6xl text-dosocket-900 mb-6">{selectedService.title}</h1>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{selectedService.description}</p>
                    
                    <h3 className="font-display font-bold text-2xl text-dosocket-900 mb-4">Key Features</h3>
                    <ul className="space-y-3 mb-8">
                       {selectedService.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-3 text-dosocket-900 font-medium">
                             <div className="w-2 h-2 rounded-full bg-dosocket-accent"></div>
                             {feature}
                          </li>
                       ))}
                    </ul>

                    <h3 className="font-display font-bold text-2xl text-dosocket-900 mb-4">More Details</h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                       {selectedService.details}
                    </p>

                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="bg-dosocket-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-dosocket-800 transition-colors">
                       Start a Project with Us
                    </button>
                 </div>
              </div>
           </div>
        </section>
     );
  }

  return (
    <section className="py-32 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20">
           <SectionLabel text="Our Expertise" />
           <h1 className="font-display font-bold text-6xl md:text-8xl text-dosocket-900 tracking-tight mb-8">
              Services
           </h1>
           <p className="text-gray-500 text-xl max-w-2xl leading-relaxed">
              We offer a comprehensive suite of digital services designed to help your business grow and succeed in the modern digital landscape.
           </p>
        </div>

        <div className="space-y-32">
           {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                 <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                       <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                       <div className="absolute inset-0 bg-dosocket-900/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                 </div>
                 <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-dosocket-900 mb-6">{service.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                       {service.description}
                    </p>
                    <ul className="space-y-4 mb-10">
                       {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-dosocket-900 font-medium">
                             <div className="w-2 h-2 rounded-full bg-dosocket-accent"></div>
                             {feature}
                          </li>
                       ))}
                    </ul>
                    <button onClick={() => setSearchParams({ id: service.id })} className="inline-flex items-center gap-2 text-dosocket-900 font-bold uppercase tracking-widest hover:text-dosocket-accent transition-colors">
                       See Details <ArrowUpRight size={18} />
                    </button>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
