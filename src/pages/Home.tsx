import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

const PageWrapper = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
`;

const Home: React.FC = () => {
  return (
    <PageWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Contact />
    </PageWrapper>
  );
};

export default Home;
