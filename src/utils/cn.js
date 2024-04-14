import { twMerge } from 'tailwind-merge'
import { clsx } from 'ts-clsx'

export function cn(...inputs) {
  return twMerge(clsx(...inputs))
}
