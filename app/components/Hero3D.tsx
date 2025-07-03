'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function IslamicStar({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  // Create 8-pointed star geometry
  const starShape = new THREE.Shape();
  const outerRadius = 1;
  const innerRadius = 0.4;
  const points = 8;
  
  for (let i = 0; i < points * 2; i++) {
    const angle = (i / (points * 2)) * Math.PI * 2;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    if (i === 0) {
      starShape.moveTo(x, y);
    } else {
      starShape.lineTo(x, y);
    }
  }
  starShape.closePath();

  const extrudeSettings = {
    depth: 0.1,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0.02,
    bevelThickness: 0.02
  };

  return (
    <mesh ref={meshRef} position={position}>
      <extrudeGeometry args={[starShape, extrudeSettings]} />
      <meshStandardMaterial 
        color="#006736" 
        metalness={0.8} 
        roughness={0.1}
        emissive="#003d1f"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function IslamicPattern({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Central hexagon */}
      <mesh>
        <cylinderGeometry args={[0.8, 0.8, 0.1, 6]} />
        <meshStandardMaterial 
          color="#006736" 
          metalness={0.7} 
          roughness={0.2}
          emissive="#006736"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Surrounding smaller hexagons */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.cos(angle) * 1.5;
        const z = Math.sin(angle) * 1.5;
        
        return (
          <mesh key={i} position={[x, 0, z]}>
            <cylinderGeometry args={[0.3, 0.3, 0.05, 6]} />
            <meshStandardMaterial 
              color="#3C845D" 
              metalness={0.6} 
              roughness={0.3}
              emissive="#1a4026"
              emissiveIntensity={0.1}
            />
          </mesh>
        );
      })}
    </group>
  );
}

function FloatingText() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        fontSize={0.8}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Poppins-Bold.ttf"
      >
        Al-Madinah Institute
      </Text>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
      <pointLight position={[-10, -10, -5]} color="#3C845D" intensity={0.7} />
      <pointLight position={[5, 5, 5]} color="#006736" intensity={0.4} />
      <spotLight position={[0, 10, 0]} angle={0.6} penumbra={1} intensity={0.5} color="#ffffff" />
      
      {/* Islamic geometric shapes */}
      <IslamicStar position={[-4, 2, -1]} />
      <IslamicStar position={[4, 1, -2]} />
      <IslamicPattern position={[0, -1, 3]} />
      <IslamicPattern position={[-3, 0, -3]} />
      <IslamicStar position={[3, -1, -1]} />
      <IslamicPattern position={[2, 3, 1]} />
      
      {/* Reflective ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#001a0d"
          metalness={0.5}
          mirror={0}
        />
      </mesh>
      
      <FloatingText />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Overlay content with glassmorphism */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center px-8 py-16 max-w-4xl mx-auto backdrop-blur-sm bg-white/5 rounded-2xl shadow-xl border border-white/10 ring-1 ring-green-500/20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight tracking-tight">
            Welcome to <span className="text-green-300 text-shadow-lg">Al-Madinah</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/85 mb-8 drop-shadow-lg font-light leading-relaxed max-w-3xl mx-auto">
            A beacon of Islamic knowledge and spiritual growth in our community
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-green-700 hover:to-green-800 border border-green-500/20">
              Explore Programs
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border border-white/20 hover:bg-white/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 ring-1 ring-white/10">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/10 to-black/50 pointer-events-none" />
    </div>
  );
}