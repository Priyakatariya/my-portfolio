// src/data/achievements.ts

export interface Achievement {
  platform: string;
  badge: string;
  stat: string;
  description: string;
  color: string;
  link: string;
}

export const achievements: Achievement[] = [
  {
    platform: 'Social Winter of Code',
    badge: '🏆',
    stat: 'Top 100',
    description: 'Ranked among Top 100 contributors globally (SWoC \'26)',
    color: '#f59e0b',
    link: '#',
  },
  {
    platform: 'LeetCode',
    badge: '🔥',
    stat: '1805',
    description: 'Peak rating 1805 — Top 10.1% globally',
    color: '#f97316',
    link: 'https://leetcode.com',
  },
  {
    platform: 'CodeChef',
    badge: '⭐',
    stat: '3-Star',
    description: 'Peak Rating 1725 · Global Rank 203 (Starters 213 & 254)',
    color: '#8b5cf6',
    link: 'https://codechef.com',
  },
  {
    platform: 'Codeforces',
    badge: '⚡',
    stat: '1305',
    description: 'Maximum rating 1305 (Pupil)',
    color: '#3b82f6',
    link: 'https://codeforces.com',
  },
  {
    platform: 'DSA Problems',
    badge: '💡',
    stat: '1700+',
    description: 'Solved 1700+ DSA problems across competitive programming platforms',
    color: '#10b981',
    link: 'https://codolio.com/profile/Priyakatariya',
  },
  {
    platform: 'Open Source',
    badge: '🚀',
    stat: 'Rank 26',
    description: 'Ranked 26 among 1000+ contributors in SSoC \'25',
    color: '#ec4899',
    link: '#',
  },
];
