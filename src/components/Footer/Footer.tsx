import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 2.5rem 5%;
  text-align: center;
  border-top: 1px solid rgba(255,255,255,0.06);
  margin-top: 2rem;
  color: rgba(255,255,255,0.3);
  font-size: 0.88rem;
`;

const Brand = styled.span`
  font-weight: 700;
  background: linear-gradient(135deg, #a78bfa, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <span>
        Designed & Built by <Brand>Priya</Brand>{' '}
        with <FaHeart style={{ color: '#7c3aed', margin: '0 3px', verticalAlign: 'middle' }} />
      </span>
      <span>© {new Date().getFullYear()} · NIT Kurukshetra · B.Tech IT</span>
    </FooterContainer>
  );
};

export default Footer;
