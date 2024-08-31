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

export function isValidDomain(domain: string): boolean {
  // Regular expression to match valid domain names
  const domainRegex = /^(?!:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/

  // Check if the string matches the domain regex
  return domainRegex.test(domain)
}
