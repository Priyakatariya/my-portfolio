import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const Section = styled.section`
  padding: 80px 5%;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
` ;

const Title = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #06b6d4, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Desc = styled(motion.p)`
  color: rgba(255,255,255,0.5);
  font-size: 1.1rem;
  max-width: 500px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

const EmailBtn = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 14px;
  text-decoration: none;
  margin-bottom: 3rem;
  transition: opacity 0.25s ease, transform 0.25s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-3px);
  }
`;

const SocialRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const SocialCard = styled(motion.a)<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.5rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;

  svg { font-size: 1.1rem; color: ${({ color }) => color}; }

  &:hover {
    border-color: ${({ color }) => color};
    color: #fff;
    transform: translateY(-3px);
    background: rgba(255,255,255,0.07);
  }
`;

const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </Title>
      <Desc
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        I'm open to new opportunities, collaborations, or just a friendly chat. 
        Feel free to reach out!
      </Desc>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <EmailBtn href="mailto:priyakatariya2007@gmail.com">
          <FaEnvelope /> Say Hello!
        </EmailBtn>
      </motion.div>
      <SocialRow
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <SocialCard href="mailto:priyakatariya2007@gmail.com" color="#06b6d4">
          <FaEnvelope /> priyakatariya2007@gmail.com
        </SocialCard>
        <SocialCard href="https://linkedin.com/in/priya-27a522333" target="_blank" rel="noopener noreferrer" color="#0077b5">
          <FaLinkedin /> LinkedIn
        </SocialCard>
        <SocialCard href="https://github.com/priyakatariya" target="_blank" rel="noopener noreferrer" color="#f0f6fc">
          <FaGithub /> GitHub
        </SocialCard>
        <SocialCard href="tel:+918865020721" color="#10b981">
          <FaPhone /> +91-886-5020-721
        </SocialCard>
      </SocialRow>
    </Section>
  );
};

export default Contact;
