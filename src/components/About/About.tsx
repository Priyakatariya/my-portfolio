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
  color: rgba(255,255,255,0.4);
  margin-bottom: 4rem;
  font-size: 1rem;
  letter-spacing: 0.02em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3.5rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const BioBlock = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const BioPara = styled.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.62);
  line-height: 1.8;
`;

const Accent = styled.span<{ color?: string }>`
  color: ${({ color }) => color || '#a78bfa'};
  font-weight: 600;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.4rem;
`;

const SoftTag = styled.span`
  background: rgba(124,58,237,0.1);
  border: 1px solid rgba(124,58,237,0.2);
  color: #c4b5fd;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const RightCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoCard = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: 1.1rem 1.3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
`;

const InfoItem = styled.div``;

const ILabel = styled.p`
  font-size: 0.7rem;
  color: rgba(255,255,255,0.3);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.25rem;
`;

const IValue = styled.p`
  font-size: 0.9rem;
  color: rgba(255,255,255,0.88);
  font-weight: 600;
  margin: 0;
`;

const CourseCard = styled.div`
  background: rgba(124,58,237,0.06);
  border: 1px solid rgba(124,58,237,0.15);
  border-radius: 14px;
  padding: 1.2rem 1.3rem;
`;

const CourseCardTitle = styled.p`
  font-size: 0.7rem;
  color: #a78bfa;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  margin: 0 0 0.9rem;
`;

const CourseChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Chip = styled.span`
  background: rgba(124,58,237,0.12);
  border: 1px solid rgba(124,58,237,0.18);
  color: #c4b5fd;
  padding: 0.28rem 0.75rem;
  border-radius: 999px;
  font-size: 0.76rem;
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
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Driven by curiosity. Built by discipline.
      </Subtitle>

      <Grid>
        {/* Left — Bio */}
        <BioBlock
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <BioPara>
            I'm <Accent>Priya Katariya</Accent> — a B.Tech Information Technology student at{' '}
            <Accent color="#38bdf8">NIT Kurukshetra</Accent> (CGPA: 8.96/10), passionate about
            building software that is fast, meaningful, and production-ready.
          </BioPara>

          <BioPara>
            I work across the full stack — from crafting responsive React interfaces to engineering
            scalable Node.js backends and deploying on Vercel. Currently contributing as a{' '}
            <Accent>Developer on the Alumni Cell Web Team</Accent>, where I've improved Lighthouse
            scores from 65 → 85+ and slashed code redundancy by 40%.
          </BioPara>

          <BioPara>
            In the open source world, I've ranked <Accent color="#ffa116">#26 among 1000+</Accent>{' '}
            contributors in SSoC '25, mentored <Accent>25+ developers</Accent> in GSSoC '25, and
            reviewed 100+ pull requests. I believe great code is only as good as the collaboration
            behind it.
          </BioPara>

          <BioPara>
            Away from screens, I run mental health awareness drives as a{' '}
            <Accent color="#f472b6">Core Member of Colours Club</Accent>, oversee publications at{' '}
            Horizon Magazine, and support tech events through Technobyte. I'm an extrovert who
            believes people and empathy make better engineers.
          </BioPara>

          <TagRow>
            {['Problem Solver', 'Team Player', 'Open Source', 'Competitive Coder', 'Leadership'].map(t => (
              <SoftTag key={t}>{t}</SoftTag>
            ))}
          </TagRow>
        </BioBlock>

        {/* Right — Cards */}
        <RightCol
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <InfoCard>
            <InfoItem>
              <ILabel>Degree</ILabel>
              <IValue>B.Tech IT</IValue>
            </InfoItem>
            <InfoItem>
              <ILabel>Institute</ILabel>
              <IValue>NIT Kurukshetra</IValue>
            </InfoItem>
            <InfoItem>
              <ILabel>CGPA</ILabel>
              <IValue>8.96 / 10</IValue>
            </InfoItem>
            <InfoItem>
              <ILabel>Batch</ILabel>
              <IValue>2024 – Present</IValue>
            </InfoItem>
            <InfoItem>
              <ILabel>Email</ILabel>
              <IValue style={{ fontSize: '0.75rem' }}>priyakatariya2007@gmail.com</IValue>
            </InfoItem>
            <InfoItem>
              <ILabel>Phone</ILabel>
              <IValue>+91-886-5020-721</IValue>
            </InfoItem>
          </InfoCard>

          <CourseCard>
            <CourseCardTitle>Key Coursework</CourseCardTitle>
            <CourseChips>
              {['DSA', 'OOP', 'Operating Systems', 'Computer Networks', 'DBMS'].map(c => (
                <Chip key={c}>{c}</Chip>
              ))}
            </CourseChips>
          </CourseCard>
        </RightCol>
      </Grid>
    </Section>
  );
};

export default About;
