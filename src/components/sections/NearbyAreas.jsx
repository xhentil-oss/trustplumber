import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import Card from '@/components/ui/Card.jsx'
import { getNearbyLocations } from '@/config/locations.js'

/**
 * NearbyAreas — internal-link block linking the current city to its
 * neighbours. If a `serviceSlug` is passed, deep-links into the
 * Service-in-City page; otherwise to the city page.
 */
export default function NearbyAreas({ citySlug, serviceSlug }) {
  const cities = getNearbyLocations(citySlug, 6)
  if (cities.length === 0) return null

  return (
    <section className="section bg-background" aria-labelledby="nearby-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Nearby areas</p>
          <h2 id="nearby-heading" className="mt-3 text-h1 text-text-primary">
            We also serve these neighbouring cities.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => {
            const to = serviceSlug
              ? `/locations/${c.slug}/${serviceSlug}`
              : `/locations/${c.slug}`
            return (
              <Card key={c.slug} to={to} padding="md" className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-card bg-primary-50 text-primary">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-h4 text-text-primary">{c.name}</p>
                    <p className="text-caption text-text-muted">{c.region}, {c.province}</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-accent-blue" aria-hidden="true" />
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
