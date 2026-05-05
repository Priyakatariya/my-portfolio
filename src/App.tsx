import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import ThreeBackground from './components/ParticleBackground/ThreeBackground';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import CodingProfiles from './components/CodingProfiles/CodingProfiles';
import Extracurricular from './components/Extracurricular/Extracurricular';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html, #root {
    width: 100%;
    min-height: 100vh;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: #08081a;
    color: rgba(255,255,255,0.9);
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #08081a;
  }
  ::-webkit-scrollbar-thumb {
    background: #7c3aed;
    border-radius: 3px;
  }

  section {
    position: relative;
    z-index: 2;
  }

  strong {
    font-weight: 700;
  }
`;

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const MainContent = styled.main`
  position: relative;
  z-index: 2;
`;

const SectionDivider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(124,58,237,0.2), transparent);
  margin: 0 5%;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <ThreeBackground />
        <Navigation />
        <MainContent>
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Achievements />
          <SectionDivider />
          <CodingProfiles />
          <SectionDivider />
          <Extracurricular />
          <SectionDivider />
          <Contact />
          <Footer />
        </MainContent>
      </AppContainer>
    </>
  );
};

export default App;
