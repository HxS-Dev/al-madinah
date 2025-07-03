'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { IslamicPattern1 } from './IslamicPatterns';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  pattern?: boolean;
}

export const GlassCard = ({ children, className = "", hover = true, pattern = false }: GlassCardProps) => {
  const hoverEffects = hover ? {
    whileHover: { 
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 103, 54, 0.2)"
    },
    transition: { type: "spring" as const, stiffness: 300 }
  } : {};

  return (
    <motion.div
      className={`relative backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 overflow-hidden ${className}`}
      {...hoverEffects}
    >
      {pattern && (
        <div className="absolute inset-0 opacity-5">
          <IslamicPattern1 className="w-full h-full" color="#ffffff" opacity={0.3} />
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export const GradientCard = ({ children, className = "", from = "#006736", to = "#3C845D" }: GlassCardProps & { from?: string; to?: string }) => {
  return (
    <motion.div
      className={`relative rounded-2xl p-[2px] overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-[${from}] to-[${to}]`} />
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6">
        {children}
      </div>
    </motion.div>
  );
};

export const FloatingCard = ({ children, className = "", delay = 0 }: GlassCardProps & { delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      animate={{
        y: [-5, 5, -5],
      }}
      whileHover={{ y: -10 }}
      className={className}
    >
      <GlassCard pattern>
        {children}
      </GlassCard>
    </motion.div>
  );
};