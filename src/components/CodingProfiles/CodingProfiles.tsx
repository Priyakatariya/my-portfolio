import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEdit, FaTimes, FaUndo, FaSave } from 'react-icons/fa';
import { loadCodingProfiles, saveCodingProfiles, resetCodingProfiles } from '../../utils/profileStorage';
import type { CodingProfile } from '../../data/codingProfiles';

const Section = styled.section`
  padding: 80px 5%;
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 8vw, 2.8rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #2dd4bf, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 2rem;
  font-size: 1rem;
  letter-spacing: 0.02em;
`;

const EditButton = styled.button`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.6);
  padding: 0.5rem 1.1rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  margin: 0 auto 3rem;

  &:hover {
    background: rgba(167, 139, 250, 0.15);
    border-color: rgba(167, 139, 250, 0.4);
    color: #a78bfa;
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(167, 139, 250, 0.15);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.2rem;

  @media (max-width: 560px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 0.8rem;
  }
`;

const Card = styled(motion.a)<{ borderGlow: string; bgColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1.5rem;
  background: ${({ bgColor }) => bgColor};
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 20px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background: linear-gradient(135deg, transparent, ${({ borderGlow }) => borderGlow}, transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 16px 48px ${({ borderGlow }) => borderGlow};
    border-color: ${({ borderGlow }) => borderGlow};

    &::before {
      opacity: 1;
    }
  }
`;

const IconWrap = styled.div`
  font-size: 2.4rem;
  margin-bottom: 0.9rem;
  line-height: 1;
`;

const PlatformName = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: rgba(255,255,255,0.92);
  margin: 0 0 0.8rem;
  letter-spacing: 0.01em;
`;

const StatNum = styled.div<{ color: string }>`
  font-size: 1.9rem;
  font-weight: 900;
  color: ${({ color }) => color};
  line-height: 1;
  letter-spacing: -0.02em;
`;

const StatLabel = styled.p`
  font-size: 0.72rem;
  color: rgba(255,255,255,0.35);
  margin: 0.35rem 0 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.4;
`;

// ── Edit Modal Styled Components ───────────────────────────────────────────
const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(4, 4, 12, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

const ModalContainer = styled(motion.div)`
  background: rgba(10, 10, 22, 0.92);
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 24px;
  width: 100%;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;
  padding: 2.2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  position: relative;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(167, 139, 250, 0.25); border-radius: 2px; }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.45rem;
    font-weight: 800;
    background: linear-gradient(135deg, #a78bfa, #2dd4bf);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.3rem;
  cursor: pointer;
  transition: color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #ef4444;
    transform: rotate(90deg);
  }
`;

const FormScrollArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding-bottom: 1.6rem;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const ProfileTitle = styled.h4<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.8rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  label {
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.4);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  input {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 0.6rem 0.8rem;
    color: #fff;
    font-size: 0.88rem;
    transition: all 0.2s;

    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(167, 139, 250, 0.5);
      box-shadow: 0 0 10px rgba(167, 139, 250, 0.15);
    }
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 1.6rem;
  gap: 0.8rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const LeftActions = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  padding: 0.65rem 1.2rem;
  border-radius: 12px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${({ variant }) =>
    variant === 'primary'
      ? `
        background: linear-gradient(135deg, #7c3aed, #4f46e5);
        color: #fff;
        border: none;
        &:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.35);
        }
      `
      : variant === 'danger'
      ? `
        background: rgba(239, 68, 68, 0.08);
        color: #f87171;
        border: 1px solid rgba(239, 68, 68, 0.2);
        &:hover {
          background: rgba(239, 68, 68, 0.15);
          border-color: rgba(239, 68, 68, 0.35);
        }
      `
      : `
        background: rgba(255, 255, 255, 0.04);
        color: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.08);
        &:hover {
          background: rgba(255, 255, 255, 0.08);
        }
      `}
`;

const CodingProfiles: React.FC = () => {
  const [profiles, setProfiles] = useState<CodingProfile[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedProfiles, setEditedProfiles] = useState<CodingProfile[]>([]);

  // Load profiles on mount
  useEffect(() => {
    setProfiles(loadCodingProfiles());

    const handleUpdate = () => {
      setProfiles(loadCodingProfiles());
    };

    window.addEventListener('portfolio_profiles_updated', handleUpdate);
    return () => {
      window.removeEventListener('portfolio_profiles_updated', handleUpdate);
    };
  }, []);

  const openEditor = () => {
    setEditedProfiles(JSON.parse(JSON.stringify(profiles))); // Deep clone
    setIsModalOpen(true);
  };

  const handleInputChange = (index: number, field: keyof CodingProfile, value: string) => {
    const updated = [...editedProfiles];
    updated[index] = { ...updated[index], [field]: value };
    setEditedProfiles(updated);
  };

  const saveChanges = () => {
    saveCodingProfiles(editedProfiles);
    setProfiles(editedProfiles);
    setIsModalOpen(false);
  };

  const resetToDefault = () => {
    if (window.confirm('Are you sure you want to reset all profile stats to their default values?')) {
      const defaults = resetCodingProfiles();
      setProfiles(defaults);
      setIsModalOpen(false);
    }
  };

  return (
    <Section id="coding-profiles">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Coding Profiles
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Where I compete, contribute &amp; keep building
      </Subtitle>

      <EditButton onClick={openEditor}>
        <FaEdit size={13} /> Edit Profiles
      </EditButton>

      <Grid>
        {profiles.map((profile, i) => (
          <Card
            key={i}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            bgColor={profile.bgColor}
            borderGlow={profile.borderGlow}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <IconWrap>{profile.icon}</IconWrap>
            <PlatformName>{profile.platform}</PlatformName>
            <StatNum color={profile.color}>{profile.stat}</StatNum>
            <StatLabel>{profile.statLabel}</StatLabel>
          </Card>
        ))}
      </Grid>

      {/* Edit Modal Dialog */}
      <AnimatePresence>
        {isModalOpen && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalContainer
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            >
              <ModalHeader>
                <h3>Edit Coding Profiles</h3>
                <CloseBtn onClick={() => setIsModalOpen(false)}>
                  <FaTimes />
                </CloseBtn>
              </ModalHeader>

              <FormScrollArea>
                {editedProfiles.map((prof, idx) => (
                  <FormGroup key={prof.platform}>
                    <ProfileTitle color={prof.color}>
                      <span>{prof.icon}</span> {prof.platform}
                    </ProfileTitle>
                    <InputGrid>
                      <InputField>
                        <label>Stat (Solved / Rating)</label>
                        <input
                          type="text"
                          value={prof.stat}
                          onChange={(e) => handleInputChange(idx, 'stat', e.target.value)}
                        />
                      </InputField>
                      <InputField>
                        <label>Description / Badge Label</label>
                        <input
                          type="text"
                          value={prof.statLabel}
                          onChange={(e) => handleInputChange(idx, 'statLabel', e.target.value)}
                        />
                      </InputField>
                    </InputGrid>
                    <InputField style={{ marginTop: '0.8rem' }}>
                      <label>Profile URL Link</label>
                      <input
                        type="text"
                        value={prof.link}
                        onChange={(e) => handleInputChange(idx, 'link', e.target.value)}
                      />
                    </InputField>
                  </FormGroup>
                ))}
              </FormScrollArea>

              <ActionsContainer>
                <LeftActions>
                  <Button variant="danger" onClick={resetToDefault}>
                    <FaUndo size={12} /> Reset defaults
                  </Button>
                </LeftActions>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                  <Button variant="primary" onClick={saveChanges}>
                    <FaSave size={13} /> Save Changes
                  </Button>
                </div>
              </ActionsContainer>
            </ModalContainer>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default CodingProfiles;
