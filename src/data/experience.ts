// src/data/experience.ts

export interface ExperienceType {
  title: string;
  company: string;
  duration: string;
  description: string[];
  link?: string;
}

export const experience: ExperienceType[] = [
  {
    title: 'Developer',
    company: 'Alumni Cell Web Team, NIT Kurukshetra',
    duration: 'Oct 2025 – Present',
    description: [
      'Contributed to a production-grade alumni portal serving 1000+ users by resolving routing issues and improving system stability.',
      'Implemented role-based authentication and modular components, reducing code redundancy by 40%.',
      'Increased Lighthouse performance scores from 65 to 85+ through optimized rendering and state management.',
    ],
  },
  {
    title: 'Mentor',
    company: 'GirlScript Summer of Code (GSSoC \'25)',
    duration: 'Jul 2025 – Oct 2025',
    description: [
      'Mentored 25+ developers, improving pull request quality and reducing review cycles.',
      'Reviewed 100+ pull requests, ensuring proper edge-case handling and scalable architecture.',
    ],
  },
  {
    title: 'Open Source Contributor (Rank 26 among 1000+ contributors)',
    company: 'Social Summer of Code (SSoC \'25)',
    duration: 'Jun 2025 – Aug 2025',
    description: [
      'Resolved 15+ logic and UI issues across 5+ repositories by analyzing component states and API responses.',
      'Refactored legacy CSS into reusable Tailwind components, improving UI consistency by 20%.',
      'Contributed 15+ merged pull requests, securing Rank 26.',
    ],
  },
  {
    title: 'Open Source Contributor',
    company: 'Social Winter of Code (SWoC \'26)',
    duration: 'Dec 2025 – Feb 2026',
    description: [
      'Ranked in the Top 100 contributors globally out of 1000+ participants.',
      'Got 6+ pull requests merged across 4–5 repositories spanning various tech stacks.',
      'Fixed critical UI bugs and inconsistencies, improving visual quality and user experience across projects.',
      'Implemented new features including component enhancements and accessibility improvements.',
    ],
  },
];
