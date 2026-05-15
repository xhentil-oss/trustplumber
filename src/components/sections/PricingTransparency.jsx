import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Wrench, Droplet, Flame, ShowerHead } from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import Card from '@/components/ui/Card.jsx'

/**
 * PricingTransparency — \"starts at\" pricing grid.
 *
 * Demo prices below; replace with verified rates before launch.
 * The point is to remove the #1 conversion blocker for plumbing:
 * \"I don't know what this will cost.\"
 */
const items = [
  {
    icon: FileText,
    title: 'Diagnostic visit',
    price: '$89',
    unit: 'flat',
    note: 'Credited to the job if you proceed.',
    serviceSlug: null,
  },
  {
    icon: Wrench,
    title: 'Drain auger',
    price: '$189',
    unit: 'starts at',
    note: 'Most kitchen & bathroom drains. Mainline pricing on site.',
    serviceSlug: 'drain-cleaning',
  },
  {
    icon: Flame,
    title: 'Tank water heater',
    price: '$1,650',
    unit: 'install from',
    note: '40\u201350 gallon, code-compliant install with permit.',
    serviceSlug: 'water-heaters',
  },
  {
    icon: ShowerHead,
    title: 'Fixture replacement',
    price: '$219',
    unit: 'starts at',
    note: 'Faucet, toilet, or shower trim swap. Parts not included.',
    serviceSlug: null,
  },
]

export default function PricingTransparency() {
  return (
    <section className="section bg-background" aria-labelledby="pricing-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <p className="eyebrow">Prices, in writing</p>
            <h2 id="pricing-heading" className="mt-3 text-h1 text-text-primary">
              You&rsquo;ll know the number before we lift a wrench.
            </h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              Flat-rate where we can, transparent ranges where we can&rsquo;t. Every quote goes on paper before any work starts &mdash; no surprises when we hand you the invoice.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-card border border-border bg-surface px-4 py-3 text-body-sm text-text-secondary">
              <Droplet className="h-4 w-4 text-accent-teal" aria-hidden="true" />
              <span>HST included on the written quote.</span>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {items.map((it) => {
              const Icon = it.icon
              const inner = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-card bg-accent-blue/10 text-accent-blue ring-1 ring-inset ring-accent-blue/15">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="text-right">
                      <p className="text-caption uppercase tracking-wider text-text-muted">{it.unit}</p>
                      <p className="font-display text-h2 text-text-primary">{it.price}</p>
                    </div>
                  </div>
                  <h3 className="mt-4 text-h4 text-text-primary">{it.title}</h3>
                  <p className="mt-1 text-body-sm text-text-secondary">{it.note}</p>
                  {it.serviceSlug && (
                    <span className="mt-3 inline-flex items-center gap-1 text-body-sm font-semibold text-accent-blue group-hover:text-accent-blue-hover">
                      See full pricing <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  )}
                </>
              )
              return (
                <li key={it.title}>
                  {it.serviceSlug ? (
                    <Card to={`/services/${it.serviceSlug}`} padding="md" className="group flex h-full flex-col">
                      {inner}
                    </Card>
                  ) : (
                    <Card padding="md" className="flex h-full flex-col">
                      {inner}
                    </Card>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <p className="mt-8 text-center text-body-sm text-text-muted">
          Prices shown are demo placeholders &mdash; replace with verified rates before launch.{' '}
          <Link to="/contact" className="font-medium text-accent-blue hover:text-accent-blue-hover">Ask for a full price list</Link>.
        </p>
      </Container>
    </section>
  )
}
