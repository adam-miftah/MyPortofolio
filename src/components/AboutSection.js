// components/AboutSection.js (Dengan Warna Ikon Kustom)

import React from 'react';
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
      color: "#61DAFB", // Warna biru React
      animation: {
        animate: { scale: [1, 1.1, 1] },
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
      }
    },
    { 
      icon: <FaJsSquare />, 
      name: "JavaScript",
      color: "#F7DF1E", // Warna kuning JavaScript
      animation: {
        animate: { rotate: [0, 5, -5, 5, 0] },
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
      }
    },
    { 
      icon: <FaNodeJs />, 
      name: "Node.js",
      color: "#339933", // Warna hijau Node.js
      animation: {
        animate: { opacity: [1, 0.7, 1] },
        transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
      }
    },
    { 
      icon: <FaHtml5 />, 
      name: "HTML5",
      color: "#E34F26", // Warna oranye HTML5
      animation: {
        animate: { y: [0, -7, 0] },
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
      }
    },
    { 
      icon: <FaCss3Alt />, 
      name: "CSS3",
      color: "#1572B6", // Warna biru CSS3
       animation: {
        animate: { y: [0, -7, 0] },
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
      }
    },
    { 
      icon: <FaBootstrap />, 
      name: "Bootstrap",
      color: "#6e2af4", // Warna ungu Bootstrap
      animation: {
        animate: { scale: [1, 1.1, 1] },
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
      }
    },
    { 
      icon: <FaPhp size={50} />, 
      name: "PHP",
      color: "#7b7eb4", // Warna ungu kebiruan PHP
      animation: {
        animate: { scale: [1, 1.1, 1] },
        transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }
      }
    },
    { 
      icon: <FaLaravel/>, 
      name: "Laravel",
      color: "#f5370b", // Warna ungu kebiruan PHP
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
      color: "#42b883", // Warna kuning JavaScript
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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
          <Row className="align-items-start">
            <Col lg={5} className="text-center text-lg-start">
              <motion.div className="about-image-container" variants={itemVariants}>
                <Image src={myImageUrl} fluid alt="Adam Miftahul Falah" className='rounded'/>
              </motion.div>
            </Col>
            <Col lg={7} className="mt-5 mt-lg-0">
              <motion.h2 className="about-heading" variants={itemVariants}>
                Tentang Saya
              </motion.h2>
              
              {/* === TEKS BARU DIMULAI DARI SINI === */}
              <motion.p className="about-subheading" variants={itemVariants}>
                Mentransformasi Ide Menjadi Pengalaman Digital yang Interaktif.
              </motion.p>
              <motion.p className="about-text" variants={itemVariants}>
                Halo! Saya Adam Miftahul Falah. Sejak baris kode pertama, saya menemukan gairah dalam proses mengubah konsep kompleks menjadi antarmuka web yang intuitif dan fungsional. Sebagai seorang Web Developer, saya berfokus pada pengembangan solusi digital yang tidak hanya terlihat bagus, tetapi juga berjalan dengan performa tinggi dan memberikan nilai nyata bagi pengguna.
              </motion.p>
              <motion.p className="about-text" variants={itemVariants}>
                Dengan keahlian yang membentang dari <i>front-end</i> menggunakan React dan Vue, hingga <i>back-end</i> dengan Node.js dan PHP/Laravel, saya menikmati setiap tahap dalam siklus hidup pengembangan produk. Saya percaya bahwa kode yang bersih, arsitektur yang solid, dan komunikasi yang terbuka adalah fondasi untuk menciptakan produk yang skalabel dan mudah dipelihara.
              </motion.p>
            </Col>
          </Row>
        </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="skills-heading text-center">Keahlian Saya</h3>
                <motion.div className="skills-grid" variants={containerVariants}>
                  {skills.map((skill, index) => (
                    <motion.div key={index} className="skill-item" variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }}>
                      
                      {/* TAMBAHKAN INLINE STYLE UNTUK MENGATUR WARNA IKON */}
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