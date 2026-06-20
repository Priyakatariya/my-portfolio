import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

const HeroContainer = styled.section`
  min-height: calc(100vh - 65px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10;
  
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Greeting = styled(motion.p)`
  font-size: 1.2rem;
  color: #a78bfa;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  color: #fff;
  letter-spacing: -0.02em;
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #a78bfa, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: rgba(255, 255, 255, 0.7);
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;

  strong {
    color: #fff;
    font-weight: 600;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const SocialIcon = styled.a`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
  
  &:hover {
    color: #38bdf8;
    transform: translateY(-5px);
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background: transparent;
  border: 1px solid #a78bfa;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(167, 139, 250, 0.1);
    box-shadow: 0 0 20px rgba(167, 139, 250, 0.4);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <ContentWrapper
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Greeting variants={itemVariants}>Hi, my name is</Greeting>
        <Name variants={itemVariants}>Priya.</Name>
        <Subtitle variants={itemVariants}>I build things for the web.</Subtitle>
        
        <Description variants={itemVariants}>
          I'm a B.Tech IT student at <strong>NIT Kurukshetra</strong> (CGPA 8.96) specializing in building exceptional digital experiences. 
          Currently, I'm focused on full-stack development, open-source contributions, and tackling complex algorithmic challenges.
        </Description>

        <SocialLinks variants={itemVariants}>
          <SocialIcon href="https://github.com/priyakatariya" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/in/priya-27a522333" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="mailto:priyakatariya2007@gmail.com" aria-label="Email">
            <FaEnvelope />
          </SocialIcon>
          <SocialIcon href="https://codolio.com/profile/Priyakatariya" target="_blank" rel="noreferrer" aria-label="Codolio">
            <FaCode />
          </SocialIcon>
        </SocialLinks>

        <motion.div variants={itemVariants}>
          <CTAButton href="mailto:priyakatariya2007@gmail.com">
            Get In Touch
          </CTAButton>
        </motion.div>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
