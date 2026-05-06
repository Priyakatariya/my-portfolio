import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaTrophy, FaCode, FaMedal, FaHeart, FaEdit } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiCodeforces, SiGithub } from 'react-icons/si';

// ── Wrapper ────────────────────────────────────────────────────────────────
const PageWrapper = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  padding: 90px 5% 80px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 900;
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    height: 3px;
    width: 60%;
    border-radius: 2px;
    margin-top: 8px;
  }
`;

// ── CODING STATS ───────────────────────────────────────────────────────────
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 5rem;
`;

const StatCard = styled(motion.a)<{ accent: string }>`
  background: rgba(10, 10, 20, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  backdrop-filter: blur(12px);
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${({ accent }) => accent}18, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    border-color: ${({ accent }) => accent}60;
    transform: translateY(-6px);
    box-shadow: 0 12px 40px ${({ accent }) => accent}25;
    &::before { opacity: 1; }
  }
`;

const StatIcon = styled.div<{ accent: string }>`
  font-size: 2rem;
  color: ${({ accent }) => accent};
`;

const StatNum = styled.div<{ accent: string }>`
  font-size: 2.2rem;
  font-weight: 900;
  color: ${({ accent }) => accent};
  letter-spacing: -0.02em;
`;

const StatLabel = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
`;

const StatSub = styled.div`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
`;

const codingStats = [
  { icon: <SiLeetcode />, label: 'LeetCode', stat: '1805', sub: 'Peak Rating · Top 10.1%', accent: '#f59e0b', href: 'https://leetcode.com' },
  { icon: <SiCodechef />, label: 'CodeChef', stat: '1725', sub: 'Peak Rating · 3-Star', accent: '#d97706', href: 'https://codechef.com' },
  { icon: <SiCodeforces />, label: 'Codeforces', stat: '1305', sub: 'Max Rating · Pupil', accent: '#3b82f6', href: 'https://codeforces.com' },
  { icon: <FaCode />, label: 'DSA Problems', stat: '1700+', sub: 'Solved across platforms', accent: '#10b981', href: '#' },
  { icon: <FaTrophy />, label: 'SWoC \'26', stat: 'Top 100', sub: 'Global Rank · Open Source', accent: '#a78bfa', href: '#' },
  { icon: <SiGithub />, label: 'SSoC Rank', stat: '#26', sub: 'Among 1000+ contributors', accent: '#6366f1', href: 'https://github.com/priyakatariya' },
];

// ── ACHIEVEMENTS ───────────────────────────────────────────────────────────
const AchievementsSection = styled.div`
  margin-bottom: 5rem;
`;

const AchievementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const AchievementItem = styled(motion.div)<{ accent: string }>`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(10, 10, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-left: 4px solid ${({ accent }) => accent};
  border-radius: 0 12px 12px 0;
  padding: 1.4rem 1.8rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateX(10px);
    box-shadow: -4px 0 0 ${({ accent }) => accent}, 0 8px 30px rgba(0,0,0,0.3);
  }
`;

const AchIconWrap = styled.div<{ accent: string }>`
  font-size: 2rem;
  color: ${({ accent }) => accent};
  flex-shrink: 0;
`;

const AchText = styled.div`
  h3 { font-size: 1.05rem; font-weight: 700; color: #fff; margin: 0 0 0.3rem; }
  p  { font-size: 0.88rem; color: rgba(255,255,255,0.55); margin: 0; line-height: 1.5; }
  p strong { color: rgba(255,255,255,0.85); font-weight: 600; }
`;

const achievements = [
  { icon: <FaTrophy />, accent: '#fbbf24', title: 'Social Winter of Code (SWoC \'26)', desc: 'Ranked among <strong>Top 100 contributors</strong> globally.' },
  { icon: <SiLeetcode />, accent: '#f59e0b', title: 'LeetCode — Peak Rating 1805', desc: '<strong>Top 10.1% globally</strong>. Consistent problem solver with focus on graphs, DP, and systems.' },
  { icon: <SiCodechef />, accent: '#d97706', title: 'CodeChef — 3-Star (Peak: 1725)', desc: 'Secured <strong>Global Rank 203</strong> in Starters 213 and <strong>254</strong> in Starters 215.' },
  { icon: <SiCodeforces />, accent: '#3b82f6', title: 'Codeforces — Pupil (Max: 1305)', desc: 'Actively competing in rated rounds, focusing on combinatorics and greedy problems.' },
  { icon: <FaMedal />, accent: '#10b981', title: '1700+ DSA Problems Solved', desc: 'Across <strong>LeetCode, CodeChef, Codeforces, and HackerRank</strong> competitive platforms.' },
];

// ── EXTRACURRICULAR ────────────────────────────────────────────────────────
const ExtrasSection = styled.div``;

const ExtrasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const ExtraCard = styled(motion.div)<{ accent: string }>`
  background: rgba(10, 10, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(12px);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${({ accent }) => accent}, transparent);
  }

  &:hover {
    border-color: ${({ accent }) => accent}40;
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.3);
  }
