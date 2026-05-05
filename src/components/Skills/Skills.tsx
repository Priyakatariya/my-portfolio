import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

type Category = 'All' | 'Languages' | 'Frameworks' | 'Databases' | 'Tools';

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
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: rgba(255,255,255,0.5);
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 3rem;
`;

const FilterBtn = styled.button<{ active: boolean }>`
  padding: 0.5rem 1.4rem;
  border-radius: 999px;
  border: 1px solid ${({ active }) => active ? '#7c3aed' : 'rgba(255,255,255,0.12)'};
  background: ${({ active }) => active ? 'rgba(124,58,237,0.25)' : 'rgba(255,255,255,0.04)'};
  color: ${({ active }) => active ? '#a78bfa' : 'rgba(255,255,255,0.55)'};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: inherit;

  &:hover {
    border-color: #7c3aed;
    color: #a78bfa;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 1.2rem;
`;

const SkillCard = styled(motion.div)<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  padding: 1.2rem 0.8rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px;
  cursor: default;
  transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ color }) => color};
    background: rgba(255,255,255,0.08);
  }

  &:hover svg, &:hover .icon {
    filter: drop-shadow(0 0 8px ${({ color }) => color});
  }
`;

const IconWrapper = styled.div<{ color: string }>`
  font-size: 2.2rem;
  color: ${({ color }) => color};
  transition: filter 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillName = styled.p`
  font-size: 0.78rem;
  color: rgba(255,255,255,0.7);
  text-align: center;
  margin: 0;
  font-weight: 500;
`;

const CATEGORIES: Category[] = ['All', 'Languages', 'Frameworks', 'Databases', 'Tools'];

const Skills: React.FC = () => {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? skills : skills.filter(s => s.type === active);

  return (
    <Section id="skills">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Languages, frameworks, databases & tools I work with
      </Subtitle>
      <FilterBar>
        {CATEGORIES.map(cat => (
          <FilterBtn key={cat} active={active === cat} onClick={() => setActive(cat)}>
            {cat}
          </FilterBtn>
        ))}
      </FilterBar>
      <Grid>
        {filtered.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <SkillCard
              key={skill.name}
              color={skill.color}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <IconWrapper color={skill.color}>
                <Icon />
              </IconWrapper>
              <SkillName>{skill.name}</SkillName>
            </SkillCard>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Skills;
