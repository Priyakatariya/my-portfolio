import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled(motion.section)`
  padding: 5% 5%;
  max-width: 1100px;
  margin: 0 auto;
  background: linear-gradient(
    135deg,
    rgba(26, 131, 180, 0.2),
    rgba(138, 178, 78, 0.2)
  );
  border-radius: 14px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  border: 2px solid rgba(255, 255, 255, 0.1);
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 2.5rem;
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

const Bio = styled.div`
  font-size: 1.35rem;  /* smaller text */
  line-height: 1.6;    /* tighter line spacing */
  color: #333;

  p {
    margin-bottom: 1.5rem;
    &:first-letter {
      font-weight: 700;
      font-size: 1.5rem;
      color: #007bff;
    }
  }
`;

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About: React.FC = () => {
  const paragraphs = [
    `Hi, I'm Priya, a second-year B.Tech student in Information Technology at NIT Kurukshetra. 
    I’m passionate about web development and dedicated to sharpening my skills in both frontend and backend technologies. 
    I enjoy solving problems, building meaningful projects, and continuously learning through hands-on experience. 
    Alongside development, I’m also strengthening my foundation in Data Structures and Algorithms (DSA) and actively practicing Competitive Programming to enhance my problem-solving abilities.  
    With a strong curiosity and drive to grow, I’m committed to becoming a well-rounded developer who builds impactful tech solutions.`,

    `With hands-on experience in frontend development, I specialize in crafting responsive, user-centric interfaces using modern technologies. 
    My journey in tech is fueled by a passion to create seamless digital experiences, continuously learn, and build solutions that make a real impact.`,

    `As an extrovert, I genuinely enjoy connecting with new people and engaging in meaningful conversations. 
    `,
  ];
  return (
    <AboutSection
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <SectionTitle
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </SectionTitle>

      <Bio>
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={paragraphVariants}
          >
            {text}
          </motion.p>
        ))}
      </Bio>
    </AboutSection>
  );
};

export default About;
