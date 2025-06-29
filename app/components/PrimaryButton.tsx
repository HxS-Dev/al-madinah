import React from 'react'
import { cn } from '../lib/utils'

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ 
  children, 
  className,
  type = 'button',
  onClick
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn('inline-flex bg-gradient-to-l to-blue-cyan from-cyan-1000 cursor-pointer font-medium rounded text-white px-6 py-3 transition-colors duration-500 hover:from-blue-cyan hover:to-cyan-1000 ', className)}>
      {children}
    </button>
  )
}

export default PrimaryButton