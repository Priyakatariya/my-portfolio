import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 8% 5%;
  max-width: 1100px; /* similar width to AboutSection */
  margin: 0 auto;
  background: linear-gradient(
    135deg,
    rgba(26, 131, 180, 0.3),
    rgba(0, 200, 83, 0.3)
  ); /* subtle transparent gradient */
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(6px); /* soft glass effect */
  border: 2px solid rgba(255, 255, 255, 0.1);
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 700;
  color: #1a1a1a; /* dark text for readability */
  margin-bottom: 5rem;
  position: relative;
  text-align: center;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, #007bff, #00c853); /* gradient underline */
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05); /* subtle transparent card */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 2.2rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #333333;
  margin-bottom: 1.5rem;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.li`
  background-color: rgba(255, 255, 255, 0.1);
  color: #9ccdb3ff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1.4rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  a {
    color: #007bff;
    font-size: 2rem;
    transition: color 0.3s ease;
    &:hover {
      color: #1a1a1a;
    }
  }
`;

const Projects: React.FC = () => {
    return (
        <ProjectsSection id="projects">
            <SectionTitle
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                My Projects
            </SectionTitle>
            <ProjectGrid>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <ProjectImage src={project.image} alt={project.title} />
                        <ProjectContent>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectDescription>{project.description}</ProjectDescription>
                            <TechList>
                                {project.technologies.map((tech, i) => (
                                    <TechTag key={i}>{tech}</TechTag>
                                ))}
                            </TechList>
                            <ProjectLinks>
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                    <FaExternalLinkAlt />
                                </a>
                            </ProjectLinks>
                        </ProjectContent>
                    </ProjectCard>
                ))}
            </ProjectGrid>
        </ProjectsSection>
    );
};

export default Projects;