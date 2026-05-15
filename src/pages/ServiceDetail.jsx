import { useParams, Navigate } from 'react-router-dom'
import * as Icons from 'lucide-react'
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
import ProcessSteps from '@/components/sections/ProcessSteps.jsx'
import ServiceCoverage from '@/components/sections/ServiceCoverage.jsx'
import SocialProof from '@/components/sections/SocialProof.jsx'
import RelatedServices from '@/components/sections/RelatedServices.jsx'
import FAQAccordion from '@/components/sections/FAQAccordion.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'
import homeFaqs from '@/data/faqs.js'

/**
 * ServiceDetail — /services/:service
 *
 * Pulls service metadata from /config/services.js and long-form content
 * from /data/servicesContent.js. Falls through to NotFound when the
 * slug is unknown.
 */
export default function ServiceDetail() {
  const { service: slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/404" replace />

  const content = getServiceContent(slug)
  const title = `${service.name} in Toronto & the GTA | ${business.name}`
  const description = `${service.tagline} Licensed, insured, and code-compliant work across ${business.primaryRegion}.`

  useDocumentMeta({
    title,
    description,
    canonical: `${business.url}/services/${slug}`,
  })

  const Icon = Icons[service.icon] || Icons.Wrench

  // Combine service-specific FAQs with two general ones for depth
  const faqs = [...(content.faqs || []), ...homeFaqs.slice(0, 2)]

  return (
    <>
      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: service.name },
            ]}
          />
        </Container>
      </div>

      <PageHero
        eyebrow={service.category === 'commercial' ? 'Commercial service' : 'Residential service'}
        title={service.name}
        subtitle={content.intro}
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
                <p className="text-h4 text-text-primary">Quick info</p>
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-body-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <Icons.Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-blue" aria-hidden="true" />
                <span><strong className="text-text-primary">Response:</strong> {service.isEmergency ? '24/7, dispatched immediately' : 'Same-day where possible'}</span>
              </li>
              <li className="flex items-start gap-2">
                <Icons.MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-blue" aria-hidden="true" />
                <span><strong className="text-text-primary">Coverage:</strong> {business.primaryRegion}</span>
              </li>
              <li className="flex items-start gap-2">
                <Icons.ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-blue" aria-hidden="true" />
                <span><strong className="text-text-primary">Workmanship:</strong> Written on every invoice</span>
              </li>
              <li className="flex items-start gap-2">
                <Icons.FileText className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-blue" aria-hidden="true" />
                <span><strong className="text-text-primary">Quote:</strong> Honest, written, before any work</span>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.isEmergency && <Badge variant="emergency" size="sm">24/7 Emergency</Badge>}
              <Badge variant="neutral" size="sm">Licensed</Badge>
              <Badge variant="neutral" size="sm">Insured</Badge>
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

      <ProcessSteps />

      <ServiceCoverage serviceSlug={service.slug} serviceName={service.name} />

      <SocialProof />

      <RelatedServices currentSlug={service.slug} category={service.category} />

      {faqs.length > 0 && (
        <FAQAccordion
          eyebrow={`${service.shortName} FAQs`}
          heading={`Common questions about ${service.name.toLowerCase()}.`}
          intro="If yours isn’t here, call us — we answer in plain English."
          items={faqs}
        />
      )}

      <FinalCTABand
        heading={service.isEmergency ? 'Plumbing emergency right now?' : `Need ${service.shortName.toLowerCase()} in the GTA?`}
        body={service.isEmergency
          ? 'Don\u2019t wait \u2014 our dispatcher answers 24/7 and a licensed plumber is on the way.'
          : `Tell us what\u2019s happening \u2014 we\u2019ll quote it honestly and fix it properly.`}
        variant={service.isEmergency ? 'emergency' : 'default'}
      />
    </>
  )
}
