import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../CSS/styles.css';

const socialIcons = [
  { icon: <FaLinkedin />, href: "#" },
  { icon: <FaGithub />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
];

function SocialSidebar() {
  return (
    <motion.div 
      className="social-sidebar"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      {socialIcons.map((social, index) => (
        <motion.a 
          key={index} 
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.3, color: '#9333ea' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default SocialSidebar;