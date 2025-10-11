import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Global styles with gradient background
const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(
      135deg,
      rgba(10, 25, 70, 1) 0%,      /* dark blue */
      rgba(0, 123, 255, 0.7) 50%,  /* soft blue */
      rgba(0, 200, 83, 0.5) 100%   /* greenish accent */
    );
    overflow-x: hidden;
  }

  section {
    position: relative;
    z-index: 2; /* ensure content appears above background */
  }
`;

const AppContainer = styled.div`
  position: relative;
  z-index: 1;
  min-height: 100vh;
`;

const MainContent = styled.main`
  position: relative;
  z-index: 2;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {/* Particle background */}
        <ParticleBackground />

        {/* Navigation fixed at top */}
        <Navigation />

        <MainContent>
          <Hero />
          <About />
          <Skills/>
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </MainContent>
      </AppContainer>
    </>
  );
};

export default App;
