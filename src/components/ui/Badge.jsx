import { cn } from '@/lib/utils'

/**
 * Badge — small labels and pills.
 *
 * Variants:
 *  - neutral, primary, accent, emergency, success, warning
 */

const variants = {
  neutral: 'bg-primary-50 text-primary border border-primary-100',
  primary: 'bg-primary text-text-inverse',
  accent: 'bg-accent-blue text-text-inverse',
  emergency: 'bg-emergency text-text-inverse',
  success: 'bg-success/10 text-success border border-success/20',
  warning: 'bg-warning/10 text-warning border border-warning/20',
  outline: 'bg-transparent text-primary border border-border-strong',
}

const sizes = {
  sm: 'px-2 py-0.5 text-caption',
  md: 'px-2.5 py-1 text-body-sm',
  lg: 'px-3 py-1.5 text-body-sm',
}

export default function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  leftIcon,
  className,
  ...rest
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap',
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      {children}
    </span>
  )
}
