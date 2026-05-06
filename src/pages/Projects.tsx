import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ProjectsComp from '../components/Projects/Projects';

const PageWrapper = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  padding-top: 40px;
`;

const Projects: React.FC = () => {
  return (
    <PageWrapper
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsComp />
    </PageWrapper>
  );
};

export default Projects;
