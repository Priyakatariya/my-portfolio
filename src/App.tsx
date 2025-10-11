import React from 'react';
import styled from 'styled-components';

// Import all components
import { wholeglobalstyles } from './styles/whole';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'; // Import the new Footer component

const AppContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const MainContent = styled.main`
  position: relative;
  z-index: 2;
`;

const App: React.FC = () => {
  return (
    <>
      {/* Global styles must be at the very top */}
      <wholeglobalstyles />

      <AppContainer>
        {/* Particle background should cover the whole screen */}
        <ParticleBackground />

        {/* Navigation is fixed, so it's outside of main content */}
        <Navigation />

        <MainContent>
          {/* Main sections are rendered here, one after the other */}
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          {/* Footer at the end of the main content */}
          <Footer />
        </MainContent>
      </AppContainer>
    </>
  );
};

export default App;