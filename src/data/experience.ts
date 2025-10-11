// src/data/experience.ts

export interface ExperienceType {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

export const experience: ExperienceType[] = [
  {
    title: 'Frontend Developer Mentor',
    company: 'FSSCOXC',
    duration: 'Jan 2024 - Present',
    description: [
      'Mentoring students on frontend development using React.js and Next.js.',
      'Guiding mentees on building responsive and accessible web applications.',
      'Reviewing project code and providing constructive feedback for best practices.',
      'Organizing coding workshops and practical sessions to enhance real-world skills.',
    ],
  },
  {
    title: 'Intern - Web Development',
    company: 'TechSolutions Pvt Ltd',
    duration: 'Jun 2023 - Dec 2023',
    description: [
      'Developed dynamic frontend components for internal web applications.',
      'Implemented reusable React components with proper state management.',
      'Collaborated with the UI/UX team to improve application usability.',
      'Performed unit testing and bug fixes to ensure robust application performance.',
    ],
  },
  {
    title: 'Student Developer',
    company: 'College Projects',
    duration: 'Jan 2022 - May 2023',
    description: [
      'Built multiple web projects using HTML, CSS, JavaScript, and React.',
      'Designed responsive UI layouts and interactive user interfaces.',
      'Worked on team-based projects, following agile methodologies.',
      'Deployed applications using GitHub Pages and Vercel for portfolio showcase.',
    ],
  },
];
