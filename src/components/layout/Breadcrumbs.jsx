import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Breadcrumbs — semantic, schema-friendly trail.
 *
 * Usage:
 *   <Breadcrumbs items={[
 *     { label: 'Home', to: '/' },
 *     { label: 'Services', to: '/services' },
 *     { label: 'Drain Cleaning' },  // last item — current page, no link
 *   ]} />
 */
export default function Breadcrumbs({ items = [], className }) {
  if (items.length === 0) return null
  return (
    <nav aria-label="Breadcrumb" className={cn('pt-5 md:pt-6 text-body-sm text-text-muted', className)}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} className="inline-flex items-center gap-1">
              {item.to && !isLast ? (
                <Link to={item.to} className="hover:text-primary">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className={cn(isLast && 'text-text-primary font-medium')}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight className="h-3.5 w-3.5 text-text-muted" aria-hidden="true" />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
