import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { experience } from '../../data/experience';

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
  background: linear-gradient(135deg, #06b6d4, #7c3aed);
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

const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 18px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #7c3aed, #06b6d4, transparent);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    &::before { display: none; }
  }
`;

const Dot = styled.div`
  position: absolute;
  left: 10px;
  top: 2rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  box-shadow: 0 0 12px rgba(124,58,237,0.5);
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  padding-left: 50px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Card = styled(motion.div)`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 1.8rem 2rem;
  transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateX(6px);
    border-color: rgba(124,58,237,0.4);
    background: rgba(255,255,255,0.06);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: rgba(255,255,255,0.95);
  margin: 0 0 0.4rem;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
`;

const Company = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: #7c3aed;
  background: rgba(124,58,237,0.12);
  padding: 0.2rem 0.8rem;
  border-radius: 999px;
`;

const Duration = styled.span`
  font-size: 0.82rem;
  color: rgba(255,255,255,0.38);
  font-family: 'Fira Code', monospace;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Bullet = styled.li`
  font-size: 0.9rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.6;
  padding-left: 1.2rem;
  position: relative;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #06b6d4;
  }
`;

const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Open source, mentoring & real-world development
      </Subtitle>
      <Timeline>
        {experience.map((job, i) => (
          <CardWrapper key={i}>
            <Dot />
            <Card
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <JobTitle>{job.title}</JobTitle>
              <Meta>
                <Company>{job.company}</Company>
                <Duration>{job.duration}</Duration>
              </Meta>
              <BulletList>
                {job.description.map((pt, j) => (
                  <Bullet key={j}>{pt}</Bullet>
                ))}
              </BulletList>
            </Card>
          </CardWrapper>
        ))}
      </Timeline>
    </Section>
  );
};

export default Experience;
