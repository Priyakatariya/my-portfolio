// src/data/skills.ts
import type { IconType } from 'react-icons';
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVercel,
  SiTailwindcss,
  SiSolidity,
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';

export interface Skill {
  name: string;
  type: 'Languages' | 'Frameworks' | 'Databases' | 'Tools';
  icon: IconType;
  color: string;
}

export const skills: Skill[] = [
  // Languages
  { name: 'C / C++', type: 'Languages', icon: SiCplusplus, color: '#004482' },
  { name: 'Python', type: 'Languages', icon: SiPython, color: '#3776ab' },
  { name: 'Java', type: 'Languages', icon: FaJava, color: '#f89820' },
  { name: 'JavaScript', type: 'Languages', icon: SiJavascript, color: '#f7df1e' },
  { name: 'TypeScript', type: 'Languages', icon: SiTypescript, color: '#3178c6' },
  { name: 'SQL', type: 'Languages', icon: FaCode, color: '#e48e00' },
  { name: 'Solidity', type: 'Languages', icon: SiSolidity, color: '#363636' },

  // Frameworks
  { name: 'React.js', type: 'Frameworks', icon: SiReact, color: '#61dafb' },
  { name: 'Next.js', type: 'Frameworks', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Node.js', type: 'Frameworks', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', type: 'Frameworks', icon: SiExpress, color: '#ffffff' },
  { name: 'Tailwind CSS', type: 'Frameworks', icon: SiTailwindcss, color: '#38bdf8' },

  // Databases
  { name: 'MySQL', type: 'Databases', icon: SiMysql, color: '#4479a1' },
  { name: 'MongoDB', type: 'Databases', icon: SiMongodb, color: '#47a248' },
  { name: 'Firebase', type: 'Databases', icon: SiFirebase, color: '#ffca28' },

  // Tools
  { name: 'Git', type: 'Tools', icon: SiGit, color: '#f05032' },
  { name: 'GitHub', type: 'Tools', icon: SiGithub, color: '#ffffff' },
  { name: 'Docker', type: 'Tools', icon: SiDocker, color: '#2496ed' },
  { name: 'Postman', type: 'Tools', icon: SiPostman, color: '#ff6c37' },
  { name: 'Vercel', type: 'Tools', icon: SiVercel, color: '#ffffff' },
];
