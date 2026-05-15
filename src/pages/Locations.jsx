import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import { locations, getAllRegions, getLocationsByRegion } from '@/config/locations.js'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import PageHero from '@/components/sections/PageHero.jsx'
import TrustStrip from '@/components/sections/TrustStrip.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'

/**
 * Locations — /locations
 * All cities we serve, grouped by region.
 */
export default function Locations() {
  useDocumentMeta({
    title: `Plumbing Service Areas in the GTA | ${business.name}`,
    description: `${business.name} serves ${locations.length} cities across ${business.primaryRegionLong}. Find your city for local response times and pricing.`,
    canonical: `${business.url}/locations`,
  })

  const regions = getAllRegions()

  return (
    <>
      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Service Areas' }]} />
        </Container>
      </div>

      <PageHero
        eyebrow="Service areas"
        title={`We serve ${locations.length} cities across the GTA.`}
        subtitle={`Local response, real licensed plumbers. Tap your city for service availability, neighbourhoods covered, and what to expect on the visit.`}
        icon="MapPin"
      />

      <TrustStrip />

      <section className="section bg-surface" aria-labelledby="regions-heading">
        <Container>
          <h2 id="regions-heading" className="sr-only">Service areas by region</h2>
          <div className="space-y-12">
            {regions.map((region) => {
              const cities = getLocationsByRegion(region)
              return (
                <div key={region}>
                  <div className="flex items-baseline justify-between gap-4 border-b border-border-DEFAULT pb-3">
                    <h3 className="text-h2 text-text-primary">{region}</h3>
                    <span className="text-caption text-text-muted">
                      {cities.length} {cities.length === 1 ? 'city' : 'cities'}
                    </span>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {cities.map((c) => (
                      <Card key={c.slug} to={`/locations/${c.slug}`} padding="md" className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-card bg-primary-50 text-primary">
                            <MapPin className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <div>
                            <p className="text-h4 text-text-primary">{c.name}</p>
                            <p className="text-caption text-text-muted">{c.neighborhoods?.length || 0} neighbourhoods</p>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-accent-blue" aria-hidden="true" />
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          <p className="mt-12 text-center text-body-sm text-text-muted">
            Don’t see your city?{' '}
            <Link to="/contact" className="font-semibold text-accent-blue hover:text-accent-blue-hover">
              Ask if we cover it
            </Link>
            .
          </p>
        </Container>
      </section>

      <FinalCTABand />
    </>
  )
}
