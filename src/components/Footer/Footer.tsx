import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 5%;
  font-size: 1.4rem;
  text-align: center;
  margin-top: 5rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  color: #1a1a1a;

  background: linear-gradient(
    135deg,
    rgba(26, 131, 180, 0.3),
    rgba(0, 200, 83, 0.3)
  ); /* subtle transparent gradient */
  border-radius: 12px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(6px); /* soft glass effect */
  border: 2px solid rgba(255, 255, 255, 0.1);
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <span>
        Designed & Built by You{' '}
        <FaHeart style={{ color: '#007bff', margin: '0 5px' }} /> 
      </span>
    </FooterContainer>
  );
};

export default Footer;
