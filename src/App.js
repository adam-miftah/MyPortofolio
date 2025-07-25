import React, { useState, useEffect } from 'react';
import PortfolioNavbar from './components/PortfolioNavbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SocialSidebar from './components/SocialSidebar';
import './CSS/styles.css';

const ContactSection = () => <section id="contact" style={{ height: '100vh', padding: '60px' }}><h2>Contact Me</h2></section>

function App() {
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#home', '#about', '#projects', '#contact'];
      const scrollPosition = window.scrollY + 150;
      for (const sectionId of sections) {
        const sectionElement = document.querySelector(sectionId);
        if (sectionElement) {
          if (
            scrollPosition >= sectionElement.offsetTop &&
            scrollPosition < sectionElement.offsetTop + sectionElement.offsetHeight
          ) {
            setActiveLink(sectionId);
            break;
          }
        }
      }
    };

    // Ganti ini jika Anda ingin bisa scroll
    document.body.style.overflowY = 'auto';

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div>
      <PortfolioNavbar activeLink={activeLink} />
      <SocialSidebar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;