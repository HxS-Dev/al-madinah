'use client';

import React from 'react';

export const AnimatedIslamicBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Animated Mosque Domes and Islamic Shapes */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large Dome - Bottom Left */}
        <g className="animate-float-slow" transform="translate(300, 850)">
          <path
            d="M -80 0 L -80 -20 C -80 -120 -40 -160 0 -160 C 40 -160 80 -120 80 -20 L 80 0 Z"
            fill="rgba(27, 94, 63, 0.08)"
          />
          <path
            d="M 0 -160 L 0 -190 L -8 -178 M 0 -190 L 8 -178"
            stroke="rgba(27, 94, 63, 0.15)"
            strokeWidth="3"
            fill="none"
          />
          <rect x="-80" y="0" width="160" height="20" fill="rgba(27, 94, 63, 0.1)" />
        </g>

        {/* Medium Dome - Bottom Right */}
        <g className="animate-float-medium" transform="translate(1600, 800)">
          <path
            d="M -60 0 L -60 -15 C -60 -90 -30 -120 0 -120 C 30 -120 60 -90 60 -15 L 60 0 Z"
            fill="rgba(27, 94, 63, 0.06)"
          />
          <path
            d="M 0 -120 L 0 -140 L -6 -132 M 0 -140 L 6 -132"
            stroke="rgba(27, 94, 63, 0.12)"
            strokeWidth="2.5"
            fill="none"
          />
          <rect x="-60" y="0" width="120" height="15" fill="rgba(27, 94, 63, 0.08)" />
        </g>

        {/* Small Dome - Middle */}
        <g className="animate-float-fast" transform="translate(950, 650)">
          <path
            d="M -40 0 L -40 -10 C -40 -60 -20 -80 0 -80 C 20 -80 40 -60 40 -10 L 40 0 Z"
            fill="rgba(27, 94, 63, 0.05)"
          />
          <path
            d="M 0 -80 L 0 -95 L -4 -88 M 0 -95 L 4 -88"
            stroke="rgba(27, 94, 63, 0.1)"
            strokeWidth="2"
            fill="none"
          />
          <rect x="-40" y="0" width="80" height="10" fill="rgba(27, 94, 63, 0.07)" />
        </g>

        {/* Crescent Moon - Top Right */}
        <g className="animate-float-slow" transform="translate(1700, 200)">
          <path
            d="M 0 -40 A 40 40 0 1 1 0 40 A 32 32 0 1 0 0 -40"
            fill="rgba(27, 94, 63, 0.08)"
          />
        </g>

        {/* Islamic 8-pointed Star - Top Left */}
        <g className="animate-pulse-slow" transform="translate(250, 250)">
          <path
            d="M 0 -30 L 8 -8 L 30 0 L 8 8 L 0 30 L -8 8 L -30 0 L -8 -8 Z"
            fill="rgba(27, 94, 63, 0.07)"
            transform="rotate(45)"
          />
          <path
            d="M 0 -30 L 8 -8 L 30 0 L 8 8 L 0 30 L -8 8 L -30 0 L -8 -8 Z"
            fill="rgba(27, 94, 63, 0.07)"
          />
        </g>

        {/* Simple Geometric Pattern - Center */}
        <g className="animate-float-medium" transform="translate(960, 400)">
          <polygon
            points="0,-50 50,0 0,50 -50,0"
            fill="rgba(27, 94, 63, 0.04)"
          />
          <polygon
            points="0,-35 35,0 0,35 -35,0"
            fill="rgba(27, 94, 63, 0.06)"
          />
        </g>

        {/* Another Star - Right Side */}
        <g className="animate-pulse-medium" transform="translate(1650, 500)">
          <path
            d="M 0 -20 L 5 -5 L 20 0 L 5 5 L 0 20 L -5 5 L -20 0 L -5 -5 Z"
            fill="rgba(27, 94, 63, 0.05)"
          />
        </g>

        {/* Small dots scattered */}
        {[
          { x: 150, y: 400 },
          { x: 500, y: 150 },
          { x: 800, y: 300 },
          { x: 1200, y: 200 },
          { x: 1400, y: 600 },
          { x: 600, y: 500 },
          { x: 1000, y: 250 },
          { x: 1800, y: 400 },
        ].map((dot, index) => (
          <circle
            key={index}
            cx={dot.x}
            cy={dot.y}
            r="3"
            fill="rgba(27, 94, 63, 0.1)"
            className="animate-twinkle"
            style={{ animationDelay: `${index * 0.5}s` }}
          />
        ))}
      </svg>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.95); }
        }
        
        @keyframes pulse-medium {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.97); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          transform-origin: center;
          animation: rotate-slow 30s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-medium {
          animation: pulse-medium 3s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedIslamicBackground;