import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import Button from '@/components/ui/Button.jsx'
import { getPrimaryLocations, locations } from '@/config/locations.js'

/**
 * CoverageGrid — service area section.
 *
 * Left: link chips for tier-1 cities + a "See all locations" CTA.
 * Right: a simple region summary (no external map by default — keeps
 * the page fast and avoids third-party tracking. A static SVG map can
 * be dropped in later via the `mapSlot` prop).
 */
export default function CoverageGrid({ mapSlot }) {
  const tier1 = getPrimaryLocations()
  const totalCount = locations.length

  return (
    <section className="section bg-background" aria-labelledby="coverage-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <p className="eyebrow">Service areas</p>
            <h2 id="coverage-heading" className="mt-3 text-h1 text-text-primary">
              Serving Toronto and the wider GTA.
            </h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              {totalCount}+ cities covered — from downtown Toronto and the inner suburbs to Halton, York Region, Durham, and Hamilton. Pick your city for local context, response windows, and city-specific FAQs.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {tier1.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={`/locations/${l.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-body-sm font-medium text-text-secondary transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary-50 hover:text-primary hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
                  >
                    <MapPin className="h-3.5 w-3.5 text-accent-teal" aria-hidden="true" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <Button to="/locations" variant="ghost" size="md">
                See all {totalCount} cities
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            {mapSlot ?? <RegionSummary />}
          </div>
        </div>
      </Container>
    </section>
  )
}

function RegionSummary() {
  const regions = [
    { name: 'Toronto core', cities: ['Toronto', 'North York', 'Scarborough', 'Etobicoke'] },
    { name: 'Peel', cities: ['Mississauga', 'Caledon'] },
    { name: 'Halton', cities: ['Oakville', 'Burlington', 'Milton', 'Georgetown'] },
    { name: 'York', cities: ['Aurora', 'Richmond Hill', 'Thornhill', 'Woodbridge'] },
    { name: 'Hamilton & Niagara', cities: ['Hamilton', 'St. Catharines'] },
    { name: 'Waterloo & Wellington', cities: ['Cambridge', 'Kitchener', 'Guelph'] },
    { name: 'Durham', cities: ['Pickering'] },
  ]
  return (
    <div className="rounded-card border border-border bg-surface p-6 shadow-card">
      <h3 className="text-h4 text-text-primary">Where we work</h3>
      <p className="mt-1 text-body-sm text-text-muted">
        Response windows vary by region. We confirm a specific window on every call.
      </p>
      <dl className="mt-5 divide-y divide-border">
        {regions.map((r) => (
          <div key={r.name} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3 first:pt-0 last:pb-0">
            <dt className="text-body-sm font-semibold text-text-primary">{r.name}</dt>
            <dd className="text-body-sm text-text-secondary">{r.cities.join(' · ')}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
