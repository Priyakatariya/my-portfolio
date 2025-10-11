import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = styled.section.attrs({ id: 'contact' })`
  padding: 10%;
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 700;
  color: var(--light-slate);
  margin-bottom: 5rem;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--blue-accent);
  }
`;

const Description = styled(motion.p)`
  color: var(--slate);
  margin-bottom: 4rem;
  font-size: 1.8rem;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 5rem;

  a {
    color: var(--light-slate);
    font-size: 3rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--blue-accent);
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
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </SectionTitle>

      <Description
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I am currently open to new opportunities. Whether you have a question
        or just want to say hi, I'll do my best to get back to you!
      </Description>

      <SocialLinks
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {/* Opens Gmail web composer */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=priyakatiya2007@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://linkedin.com/in/priya-27a522333"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Priyakatariya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </SocialLinks>
    </ContactSection>
  );
};

export default Contact;
