// src/data/codingProfiles.ts

export interface CodingProfile {
  platform: string;
  icon: string;
  stat: string;
  statLabel: string;
  link: string;
  color: string;
  bgColor: string;
  borderGlow: string;
}

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
    icon: '🔥',
    stat: '1805',
    statLabel: 'Peak Rating · Top 10.1%',
    link: 'https://leetcode.com/u/priya_-8/',
    color: '#ffa116',
    bgColor: 'rgba(255,161,22,0.07)',
    borderGlow: 'rgba(255,161,22,0.35)',
  },
  {
    platform: 'CodeChef',
    icon: '⭐',
    stat: '1725',
    statLabel: 'Peak Rating · 3-Star',
    link: 'https://www.codechef.com/users/avid_glade_10',
    color: '#a78bfa',
    bgColor: 'rgba(167,139,250,0.07)',
    borderGlow: 'rgba(167,139,250,0.35)',
  },
  {
    platform: 'Codeforces',
    icon: '⚡',
    stat: '1305',
    statLabel: 'Max Rating · Pupil',
    link: 'https://codeforces.com/profile/SilentCompiler08',
    color: '#60a5fa',
    bgColor: 'rgba(96,165,250,0.07)',
    borderGlow: 'rgba(96,165,250,0.35)',
  },
  {
    platform: 'GeeksForGeeks',
    icon: '🌿',
    stat: '500+',
    statLabel: 'Problems Solved',
    link: 'https://www.geeksforgeeks.org/profile/priyakatariya07',
    color: '#34d399',
    bgColor: 'rgba(52,211,153,0.07)',
    borderGlow: 'rgba(52,211,153,0.35)',
  },
  {
    platform: 'GitHub',
    icon: '🐙',
    stat: '59+',
    statLabel: 'Repositories',
    link: 'https://github.com/Priyakatariya',
    color: '#e2e8f0',
    bgColor: 'rgba(226,232,240,0.05)',
    borderGlow: 'rgba(226,232,240,0.2)',
  },
  {
    platform: 'Codolio',
    icon: '💡',
    stat: '1700+',
    statLabel: 'DSA Problems Solved',
    link: 'https://codolio.com/profile/Priyakatariya',
    color: '#2dd4bf',
    bgColor: 'rgba(45,212,191,0.07)',
    borderGlow: 'rgba(45,212,191,0.35)',
  },
];
