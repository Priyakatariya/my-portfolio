import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaTimes, FaExpand, FaAward } from 'react-icons/fa';

// ─────────────────────────────────────────────────────────────────
// TO ADD YOUR OWN CERTIFICATES:
//  1. Drop your image files in public/images/certificates/
//  2. Update the `certificates` array below with the real title,
//     issuer, date, and image filename.
// ─────────────────────────────────────────────────────────────────
const certificates = [
  { id: 1,  title: 'React & JavaScript Development', issuer: 'Udemy',      date: 'Jan 2024', image: '/images/certificates/cert1.png', color: '#7c3aed' },
  { id: 2,  title: 'Python for Data Science',         issuer: 'Coursera',   date: 'Mar 2024', image: '/images/certificates/cert2.png', color: '#0891b2' },
  { id: 3,  title: 'Machine Learning Fundamentals',   issuer: 'Google',     date: 'May 2024', image: '/images/certificates/cert3.png', color: '#059669' },
  { id: 4,  title: 'Full Stack Web Development',      issuer: 'freeCodeCamp', date: 'Aug 2024', image: '/images/certificates/cert4.png', color: '#8b5cf6' },
  { id: 5,  title: 'Data Structures & Algorithms',    issuer: 'LeetCode',   date: 'Sep 2024', image: '/images/certificates/cert5.png', color: '#d97706' },
  { id: 6,  title: 'Cloud Practitioner Essentials',   issuer: 'AWS',        date: 'Oct 2024', image: '/images/certificates/cert6.png', color: '#2563eb' },
  // ── Repeat cert1-6 as placeholders to fill up 12 slots ──
  { id: 7,  title: 'Node.js Backend Mastery',         issuer: 'Udemy',      date: 'Nov 2024', image: '/images/certificates/cert1.png', color: '#7c3aed' },
  { id: 8,  title: 'Firebase & Firestore',             issuer: 'Google',     date: 'Dec 2024', image: '/images/certificates/cert3.png', color: '#059669' },
  { id: 9,  title: 'MongoDB for Developers',           issuer: 'MongoDB',    date: 'Jan 2025', image: '/images/certificates/cert2.png', color: '#0891b2' },
  { id: 10, title: 'TypeScript Deep Dive',             issuer: 'Frontend Masters', date: 'Feb 2025', image: '/images/certificates/cert4.png', color: '#8b5cf6' },
  { id: 11, title: 'Open Source Contribution Badge',   issuer: 'SSoC',       date: 'Aug 2025', image: '/images/certificates/cert5.png', color: '#d97706' },
  { id: 12, title: 'Mentor Recognition Award',         issuer: 'GSSoC',      date: 'Oct 2025', image: '/images/certificates/cert6.png', color: '#2563eb' },
];

// ── Styled Components ────────────────────────────────────────────
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 90px 5% 80px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  margin-bottom: 0.5rem;
  text-align: center;
  background: linear-gradient(135deg, #fbbf24, #f59e0b, #fcd34d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: rgba(255, 255, 255, 0.45);
  font-size: 1rem;
  margin-bottom: 3.5rem;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;
`;

const Card = styled(motion.div)<{ accent: string }>`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  background: rgba(10, 10, 20, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: ${({ accent }) => accent}60;
    box-shadow: 0 8px 32px ${({ accent }) => accent}30, 0 0 0 1px ${({ accent }) => accent}20;
  }
`;

const CardImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.06);
  }
`;

const ExpandIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 8px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  opacity: 0;
  transition: opacity 0.3s;
  ${Card}:hover & {
    opacity: 1;
  }
`;

const Ribbon = styled.div<{ accent: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, ${({ accent }) => accent}, transparent);
`;

const CardInfo = styled.div`
  padding: 1.2rem 1.4rem 1.4rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
`;

const AwardIcon = styled.div<{ accent: string }>`
  font-size: 1.6rem;
  color: ${({ accent }) => accent};
  flex-shrink: 0;
  margin-top: 2px;
`;

const TextBlock = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.92);
    margin: 0 0 0.25rem;
    line-height: 1.4;
  }
  p {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.45);
    margin: 0;
  }
`;

// ── Lightbox ─────────────────────────────────────────────────────
const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: pointer;
`;

const LightboxImg = styled(motion.img)`
  max-width: min(900px, 90vw);
  max-height: 85vh;
  border-radius: 12px;
  object-fit: contain;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.8);
`;

const CloseBtn = styled.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #fff;
  font-size: 1.4rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10000;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

// ── Page Component ────────────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const Certificates: React.FC = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <PageWrapper>
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certifications
      </SectionTitle>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Click any certificate to view full-size · Drop your own images in{' '}
        <code style={{ color: '#fbbf24', fontSize: '0.85em' }}>public/images/certificates/</code>
      </Subtitle>

      <Grid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {certificates.map((cert) => (
          <Card
            key={cert.id}
            accent={cert.color}
            variants={cardVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            whileHover={{ y: -6 }}
            onClick={() => setLightbox(cert.image)}
          >
            <Ribbon accent={cert.color} />
            <CardImageWrap>
              <img src={cert.image} alt={cert.title} loading="lazy" />
              <ExpandIcon><FaExpand /></ExpandIcon>
            </CardImageWrap>
            <CardInfo>
              <AwardIcon accent={cert.color}><FaAward /></AwardIcon>
              <TextBlock>
                <h3>{cert.title}</h3>
                <p>{cert.issuer} &bull; {cert.date}</p>
              </TextBlock>
            </CardInfo>
          </Card>
        ))}
      </Grid>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <CloseBtn onClick={() => setLightbox(null)}><FaTimes /></CloseBtn>
            <LightboxImg
              src={lightbox}
              alt="Certificate"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            />
          </Overlay>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default Certificates;
