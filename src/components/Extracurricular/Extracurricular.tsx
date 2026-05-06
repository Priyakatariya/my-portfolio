import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 5%;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(135deg, #10b981, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Item = styled(motion.div)`
  background: rgba(20, 25, 30, 0.4);
  border-left: 4px solid #10b981;
  padding: 2rem;
  border-radius: 0 12px 12px 0;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(20, 25, 30, 0.8);
    transform: translateX(10px);
  }
`;

const Header = styled.div`
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
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  
  span {
    color: #10b981;
    font-weight: 600;
  }
`;

const DateText = styled.span`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const activities = [
  {
    role: "Technical Team Member",
    org: "Technobyte – NIT Kurukshetra",
    date: "Oct 2024 – Present",
    desc: "Assisted in technical initiatives and supported development tasks and event execution."
  },
  {
    role: "Core Member",
    org: "Colours – Mental Health Club, NIT Kurukshetra",
    date: "Nov 2024 – Present",
    desc: "Led mental health awareness campaigns and engaged students in wellness initiatives."
  },
  {
    role: "Editor",
    org: "Horizon Magazine – NIT Kurukshetra",
    date: "Nov 2025 – Present",
    desc: "Oversaw content editing and publication workflows."
  }
];

const Extracurricular: React.FC = () => {
  return (
    <Container>
      <Title>Extracurricular Activities</Title>
      <List>
        {activities.map((act, i) => (
          <Item
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Header>
              <Role>{act.role}, <span>{act.org}</span></Role>
              <DateText>{act.date}</DateText>
            </Header>
            <Description>{act.desc}</Description>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Extracurricular;
