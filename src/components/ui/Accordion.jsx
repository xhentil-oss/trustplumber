import { useState, useId } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Accordion — accessible, single-open or multi-open.
 *
 * Usage:
 *   <Accordion items={[{ q: 'Question?', a: 'Answer.' }, ...]} />
 *
 * Props:
 *  - items:        Array of { q, a } objects (a may be a string or ReactNode)
 *  - allowMultiple: If true, more than one panel can be open at a time
 *  - defaultOpen:  Index of the panel open by default (or null)
 */
export default function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = null,
  className,
}) {
  const [openSet, setOpenSet] = useState(
    () => new Set(defaultOpen === null ? [] : [defaultOpen]),
  )
  const baseId = useId()

  function toggle(index) {
    setOpenSet((prev) => {
      const next = new Set(allowMultiple ? prev : [])
      if (prev.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div className={cn('divide-y divide-border rounded-card border border-border bg-surface', className)}>
      {items.map((item, i) => {
        const isOpen = openSet.has(i)
        const panelId = `${baseId}-panel-${i}`
        const buttonId = `${baseId}-button-${i}`
        return (
          <div key={i} className="group">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className={cn(
                  'flex w-full items-center justify-between gap-4 px-5 py-4 text-left',
                  'text-body font-semibold text-text-primary',
                  'transition-colors hover:bg-primary-50',
                  isOpen && 'bg-primary-50/70',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-inset',
                  i === 0 && 'rounded-t-card',
                  i === items.length - 1 && !isOpen && 'rounded-b-card',
                )}
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-text-muted transition-transform duration-200',
                    isOpen && 'rotate-180',
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-body text-text-secondary"
            >
              {item.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}
