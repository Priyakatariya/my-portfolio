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
  background: linear-gradient(135deg, #10b981, #38bdf8);
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const Card = styled(motion.a)<{ bgColor: string; borderColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: ${({ bgColor }) => bgColor};
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ borderColor }) => borderColor};
    box-shadow: 0 10px 40px ${({ borderColor }) => borderColor}33;
  }
`;

const Emoji = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
`;

const PlatformName = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  margin: 0 0 0.3rem;
`;

const Handle = styled.p`
  font-size: 0.82rem;
  color: rgba(255,255,255,0.38);
  font-family: 'Fira Code', monospace;
  margin: 0 0 1rem;
`;

const Stat = styled.div<{ color: string }>`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${({ color }) => color};
  line-height: 1;
`;

const StatLabel = styled.p`
  font-size: 0.78rem;
  color: rgba(255,255,255,0.4);
  margin: 0.3rem 0 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
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
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Where I compete, collaborate & contribute
      </Subtitle>
      <Grid>
        {codingProfiles.map((profile, i) => (
          <Card
            key={i}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            bgColor={profile.bgColor}
            borderColor={profile.color}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Emoji>{profile.emoji}</Emoji>
            <PlatformName>{profile.platform}</PlatformName>
            <Handle>@{profile.handle}</Handle>
            <Stat color={profile.color}>{profile.stat}</Stat>
            <StatLabel>{profile.statLabel}</StatLabel>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default CodingProfiles;
