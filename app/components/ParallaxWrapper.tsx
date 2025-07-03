'use client';

import React, { useEffect, useState } from 'react';
import FullPageParallax from './FullPageParallax';

export const ParallaxWrapper = () => {
  const [showParallax, setShowParallax] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Start showing parallax after scrolling past hero section (approximately 100vh)
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowParallax(true);
      }
    };

    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!showParallax) return null;

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ 
        animation: 'fadeIn 1s ease-in-out'
      }}
    >
      <FullPageParallax />
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ParallaxWrapper;