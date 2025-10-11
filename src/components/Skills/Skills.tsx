// Skills.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  //SiNodeDotJs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
 // SiVisualstudiocode,
  SiFigma,
  SiPostman,
  SiWebpack,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: IconType;
}

const skillsData: { [category: string]: Skill[] } = {
  Frontend: [
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Redux', icon: SiRedux },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
  ],
  Backend: [
   // { name: 'Node.js', icon: SiNodeDotJs },
    { name: 'Express', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
  ],
  Tools: [
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub },
    //{ name: 'VS Code', icon: SiVisualstudiocode },
    //{ name: 'Figma', icon: SiFigma },
    { name: 'Postman', icon: SiPostman },
    //{ name: 'Webpack', icon: SiWebpack },
  ],
};

const SkillsSection = styled.section`
  padding: 8% 5%;
  max-width: 1100px;
  margin: 0 auto;
  background: linear-gradient(
    135deg,
    rgba(26, 131, 180, 0.3),
    rgba(0, 200, 83, 0.3)
  );
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(6px);
  border: 2px solid rgba(255, 255, 255, 0.1);
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 5rem;
  text-align: center;
  position: relative;

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
    background: linear-gradient(90deg, #007bff, #00c853);
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CategoryCard = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  flex: 1;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 80px;
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: #6f086fff;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: #00c853;
  }
`;

const SkillName = styled.p`
  font-size: 1.2rem;
  color: #333333;
  text-align: center;
`;

const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <SectionTitle
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </SectionTitle>
      <CategoryContainer>
        {Object.entries(skillsData).map(([category, skills]) => (
          <CategoryCard
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <CategoryTitle>{category}</CategoryTitle>
            <SkillsGrid>
              {skills.map((skill) => (
                <SkillItem key={skill.name}>
                  <SkillIcon as={skill.icon} />
                  <SkillName>{skill.name}</SkillName>
                </SkillItem>
              ))}
            </SkillsGrid>
          </CategoryCard>
        ))}
      </CategoryContainer>
    </SkillsSection>
  );
};

export default Skills;
