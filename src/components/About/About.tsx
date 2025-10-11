import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 10%;
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 700;
  color: var(--light-slate);
  margin-bottom: 5rem;
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background-color: var(--blue-accent);
  }
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 5rem;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Bio = styled.div`
  flex: 2;
  font-size: 1.6rem;
  p {
    margin-bottom: 2rem;
    color: var(--slate);
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  list-style: none;
  margin-top: 2rem;
  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--blue-accent);
      font-size: 1.6rem;
    }
  }
`;

const ProfileImageContainer = styled(motion.div)`
  flex: 1;
  max-width: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const About: React.FC = () => {
    // Example data, you can import this from a data file
    const skills = ['React', 'TypeScript', 'Styled Components', 'Node.js', 'Express', 'MongoDB'];

    return (
        <AboutSection id="about">
            <SectionTitle
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </SectionTitle>
            <ContentContainer>
                <Bio>
                    <p>
                        Hello! I am a passionate and dedicated Frontend Developer with
                        experience in building modern, responsive, and user-friendly web
                        applications. My journey in technology began with a curiosity for
                        how websites come to life, and it quickly grew into a passion for
                        creating seamless and intuitive user experiences.
                    </p>
                    <p>
                        I love solving complex problems and turning ideas into reality using
                        the latest technologies. My expertise lies in the React ecosystem,
                        and I am always eager to learn and adopt new tools to improve my
                        craft.
                    </p>
                    <SkillsList>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </SkillsList>
                </Bio>
                <ProfileImageContainer
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Replace with your image from src/assets/ */}
                    <ProfileImage src="path/to/your/profile-image.jpg" alt="Your Name" />
                </ProfileImageContainer>
            </ContentContainer>
        </AboutSection>
    );
};

export default About;