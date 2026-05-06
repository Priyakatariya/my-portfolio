import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { codingProfiles } from '../../data/codingProfiles';

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
  background: linear-gradient(135deg, #2dd4bf, #60a5fa, #a78bfa);
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem;
  }
`;

const Card = styled(motion.a)<{ borderGlow: string; bgColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1.5rem;
  background: ${({ bgColor }) => bgColor};
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background: linear-gradient(135deg, transparent, ${({ borderGlow }) => borderGlow}, transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 16px 48px ${({ borderGlow }) => borderGlow};
    border-color: ${({ borderGlow }) => borderGlow};

    &::before {
      opacity: 1;
    }
  }
`;

const IconWrap = styled.div`
  font-size: 2.4rem;
  margin-bottom: 0.9rem;
  line-height: 1;
`;

const PlatformName = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255,255,255,0.92);
  margin: 0 0 0.8rem;
  letter-spacing: 0.01em;
`;

const StatNum = styled.div<{ color: string }>`
  font-size: 1.9rem;
  font-weight: 900;
  color: ${({ color }) => color};
  line-height: 1;
  letter-spacing: -0.02em;
`;

const StatLabel = styled.p`
  font-size: 0.72rem;
  color: rgba(255,255,255,0.35);
  margin: 0.35rem 0 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.4;
`;

const CodingProfiles: React.FC = () => {
  return (
    <Section id="coding-profiles">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Coding Profiles
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Where I compete, contribute &amp; keep building
      </Subtitle>
      <Grid>
        {codingProfiles.map((profile, i) => (
          <Card
            key={i}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            bgColor={profile.bgColor}
            borderGlow={profile.borderGlow}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <IconWrap>{profile.icon}</IconWrap>
            <PlatformName>{profile.platform}</PlatformName>
            <StatNum color={profile.color}>{profile.stat}</StatNum>
            <StatLabel>{profile.statLabel}</StatLabel>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default CodingProfiles;
