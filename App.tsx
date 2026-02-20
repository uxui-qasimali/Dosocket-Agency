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
import Team from './components/Sections/Team';
import FAQ from './components/Sections/FAQ';
import Contact from './components/Sections/Contact';
import Footer from './components/Footer';
import BackToTop from './components/UI/BackToTop';
import ProjectDetail from './components/ProjectDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import ServicesPage from './components/ServicesPage';

import SplashCursor from './components/UI/SplashCursor';

const HomePage: React.FC = () => {
  return (
    <>
      <SplashCursor />
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
        <Team />
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
          <Route path="/services" element={
             <>
                <Navbar />
                <ServicesPage />
                <Footer />
             </>
          } />
          <Route path="/privacy-policy" element={
             <>
                <Navbar />
                <PrivacyPolicy />
                <Footer />
             </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
