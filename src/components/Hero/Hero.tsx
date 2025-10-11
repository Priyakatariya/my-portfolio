import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10%;
`;

const Intro = styled(motion.p)`
  color: var(--blue-accent);
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const Name = styled(motion.h1)`
  color: var(--light-slate);
  font-size: 6.4rem;
  font-weight: 700;
  line-height: 1;
`;

const Tagline = styled(motion.h2)`
  color: var(--slate);
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  color: var(--slate);
  font-size: 1.8rem;
  max-width: 600px;
  line-height: 1.5;
`;

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <Intro variants={variants} transition={{ duration: 0.5, delay: 0.5 }}>
          Hi, my name is
        </Intro>
        <Name variants={variants} transition={{ duration: 0.5, delay: 0.7 }}>
          Priya.
        </Name>
        <Tagline variants={variants} transition={{ duration: 0.5, delay: 0.9 }}>
          I build things for the web.
        </Tagline>
        <Description variants={variants} transition={{ duration: 0.5, delay: 1.1 }}>
          I am a passionate frontend developer specializing in building
          exceptional digital experiences. Currently, I am focused on building
          responsive and performant web applications with a strong emphasis on user
          interface design.
        </Description>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;