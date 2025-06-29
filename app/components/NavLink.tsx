'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isActiveRoute } from '../lib/utils';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = isActiveRoute(pathname, href);
  
  const baseClasses = 'text-lg font-semibold transition-all duration-300';
  const activeClasses = 'text-primary';
  const inactiveClasses = 'text-black-1000 hover:text-primary';
  
  const linkClasses = `${baseClasses} ${isActive ? activeClasses : inactiveClasses} ${className}`;
  
  return (
    <Link href={href} className={linkClasses}>
      {children}
    </Link>
  );
} 