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
  justify-content: space-between;
  align-items: center;
  padding: 50px 5%;
  max-width: 1100px;
  margin: 0 auto;
  height: 100vh;
  background: linear-gradient(135deg, rgba(0,123,255,0.2), rgba(0,200,83,0.2));
  border-radius: 12px;
  backdrop-filter: blur(6px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 4%;
  }

  @media (max-width: 768px) {
    padding: 30px 3%;
  }
`;

const Content = styled.div`flex: 1;`;

const Intro = styled(motion.p)`
  color: #007bff;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

const Name = styled(motion.h1)`
  color: #1a1a1a;
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.2rem;
`;

const Tagline = styled(motion.h2)`
  color: #c4bebeff;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 1.5rem;
`;

const Description = styled(motion.p)`
  color: #333333;
  font-size: 1.5rem;
  max-width: 550px;
  line-height: 1.5;
`;

const PhotoStack = styled.div`
  flex: 1;
  position: relative;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 1024px){
    margin-top: 2rem;
    height: 350px;
  }
`;

const PhotoCard = styled(motion.img)<{ index: number }>`
  position: absolute;
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  z-index: ${props => 100 - props.index};

  @media(max-width: 768px){
    width: 220px;
    height: 300px;
  }
`;

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % photos.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

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
          {photos.map((photo, index) => {
            const visibleIndex = (currentIndex + index) % photos.length;

            const isFront = index === 0;
            const tilt = isFront ? 0 : Math.random() * 30 - 15; // -15° to 15°
            const offsetX = isFront ? 0 : Math.random() * 30 - 15;
            const offsetY = isFront ? 0 : -index * 10;

            return (
              <PhotoCard
                key={photo}
                src={photos[visibleIndex]}
                index={index}
                initial={{ opacity: 0, scale: 0.8, rotate: tilt, y: 50, x: 0 }}
                animate={{
                  opacity: isFront ? 1 : 0.6,
                  scale: isFront ? 1 : 0.9,
                  rotate: tilt,
                  y: offsetY,
                  x: offsetX,
                }}
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
