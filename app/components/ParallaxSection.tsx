'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  backgroundImage?: string;
  overlay?: boolean;
}

export const ParallaxSection = ({ 
  children, 
  className = '', 
  speed = 0.5,
  backgroundImage,
  overlay = true
}: ParallaxSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              height: '120%',
              width: '100%'
            }}
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
          )}
        </motion.div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export const ParallaxText = ({ children, className = '', direction = 'up' }: { 
  children: ReactNode; 
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const transforms = {
    up: useTransform(scrollYProgress, [0, 1], [50, -50]),
    down: useTransform(scrollYProgress, [0, 1], [-50, 50]),
    left: useTransform(scrollYProgress, [0, 1], [50, -50]),
    right: useTransform(scrollYProgress, [0, 1], [-50, 50])
  };

  const transform = transforms[direction];
  const style = direction === 'left' || direction === 'right' 
    ? { x: transform } 
    : { y: transform };

  return (
    <motion.div ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  );
};