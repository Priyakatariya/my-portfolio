import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 6rem 5%;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  color: #fff;
  
  &::after {
    content: '';
    display: block;
    height: 1px;
    width: 300px;
    background: rgba(167, 139, 250, 0.3);
    margin-left: 20px;
    
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TextContent = styled(motion.div)`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  line-height: 1.7;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  strong {
    color: #a78bfa;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Title>About Me</Title>
        <ContentGrid>
          <TextContent>
            <p>
              Hi, I'm <strong>Priya</strong>—a driven Software Developer, open-source enthusiast, and competitive programmer currently pursuing my B.Tech in Information Technology at <strong>NIT Kurukshetra</strong>.
            </p>
            <p>
              I specialize in architecting scalable, full-stack web applications using <strong>React.js, Next.js, Node.js, and MongoDB</strong>, alongside exploring the depths of <strong>Machine Learning</strong> and predictive analytics. My core focus is always on writing clean, modular code, optimizing performance, and crafting incredibly intuitive user experiences.
            </p>
            <p>
              My competitive programming journey is a testament to my love for complex problem-solving. Having conquered <strong>over 1,800+ DSA problems</strong> across LeetCode, CodeChef, and Codeforces, I thrive under pressure and deeply enjoy translating intricate algorithmic challenges into highly optimized solutions.
            </p>
            <p>
              Beyond the code editor, I actively contribute to the tech ecosystem. I proudly secured <strong>Rank 26 globally</strong> in the Social Summer of Code (SSoC '25) and currently serve as a mentor for the GirlScript Summer of Code, where I review pull requests, guide emerging developers, and foster open-source collaboration.
            </p>
            <p>
              I am relentlessly curious, always eager to collaborate with dynamic teams, and passionate about leveraging cutting-edge technologies to build software that creates genuine, real-world value.
            </p>
          </TextContent>
        </ContentGrid>
      </motion.div>
    </AboutContainer>
  );
};

export default About;
