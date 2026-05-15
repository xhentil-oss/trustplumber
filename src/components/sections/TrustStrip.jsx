import * as Icons from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import trustItems from '@/data/trustItems.js'

/**
 * TrustStrip — single row of six trust items immediately below the hero.
 * Quiet, dense, no animation. Built from /src/data/trustItems.js.
 */
export default function TrustStrip() {
  return (
    <section
      aria-label="Trust signals"
      className="border-y border-border bg-primary-50/60"
    >
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 py-6 sm:grid-cols-3 lg:grid-cols-6 lg:py-5">
          {trustItems.map(({ icon, label }) => {
            const Icon = Icons[icon] || Icons.Check
            return (
              <li key={label} className="flex items-center gap-2 text-body-sm font-medium text-text-secondary">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-btn bg-accent-teal/10 text-accent-teal ring-1 ring-inset ring-accent-teal/15">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>{label}</span>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
