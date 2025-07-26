import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../CSS/styles.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="footer-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Container>
        <Row className="align-items-center text-center">
          <Col>
            <h4 className="footer-name">ADAM MIFTAHUL FALAH</h4>
            <p className="footer-tagline">Junior Web Developer | Selalu Belajar & Berkembang</p>
            <div className="footer-social-icons my-4">
              <a href="https://github.com/adam-miftah" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/adam-miftah" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/_adammiftah" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://x.com/_adammiftah" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="mailto:adammiftah196@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
            <p className="footer-copyright">
              &copy; {currentYear} Adam Miftahul Falah. Dibuat dengan React.
            </p>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
}

export default Footer;
