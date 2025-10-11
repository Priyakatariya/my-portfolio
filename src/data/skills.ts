import type { IconType } from 'react-icons';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiGithub,
  
  SiFigma,
  SiPostman,
  SiWebpack,
} from 'react-icons/si';

export interface Skill {
  name: string;
  type: 'Frontend' | 'Backend' | 'Tools';
  icon: IconType;
}

export const skills: Skill[] = [
  { name: 'HTML5', type: 'Frontend', icon: SiHtml5 },
  { name: 'CSS3', type: 'Frontend', icon: SiCss3 },
  { name: 'JavaScript', type: 'Frontend', icon: SiJavascript },
  { name: 'TypeScript', type: 'Frontend', icon: SiTypescript },
  { name: 'React', type: 'Frontend', icon: SiReact },
  { name: 'Redux', type: 'Frontend', icon: SiRedux },
  { name: 'Next.js', type: 'Frontend', icon: SiNextdotjs },

  //{ name: 'Node.js', type: 'Backend', icon: SiNodeDotJs },
  { name: 'Express', type: 'Backend', icon: SiExpress },
  { name: 'Firebase', type: 'Backend', icon: SiFirebase },
  { name: 'MongoDB', type: 'Backend', icon: SiMongodb },

  { name: 'Git', type: 'Tools', icon: SiGit },
  { name: 'GitHub', type: 'Tools', icon: SiGithub },
  //{ name: 'VS Code', type: 'Tools', icon: SiVisualstudiocode },
  { name: 'Figma', type: 'Tools', icon: SiFigma },
  { name: 'Postman', type: 'Tools', icon: SiPostman },
  { name: 'Webpack', type: 'Tools', icon: SiWebpack },
];
