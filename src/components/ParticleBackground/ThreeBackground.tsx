import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, Icosahedron, MeshDistortMaterial, Grid, Sphere, TorusKnot, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

const MovingObject = ({ children, speed = 1, range = 3, offset = 0 }: any) => {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;
  const scale = isMobile ? 0.45 : 1;

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    if (groupRef.current) {
      const moveRange = isMobile ? range * 0.6 : range;
      groupRef.current.position.x = Math.sin(t * 0.5) * moveRange;
      groupRef.current.position.y = Math.cos(t * 0.4) * (moveRange * 0.6);
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
        {children}
      </Float>
    </group>
  );
};

// ── HOME: Floating Crystal ──────────────────────
const HomeScene = () => {
  const crystalRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (crystalRef.current) {
      crystalRef.current.rotation.x = t * 0.2;
      crystalRef.current.rotation.y = t * 0.3;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -t * 0.15;
      wireframeRef.current.rotation.y = -t * 0.25;
    }
  });
  return (
    <MovingObject speed={0.8} range={3.5} offset={0}>
      <Icosahedron ref={crystalRef} args={[1.5, 0]}>
        <meshPhysicalMaterial color="#8b5cf6" emissive="#4c1d95" emissiveIntensity={0.8} roughness={0.1} metalness={0.8} clearcoat={1} />
      </Icosahedron>
      <Icosahedron ref={wireframeRef} args={[1.8, 1]}>
        <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={1} wireframe transparent opacity={0.4} />
      </Icosahedron>
    </MovingObject>
  );
};

// ── EXPERIENCE: Revolving TorusKnot ──────────────────────
const ExperienceScene = () => {
  const knotRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (knotRef.current) {
      knotRef.current.rotation.x = t * 0.3;
      knotRef.current.rotation.y = t * 0.5;
    }
  });
  return (
    <MovingObject speed={1} range={3} offset={10}>
      <pointLight position={[0, 0, 2]} intensity={4} color="#06b6d4" />
      <TorusKnot ref={knotRef} args={[1.2, 0.35, 200, 32]}>
        <meshPhysicalMaterial color="#06b6d4" emissive="#0891b2" emissiveIntensity={0.5} roughness={0} metalness={0.9} clearcoat={1} />
      </TorusKnot>
      <Torus args={[2.8, 0.05, 16, 120]} rotation={[Math.PI/4, 0, 0]}>
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={1} transparent opacity={0.6} />
      </Torus>
    </MovingObject>
  );
};

// ── PROJECTS: Orbiting Cubes ──────────────────────
const ProjectsScene = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.3;
      groupRef.current.rotation.x = t * 0.2;
    }
  });
  const cubes = useMemo(() => {
    const colors = ['#ec4899', '#8b5cf6', '#f59e0b', '#10b981', '#ef4444', '#38bdf8'];
    return Array.from({ length: 15 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
      ] as [number, number, number],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number],
      scale: Math.random() * 0.5 + 0.2,
      color: colors[i % colors.length],
    }));
  }, []);

  return (
    <MovingObject speed={0.9} range={2.5} offset={20}>
      <group ref={groupRef}>
        {cubes.map((cube, i) => (
          <Box key={i} position={cube.position} rotation={cube.rotation} scale={cube.scale}>
            <meshStandardMaterial color={cube.color} emissive={cube.color} emissiveIntensity={0.6} roughness={0.2} metalness={0.8} />
          </Box>
        ))}
      </group>
    </MovingObject>
  );
};

// ── SKILLS: Spinning Sphere & Orbiting balls ──────────────────────
const SkillsScene = () => {
  const icoRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (icoRef.current) {
      icoRef.current.rotation.x = t * 0.4;
      icoRef.current.rotation.y = t * 0.6;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y = t * 0.8;
      orbitRef.current.rotation.z = t * 0.3;
    }
  });
  const orbitingBalls = useMemo(() => Array.from({ length: 6 }).map((_, i) => ({
    angle: (i / 6) * Math.PI * 2,
    radius: 2.2,
  })), []);

  return (
    <MovingObject speed={1.1} range={3} offset={30}>
      <pointLight position={[0, 0, 2]} intensity={4} color="#10b981" />
      <Sphere ref={icoRef} args={[1.3, 32, 32]}>
        <MeshDistortMaterial color="#10b981" distort={0.3} speed={2} roughness={0.1} metalness={0.8} />
      </Sphere>
      <group ref={orbitRef}>
        {orbitingBalls.map((ball, i) => (
          <Sphere key={i} args={[0.15, 16, 16]}
            position={[Math.cos(ball.angle) * ball.radius, 0, Math.sin(ball.angle) * ball.radius]}>
            <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={1} />
          </Sphere>
        ))}
        <Torus args={[2.2, 0.02, 16, 64]} rotation={[Math.PI/2, 0, 0]}>
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={1} transparent opacity={0.4} />
        </Torus>
      </group>
    </MovingObject>
  );
};

