import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { SiMysql } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaBootstrap, FaPhp, FaLaravel, FaVuejs } from 'react-icons/fa';
import '../CSS/styles.css';

const myImageUrl = '/image/profile.png'; 

function AboutSection() {
  const skills = [
    { 
      icon: <FaReact />, 
      name: "React",
      color: "#61DAFB", 
      animation: {
        animate: { scale: [1, 1.1, 1] },
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
      }
    },
    { 
      icon: <FaJsSquare />, 
      name: "JavaScript",
      color: "#F7DF1E",
      animation: {
        animate: { rotate: [0, 5, -5, 5, 0] },
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
      }
    },
    { 
      icon: <FaNodeJs />, 
      name: "Node.js",
      color: "#339933", 
      animation: {
        animate: { opacity: [1, 0.7, 1] },
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
      }
    },
    { 
      icon: <FaHtml5 />, 
      name: "HTML5",
      color: "#E34F26",
      animation: {
        animate: { y: [0, -7, 0] },
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
      }
    },
    { 
      icon: <FaCss3Alt />, 
      name: "CSS3",
      color: "#1572B6",
       animation: {
        animate: { y: [0, -7, 0] },
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
      }
    },
    { 
      icon: <FaBootstrap />, 
      name: "Bootstrap",
      color: "#6e2af4",
      animation: {
        animate: { scale: [1, 1.1, 1] },
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
      }
    },
    { 
      icon: <FaPhp size={50} />, 
      name: "PHP",
      color: "#7b7eb4",
      animation: {
        animate: { scale: [1, 1.1, 1] },
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
      }
    },
    { 
      icon: <FaLaravel/>, 
      name: "Laravel",
      color: "#f5370b", 
      animation: {
        animate: { opacity: [1, 0.7, 1] },
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
      }
    },
    { 
      icon: <SiMysql size={50}/>, 
      name: "MySQL",
      color: "#3f6e92", 
      animation: {
        animate: { scale: [1, 1.1, 1] },
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
      }
    },
    { 
      icon: <FaVuejs/>, 
      name: "Vue",
      color: "#42b883", 
      animation: {
        animate: { rotate: [0, 5, -5, 5, 0] },
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
      }
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="about-section">
      <Container>
        <h2 className="section-heading">Tentang Saya</h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
          <Row className="align-items-start">
            <Col lg={5} className="text-center text-lg-start">
              <motion.div className="about-image-container" variants={itemVariants}>
                <Image src={myImageUrl} fluid alt="Adam Miftahul Falah" className='rounded'/>
              </motion.div>
            </Col>
            <Col lg={7} className="mt-5 mt-lg-0">
              <motion.p className="about-subheading" variants={itemVariants}>
                Semangat Belajar dan Berkembang di Dunia Web Development.
              </motion.p>
              <motion.p className="about-text" variants={itemVariants}>
                Halo! Saya Adam Miftahul Falah, seorang Junior Web Developer yang antusias dalam membangun dan mengembangkan aplikasi web. Perjalanan saya di dunia koding didorong oleh rasa ingin tahu yang besar untuk memecahkan masalah dan menciptakan solusi digital yang bermanfaat.
              </motion.p>
              <motion.p className="about-text" variants={itemVariants}>
                Sebagai seorang developer di awal karier, saya sangat termotivasi untuk belajar, berkolaborasi dengan tim, dan menerapkan fondasi <i>front-end</i> dan <i>back-end</i> yang saya miliki untuk berkontribusi pada proyek-proyek yang menantang. Saya percaya bahwa kemauan untuk terus belajar adalah kunci utama untuk bertumbuh di industri teknologi yang dinamis ini.
              </motion.p>
            </Col>
          </Row>
        </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="skills-heading text-center text-white mt-5 mb-4">Keahlian Saya</h3>
                <motion.div className="skills-grid" variants={containerVariants}>
                  {skills.map((skill, index) => (
                    <motion.div key={index} className="skill-item" variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }}>
                      
                      <span className="skill-icon" style={{ color: skill.color }}>
                        <motion.div
                          animate={skill.animation.animate}
                          transition={skill.animation.transition}
                        >
                          {skill.icon}
                        </motion.div>
                      </span>

                      <span className="skill-name">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
      </Container>
    </section>
  );
}

export default AboutSection;