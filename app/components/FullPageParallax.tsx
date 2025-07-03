'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const FullPageParallax = () => {
  const { scrollY } = useScroll();
  
  // Multiple layers with different speeds for true parallax effect
  const y1 = useTransform(scrollY, [0, 3000], [0, -500]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -300]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -150]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen pointer-events-none -z-10" style={{ width: '100vw' }}>
      {/* Layer 1 - Furthest back, moves slowest */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        <svg className="w-screen h-[150%]" style={{ width: '100vw' }} viewBox="0 0 1920 2880" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="parallax-layer-1" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="rgba(0,103,54,0.08)" strokeWidth="0.4">
                {/* Large hexagonal pattern with rotation */}
                <g transform="translate(60,60)">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 0 0"
                    to="360 0 0"
                    dur="180s"
                    repeatCount="indefinite"
                  />
                  <path d="M0,-40 L34.64,-20 L34.64,20 L0,40 L-34.64,20 L-34.64,-20 Z" />
                  <path d="M0,-25 L21.65,-12.5 L21.65,12.5 L0,25 L-21.65,12.5 L-21.65,-12.5 Z" 
                        fill="rgba(0,103,54,0.02)" />
                </g>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#parallax-layer-1)" />
        </svg>
      </motion.div>

      {/* Layer 2 - Middle layer */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y2 }}
      >
        <svg className="w-screen h-[130%]" style={{ width: '100vw' }} viewBox="0 0 1920 2080" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="parallax-layer-2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <g fill="none" stroke="rgba(0,103,54,0.1)" strokeWidth="0.3">
                {/* Islamic 8-pointed stars with counter rotation */}
                <g transform="translate(40,40)">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="360 0 0"
                    to="0 0 0"
                    dur="120s"
                    repeatCount="indefinite"
                  />
                  <path d="M0,-20 L5,-8 L17,-6 L7,2 L10,14 L0,7 L-10,14 L-7,2 L-17,-6 L-5,-8 Z" 
                        fill="rgba(0,103,54,0.03)" />
                  <circle cx="0" cy="0" r="5" fill="rgba(0,103,54,0.02)" />
                </g>
                {/* Corner dots with pulsing */}
                <circle cx="20" cy="20" r="1.5" fill="rgba(0,103,54,0.04)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="6s" repeatCount="indefinite" />
                </circle>
                <circle cx="60" cy="20" r="1.5" fill="rgba(0,103,54,0.04)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="6s" begin="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="20" cy="60" r="1.5" fill="rgba(0,103,54,0.04)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="6s" begin="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="60" cy="60" r="1.5" fill="rgba(0,103,54,0.04)">
                  <animate attributeName="r" values="1.5;2;1.5" dur="6s" begin="4.5s" repeatCount="indefinite" />
                </circle>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#parallax-layer-2)" />
        </svg>
      </motion.div>

      {/* Layer 3 - Closest layer, moves fastest */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y3 }}
      >
        <svg className="w-screen h-[110%]" style={{ width: '100vw' }} viewBox="0 0 1920 1760" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="parallax-layer-3" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <g fill="rgba(0,103,54,0.025)">
                {/* Small geometric elements with floating animation */}
                <g transform="translate(30,30)">
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="30,30; 30,25; 30,35; 30,30"
                    dur="10s"
                    repeatCount="indefinite"
                  />
                  <circle cx="0" cy="0" r="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="8s" repeatCount="indefinite" />
                  </circle>
                </g>
                <path d="M15,15 L45,15 L45,45 L15,45 Z" fill="none" stroke="rgba(0,103,54,0.06)" strokeWidth="0.5">
                  <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="12s" repeatCount="indefinite" />
                </path>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#parallax-layer-3)" />
        </svg>
      </motion.div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default FullPageParallax;