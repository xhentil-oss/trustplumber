import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

/**
 * Button — primary interactive element across the site.
 *
 * Variants:
 *  - primary:    Default CTA (navy bg, white text)
 *  - accent:     Secondary CTA (accent blue)
 *  - emergency:  Phone/emergency only (red, slightly larger)
 *  - ghost:      Tertiary action (transparent, border)
 *  - link:       Inline text link
 *
 * Sizes: sm, md (default), lg
 *
 * If `to` is provided, renders as a React Router <Link>.
 * If `href` is provided, renders as an <a> (use for external/tel:/mailto:).
 * Otherwise renders as a <button>.
 */

const variants = {
  primary:
    'bg-primary text-text-inverse hover:bg-primary-700 active:bg-primary-900 shadow-card',
  accent:
    'bg-accent-blue text-text-inverse hover:bg-accent-blue-hover shadow-card',
  emergency:
    'bg-emergency text-text-inverse hover:bg-emergency-hover shadow-card font-semibold',
  ghost:
    'bg-transparent text-primary border border-border-strong hover:bg-primary-50',
  link:
    'bg-transparent text-accent-blue hover:text-accent-blue-hover underline-offset-2 hover:underline p-0',
}

const sizes = {
  sm: 'px-3 py-2 text-body-sm rounded-btn min-h-[36px]',
  md: 'px-5 py-3 text-body rounded-btn min-h-[44px]',
  lg: 'px-6 py-4 text-body-lg rounded-btn min-h-[52px]',
}

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    to,
    href,
    type = 'button',
    className,
    fullWidth = false,
    leftIcon,
    rightIcon,
    disabled = false,
    ...rest
  },
  ref,
) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    variant !== 'link' && 'hover:-translate-y-0.5 active:translate-y-0',
    className,
  )

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  )

  // Internal route
  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  // External link or tel:/mailto:
  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...rest}
      >
        {content}
      </a>
    )
  }

  // Plain button
  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled}
      {...rest}
    >
      {content}
    </button>
  )
})

export default Button
