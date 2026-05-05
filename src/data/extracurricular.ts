// src/data/extracurricular.ts

export interface ExtracurricularType {
  role: string;
  organization: string;
  duration: string;
  description: string;
  emoji: string;
  color: string;
}

export const extracurricular: ExtracurricularType[] = [
  {
    role: 'Technical Team Member',
    organization: 'Technobyte – NIT Kurukshetra',
    duration: 'Oct 2024 – Present',
    description:
      'Assisted in technical initiatives and supported development tasks and event execution.',
    emoji: '💻',
    color: '#6e40c9',
  },
  {
    role: 'Core Member',
    organization: 'Colours – Mental Health Club, NIT Kurukshetra',
    duration: 'Nov 2024 – Present',
    description:
      'Led mental health awareness campaigns and engaged students in wellness initiatives.',
    emoji: '🌸',
    color: '#ec4899',
  },
  {
    role: 'Editor',
    organization: 'Horizon Magazine – NIT Kurukshetra',
    duration: 'Nov 2025 – Present',
    description: 'Oversaw content editing and publication workflows.',
    emoji: '📰',
    color: '#f59e0b',
  },
];
