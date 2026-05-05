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
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body, html, #root {
    width: 100%;
    min-height: 100vh;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: #07071a;
    color: rgba(255, 255, 255, 0.88);
    overflow-x: hidden;
  }

  /* Uniform section spacing — no section backgrounds, just consistent dark */
  section {
    position: relative;
    z-index: 2;
  }

  a {
    color: #a78bfa;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  a:hover { color: #c4b5fd; }

  strong { font-weight: 700; }

  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #07071a; }
  ::-webkit-scrollbar-thumb { background: #5b21b6; border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #7c3aed; }
`;

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const MainContent = styled.main`
  position: relative;
  z-index: 2;
`;

/* Very subtle gradient line between sections */
const Divider = styled.div`
  height: 1px;
  margin: 0 8%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(124, 58, 237, 0.18) 40%,
    rgba(6, 182, 212, 0.18) 60%,
    transparent 100%
  );
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
          <Divider />
          <About />
          <Divider />
          <Skills />
          <Divider />
          <Experience />
          <Divider />
          <Projects />
          <Divider />
          <Achievements />
          <Divider />
          <CodingProfiles />
          <Divider />
          <Extracurricular />
          <Divider />
          <Contact />
          <Footer />
        </MainContent>
      </AppContainer>
    </>
  );
};

export default App;
