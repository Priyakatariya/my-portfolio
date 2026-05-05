import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  background: linear-gradient(135deg, #38bdf8, #a855f7);
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
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BioBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const BioPara = styled.p`
  font-size: 0.95rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.75;
`;

const Highlight = styled.span`
  color: #a78bfa;
  font-weight: 600;
`;

const InfoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const InfoCard = styled.div`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 1.2rem;
`;

const InfoLabel = styled.p`
  font-size: 0.75rem;
  color: rgba(255,255,255,0.35);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.4rem;
`;

const InfoValue = styled.p`
  font-size: 0.92rem;
  color: rgba(255,255,255,0.88);
  font-weight: 600;
  margin: 0;
`;

const CourseList = styled(motion.div)`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(124,58,237,0.2);
  border-radius: 16px;
  padding: 1.5rem;
  grid-column: 1 / -1;
`;

const CourseTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 700;
  color: #a78bfa;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 1rem;
`;

const Courses = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

const CourseTag = styled.span`
  background: rgba(124,58,237,0.12);
  border: 1px solid rgba(124,58,237,0.2);
  color: #c4b5fd;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const About: React.FC = () => {
  return (
    <Section id="about">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Who I am, where I come from, and what drives me
      </Subtitle>
      <Grid>
        <BioBlock
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BioPara>
            Hi! I'm <Highlight>Priya Katariya</Highlight>, a B.Tech student in Information Technology
            at <Highlight>NIT Kurukshetra</Highlight> (CGPA: 8.96/10). I'm passionate about building
            production-grade web applications and contributing to open source.
          </BioPara>
          <BioPara>
            I've worked as a <Highlight>Developer</Highlight> on the Alumni Cell Web Team, served as a{' '}
            <Highlight>Mentor</Highlight> in GSSoC '25, and ranked <Highlight>26th among 1000+</Highlight>{' '}
            contributors in SSoC '25. My stack spans React, Next.js, Node.js, Firebase, MongoDB, and more.
          </BioPara>
          <BioPara>
            Beyond code, I'm also an active competitive programmer with <Highlight>1700+ DSA problems</Highlight>{' '}
            solved across platforms, a LeetCode rating of <Highlight>1805</Highlight>, and a{' '}
            <Highlight>Top 100</Highlight> ranking in SWoC '26. I believe in building things that matter.
          </BioPara>
        </BioBlock>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <InfoGrid>
            <InfoCard>
              <InfoLabel>Degree</InfoLabel>
              <InfoValue>B.Tech IT</InfoValue>
            </InfoCard>
            <InfoCard>
              <InfoLabel>University</InfoLabel>
              <InfoValue>NIT Kurukshetra</InfoValue>
            </InfoCard>
            <InfoCard>
              <InfoLabel>CGPA</InfoLabel>
              <InfoValue>8.96 / 10</InfoValue>
            </InfoCard>
            <InfoCard>
              <InfoLabel>Batch</InfoLabel>
              <InfoValue>Aug 2024 – Present</InfoValue>
            </InfoCard>
            <InfoCard>
              <InfoLabel>Email</InfoLabel>
              <InfoValue style={{ fontSize: '0.78rem' }}>priyakatariya2007@gmail.com</InfoValue>
            </InfoCard>
            <InfoCard>
              <InfoLabel>Phone</InfoLabel>
              <InfoValue>+91-886-5020-721</InfoValue>
            </InfoCard>
          </InfoGrid>

          <CourseList
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginTop: '1rem' }}
          >
            <CourseTitle>Key Courses</CourseTitle>
            <Courses>
              {['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'Computer Networks', 'Database Management Systems'].map(c => (
                <CourseTag key={c}>{c}</CourseTag>
              ))}
            </Courses>
          </CourseList>
        </motion.div>
      </Grid>
    </Section>
  );
};

export default About;
