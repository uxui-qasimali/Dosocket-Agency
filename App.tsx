import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Sections/Hero';
import LogoTicker from './components/Sections/LogoTicker';
import About from './components/Sections/About';
import Services from './components/Sections/Services';
import Projects from './components/Sections/Projects';
import Testimonials from './components/Sections/Testimonials';
import Achievements from './components/Sections/Achievements';
import FAQ from './components/Sections/FAQ';
import Contact from './components/Sections/Contact';
import Footer from './components/Footer';
import BackToTop from './components/UI/BackToTop';

const App: React.FC = () => {
  return (
    <div className="font-body antialiased bg-dosocket-main selection:bg-dosocket-accent selection:text-dosocket-dark">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <LogoTicker />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Achievements />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;