import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavWrapper = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  background: rgba(8, 8, 20, 0.7);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(124,58,237,0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  padding: 0 5%;
  box-sizing: border-box;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #a78bfa, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  letter-spacing: -0.02em;
`;

const NavDesktop = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinkStyled = styled(Link)`
  font-size: 0.95rem;
  font-weight: 600;
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.25s ease;
  letter-spacing: 0.02em;

  &:hover {
    color: #a78bfa;
  }
`;

const HamburgerBtn = styled.button`
  display: none;
  background: none;
  border: none;
  color: rgba(255,255,255,0.8);
  font-size: 1.4rem;
  cursor: pointer;
  padding: 0;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  background: rgba(8, 8, 20, 0.95);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(124,58,237,0.15);
  z-index: 999;
  padding: 1.5rem 5%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const MobileLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255,255,255,0.75);
  cursor: pointer;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: color 0.2s ease;

  &:hover {
    color: #a78bfa;
  }
`;

const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Profiles', to: 'coding-profiles' },
  { name: 'Extras', to: 'extracurricular' },
  { name: 'Contact', to: 'contact' },
];

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavWrapper
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo>Priya.</Logo>
        <NavDesktop>
          {navItems.map(item => (
            <NavLinkStyled key={item.name} to={item.to} smooth duration={500} offset={-70}>
              {item.name}
            </NavLinkStyled>
          ))}
        </NavDesktop>
        <HamburgerBtn onClick={() => setOpen(v => !v)}>
          {open ? <FaTimes /> : <FaBars />}
        </HamburgerBtn>
      </NavWrapper>
      <AnimatePresence>
        {open && (
          <MobileMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map(item => (
              <MobileLink
                key={item.name}
                to={item.to}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </MobileLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
