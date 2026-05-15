import { cn } from '@/lib/utils'

/**
 * Container — the only place horizontal padding/max-width is defined.
 *
 * Size variants:
 *  - default: max-w-7xl (1280px) — most pages
 *  - narrow:  max-w-5xl (1024px) — long-form content
 *  - prose:   max-w-prose-wide (~72ch) — articles and FAQ
 *  - wide:    max-w-screen-2xl — full-width hero sections
 */

const sizes = {
  default: 'max-w-7xl',
  narrow: 'max-w-5xl',
  prose: 'max-w-prose-wide',
  wide: 'max-w-screen-2xl',
}

export default function Container({
  children,
  size = 'default',
  className,
  as: Component = 'div',
  ...rest
}) {
  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}
