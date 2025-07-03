'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInUp = ({ children, className = "", delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInScale = ({ children, className = "", delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({ children, className = "", delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, type: "spring" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({ children, className = "", delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, type: "spring" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const RotateIn = ({ children, className = "", delay = 0 }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, rotate: -10 }}
    whileInView={{ opacity: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FloatingElement = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div
    animate={{
      y: [-10, 10, -10],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ParallaxWrapper = ({ children, className = "", speed = 0.5 }: AnimationProps & { speed?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: 0 }}
    style={{
      y: typeof window !== 'undefined' ? window.scrollY * speed : 0
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 300 }
};

export const glowAnimation = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(0, 103, 54, 0.3)",
      "0 0 40px rgba(0, 103, 54, 0.5)",
      "0 0 20px rgba(0, 103, 54, 0.3)"
    ]
  },
  transition: {
    duration: 2,
    repeat: Infinity
  }
};