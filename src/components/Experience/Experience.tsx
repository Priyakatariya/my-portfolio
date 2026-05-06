import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 5%;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #06b6d4, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Timeline = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    width: 2px;
    background: linear-gradient(to bottom, rgba(6, 182, 212, 0.5), rgba(56, 189, 248, 0.1));
    
    @media (max-width: 768px) {
      left: 10px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 60px;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    padding-left: 40px;
  }

  &::before {
    content: '';
    position: absolute;
    left: 14px;
    top: 8px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #06b6d4;
    box-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4;
    
    @media (max-width: 768px) {
      left: 4px;
    }
  }
`;

const Card = styled.div`
  background: rgba(10, 10, 25, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(6, 182, 212, 0.5);
    box-shadow: 0 10px 30px -10px rgba(6, 182, 212, 0.3);
    transform: translateY(-5px);
  }
`;

const RoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Role = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  
  span {
    color: #06b6d4;
  }
`;

const DateText = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  background: rgba(6, 182, 212, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
`;

const Company = styled.h4`
  font-size: 1.1rem;
  color: #a78bfa;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.8rem;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
  line-height: 1.6;
  position: relative;
  padding-left: 1.5rem;
  
  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #06b6d4;
    font-size: 1.2rem;
    line-height: 1;
  }

  strong {
    color: #fff;
    font-weight: 600;
  }
`;

const experiences = [
  {
    role: "Developer",
    company: "Alumni Cell Web Team, NIT Kurukshetra",
    date: "Oct 2025 – Present",
    details: [
      "Contributed to a production-grade alumni portal serving <strong>1000+ users</strong> by resolving routing issues and improving system stability.",
      "Implemented role-based authentication and modular components, reducing <strong>code redundancy by 40%</strong>.",
      "Increased Lighthouse performance scores from <strong>65 to 85+</strong> through optimized rendering and state management."
    ]
  },
  {
    role: "Mentor",
    company: "GirlScript Summer of Code (GSSoC '25)",
    date: "Jul 2025 – Oct 2025",
    details: [
      "Mentored <strong>25+ developers</strong>, improving pull request quality and reducing review cycles.",
      "Reviewed <strong>100+ pull requests</strong>, ensuring proper edge-case handling and scalable architecture."
    ]
  },
  {
    role: "Open Source Contributor",
    company: "Social Summer of Code (SSoC '25)",
    date: "Jun 2025 – Aug 2025",
    details: [
      "Resolved <strong>15+ logic and UI issues</strong> across <strong>5+ repositories</strong> by analyzing component states and API responses.",
      "Refactored legacy CSS into reusable Tailwind components, improving UI consistency by <strong>20%</strong>.",
      "Contributed <strong>15+ merged pull requests</strong>, securing <strong>Rank 26 among 1000+ contributors</strong>."
    ]
  },
  {
    role: "Open Source Contributor",
    company: "Social Winter of Code (SWoC '26)",
    date: "Dec 2025 – Present",
    details: [
      "Resolved <strong>6+ merged issues</strong>, fixing UI and functionality bugs, and implementing new features to improve overall project performance and user experience.",
      "Collaborated with developers across different teams, analyzed real-world project requirements, and contributed scalable solutions through clean and maintainable code.",
      "Enhanced application stability, responsiveness, and feature usability."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <ExperienceContainer>
      <Title>Experience</Title>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card>
              <RoleHeader>
                <Role>{exp.role}</Role>
                <DateText>{exp.date}</DateText>
              </RoleHeader>
              <Company>{exp.company}</Company>
              <List>
                {exp.details.map((detail, i) => (
                  <ListItem key={i} dangerouslySetInnerHTML={{ __html: detail }} />
                ))}
              </List>
            </Card>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience;
