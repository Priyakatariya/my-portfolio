import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { extracurricular } from '../../data/extracurricular';

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
  background: linear-gradient(135deg, #f59e0b, #ec4899);
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
  border-left: 4px solid ${({ color }) => color};
  border-radius: 16px;
  padding: 2rem;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    background: rgba(255,255,255,0.07);
  }
`;

const EmojiIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

const Role = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  margin: 0 0 0.3rem;
`;

const Org = styled.p<{ color: string }>`
  font-size: 0.95rem;
  color: ${({ color }) => color};
  font-weight: 600;
  margin: 0 0 0.3rem;
`;

const Duration = styled.p`
  font-size: 0.82rem;
  color: rgba(255,255,255,0.38);
  margin: 0 0 0.8rem;
  font-family: 'Fira Code', monospace;
`;

const Desc = styled.p`
  font-size: 0.92rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.6;
  margin: 0;
`;

const Extracurricular: React.FC = () => {
  return (
    <Section id="extracurricular">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Extracurricular
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Beyond the code — clubs, communities & creativity
      </Subtitle>
      <Grid>
        {extracurricular.map((item, i) => (
          <Card
            key={i}
            color={item.color}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <EmojiIcon>{item.emoji}</EmojiIcon>
            <Role>{item.role}</Role>
            <Org color={item.color}>{item.organization}</Org>
            <Duration>{item.duration}</Duration>
            <Desc>{item.description}</Desc>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Extracurricular;
