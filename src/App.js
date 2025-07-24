// App.js

import React, { useState, useEffect } from 'react'; 
import PortfolioNavbar from './components/PortfolioNavbar';
import HeroSection from './components/HeroSection';
import SocialSidebar from './components/SocialSidebar';
import './CSS/styles.css';

const AboutSection = () => <section id="about" style={{height: '100vh', padding: '60px'}}><h2>About Me</h2></section>
const ProjectsSection = () => <section id="projects" style={{height: '100vh', padding: '60px'}}><h2>My Projects</h2></section>
const ContactSection = () => <section id="contact" style={{height: '100vh', padding: '60px'}}><h2>Contact Me</h2></section>

function App() {
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    // Fungsi ini akan dijalankan saat user scroll
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
            break; // Hentikan loop jika sudah ketemu
          }
        }
      }
    };
    
    // Aktifkan overflow-y jika Anda punya section lain
    document.body.style.overflowY = 'auto';

    window.addEventListener('scroll', handleScroll);
    // Membersihkan event listener saat komponen dibongkar
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