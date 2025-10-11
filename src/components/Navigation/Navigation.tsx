import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavWrapper = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: rgba(27, 126, 207, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center; /* Center navbar items on desktop */
  align-items: center;
  z-index: 1000;
  padding: 0 5%;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  position: absolute;
  left: 5%;
`;

const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  position: absolute;
  right: 5%;
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavList = styled(motion.ul)<{ open: boolean }>`
  list-style: none;
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: ${({ open }) => (open ? '0' : '-150px')};
    width: 120px;
    height: 100vh;
    background: rgba(10, 25, 70, 0.85);
    backdrop-filter: blur(8px);
    padding-top: 80px;
    gap: 2rem;
    z-index: 999;
    box-shadow: 2px 0 15px rgba(0, 0, 0, 0.3);
  }
`;

const NavItem = styled.li`
  cursor: pointer;
`;

const NavLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #00ffb3;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Navigation: React.FC = () => {
  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <NavWrapper
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Logo>YourLogo</Logo>
      <Hamburger onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <NavList
        open={menuOpen}
        initial={{ x: '-250px' }}
        animate={{ x: menuOpen ? 0 : '-250px' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        {navItems.map((item) => (
          <NavItem key={item.name} onClick={() => setMenuOpen(false)}>
            <NavLink to={item.to} smooth={true} duration={500}>
              {item.name}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </NavWrapper>
  );
};

export default Navigation;
