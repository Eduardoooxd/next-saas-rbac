import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(fullName: string): string {
  return fullName
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase())
    .join('')
}
