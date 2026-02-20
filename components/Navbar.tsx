import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './UI/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
     setIsMobileMenuOpen(false);
     if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
           const element = document.querySelector(href);
           if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
     } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
     }
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Project', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-dosocket-900/60 backdrop-blur-xl border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo with Animation */}
          <a href="/" className="flex items-center gap-2 group relative overflow-hidden px-2 py-1">
            <style>{`
               .logo-shine {
                  background: linear-gradient(to right, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%);
                  background-size: 200% auto;
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  animation: shine 5s linear infinite;
               }
               
               .group:hover .logo-text {
                  filter: blur(0px);
                  transition: filter 0.5s ease;
               }
               
               .logo-text {
                  transition: all 0.5s ease;
               }

               .group:hover .logo-text-back {
                  opacity: 1;
                  transform: scale(1.1) translateX(4px);
                  filter: blur(4px);
               }
            `}</style>
            
            <div className="w-3 h-3 rounded-full bg-dosocket-accent group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(164,254,235,0.8)] transition-all duration-500"></div>
            
            <div className="relative">
               {/* Main Text */}
               <span className="font-display font-bold text-2xl tracking-tighter text-dosocket-text relative z-10 logo-text group-hover:tracking-wide transition-all duration-500">
                 Dosocket
               </span>
               
               {/* Behind/Blur Effect */}
               <span className="font-display font-bold text-2xl tracking-tighter text-dosocket-accent absolute top-0 left-0 logo-text-back opacity-0 transition-all duration-500 z-0 pointer-events-none">
                 Dosocket
               </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 bg-dosocket-surface/30 px-8 py-3 rounded-full border border-dosocket-border/50 backdrop-blur-md hover:bg-dosocket-surface/50 transition-all duration-500 ease-in-out">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-dosocket-subtext hover:text-dosocket-accent transition-all duration-300 relative group py-1"
              >
                <span className="relative z-10 group-hover:-translate-y-[2px] inline-block transition-transform duration-300 ease-out">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-dosocket-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="outline" className="px-5 py-2 text-sm backdrop-blur-sm" onClick={() => handleNavClick('#contact')}>Let's Talk</Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-dosocket-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dosocket-dark/95 backdrop-blur-xl border-b border-dosocket-border absolute w-full left-0 top-full">
          <div className="px-6 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavClick(link.href)}
                className="text-xl font-display text-dosocket-subtext hover:text-dosocket-accent text-left"
              >
                {link.name}
              </button>
            ))}
            <Button className="w-full" onClick={() => handleNavClick('#contact')}>Let's Talk</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;