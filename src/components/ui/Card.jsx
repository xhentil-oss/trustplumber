import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

/**
 * Card — base container for content blocks.
 *
 * Props:
 *  - to:        Optional internal route — renders as Link with hover effects
 *  - href:      Optional external link
 *  - interactive: If true, adds hover lift even without link
 *  - padding:   'sm' | 'md' (default) | 'lg' | 'none'
 *  - variant:   'default' | 'elevated' | 'flat'
 */

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

const variants = {
  default: 'bg-surface border border-border shadow-card',
  elevated: 'bg-surface shadow-elevated',
  flat: 'bg-surface border border-border',
}

const Card = forwardRef(function Card(
  {
    children,
    to,
    href,
    interactive = false,
    padding = 'md',
    variant = 'default',
    className,
    ...rest
  },
  ref,
) {
  const isLink = !!to || !!href
  const showHover = isLink || interactive

  const classes = cn(
    'rounded-card transition-all duration-200',
    variants[variant],
    paddings[padding],
    showHover && 'hover:shadow-card-hover hover:-translate-y-0.5',
    isLink && 'block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2',
    className,
  )

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <div ref={ref} className={classes} {...rest}>
      {children}
    </div>
  )
})

export default Card
