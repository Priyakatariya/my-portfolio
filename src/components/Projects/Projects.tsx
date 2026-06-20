import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../../data/projects';


const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 5%;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 8vw, 3rem);
  font-weight: 800;
  margin-bottom: 3.5rem;
  text-align: center;
  background: linear-gradient(135deg, #ec4899, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(15, 15, 25, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(236, 72, 153, 0.2);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(236, 72, 153, 0.5);
    box-shadow: 0 15px 40px -10px rgba(236, 72, 153, 0.25);
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  line-height: 1.3;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.2rem;
    transition: color 0.2s ease, transform 0.2s ease;
    
    &:hover {
      color: #ec4899;
      transform: translateY(-2px);
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
`;

const TechBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #ec4899;
  background: rgba(236, 72, 153, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  border: 1px solid rgba(236, 72, 153, 0.2);
`;

const ProjectDescription = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;

  li {
    margin-bottom: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.6;
    position: relative;
    padding-left: 1.2rem;
    
    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #8b5cf6;
      font-size: 1rem;
      line-height: 1.6;
    }
  }
`;

// Use data from src/data/projects.ts


const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <Title>Featured Projects</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -10 }}
          >
            <CardContent>
              <ProjectHeader>
                <ProjectTitle>
                  {project.title} <br/>
                  <span style={{ fontSize: '1rem', color: '#8b5cf6', fontWeight: 500 }}>{project.subtitle}</span>
                </ProjectTitle>
                <ProjectLinks>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                </ProjectLinks>
              </ProjectHeader>
              <TechStack>
                {project.technologies.map((tech, i) => (
                  <TechBadge key={i}>{tech}</TechBadge>
                ))}
              </TechStack>
              <ProjectDescription>
                {project.highlights ? (
                  project.highlights.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))
                ) : (
                  <li>{project.description}</li>
                )}
              </ProjectDescription>
            </CardContent>

          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;