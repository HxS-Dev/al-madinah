'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxIslamicPattern = ({ className = "", baseOpacity = 0.02, speed = 0.5 }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (value) => value * speed);

  return (
    <motion.div 
      className={`fixed top-0 left-0 w-full h-full pointer-events-none -z-10 ${className}`}
      style={{ y }}
    >
      <svg className="w-full h-[120%]" viewBox="0 0 1920 1200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Main Islamic star tessellation pattern */}
          <pattern id="parallax-islamic-pattern" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="rgba(0,103,54,0.15)" strokeWidth="0.5">
              {/* Central 8-pointed star formation */}
              <g transform="translate(24,24)">
                {/* Outer star */}
                <path d="M0,-20 L5.5,-8 L18,-7 L9,2 L11.5,14.5 L0,8 L-11.5,14.5 L-9,2 L-18,-7 L-5.5,-8 Z" 
                      fill="rgba(0,103,54,0.04)" />
                
                {/* Inner octagon */}
                <path d="M0,-12 L8.5,-8.5 L12,0 L8.5,8.5 L0,12 L-8.5,8.5 L-12,0 L-8.5,-8.5 Z" 
                      fill="rgba(0,103,54,0.03)" />
                
                {/* Center hexagon */}
                <path d="M0,-6 L5.2,-3 L5.2,3 L0,6 L-5.2,3 L-5.2,-3 Z" 
                      fill="rgba(0,103,54,0.05)" />
              </g>
              
              {/* Corner connecting elements */}
              <circle cx="12" cy="12" r="2" fill="rgba(0,103,54,0.04)" />
              <circle cx="36" cy="12" r="2" fill="rgba(0,103,54,0.04)" />
              <circle cx="12" cy="36" r="2" fill="rgba(0,103,54,0.04)" />
              <circle cx="36" cy="36" r="2" fill="rgba(0,103,54,0.04)" />
              
              {/* Subtle connecting lines */}
              <path d="M12,12 L36,12 M36,12 L36,36 M36,36 L12,36 M12,36 L12,12" 
                    strokeOpacity="0.15" />
            </g>
          </pattern>

          {/* Secondary layer with larger geometric elements */}
          <pattern id="parallax-islamic-pattern-2" x="0" y="0" width="96" height="96" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="rgba(0,103,54,0.2)" strokeWidth="0.3">
              {/* Large hexagonal frame */}
              <g transform="translate(48,48)">
                <path d="M0,-35 L30.3,-17.5 L30.3,17.5 L0,35 L-30.3,17.5 L-30.3,-17.5 Z" 
                      strokeOpacity="0.2" />
                
                {/* Inner star pattern */}
                <path d="M0,-24 L6,-6 L24,-6 L9,3 L15,21 L0,12 L-15,21 L-9,3 L-24,-6 L-6,-6 Z" 
                      fill="rgba(0,103,54,0.025)" strokeOpacity="0.15" />
              </g>
            </g>
          </pattern>

          {/* Animated floating dots */}
          <pattern id="parallax-dots" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
            <circle cx="32" cy="32" r="1" fill="rgba(0,103,54,0.3)">
              <animate attributeName="r" values="0.5;1.5;0.5" dur="12s" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0.15;0.4;0.15" dur="12s" repeatCount="indefinite" />
            </circle>
          </pattern>

          {/* Gradient overlay for depth */}
          <linearGradient id="depth-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="white" stopOpacity="0.02" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Apply patterns */}
        <g opacity="1">
          {/* Base tessellation layer */}
          <rect width="1920" height="1200" fill="url(#parallax-islamic-pattern)" />
          
          {/* Secondary geometric layer with slight offset */}
          <g transform="translate(24,24)">
            <rect width="1920" height="1200" fill="url(#parallax-islamic-pattern-2)" opacity="0.6" />
          </g>
          
          {/* Floating dots layer */}
          <rect width="1920" height="1200" fill="url(#parallax-dots)" opacity="0.5" />
          
          {/* Depth gradient */}
          <rect width="1920" height="1200" fill="url(#depth-gradient)" />
        </g>
        
        {/* Subtle animated accents */}
        <g>
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={i}
              cx={384 * (i + 1)}
              cy={300}
              r="60"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 20,
                delay: i * 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </g>
      </svg>
    </motion.div>
  );
};

export default ParallaxIslamicPattern;