// ── CERTIFICATES: Golden Trophy/Ring ──────────────────────
const CertificatesScene = () => {
  const torusRef = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.4;
      torusRef.current.rotation.y = t * 0.3;
    }
    if (inner.current) {
      inner.current.rotation.y = -t * 0.6;
      inner.current.rotation.z = t * 0.2;
    }
  });
  return (
    <MovingObject speed={0.7} range={3.5} offset={40}>
      <pointLight position={[0, 0, 2]} intensity={4} color="#fbbf24" />
      <Torus ref={torusRef} args={[1.6, 0.35, 32, 120]}>
        <meshPhysicalMaterial color="#fbbf24" emissive="#d97706" emissiveIntensity={0.6} roughness={0} metalness={1} clearcoat={1} />
      </Torus>
      <Sphere ref={inner} args={[0.7, 32, 32]}>
        <MeshDistortMaterial color="#f59e0b" distort={0.4} speed={3} roughness={0} metalness={1} emissive="#92400e" emissiveIntensity={0.4} />
      </Sphere>
    </MovingObject>
  );
};

// ── EXTRAS: Floating Polyhedra ──────────────────────
const ExtrasScene = () => {
  return (
    <MovingObject speed={1.2} range={2.5} offset={50}>
      <pointLight position={[0, 2, 1]} intensity={3} color="#8b5cf6" />
      <Float speed={2} rotationIntensity={2} position={[0, 0, 0]}>
        <Icosahedron args={[1.2, 0]}>
          <meshPhysicalMaterial color="#8b5cf6" emissive="#4c1d95" emissiveIntensity={0.5} roughness={0.1} metalness={0.9} clearcoat={1} />
        </Icosahedron>
      </Float>
      <Float speed={1.5} rotationIntensity={1.5} position={[2, 1, -1]}>
        <Icosahedron args={[0.6, 0]}>
          <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.8} />
        </Icosahedron>
      </Float>
      <Float speed={2.5} rotationIntensity={3} position={[-2, -1, 1]}>
        <Icosahedron args={[0.4, 0]}>
          <meshStandardMaterial color="#c4b5fd" emissive="#a78bfa" emissiveIntensity={0.8} />
        </Icosahedron>
      </Float>
    </MovingObject>
  );
};

const AnimatedGrid = () => {
  const gridRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (gridRef.current) {
      gridRef.current.position.z = (t * 2) % 5; 
    }
  });
  return (
    <group ref={gridRef}>
      <Grid position={[0, -2.5, 0]} args={[80, 80]} cellSize={1} cellThickness={1} cellColor="#38bdf8" sectionSize={5} sectionThickness={1.5} sectionColor="#a78bfa" fadeDistance={40} fadeStrength={1} />
    </group>
  );
};

const ResponsiveStars = () => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;
  return (
    <Stars 
      radius={150} 
      depth={80} 
      count={isMobile ? 2000 : 5000} 
      factor={isMobile ? 4 : 6} 
      saturation={0.5} 
      fade 
      speed={1.5} 
    />
  );
};

const pageBgColors: Record<string, string> = {
  '/':            '#07071a',
  '/experience':  '#03101a',
  '/projects':    '#150718',
  '/skills':      '#03130d',
  '/certificates':'#130e02',
  '/extras':      '#0e0718',
};

interface ThreeBackgroundProps { location: string; }

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ location }) => {
  const bg = pageBgColors[location] ?? '#07071a';
  
  const renderScene = () => {
    switch (location) {
      case '/':            return <HomeScene />;
      case '/experience':  return <ExperienceScene />;
      case '/projects':    return <ProjectsScene />;
      case '/skills':      return <SkillsScene />;
      case '/certificates':return <CertificatesScene />;
      case '/extras':      return <ExtrasScene />;
      default:             return <HomeScene />;
    }
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      zIndex: 0, pointerEvents: 'none', background: bg,
      transition: 'background 0.8s ease',
    }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#a78bfa" />
        <pointLight position={[-10, 5, -10]} intensity={1} color="#38bdf8" />

        <ResponsiveStars />
        <AnimatedGrid />
        
        {renderScene()}
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
