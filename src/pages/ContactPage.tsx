import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Contact from '../components/Contact/Contact';

const PageWrapper = styled(motion.div)`
  width: 100%;
  min-height: calc(100vh - 65px);
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactPage: React.FC = () => {
  return (
    <PageWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Contact />
    </PageWrapper>
  );
};

export default ContactPage;
