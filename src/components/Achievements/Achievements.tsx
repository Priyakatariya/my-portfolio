import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaStar, FaMedal } from 'react-icons/fa';

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
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled(motion.div)`
  background: rgba(20, 20, 30, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(251, 191, 36, 0.2);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  
  &:hover {
    border-color: rgba(251, 191, 36, 0.5);
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #fbbf24;
`;

const Content = styled.div`
  h3 {
    font-size: 1.2rem;
    color: #fff;
    margin-bottom: 0.5rem;
  }
  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
    line-height: 1.5;
    strong {
      color: #fff;
    }
  }
`;

const Achievements: React.FC = () => {

  const dynamicAchievements = [
    {
      icon: <FaCode />,
      title: "Problem Solving",
      desc: "Solved <strong>1800+ DSA problems</strong> across multiple coding platforms."
    },
    {
      icon: <FaMedal />,
      title: "LeetCode",
      desc: "Achieved the <strong>Knight</strong> badge with a peak contest rating of <strong>1876</strong>."
    },
    {
      icon: <FaStar />,
      title: "CodeChef",
      desc: "Attained <strong>3-Star</strong> status with a peak rating of <strong>1725</strong>; secured Global Ranks 192, 203, and 931."
    },
    {
      icon: <FaMedal />,
      title: "Codeforces",
      desc: "Achieved the <strong>Specialist</strong> title with a peak rating of <strong>1430</strong>."
    },
    {
      icon: <FaTrophy />,
      title: "Open Source - SWoC",
      desc: "Secured <strong>Rank 51</strong> globally in the Social Winter of Code (SWoC '26)."
    },
    {
      icon: <FaTrophy />,
      title: "Open Source - SSoC",
      desc: "Secured <strong>Rank 26</strong> globally in the Social Summer of Code (SSoC '25) among 1000+ contributors."
    }
  ];

  return (
    <Container>
      <Title>Achievements</Title>
      <Grid>
        {dynamicAchievements.map((item, i) => (
          <Card
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <IconWrapper>{item.icon}</IconWrapper>
            <Content>
              <h3>{item.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: item.desc }} />
            </Content>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Achievements;
