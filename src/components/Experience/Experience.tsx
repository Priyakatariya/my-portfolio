import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { experience } from '../../data/experience';

const ExperienceSection = styled.section`
  padding: 10%;
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 700;
  color: var(--light-slate);
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
    background-color: var(--blue-accent);
  }
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const JobCard = styled(motion.div)`
  background-color: var(--dark-slate);
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    width: 2px;
    height: 100%;
    background-color: var(--blue-accent);
  }
`;

const JobTitle = styled.h3`
  font-size: 2.4rem;
  color: var(--light-slate);
  margin-bottom: 0.5rem;
`;

const CompanyAndDuration = styled.p`
  font-size: 1.6rem;
  color: var(--slate);
  margin-bottom: 1.5rem;
`;

const DescriptionList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  li {
    position: relative;
    margin-bottom: 1rem;
    padding-left: 25px;
    color: var(--slate);
    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--blue-accent);
      font-size: 1.6rem;
    }
  }
`;

const Experience: React.FC = () => {
  return (
    <ExperienceSection id="experience">
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        My Experience
      </SectionTitle>
      <TimelineContainer>
        {experience.map((job, index) => (
          <JobCard
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <JobTitle>{job.title}</JobTitle>
            <CompanyAndDuration>
              {job.company} • {job.duration}
            </CompanyAndDuration>
            <DescriptionList>
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </DescriptionList>
          </JobCard>
        ))}
      </TimelineContainer>
    </ExperienceSection>
  );
};

export default Experience;