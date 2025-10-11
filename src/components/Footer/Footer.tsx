import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  color: var(--slate);
  font-size: 1.4rem;
  text-align: center;
  border-top: 1px solid var(--dark-slate);
  margin-top: 5rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <span>
        Designed & Built by You
        <FaHeart style={{ color: 'var(--blue-accent', margin: '0 5px' }} />
        with React
      </span>
    </FooterContainer>
  );
};

export default Footer;