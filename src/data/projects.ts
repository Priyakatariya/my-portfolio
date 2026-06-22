// src/data/projects.ts

export interface ProjectType {
  title: string;
  subtitle: string;
  description: string;
  highlights?: string[];
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
  gradient: string;
}


export const projects: ProjectType[] = [
  {
    title: 'Satellite-Based Air Quality Prediction System',
    subtitle: 'Machine Learning Dashboard',
    description:
      'Built an XGBoost PM2.5 prediction model using Google Earth Engine API satellite data, achieving an R2 Score of 0.9703. Processed spatio-temporal data isolating Aerosol Optical Depth as the top predictor.',
    highlights: [
      'Built an XGBoost PM2.5 prediction model using Google Earth Engine API satellite data, achieving an R2 Score of 0.9703.',
      'Processed spatio-temporal data with Pandas and Scikit-learn, isolating Aerosol Optical Depth as the top predictor (81% impact).',
      'Deployed a Streamlit and Plotly web dashboard for real-time, zero-hardware hyper-local pollution forecasting.'
    ],
    technologies: [
      'Python',
      'XGBoost',
      'Scikit-learn',
      'Pandas',
      'Streamlit',
      'Plotly',
      'Google Earth Engine'
    ],
    githubLink: 'https://github.com/Priyakatariya/Satellite_Based_Prediction_System',
    liveLink: '#',
    gradient: 'linear-gradient(135deg, #059669, #10b981)',
  },
  {
    title: 'Smart Waste Swaraj',
    subtitle: 'Community Waste Management Platform',
    description:
      'Enhanced a fully responsive, map-based web application promoting circular economy by enabling listing, reuse, and real-time collection tracking of household waste and reusable items.',
    highlights: [
      'Applied dynamic map markers with Leaflet.js and React-Leaflet, integrating localStorage for client-side persistence and simulated user authentication.',
      'Built interactive user dashboards featuring form inputs, filters, and search functionalities for easy listing and management.',
      'Enforced React Context API for state management and backend APIs with Node.js and Express.js to handle data and session simulation.',
      'Styled with Tailwind CSS and TypeScript for modular, maintainable, and scalable frontend codebase.'
    ],
    technologies: [
      'Next.js',
      'React.js',
      'Leaflet.js',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'Express.js'
    ],
    githubLink: 'https://github.com/Priyakatariya/smart-waste-swaraj',
    liveLink: '#',
    image: '/src/assets/smart_waste.png',
    gradient: 'linear-gradient(135deg, #10b981, #3b82f6)',
  },


  {
    title: 'MindEase',
    subtitle: 'Mental Health Platform · Team Leader',
    description:
      'A role-based mental health platform with secure authentication and protected routes. Features an anonymous community forum, appointment booking system for mentors and psychologists, and a Mood Tracker with visual analytics dashboards.',
    highlights: [
      'Led the development of a role-based mental health platform with secure authentication and protected routes using React.js, TypeScript, and Firebase.',
      'Built an anonymous community forum and a real-time appointment system connecting students with mentors and psychologists.',
      'Integrated a 24/7 AI chatbot (OpenAI SDK) and a Mood Tracker, rendering visual wellness dashboards via Chart.js.'
    ],
    technologies: [
      'React.js',
      'TypeScript',
      'Firebase',
      'Tailwind CSS',
      'Chart.js',
      'OpenAI SDK'
    ],
    githubLink: 'https://github.com/Priyakatariya/MindEase-Project',
    liveLink: '#',
    gradient: 'linear-gradient(135deg, #6e40c9, #c946ef)',
  },


  {
    title: 'AstroMedia',
    subtitle: 'Interactive Space Archive',

    description:
      'An interactive space archive SPA built with reusable components and seamless client-side routing. Integrated physics-based animations and particle backgrounds to enhance UI engagement and optimized performance using Vite.',

    technologies: [
      'React.js',
      'Vite',
      'React Router DOM',
      'Tailwind CSS',
      'React Spring'
    ],

    githubLink: 'https://github.com/Priyakatariya/astro',
    liveLink: '#',
    image: '/src/assets/astromedia.png',
    gradient: 'linear-gradient(135deg, #0f2027, #2c5364)',
  },


  {
    title: 'Veritas',
    subtitle: 'AI-Driven Digital Twin Platform · Team Leader',

    description:
      'Built an AI-powered full-stack platform that creates personalized digital twins using behavioral and wellness data to deliver contextual insights, predictive analytics, and productivity enhancement recommendations.',

    highlights: [
      'Designed AI contextual logic system for predictive simulations.',
      'Implemented secure JWT authentication and protected routes.',
      'Developed analytics dashboards for wellness tracking.',
      'Built reusable scalable React components.',
      'Currently enhancing AI-powered behavioral intelligence features.'
    ],

    technologies: [
      'React.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
      'Vite'
    ],

    githubLink: 'https://github.com/Priyakatariya/Veritas',
    liveLink: '#',
    image: '/src/assets/veritas.png',
    gradient: 'linear-gradient(135deg, #4f46e5, #9333ea)',
  },


  {
    title: 'AgriChain',
    subtitle: 'Blockchain Supply Chain Platform',

    description:
      'A decentralized agricultural supply chain platform with JWT authentication and role-based access control using Ethereum smart contracts for transparent and tamper-proof transactions.',

    technologies: [
      'Next.js',
      'Node.js',
      'Solidity',
      'MongoDB'
    ],

    githubLink: 'https://github.com/Priyakatariya/agri-chain',
    liveLink: '#',
    image: '/src/assets/agrichain.png',
    gradient: 'linear-gradient(135deg, #134e5e, #71b280)',
  },

];