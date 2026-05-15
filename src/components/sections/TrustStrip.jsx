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
      className="border-y border-border bg-surface"
    >
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-4 py-6 sm:grid-cols-3 lg:grid-cols-6 lg:py-5">
          {trustItems.map(({ icon, label }) => {
            const Icon = Icons[icon] || Icons.Check
            return (
              <li key={label} className="flex items-center gap-2 text-body-sm text-text-secondary">
                <Icon className="h-5 w-5 shrink-0 text-accent-teal" aria-hidden="true" />
                <span>{label}</span>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
