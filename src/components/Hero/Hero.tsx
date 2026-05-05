import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 5% 60px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 100px 5% 40px;
    text-align: center;
  }
`;

const Content = styled.div`
  max-width: 750px;
`;

const Greeting = styled(motion.p)`
  font-size: 1rem;
  color: #7c3aed;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0 0 1rem;
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 900;
  color: rgba(255,255,255,0.97);
  line-height: 1.1;
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
`;

const RoleWrapper = styled(motion.div)`
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  font-weight: 700;
  color: rgba(255,255,255,0.45);
  margin: 0 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const RoleHighlight = styled.span`
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 3px;
  height: 1.2em;
  background: #7c3aed;
  margin-left: 2px;
  vertical-align: middle;
  animation: ${blink} 1s step-end infinite;
`;

const Bio = styled(motion.p)`
  font-size: 1.05rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.75;
  max-width: 600px;
  margin: 0 0 2.5rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const BadgesRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Badge = styled.span`
  background: rgba(124,58,237,0.12);
  border: 1px solid rgba(124,58,237,0.25);
  color: #c4b5fd;
  padding: 0.35rem 1rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
`;

const Actions = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, #7c3aed, #06b6d4);
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
  border: none;

  &:hover {
    opacity: 0.88;
    transform: translateY(-2px);
  }
`;

const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  background: transparent;
  color: rgba(255,255,255,0.7);
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.15);
  transition: all 0.25s ease;

  &:hover {
    border-color: #7c3aed;
    color: #c4b5fd;
    background: rgba(124,58,237,0.1);
    transform: translateY(-2px);
  }
`;

const SocialRow = styled(motion.div)`
  display: flex;
  gap: 1.2rem;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  font-size: 1.4rem;
  color: rgba(255,255,255,0.35);
  transition: color 0.25s ease, transform 0.25s ease;

  &:hover {
    color: #a78bfa;
    transform: translateY(-3px);
  }
`;

const roles = [
  'Full-Stack Developer',
  'Open Source Contributor',
  'Competitive Programmer',
  'NIT Kurukshetra · B.Tech IT',
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex(prev => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <Section id="home">
      <Content>
        <Greeting initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          👋 Hello, World!
        </Greeting>
        <Name initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          I'm Priya Katariya
        </Name>
        <RoleWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <RoleHighlight>{displayed}</RoleHighlight>
          <Cursor />
        </RoleWrapper>
        <Bio initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          B.Tech Information Technology student at <strong style={{ color: 'rgba(255,255,255,0.8)' }}>NIT Kurukshetra</strong> (CGPA: 8.96/10).
          I build production-grade web apps, contribute to open source, and solve 1700+ competitive programming problems.
          Currently a Developer at the Alumni Cell Web Team.
        </Bio>
        <BadgesRow initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Badge>🏆 SWoC Top 100</Badge>
          <Badge>🔥 LeetCode 1805</Badge>
          <Badge>⭐ CodeChef 3-Star</Badge>
          <Badge>🚀 SSoC Rank 26</Badge>
          <Badge>💡 1700+ DSA</Badge>
        </BadgesRow>
        <Actions initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <PrimaryBtn to="projects" smooth duration={500} offset={-70}>
            View Projects
          </PrimaryBtn>
          <SecondaryBtn href="mailto:priyakatariya2007@gmail.com">
            <FaEnvelope /> Contact Me
          </SecondaryBtn>
        </Actions>
        <SocialRow initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
          <SocialIcon href="https://github.com/priyakatariya" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/in/priya-27a522333" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="mailto:priyakatariya2007@gmail.com">
            <FaEnvelope />
          </SocialIcon>
        </SocialRow>
      </Content>
    </Section>
  );
};

export default Hero;
