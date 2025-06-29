import React from 'react'
import { cn } from '../lib/utils'
import Link from 'next/link';

interface PrimaryLinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const PrimaryLink: React.FC<PrimaryLinkProps> = ({ children, className, href }) => {
  return (
    <Link 
      href={href}
      className={cn('inline-flex bg-gradient-to-l to-blue-cyan from-cyan-1000 cursor-pointer font-medium rounded text-white px-6 py-3 transition-colors duration-500 hover:from-blue-cyan hover:to-cyan-1000 ', className)}>
      {children}
    </Link>
  )
}

export default PrimaryLink