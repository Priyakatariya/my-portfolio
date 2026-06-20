import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 5%;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 8vw, 3rem);
  font-weight: 800;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SkillCategory = styled(motion.div)`
  background: rgba(10, 15, 20, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(16, 185, 129, 0.5);
    box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.2);
    transform: translateY(-5px);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background: #10b981;
    border-radius: 50%;
    box-shadow: 0 0 10px #10b981;
  }
`;

const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const Badge = styled(motion.span)`
  font-size: 0.95rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: default;
  transition: all 0.2s ease;
  
  &:hover {
    color: #10b981;
    background: rgba(16, 185, 129, 0.1);
    border-color: rgba(16, 185, 129, 0.4);
  }
`;

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C/C++", "Python", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Firebase", "MySQL"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Vercel", "XGBoost"]
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures & Algorithms", "Machine Learning", "Deep Learning", "OOP", "DBMS", "Operating Systems", "Computer Networks"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills: React.FC = () => {
  return (
    <SkillsContainer>
      <Title>Technical Skills</Title>
      <SkillsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} variants={itemVariants}>
            <CategoryTitle>{category.title}</CategoryTitle>
            <BadgesContainer>
              {category.skills.map((skill, i) => (
                <Badge
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </Badge>
              ))}
            </BadgesContainer>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
