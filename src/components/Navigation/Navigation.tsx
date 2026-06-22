import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavWrapper = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  background: linear-gradient(90deg, rgba(30,27,75,0.7), rgba(15,23,42,0.85), rgba(49,46,129,0.7));
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(124, 58, 237, 0.12);
  display: flex;
  align-items: center;
  align-items: center;
  z-index: 1000;
  padding: 0 5%;
  box-sizing: border-box;
`;

const Logo = styled(NavLink)`
  font-size: 1.45rem;
  font-weight: 900;
  background: linear-gradient(135deg, #a78bfa, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  letter-spacing: -0.03em;
  text-decoration: none;
`;

const NavDesktop = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  margin: 0 auto;
  transform: translateX(-50px); /* Adjusting for logo width to truly center visually, or we can just leave it */

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinkStyled = styled(NavLink)`
  font-size: 0.88rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
  letter-spacing: 0.03em;

  &:hover,
  &.active {
    color: #a78bfa;
  }
`;

const HamburgerBtn = styled.button`
  display: none;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.35rem;
  cursor: pointer;
  padding: 0;
  line-height: 1;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(30,27,75,0.95), rgba(15,23,42,0.98), rgba(15,23,42,0.98));
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(124, 58, 237, 0.12);
  z-index: 999;
  padding: 1.2rem 5% 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const MobileLink = styled(NavLink)`
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
  padding: 0.85rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: color 0.2s ease, padding-left 0.2s ease;
  text-decoration: none;

  &:hover,
  &.active {
    color: #a78bfa;
    padding-left: 0.5rem;
  }
`;

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Experience', to: '/experience' },
  { name: 'Projects', to: '/projects' },
  { name: 'Skills', to: '/skills' },
  { name: 'Certificates', to: '/certificates' },
  { name: 'Extras', to: '/extras' },
  { name: 'Contact', to: '/contact' },
];

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavWrapper
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' as const }}
      >
        <Logo to="/">Priya.</Logo>

        <NavDesktop>
          {navItems.map(item => (
            <NavLinkStyled
              key={item.name}
              to={item.to}
            >
              {item.name}
            </NavLinkStyled>
          ))}
        </NavDesktop>

        <HamburgerBtn onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <FaTimes /> : <FaBars />}
        </HamburgerBtn>
      </NavWrapper>

      <AnimatePresence>
        {open && (
          <MobileMenu
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {navItems.map(item => (
              <MobileLink
                key={item.name}
                to={item.to}
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
