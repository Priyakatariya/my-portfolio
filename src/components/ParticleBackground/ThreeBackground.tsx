import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useLocation } from 'react-router-dom';

// ── UTILITIES ────────────────────────────────────────────────────────────────
const isMobileDevice = () => window.innerWidth < 768;

const ParticleMaterial = ({ color, size }: { color: string; size: number }) => (
  <pointsMaterial
    size={size}
    color={color}
    transparent
    opacity={0.85} 
    sizeAttenuation
    blending={THREE.AdditiveBlending}
    depthWrite={false}
  />
);

// ── SCENES ───────────────────────────────────────────────────────────────────

// 1. HOME: Wavy Particle Grid (Already full screen)
const HomeScene = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const gridSize = isMobileDevice() ? 30 : 60;
  const spacing = 0.5; // Wider spacing to fill screen

  const positions = useMemo(() => {
    const pos = new Float32Array(gridSize * gridSize * 3);
    let i = 0;
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        pos[i++] = (x - gridSize / 2) * spacing;
        pos[i++] = 0;
        pos[i++] = (z - gridSize / 2) * spacing;
      }
    }
    return pos;
  }, [gridSize, spacing]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime * 0.8; 
    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    let i = 0;
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        const xPos = (x - gridSize / 2) * spacing;
        const zPos = (z - gridSize / 2) * spacing;
        const distance = Math.sqrt(xPos * xPos + zPos * zPos);
        posArray[i * 3 + 1] = Math.sin(distance * 1.5 - t * 2) * 0.8 + Math.cos(xPos * 1.2 + t) * 0.5;
        i++;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = t * 0.05;
    pointsRef.current.rotation.x = 0.3;
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <points ref={pointsRef} position={[0, -3, -10]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <ParticleMaterial color="#00e5ff" size={0.08} />
      </points>
    </Float>
  );
};

// 2. EXPERIENCE: Multiple Galaxy Spirals
const Galaxy = ({ position, color, scale, speed, particleCount }: any) => {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 5 * scale; 
      const spinAngle = radius * 1.5;
      const branchAngle = ((i % 3) * Math.PI * 2) / 3;
      const angle = spinAngle + branchAngle + (Math.random() - 0.5) * 0.5;
      const ySpread = (Math.random() - 0.5) * (1.5 / (radius + 0.1));
      
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = ySpread;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
  }, [particleCount, scale]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * speed;
      pointsRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <points ref={pointsRef} position={position} rotation={[0.4, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <ParticleMaterial color={color} size={0.07} />
      </points>
    </Float>
  );
};

const ExperienceScene = () => {
  return (
    <group>
      {/* Single massive galaxy as requested */}
      <Galaxy position={[0, -1, -8]} color="#e9d5ff" scale={2.8} speed={0.08} particleCount={4000} />
    </group>
  );
};

// 3. PROJECTS: Multiple Orbiting Ring Systems
const OrbitRings = ({ position, colors, scale }: any) => {
  const ringsRef = useRef<THREE.Group>(null);
  
  const createRing = (radius: number, count: number) => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.15;
      pos[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 0.15;
    }
    return pos;
  };

  const ring1 = useMemo(() => createRing(2.5 * scale, 200), [scale]);
  const ring2 = useMemo(() => createRing(3.5 * scale, 300), [scale]);
  const ring3 = useMemo(() => createRing(4.5 * scale, 400), [scale]);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.5; 
    if (ringsRef.current) {
      ringsRef.current.children[0].rotation.y = t * 0.5;
      ringsRef.current.children[0].rotation.x = t * 0.3;
      
      ringsRef.current.children[1].rotation.y = -t * 0.4;
      ringsRef.current.children[1].rotation.z = t * 0.25;
      
      ringsRef.current.children[2].rotation.y = t * 0.3;
      ringsRef.current.children[2].rotation.x = -t * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={ringsRef} position={position}>
        <points>
          <bufferGeometry><bufferAttribute attach="attributes-position" args={[ring1, 3]} /></bufferGeometry>
          <ParticleMaterial color={colors[0]} size={0.09} />
        </points>
        <points>
          <bufferGeometry><bufferAttribute attach="attributes-position" args={[ring2, 3]} /></bufferGeometry>
          <ParticleMaterial color={colors[1]} size={0.09} />
        </points>
        <points>
          <bufferGeometry><bufferAttribute attach="attributes-position" args={[ring3, 3]} /></bufferGeometry>
          <ParticleMaterial color={colors[2]} size={0.09} />
        </points>
      </group>
    </Float>
  );
};

