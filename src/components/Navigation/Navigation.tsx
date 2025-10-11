import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const NavWrapper = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: rgba(10, 25, 47, 0.9);
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0 5%;
  overflow: hidden; /* Prevents extra scrollbars */
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.5rem;
  align-items: center;
  flex-wrap: wrap; /* Makes it responsive */
  justify-content: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    background: rgba(10, 25, 47, 0.95);
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 1rem 0;
  }
`;

const NavItem = styled(motion.li)`
  cursor: pointer;
`;

const NavLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: 500;
  color: #e6f1ff;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #64ffda;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Navigation: React.FC = () => {
  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <NavWrapper
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <NavList>
        {navItems.map((item, index) => (
          <NavItem
            key={item.name}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
          >
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
