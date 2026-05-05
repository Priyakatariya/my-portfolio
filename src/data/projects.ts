// src/data/projects.ts

export interface ProjectType {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  gradient: string;
}

export const projects: ProjectType[] = [
  {
    title: 'MindEase',
    subtitle: 'Mental Health Platform · Team Leader',
    description:
      'A role-based mental health platform with secure authentication and protected routes. Features an anonymous community forum, appointment booking system for mentors and psychologists, and a Mood Tracker with visual analytics dashboards.',
    technologies: ['React.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Chart.js'],
    githubLink: 'https://github.com/priyakatariya',
    liveLink: '#',
    gradient: 'linear-gradient(135deg, #6e40c9, #c946ef)',
  },
  {
    title: 'AstroMedia',
    subtitle: 'Interactive Space Archive',
    description:
      'An interactive space archive SPA built with reusable components and seamless client-side routing. Integrated physics-based animations and a particle background to enhance UI engagement. Optimized build performance using Vite.',
    technologies: ['React.js (Vite)', 'React Router DOM', 'Tailwind CSS', 'React Spring'],
    githubLink: 'https://github.com/priyakatariya',
    liveLink: '#',
    gradient: 'linear-gradient(135deg, #0f2027, #2c5364)',
  },
  {
    title: 'AgriChain',
    subtitle: 'Blockchain Supply Chain Platform',
    description:
      'A decentralized supply chain platform with JWT authentication and role-based access control. Integrated Ethereum smart contracts to ensure tamper-proof, transparent transactions across the agricultural supply chain.',
    technologies: ['Next.js', 'Node.js', 'Solidity', 'MongoDB'],
    githubLink: 'https://github.com/priyakatariya',
    liveLink: '#',
    gradient: 'linear-gradient(135deg, #134e5e, #71b280)',
  },
];