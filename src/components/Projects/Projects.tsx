import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Section = styled.section`
  padding: 80px 5%;
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: rgba(255,255,255,0.5);
  margin-bottom: 4rem;
  font-size: 1.1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(124,58,237,0.4);
    box-shadow: 0 20px 60px rgba(124,58,237,0.15);
  }
`;

const CardGradientTop = styled.div<{ gradient: string }>`
  height: 6px;
  background: ${({ gradient }) => gradient};
`;

const CardBody = styled.div`
  padding: 1.8rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: rgba(255,255,255,0.95);
  margin: 0 0 0.3rem;
`;

const ProjectSubtitle = styled.p`
  font-size: 0.85rem;
  color: rgba(255,255,255,0.4);
  margin: 0 0 1rem;
  font-style: italic;
`;

const Description = styled.p`
  font-size: 0.92rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.65;
  margin: 0 0 1.5rem;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(99,102,241,0.15);
  border: 1px solid rgba(99,102,241,0.3);
  color: #a5b4fc;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinkBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.7);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  background: rgba(255,255,255,0.04);

  &:hover {
    background: rgba(124,58,237,0.2);
    border-color: #7c3aed;
    color: #c4b5fd;
  }
`;

const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Things I've built — from idea to deployment
      </Subtitle>
      <Grid>
        {projects.map((project, i) => (
          <Card
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <CardGradientTop gradient={project.gradient} />
            <CardBody>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
              <Description>{project.description}</Description>
              <TechList>
                {project.technologies.map((tech, j) => (
                  <TechTag key={j}>{tech}</TechTag>
                ))}
              </TechList>
              <Links>
                {project.githubLink && (
                  <LinkBtn href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </LinkBtn>
                )}
                {project.liveLink && project.liveLink !== '#' && (
                  <LinkBtn href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live
                  </LinkBtn>
                )}
              </Links>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;