const ProjectsScene = () => {
  return (
    <group>
      <OrbitRings position={[-7, 4, -15]} colors={['#34d399', '#22d3ee', '#f472b6']} scale={1.2} />
      <OrbitRings position={[6, -3, -12]} colors={['#fbbf24', '#f472b6', '#38bdf8']} scale={1.5} />
      <OrbitRings position={[0, -1, -8]} colors={['#22d3ee', '#34d399', '#fbbf24']} scale={2} />
    </group>
  );
};

// 4. SKILLS: Massive Neural Sphere
const SkillSphere = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = isMobileDevice() ? 1500 : 3000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 5.5 + Math.random() * 0.5; 
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      pointsRef.current.rotation.z = state.clock.elapsedTime * 0.05;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.03;
      pointsRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
      <points ref={pointsRef} position={[0, 0, -10]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <ParticleMaterial color="#f59e0b" size={0.08} />
      </points>
    </Float>
  );
};

const SkillsScene = () => {
  return <SkillSphere />;
};

// 5. CERTIFICATES: Multiple Swirling Dust Vortices
const Vortex = ({ position, color, scale, speed }: any) => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1000;

  const { positions, initialAngles } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const angles = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const height = (Math.random() * 12 - 6) * scale;
      const radius = ((height / scale) + 6) * 0.35 * scale + Math.random() * 0.8; 
      const angle = Math.random() * Math.PI * 2;
      
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = height;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
      angles[i] = angle;
    }
    return { positions: pos, initialAngles: angles };
  }, [count, scale]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime * speed; 
    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      const height = posArray[i * 3 + 1];
      const radius = ((height / scale) + 6) * 0.35 * scale;
      const angle = initialAngles[i] + t * (1.2 - (height / scale) * 0.05); 
      
      posArray[i * 3] = Math.cos(angle) * radius;
      posArray[i * 3 + 2] = Math.sin(angle) * radius;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = t * 0.1;
    pointsRef.current.rotation.z = Math.sin(t * 0.3) * 0.15;
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <points ref={pointsRef} position={position} rotation={[0.2, 0, 0]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <ParticleMaterial color={color} size={0.08} />
      </points>
    </Float>
  );
};

const CertificatesScene = () => {
  return (
    <group>
      <Vortex position={[-6, -1, -12]} color="#fde047" scale={1.2} speed={0.8} />
      <Vortex position={[6, 2, -15]} color="#fbbf24" scale={1.5} speed={0.6} />
      <Vortex position={[0, -3, -10]} color="#fef08a" scale={2} speed={1} />
    </group>
  );
};

// 6. EXTRAS: Digital Rain (Already full screen)
const ExtrasScene = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = isMobileDevice() ? 800 : 1500; 

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30; // Wider spread
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5; 
    }
    return pos;
  }, [count]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      posArray[i * 3 + 1] -= 0.04 + Math.random() * 0.04; 
      if (posArray[i * 3 + 1] < -10) {
        posArray[i * 3 + 1] = 10; 
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <ParticleMaterial color="#f0abfc" size={0.12} />
    </points>
  );
};

// ── MAIN COMPONENT ───────────────────────────────────────────────────────────
const ThreeBackground: React.FC = () => {
  const location = useLocation();

  const renderScene = () => {
    switch (location.pathname) {
      case '/': return <HomeScene />;
      case '/experience': return <ExperienceScene />;
      case '/projects': return <ProjectsScene />;
      case '/skills': return <SkillsScene />;
      case '/certificates': return <CertificatesScene />;
      case '/extras': return <ExtrasScene />;
      default: return <HomeScene />;
    }
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
        {renderScene()}
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
