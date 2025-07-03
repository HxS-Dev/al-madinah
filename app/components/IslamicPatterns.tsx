'use client';

import React from 'react';

export const IslamicPattern1 = ({ className = "", color = "#006736", opacity = 0.1 }) => (
  <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="islamic-pattern-1" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <g fill={color} fillOpacity={opacity}>
          <polygon points="50,0 60,20 40,20" />
          <polygon points="50,100 40,80 60,80" />
          <polygon points="0,50 20,40 20,60" />
          <polygon points="100,50 80,60 80,40" />
          <polygon points="20,20 50,30 30,50 20,20" />
          <polygon points="80,20 70,50 50,30 80,20" />
          <polygon points="80,80 50,70 70,50 80,80" />
          <polygon points="20,80 30,50 50,70 20,80" />
          <circle cx="50" cy="50" r="20" fill="none" stroke={color} strokeWidth="2" strokeOpacity={opacity * 2} />
        </g>
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#islamic-pattern-1)" />
  </svg>
);

export const IslamicPattern2 = ({ className = "", color = "#006736", opacity = 0.1 }) => (
  <svg className={className} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="islamic-pattern-2" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <g fill="none" stroke={color} strokeWidth="1.5" strokeOpacity={opacity}>
          <path d="M50,0 L50,100 M0,50 L100,50" />
          <path d="M25,25 L75,25 L75,75 L25,75 Z" />
          <path d="M0,0 L25,25 M75,25 L100,0 M100,100 L75,75 M25,75 L0,100" />
          <circle cx="50" cy="50" r="15" />
          <path d="M35,50 L50,35 L65,50 L50,65 Z" fill={color} fillOpacity={opacity} />
        </g>
      </pattern>
    </defs>
    <rect width="400" height="400" fill="url(#islamic-pattern-2)" />
  </svg>
);

export const AnimatedIslamicPattern = ({ className = "", color = "#ffffff", opacity = 0.02 }) => (
  <svg className={className} viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Main hexagonal star tessellation pattern inspired by arabic-bg.jpg */}
      <pattern id="animated-islamic-pattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
        <g fill={color} fillOpacity={opacity} stroke="none">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 30 26"
            to="360 30 26"
            dur="180s"
            repeatCount="indefinite"
          />
          
          {/* Hexagonal star pattern like in arabic-bg.jpg */}
          <g transform="translate(30,26)">
            {/* 6-pointed star */}
            <path d="M0,-15 L13,-7.5 L13,7.5 L0,15 L-13,7.5 L-13,-7.5 Z" />
            
            {/* Inner hexagon */}
            <path d="M0,-8 L6.93,-4 L6.93,4 L0,8 L-6.93,4 L-6.93,-4 Z" 
                  fillOpacity={opacity * 0.5} />
          </g>
          
          {/* Connecting smaller hexagons */}
          <g transform="translate(15,13)">
            <path d="M0,-6 L5.2,-3 L5.2,3 L0,6 L-5.2,3 L-5.2,-3 Z" 
                  fillOpacity={opacity * 0.3} />
          </g>
          
          <g transform="translate(45,13)">
            <path d="M0,-6 L5.2,-3 L5.2,3 L0,6 L-5.2,3 L-5.2,-3 Z" 
                  fillOpacity={opacity * 0.3} />
          </g>
          
          <g transform="translate(15,39)">
            <path d="M0,-6 L5.2,-3 L5.2,3 L0,6 L-5.2,3 L-5.2,-3 Z" 
                  fillOpacity={opacity * 0.3} />
          </g>
          
          <g transform="translate(45,39)">
            <path d="M0,-6 L5.2,-3 L5.2,3 L0,6 L-5.2,3 L-5.2,-3 Z" 
                  fillOpacity={opacity * 0.3} />
          </g>
        </g>
      </pattern>

      {/* Subtle overlay pattern like bg-2.png */}
      <pattern id="animated-islamic-pattern-2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        <g fill="none" stroke={color} strokeWidth="0.1" strokeOpacity={opacity * 2}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 40 40"
            to="0 40 40"
            dur="240s"
            repeatCount="indefinite"
          />
          
          {/* Very subtle geometric grid */}
          <g transform="translate(40,40)">
            <circle cx="0" cy="0" r="20" fill="none" />
            <circle cx="0" cy="0" r="15" fill="none" />
            <circle cx="0" cy="0" r="10" fill="none" />
            
            {/* Cross lines */}
            <path d="M-25,0 L25,0 M0,-25 L0,25" />
            <path d="M-17.68,-17.68 L17.68,17.68 M-17.68,17.68 L17.68,-17.68" />
          </g>
        </g>
      </pattern>
      
      {/* Minimal dot pattern for texture */}
      <pattern id="animated-islamic-pattern-3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="0.5" fill={color} fillOpacity={opacity * 1.5}>
          <animate attributeName="fill-opacity" values="0;0.05;0" dur="8s" repeatCount="indefinite" />
        </circle>
      </pattern>
    </defs>
    
    {/* Layered subtle patterns */}
    <rect width="1200" height="1200" fill="url(#animated-islamic-pattern)" />
    <rect width="1200" height="1200" fill="url(#animated-islamic-pattern-2)" opacity="0.4" />
    <rect width="1200" height="1200" fill="url(#animated-islamic-pattern-3)" opacity="0.6" />
  </svg>
);

export const IslamicStarPattern = ({ className = "", color = "#006736", opacity = 0.15 }) => (
  <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="islamic-star" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
        <g fill={color} fillOpacity={opacity}>
          <path d="M25,5 L30,15 L40,15 L32,22 L35,32 L25,25 L15,32 L18,22 L10,15 L20,15 Z" />
          <circle cx="25" cy="25" r="2" />
        </g>
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#islamic-star)" />
  </svg>
);