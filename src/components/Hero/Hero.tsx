import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  '/images/photo4.jpg',
  '/images/photo5.jpg',
  '/images/photo6.jpg',
  '/images/photo7.jpg',
];

const HeroSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 5%;
  max-width: 1100px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(0,123,255,0.2), rgba(0,200,83,0.2));
  border-radius: 12px;
  backdrop-filter: blur(6px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 3%;
  }
`;

const Content = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Intro = styled(motion.p)`
  color: #007bff;
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Name = styled(motion.h1)`
  color: #1a1a1a;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0.2rem;

  @media(max-width:768px){
    font-size: 2.5rem;
  }
`;

const Tagline = styled(motion.h2)`
  color: #00c853;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.2rem;

  @media(max-width:768px){
    font-size: 1.8rem;
  }
`;

const Description = styled(motion.p)`
  color: #333333;
  font-size: 1.2rem;
  max-width: 550px;
  line-height: 1.5;

  @media(max-width:768px){
    font-size: 1rem;
    max-width: 100%;
  }
`;

const PhotoStack = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: 400px; /* increase for more spacing */
  padding-top: 3rem;

  @media (max-width: 1024px) {
    min-height: 350px;
    padding-top: 2rem;
  }

  @media (max-width: 768px) {
    min-height: 300px;
    padding-top: 1rem;
  }
`;

const PhotoCard = styled(motion.img)<{ index: number }>`
  position: absolute;
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  z-index: ${props => 100 - props.index};

  @media(max-width:1024px){
    width: 250px;
    height: 350px;
  }

  @media(max-width:768px){
    width: 200px;
    height: 280px;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % photos.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Get visible indices for desktop (show 3-card stack)
  const getVisibleIndices = () => {
    if (isMobile) return [currentIndex];
    return [
      currentIndex,
      (currentIndex + 1) % photos.length,
      (currentIndex + 2) % photos.length
    ];
  };

  return (
    <HeroSection>
      <Content>
        <motion.div initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{staggerChildren:0.2}}>
          <Intro transition={{duration:0.5, delay:0.5}}>Hi, my name is</Intro>
          <Name transition={{duration:0.5, delay:0.7}}>Priya.</Name>
          <Tagline transition={{duration:0.5, delay:0.9}}>Web Developer.</Tagline>
          <Description transition={{ duration: 0.5, delay: 1.1 }}>
            I am a frontend developer passionate about creating smooth and engaging web experiences. 
            I build responsive, fast, and visually appealing websites that delight users. 
            My focus is on seamless interactions, modern design, and performance-driven applications.
          </Description>
        </motion.div>
      </Content>

      <PhotoStack>
        <AnimatePresence>
          {getVisibleIndices().map((index, stackPosition) => {
            const photo = photos[index];

            const tilt = isMobile ? 0 : Math.random() * 20 - 10;
            const offsetY = isMobile ? 0 : -stackPosition * 15;
            const offsetX = isMobile ? 0 : stackPosition * 10;

            return (
              <PhotoCard
                key={photo + currentIndex} // triggers re-animation on index change
                src={photo}
                index={stackPosition}
                initial={{ opacity: 0, scale: 0.9, rotate: tilt, y: 50, x: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: tilt, y: offsetY, x: offsetX }}
                exit={{ opacity: 0, scale: 0.8, y: -50, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut', type: 'spring', stiffness: 120 }}
              />
            );
          })}
        </AnimatePresence>
      </PhotoStack>
    </HeroSection>
  );
};

export default Hero;
