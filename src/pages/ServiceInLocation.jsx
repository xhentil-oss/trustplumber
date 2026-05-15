import { useParams, Navigate } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { getLocationBySlug } from '@/config/locations.js'
import { getServiceBySlug } from '@/config/services.js'
import { getServiceContent } from '@/data/servicesContent.js'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import Badge from '@/components/ui/Badge.jsx'
import PageHero from '@/components/sections/PageHero.jsx'
import TrustStrip from '@/components/sections/TrustStrip.jsx'
import ServiceInclusions from '@/components/sections/ServiceInclusions.jsx'
import LocalRelevance from '@/components/sections/LocalRelevance.jsx'
import ProcessSteps from '@/components/sections/ProcessSteps.jsx'
import SocialProof from '@/components/sections/SocialProof.jsx'
import NearbyAreas from '@/components/sections/NearbyAreas.jsx'
import FAQAccordion from '@/components/sections/FAQAccordion.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'
import homeFaqs from '@/data/faqs.js'

/**
 * ServiceInLocation — /locations/:city/:service
 *
 * The geo-targeted landing page combining a service with a city.
 * This is the highest-intent SEO page in the site.
 */
export default function ServiceInLocation() {
  const { city: citySlug, service: serviceSlug } = useParams()
  const city = getLocationBySlug(citySlug)
  const service = getServiceBySlug(serviceSlug)

  if (!city || !service) return <Navigate to="/404" replace />

  const content = getServiceContent(serviceSlug)

  const title = `${service.name} in ${city.name}, ${city.province} | ${business.name}`
  const description = `${service.name} for ${city.name} homes and businesses. ${service.tagline} Local response from licensed plumbers.`

  useDocumentMeta({
    title,
    description,
    canonical: `${business.url}/locations/${citySlug}/${serviceSlug}`,
  })

  const Icon = Icons[service.icon] || Icons.Wrench
  const faqs = [...(content.faqs || []), ...homeFaqs.slice(0, 2)]

  return (
    <>
      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Service Areas', to: '/locations' },
              { label: city.name, to: `/locations/${city.slug}` },
              { label: service.name },
            ]}
          />
        </Container>
      </div>

      <PageHero
        eyebrow={`${service.name} \u00b7 ${city.name}`}
        title={`${service.name} in ${city.name}.`}
        subtitle={`${content.intro} Local response across ${city.name} and ${city.region}.`}
        icon={service.icon}
        emergency={service.isEmergency}
        features={content.features}
        aside={
          <Card padding="lg" className="bg-surface">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-card bg-primary text-text-inverse">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-caption text-text-muted">{service.shortName}</p>
                <p className="text-h4 text-text-primary">{city.name}, {city.province}</p>
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-body-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <Icons.MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-blue" aria-hidden="true" />
                <span><strong className="text-text-primary">Coverage:</strong> {city.name} and surrounding {city.region}</span>
              </li>
              <li className="flex items-start gap-2">
                <Icons.Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-blue" aria-hidden="true" />
                <span><strong className="text-text-primary">Response:</strong> {service.isEmergency ? '24/7 emergency dispatch' : 'Same-day where possible'}</span>
              </li>
              <li className="flex items-start gap-2">
                <Icons.ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-blue" aria-hidden="true" />
                <span><strong className="text-text-primary">Workmanship:</strong> Written on every invoice</span>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.isEmergency && <Badge variant="emergency" size="sm">24/7 Emergency</Badge>}
              <Badge variant="neutral" size="sm">Licensed</Badge>
              <Badge variant="neutral" size="sm">Local to {city.region}</Badge>
            </div>
          </Card>
        }
      />

      <TrustStrip />

      <ServiceInclusions
        serviceName={service.name}
        included={content.included}
        signs={content.signs}
      />

      <LocalRelevance city={city} serviceName={service.name} />

      <ProcessSteps />

      <SocialProof />

      <NearbyAreas citySlug={city.slug} serviceSlug={service.slug} />

      {faqs.length > 0 && (
        <FAQAccordion
          eyebrow={`${service.shortName} in ${city.name}`}
          heading={`Common questions from ${city.name} homeowners.`}
          items={faqs}
        />
      )}

      <FinalCTABand
        heading={service.isEmergency
          ? `${service.name} emergency in ${city.name}?`
          : `Need ${service.shortName.toLowerCase()} in ${city.name}?`}
        body={service.isEmergency
          ? 'Don\u2019t wait \u2014 our dispatcher answers 24/7 and a licensed plumber is on the way.'
          : `Tell us what\u2019s happening in ${city.name}. We\u2019ll quote it honestly and fix it properly.`}
        variant={service.isEmergency ? 'emergency' : 'default'}
      />
    </>
  )
}
