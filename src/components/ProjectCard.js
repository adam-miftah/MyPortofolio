import { Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaBootstrap, FaPhp, FaLaravel, FaVuejs, RiTailwindCssFill } from 'react-icons/fa';
import { SiMysql, SiPython, SiJupyter } from "react-icons/si"; 

const techColorMap = {
  REACT: "#61DAFB", JAVASCRIPT: "#F7DF1E", NODEJS: "#339933",
  HTML5: "#E34F26", HTML: "#E34F26", CSS3: "#1572B6", CSS: "#1572B6",
  BOOTSTRAP: "#7952B3", PHP: "#777BB4", LARAVEL: "#FF2D20",
  MYSQL: "#4479A1", VUEJS: "#4FC08D", VUE: "#4FC08D",
  PYTHON: "#3776AB", JUPYTER: "#F37626", BLADE: "#FF2D20", 
  DEFAULT: "#6c757d",
};

const techIconMap = {
  REACT: <FaReact />, JAVASCRIPT: <FaJsSquare />, NODEJS: <FaNodeJs />,
  HTML: <FaHtml5 />, CSS: <FaCss3Alt />, BOOTSTRAP: <FaBootstrap />,
  PHP: <FaPhp />, LARAVEL: <FaLaravel />, MYSQL: <SiMysql />,
  VUE: <FaVuejs />, PYTHON: <SiPython />, JUPYTER: <SiJupyter />,
  BLADE: <FaLaravel />, TAILWIND: <RiTailwindCssFill />
};


const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

function ProjectCard({ title, description, imgSrc, tech, githubLink, demoLink }) {
  return (
    <Col lg={4} md={6} className="mb-4 d-flex align-items-stretch">
      <motion.div variants={itemVariants} className="w-100">
        <Card className="project-card h-100">
          <a href={demoLink || githubLink} target="_blank" rel="noopener noreferrer" className="project-image-wrapper">
            <Card.Img variant="top" src={imgSrc} className="project-card-img" />
            <div className="project-image-overlay"><FaExternalLinkAlt size={40} /></div>
          </a>
          <Card.Body className="d-flex flex-column">
            <Card.Title as="h5" className="project-title text-white">{title}</Card.Title>
            <Card.Text className="project-description">{description}</Card.Text>
            <div className="mt-auto d-flex justify-content-between align-items-center">
              <div className="project-tech-tags">
                
                {tech.slice(0, 5).map((t, index) => {
                  const upperCaseTech = t.toUpperCase().replace('.', '');
                  const icon = techIconMap[upperCaseTech];
                  const color = techColorMap[upperCaseTech] || techColorMap.DEFAULT;

                  return icon ? (
                    <div 
                      key={index} 
                      className="project-tech-icon" 
                      style={{ color: color }}
                      title={t}
                    >
                      {icon}
                    </div>
                  ) : null;
                })}

              </div>
              <div className="project-links">
                <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                {demoLink && (<a href={demoLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><FaExternalLinkAlt /></a>)}
              </div>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
}

export default ProjectCard;