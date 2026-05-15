import { useParams, Navigate } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { getLocationBySlug } from '@/config/locations.js'
import { getFeaturedServices } from '@/config/services.js'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import Badge from '@/components/ui/Badge.jsx'
import PageHero from '@/components/sections/PageHero.jsx'
import TrustStrip from '@/components/sections/TrustStrip.jsx'
import LocalRelevance from '@/components/sections/LocalRelevance.jsx'
import WhyChooseUs from '@/components/sections/WhyChooseUs.jsx'
import ProcessSteps from '@/components/sections/ProcessSteps.jsx'
import SocialProof from '@/components/sections/SocialProof.jsx'
import NearbyAreas from '@/components/sections/NearbyAreas.jsx'
import FAQAccordion from '@/components/sections/FAQAccordion.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'

/**
 * LocationDetail — /locations/:city
 *
 * City-level landing page. Lists featured services with deep links into
 * /locations/:city/:service for SEO + UX depth.
 */
export default function LocationDetail() {
  const { city: slug } = useParams()
  const city = getLocationBySlug(slug)

  if (!city) return <Navigate to="/404" replace />

  const services = getFeaturedServices()
  const title = `Plumber in ${city.name}, ${city.province} | ${business.name}`
  const description = `Licensed plumbing services in ${city.name}: 24/7 emergency, drain cleaning, water heaters, and more. Local response from ${business.name}.`

  useDocumentMeta({
    title,
    description,
    canonical: `${business.url}/locations/${slug}`,
  })

  return (
    <>
      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Service Areas', to: '/locations' },
              { label: city.name },
            ]}
          />
        </Container>
      </div>

      <PageHero
        eyebrow={`${city.region} \u00b7 ${city.province}`}
        title={`Licensed plumbers serving ${city.name}.`}
        subtitle={`Local, licensed, and on call 24/7 for ${city.name} homeowners and businesses. Same trades, same standards, same fair pricing whether you\u2019re downtown or in ${city.neighborhoods?.[0] || 'the suburbs'}.`}
        icon="MapPin"
        features={[
          'Same-day arrival across the GTA',
          'Licensed and insured plumbers',
          'Honest, written quotes',
          '24/7 emergency dispatch',
        ]}
        aside={
          <Card padding="lg" className="bg-surface">
            <p className="text-caption text-text-muted">Local at a glance</p>
            <p className="mt-1 text-h3 text-text-primary">{city.name}, {city.province}</p>
            <ul className="mt-5 space-y-3 text-body-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <Icons.MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-blue" aria-hidden="true" />
                <span><strong className="text-text-primary">Region:</strong> {city.region}</span>
              </li>
              <li className="flex items-start gap-2">
                <Icons.Home className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-blue" aria-hidden="true" />
                <span><strong className="text-text-primary">Neighbourhoods:</strong> {city.neighborhoods?.length || 0} served</span>
              </li>
              <li className="flex items-start gap-2">
                <Icons.Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-blue" aria-hidden="true" />
                <span><strong className="text-text-primary">Response:</strong> 24/7 emergency dispatch</span>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge variant="emergency" size="sm">24/7</Badge>
              <Badge variant="neutral" size="sm">Licensed</Badge>
              <Badge variant="neutral" size="sm">Insured</Badge>
              {city.tier === 1 && <Badge variant="accent" size="sm">Primary area</Badge>}
            </div>
          </Card>
        }
      />

      <TrustStrip />

      <section className="section bg-surface" aria-labelledby="city-services-heading">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Services in {city.name}</p>
            <h2 id="city-services-heading" className="mt-3 text-h1 text-text-primary">
              The plumbing work {city.name} actually calls about.
            </h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              Tap any service for {city.name}-specific information — response times, common local issues, and what to expect on the visit.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = Icons[s.icon] || Icons.Wrench
              return (
                <Card
                  key={s.slug}
                  to={`/locations/${city.slug}/${s.slug}`}
                  padding="md"
                  className="flex h-full flex-col"
                >
                  <div className="flex items-start justify-between">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-card ${s.isEmergency ? 'bg-emergency/10 text-emergency' : 'bg-primary-50 text-primary'}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    {s.isEmergency && <Badge variant="emergency" size="sm">24/7</Badge>}
                  </div>
                  <h3 className="mt-4 text-h4 text-text-primary">{s.name} in {city.name}</h3>
                  <p className="mt-2 flex-1 text-body-sm text-text-secondary">{s.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-accent-blue">
                    See local details <Icons.ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <LocalRelevance city={city} />

      <WhyChooseUs />

      <ProcessSteps />

      <SocialProof />

      <NearbyAreas citySlug={city.slug} />

      <FAQAccordion
        eyebrow={`${city.name} FAQs`}
        heading={`Plumbing questions from ${city.name} homeowners.`}
      />

      <FinalCTABand
        heading={`Need a plumber in ${city.name}?`}
        body={`Tell us what\u2019s happening \u2014 we\u2019ll quote it honestly and fix it properly. Calls answered by a real dispatcher, 24/7.`}
      />
    </>
  )
}
