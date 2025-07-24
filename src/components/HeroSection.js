import React, { useCallback } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import particlesConfig from './particles-config';
import '../CSS/styles.css';

function HeroSection() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); 
  }, []);

  const name = "ADAM MIFTAHUL FALAH";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="hero-section">
      <Particles id="tsparticles" init={particlesInit} options={particlesConfig} />
      <Container className="h-100 position-relative" style={{ zIndex: 2 }}>
        <Row className="h-100 justify-content-center align-items-center">
          <Col md={10} className="text-center">
            
            <motion.h1 
              className="hero-title"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              HEY, I'M&nbsp;
              {name.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <Button href="#projects" size="lg" className="hero-button">
                PROJECTS
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;