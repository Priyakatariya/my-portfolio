import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import ThreeBackground from './components/ParticleBackground/ThreeBackground';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import Extras from './pages/Extras';

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
  padding-top: 65px; /* Leave space for fixed navbar */
`;

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ThreeBackground location={location.pathname} />
      <Navigation />
      <MainContent>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/extras" element={<Extras />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </MainContent>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <AppRoutes />
      </AppContainer>
    </Router>
  );
};

export default App;
