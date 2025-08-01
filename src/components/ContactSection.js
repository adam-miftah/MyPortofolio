import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa'; 
import '../CSS/styles.css';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const yourEmail = 'adammiftah196@gmail.com'; 
    const subject = `Pesan dari Portofolio - ${formData.name}`;
    const body = `${formData.message}

---
Dikirim oleh: ${formData.name}
Email: ${formData.email}`;
    const mailtoUrl = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };
  
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6 } } };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <h2 className="section-heading">Hubungi Saya</h2>
          <p className="section-subheading">
            Punya pertanyaan atau ingin berkolaborasi? Kirimkan pesan langsung ke email saya.
          </p>
          
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              <motion.div variants={containerVariants}>
                <motion.div variants={itemVariants} className="contact-form-wrapper">
                  <Form onSubmit={handleSubmit}>
                    <motion.div variants={itemVariants}>
                      <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Control 
                          type="text" 
                          name="name" 
                          placeholder="Nama Anda" 
                          className="contact-form-input"
                          value={formData.name}
                          onChange={handleChange}
                          required 
                        />
                      </Form.Group>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control 
                          type="email" 
                          name="email" 
                          placeholder="Email Anda" 
                          className="contact-form-input"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <Form.Group className="mb-3" controlId="formGroupMessage">
                        <Form.Control 
                          as="textarea" 
                          rows={5} 
                          name="message"
                          placeholder="Pesan Anda" 
                          className="contact-form-input"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </motion.div>
                    <motion.div variants={itemVariants} className="d-grid">
                      <Button variant="primary" type="submit" className="contact-submit-btn">
                        <FaEnvelope /> &nbsp;Kirim via Email
                      </Button>
                    </motion.div>
                  </Form>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}

export default ContactSection;