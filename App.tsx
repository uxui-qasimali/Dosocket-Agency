import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Sections/Hero';
import LogoTicker from './components/Sections/LogoTicker';
import About from './components/Sections/About';
import Services from './components/Sections/Services';
import MockupSlider from './components/Sections/MockupSlider';
import Projects from './components/Sections/Projects';
import Testimonials from './components/Sections/Testimonials';
import Achievements from './components/Sections/Achievements';
import FAQ from './components/Sections/FAQ';
import Contact from './components/Sections/Contact';
import Footer from './components/Footer';
import BackToTop from './components/UI/BackToTop';
import ProjectDetail from './components/ProjectDetail';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <LogoTicker />
        <About />
        <Services />
        <MockupSlider />
        <Projects />
        <Testimonials />
        <Achievements />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-body antialiased bg-dosocket-main selection:bg-dosocket-accent selection:text-dosocket-dark">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
