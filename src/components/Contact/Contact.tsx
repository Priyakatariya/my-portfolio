import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
const ContactSection = styled.section.attrs({ id: 'contact' })`
  padding: 10%; /* slightly reduced padding */
  max-width: 950px; /* narrower than before */
  min-height: 500px; /* ensures some vertical space */
  margin: 0 auto;
  background: linear-gradient(
    135deg,
    rgba(0, 123, 255, 0.3),
    rgba(0, 200, 83, 0.3)
  ); /* subtle transparent gradient */
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(6px); /* soft glass effect */
  border: 2px solid rgba(255, 255, 255, 0.1); /* subtle border */

  display: flex;
  flex-direction: column;
  justify-content: center; /* vertically center content */
`;


const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  color: #1a1a1a; /* dark text */
  margin-bottom: 4rem;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, #007bff, #00c853); /* gradient underline */
  }
`;

const Description = styled(motion.p)`
  color: #333333;
  margin-bottom: 4rem;
  font-size: 1.7rem;
  text-align: center;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;

  a {
    color: #1a1a1a;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #007bff; /* hover accent */
      transform: scale(1.2) rotate(10deg); /* hover motion effect */
    }
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection>
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </SectionTitle>

      <Description
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I am currently open to new opportunities. Whether you have a question
        or just want to say hi, I'll do my best to get back to you!
      </Description>

      <SocialLinks
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=priyakatiya2007@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          href="https://linkedin.com/in/priya-27a522333"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          href="https://github.com/Priyakatariya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </motion.a>
      </SocialLinks>
    </ContactSection>
  );
};

export default Contact;
