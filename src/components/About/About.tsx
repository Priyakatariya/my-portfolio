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

const ImageContainer = styled(motion.div)`
  position: relative;
  max-width: 300px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid #38bdf8;
    border-radius: 12px;
    z-index: 0;
    transition: all 0.3s ease;
  }
  
  &:hover::before {
    top: 15px;
    left: 15px;
    right: -15px;
    bottom: -15px;
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border: 1px solid rgba(167, 139, 250, 0.3);
  box-shadow: 0 0 40px rgba(167, 139, 250, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
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
              Hi, I’m Priya — a passionate Software Developer and competitive programmer pursuing B.Tech in Information Technology at National Institute of Technology Kurukshetra with a CGPA of 8.96.
            </p>
            <p>
              I specialize in building scalable full-stack web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and Firebase. I enjoy developing products that combine clean architecture, performance optimization, and intuitive user experiences.
            </p>
            <p>
              Beyond development, I am highly active in open source and technical communities. I ranked among the Top Contributors in Social Summer of Code and currently mentor developers in GirlScript Summer of Code, where I review pull requests, guide contributors, and promote scalable development practices.
            </p>
            <p>
              I am also passionate about problem solving and algorithmic thinking, having solved 1700+ DSA problems across platforms including LeetCode, CodeChef, and Codeforces. My consistent involvement in competitive programming has strengthened my analytical thinking, debugging skills, and ability to write optimized solutions under pressure.
            </p>
            <p>
              I love working on impactful products, collaborating with teams, and continuously learning new technologies to build software that creates real-world value.
            </p>
          </TextContent>
        </ContentGrid>
      </motion.div>
    </AboutContainer>
  );
};

export default About;
