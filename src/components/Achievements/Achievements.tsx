import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { achievements } from '../../data/achievements';

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(124,58,237,0.4); }
  50% { box-shadow: 0 0 20px 8px rgba(124,58,237,0.15); }
`;

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
  background: linear-gradient(135deg, #a855f7, #38bdf8);
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const Card = styled(motion.div)<{ color: string }>`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  cursor: default;
  transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
  animation: ${pulse} 3s ease infinite;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ color }) => color};
    background: rgba(255,255,255,0.07);
  }
`;

const Badge = styled.div`
  font-size: 2.5rem;
  min-width: 50px;
  text-align: center;
`;

const Info = styled.div`
  flex: 1;
`;

const Platform = styled.p`
  font-size: 0.85rem;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.3rem;
`;

const Stat = styled.h3<{ color: string }>`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ color }) => color};
  margin: 0 0 0.4rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: rgba(255,255,255,0.65);
  margin: 0;
  line-height: 1.5;
`;

const Achievements: React.FC = () => {
  return (
    <Section id="achievements">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Achievements
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Competitive programming & open source milestones
      </Subtitle>
      <Grid>
        {achievements.map((a, i) => (
          <Card
            key={i}
            color={a.color}
            href={a.link}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            as={a.link !== '#' ? 'a' : 'div'}
            {...(a.link !== '#' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Badge>{a.badge}</Badge>
            <Info>
              <Platform>{a.platform}</Platform>
              <Stat color={a.color}>{a.stat}</Stat>
              <Description>{a.description}</Description>
            </Info>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Achievements;
