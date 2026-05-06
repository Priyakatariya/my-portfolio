import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import SkillsComp from '../components/Skills/Skills';

const PageWrapper = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  padding-top: 40px;
`;

const Skills: React.FC = () => {
  return (
    <PageWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <SkillsComp />
    </PageWrapper>
  );
};

export default Skills;
