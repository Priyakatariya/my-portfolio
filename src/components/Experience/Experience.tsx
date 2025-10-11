import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { experience } from '../../data/experience';

const ExperienceSection = styled.section`
  padding: 10%;
  max-width: 950px;
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
  color: #1a1a1a;
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
    background: linear-gradient(90deg, #007bff, #00c853); /* gradient line */
  }
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const JobCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05); /* subtle transparent card */
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, #007bff, #00c853); /* gradient timeline line */
    border-radius: 2px;
  }
`;

const JobTitle = styled.h3`
  font-size: 2.4rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const CompanyAndDuration = styled.p`
  font-size: 1.6rem;
  color: #333333;
  margin-bottom: 1.5rem;
`;

const DescriptionList = styled.ul`
  list-style-type: none;
  padding-left: 0;

  li {
    position: relative;
    margin-bottom: 1rem;
    padding-left: 25px;
    color: #333333;

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #007bff;
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