`;

const ExtraIcon = styled.div<{ accent: string }>`
  font-size: 2rem;
  color: ${({ accent }) => accent};
  margin-bottom: 1rem;
`;

const ExtraRole = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.3rem;
`;

const ExtraOrg = styled.p<{ accent: string }>`
  font-size: 0.9rem;
  color: ${({ accent }) => accent};
  font-weight: 600;
  margin: 0 0 0.6rem;
`;

const ExtraDate = styled.p`
  font-size: 0.8rem;
  color: rgba(255,255,255,0.4);
  margin: 0 0 0.8rem;
`;

const ExtraDesc = styled.p`
  font-size: 0.9rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.6;
  margin: 0;
`;

const extracurriculars = [
  {
    icon: <FaCode />, accent: '#6366f1',
    role: 'Technical Team Member',
    org: 'Technobyte – NIT Kurukshetra',
    date: 'Oct 2024 – Present',
    desc: 'Assisted in technical initiatives and supported development tasks and event execution.',
  },
  {
    icon: <FaHeart />, accent: '#ec4899',
    role: 'Core Member',
    org: 'Colours – Mental Health Club, NIT Kurukshetra',
    date: 'Nov 2024 – Present',
    desc: 'Led mental health awareness campaigns and engaged students in wellness initiatives.',
  },
  {
    icon: <FaEdit />, accent: '#fbbf24',
    role: 'Editor',
    org: 'Horizon Magazine – NIT Kurukshetra',
    date: 'Nov 2025 – Present',
    desc: 'Oversaw content editing and publication workflows for the college magazine.',
  },
];

// ── Divider ────────────────────────────────────────────────────────────────
const Divider = styled.div<{ color: string }>`
  height: 1px;
  margin: 4rem 0;
  background: linear-gradient(90deg, transparent, ${({ color }) => color}40, transparent);
`;

// ── Page ───────────────────────────────────────────────────────────────────
const Extras: React.FC = () => {
  return (
    <PageWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Coding Stats */}
      <SectionTitle
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        style={{ color: '#f59e0b' }}
      >
        🏆 Coding Stats
      </SectionTitle>
      <StatsGrid>
        {codingStats.map((s, i) => (
          <StatCard
            key={i}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            accent={s.accent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
          >
            <StatIcon accent={s.accent}>{s.icon}</StatIcon>
            <StatNum accent={s.accent}>{s.stat}</StatNum>
            <StatLabel>{s.label}</StatLabel>
            <StatSub>{s.sub}</StatSub>
          </StatCard>
        ))}
      </StatsGrid>

      <Divider color="#fbbf24" />

      {/* Achievements */}
      <AchievementsSection>
        <SectionTitle
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: '#a78bfa' }}
        >
          🎖️ Achievements
        </SectionTitle>
        <AchievementList>
          {achievements.map((item, i) => (
            <AchievementItem
              key={i}
              accent={item.accent}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AchIconWrap accent={item.accent}>{item.icon}</AchIconWrap>
              <AchText>
                <h3>{item.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: item.desc }} />
              </AchText>
            </AchievementItem>
          ))}
        </AchievementList>
      </AchievementsSection>

      <Divider color="#ec4899" />

      {/* Extracurriculars */}
      <ExtrasSection>
        <SectionTitle
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={{ color: '#ec4899' }}
        >
          ✨ Extracurricular
        </SectionTitle>
        <ExtrasGrid>
          {extracurriculars.map((e, i) => (
            <ExtraCard
              key={i}
              accent={e.accent}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <ExtraIcon accent={e.accent}>{e.icon}</ExtraIcon>
              <ExtraRole>{e.role}</ExtraRole>
              <ExtraOrg accent={e.accent}>{e.org}</ExtraOrg>
              <ExtraDate>{e.date}</ExtraDate>
              <ExtraDesc>{e.desc}</ExtraDesc>
            </ExtraCard>
          ))}
        </ExtrasGrid>
      </ExtrasSection>
    </PageWrapper>
  );
};

export default Extras;
