// src/data/codingProfiles.ts

export interface CodingProfile {
  platform: string;
  handle: string;
  stat: string;
  statLabel: string;
  link: string;
  color: string;
  bgColor: string;
  emoji: string;
}

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
    handle: 'priyakatariya',
    stat: '1805',
    statLabel: 'Peak Rating',
    link: 'https://leetcode.com/u/priyakatariya2007/',
    color: '#ffa116',
    bgColor: 'rgba(255,161,22,0.1)',
    emoji: '🔥',
  },
  {
    platform: 'CodeChef',
    handle: 'Priyakatariya',
    stat: '1725',
    statLabel: 'Peak Rating',
    link: 'https://codechef.com',
    color: '#8b5cf6',
    bgColor: 'rgba(139,92,246,0.1)',
    emoji: '⭐',
  },
  {
    platform: 'Codeforces',
    handle: 'Priyakatariya',
    stat: '1305',
    statLabel: 'Max Rating',
    link: 'https://codeforces.com',
    color: '#3b82f6',
    bgColor: 'rgba(59,130,246,0.1)',
    emoji: '⚡',
  },
  {
    platform: 'GitHub',
    handle: 'priyakatariya',
    stat: '3+',
    statLabel: 'Projects',
    link: 'https://github.com/priyakatariya',
    color: '#f0f6fc',
    bgColor: 'rgba(240,246,252,0.07)',
    emoji: '🐙',
  },
  {
    platform: 'Codolio',
    handle: 'Priyakatariya',
    stat: '1700+',
    statLabel: 'DSA Solved',
    link: 'https://codolio.com/profile/Priyakatariya',
    color: '#10b981',
    bgColor: 'rgba(16,185,129,0.1)',
    emoji: '💡',
  },
];
