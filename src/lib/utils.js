import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind classes safely.
 * Used as: <div className={cn('p-4 text-primary', condition && 'p-6')} />
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Format a phone number for display: '+14165551234' → '(416) 555-1234'
 * Falls back to the raw value for non-NANP numbers.
 */
export function formatPhone(phone) {
  if (!phone) return ''
  const digits = phone.replace(/\D/g, '')

  // North American (10 or 11 digits starting with 1)
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }
  if (digits.length === 11 && digits.startsWith('1')) {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`
  }

  return phone
}

/**
 * Build a tel: href from a phone string.
 */
export function telHref(phone) {
  if (!phone) return ''
  const digits = phone.replace(/\D/g, '')
  return `tel:+${digits}`
}

/**
 * Convert a string to a URL-safe slug.
 */
export function toSlug(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Format a date as 'Month D, YYYY' (Canadian English).
 */
export function formatDate(date) {
  if (!date) return ''
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/**
 * Truncate text to a max length, adding ellipsis.
 */
export function truncate(text, maxLength = 160) {
  if (!text || text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '…'
}
