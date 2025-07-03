'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const EnhancedButton = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: ButtonProps) => {
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800',
    secondary: 'bg-white/20 backdrop-blur text-white border border-white/30 hover:bg-white/30',
    glass: 'backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/20'
  };

  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05, boxShadow: "0 20px 40px rgba(0, 103, 54, 0.3)" },
    whileTap: { scale: 0.95 },
    transition: { type: "spring" as const, stiffness: 300 }
  };

  if (href) {
    return (
      <Link href={href}>
        <motion.span className={baseClasses} {...motionProps}>
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button 
      className={baseClasses} 
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
};

export const FloatingActionButton = ({ children, onClick, className = '' }: ButtonProps) => {
  return (
    <motion.button
      className={`fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full shadow-2xl flex items-center justify-center z-50 ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: 90 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        boxShadow: [
          "0 0 20px rgba(0, 103, 54, 0.3)",
          "0 0 40px rgba(0, 103, 54, 0.5)",
          "0 0 20px rgba(0, 103, 54, 0.3)"
        ]
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity
        }
      }}
    >
      {children}
    </motion.button>
  );
};