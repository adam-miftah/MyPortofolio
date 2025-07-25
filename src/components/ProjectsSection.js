// components/ProjectsSection.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Spinner, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import '../CSS/styles.css';

// KONFIGURASI PROYEK ANDA (STRUKTUR BARU)
const GITHUB_USERNAME = "adam-miftah";

// Definisikan setiap proyek dengan teknologinya secara manual
const projectsConfig = [
  { 
    name: "app-sistem-akademik",
    technologies: ["PHP", "JavaScript", "MySQL", "Laravel", "Bootstrap"]
  },
  {
    name: "inventory-toko-material",
    technologies: ["PHP", "Laravel", "MySQL"]
  },
  {
    name: "lawfirm-website",
    technologies: ["HTML", "CSS","JavaScript", "React", "Bootstrap"]
  },
];

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      
      const promises = projectsConfig.map(config =>
        fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${config.name}`, {
          headers: { 'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}` }
        }).then(response => {
          if (!response.ok) {
            throw new Error(`Repo: ${config.name} tidak ditemukan.`);
          }
          return response.json();
        }).then(repoData => ({ // Gabungkan data dari API dengan data manual kita
          ...repoData,
          manualTech: config.technologies
        }))
      );

      try {
        const results = await Promise.all(promises);
        
        const fetchedProjects = results.map(repoData => ({
          title: repoData.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: repoData.description || "Tidak ada deskripsi.",
          imgSrc: `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoData.name}/main/cover.png`,
          tech: repoData.manualTech, // <-- Gunakan daftar teknologi manual
          githubLink: repoData.html_url,
          demoLink: repoData.homepage || repoData.html_url,
        }));
        
        setProjects(fetchedProjects);
      } catch (err) {
        console.error("Detail Error GitHub API:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  
  const renderContent = () => {
    if (loading) { return <div className="text-center"><Spinner animation="border" variant="light" /><p className="mt-2">Mengambil proyek...</p></div>; }
    if (error) { return <Alert variant="danger">Gagal memuat proyek: {error}</Alert>; }
    if (projects.length === 0) { return <Alert variant="warning">Tidak ada proyek.</Alert>; }
    return (
      <motion.div className="projects-grid" variants={containerVariants} initial="hidden" animate="visible">
        <Row>{projects.map((project, index) => (<ProjectCard key={index} {...project} />))}</Row>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-heading">Proyek Saya</h2>
        <p className="section-subheading">Beberapa pekerjaan yang saya ambil langsung dari repositori GitHub saya.</p>
        {renderContent()}
      </Container>
    </section>
  );
}

export default ProjectsSection;