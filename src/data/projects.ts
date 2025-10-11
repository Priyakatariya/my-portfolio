import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export const projects = [
  {
    title: 'Interactive Data Dashboard',
    description: 'A real-time data visualization dashboard built with React and a charting library. It fetches data from a public API and displays it in interactive graphs, showcasing strong state management and data handling skills.',
    image: '/assets/project-dashboard.gif', // Place a GIF or image in src/assets/
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Chart.js', 'Styled Components'],
    githubLink: 'https://github.com/yourusername/data-dashboard',
    liveLink: 'https://data-dashboard-demo.netlify.app',
  },
  {
    title: 'E-commerce Store Frontend',
    description: 'A responsive e-commerce application frontend with product listings, a shopping cart, and user authentication. Built with React Context API for state management.',
    image: '/assets/project-ecommerce.gif',
    technologies: ['React', 'JavaScript', 'Context API', 'CSS Modules', 'React Router'],
    githubLink: 'https://github.com/yourusername/e-commerce-store',
    liveLink: 'https://e-commerce-demo.netlify.app',
  },
  // Add more projects here
];