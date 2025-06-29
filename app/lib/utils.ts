import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isActiveRoute(currentPath: string, linkPath: string): boolean {
  if (currentPath === linkPath) return true;
  
  if (linkPath === '/' && currentPath === '/') return true;
  
  if (linkPath !== '/' && currentPath.startsWith(linkPath)) return true;
  
  return false;
}
