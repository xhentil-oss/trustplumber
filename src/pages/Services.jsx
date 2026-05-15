import * as Icons from 'lucide-react'
import { services as allServices, getServicesByCategory } from '@/config/services.js'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import Badge from '@/components/ui/Badge.jsx'
import PageHero from '@/components/sections/PageHero.jsx'
import TrustStrip from '@/components/sections/TrustStrip.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'

const categoryOrder = [
  { key: 'emergency', label: 'Emergency', subtitle: 'When it can\u2019t wait until tomorrow.' },
  { key: 'residential', label: 'Residential', subtitle: 'Day-to-day plumbing for GTA homes.' },
  { key: 'commercial', label: 'Commercial', subtitle: 'For offices, retail, restaurants, and industrial.' },
]

/**
 * Services — /services
 * Full grid of every service we offer, grouped by category.
 */
export default function Services() {
  useDocumentMeta({
    title: `Plumbing Services in Toronto & the GTA | ${business.name}`,
    description: `Full list of ${business.name} plumbing services across ${business.primaryRegion}: emergency, residential, and commercial.`,
    canonical: `${business.url}/services`,
  })

  return (
    <>
      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />
        </Container>
      </div>

      <PageHero
        eyebrow="Our services"
        title="Every plumbing service for GTA homes and businesses."
        subtitle={`From a 2 a.m. burst pipe to a planned bathroom renovation \u2014 ${business.name} handles it. ${allServices.length} services across Toronto, Mississauga, and the wider GTA.`}
        icon="Wrench"
      />

      <TrustStrip />

      {categoryOrder.map(({ key, label, subtitle }) => {
        const items = getServicesByCategory(key)
        if (items.length === 0) return null
        return (
          <section
            key={key}
            className={key === 'residential' ? 'section bg-background' : 'section bg-surface'}
            aria-labelledby={`cat-${key}-heading`}
          >
            <Container>
              <div className="mx-auto max-w-3xl text-center">
                <p className="eyebrow">{label}</p>
                <h2 id={`cat-${key}-heading`} className="mt-3 text-h1 text-text-primary">
                  {label} plumbing services
                </h2>
                <p className="mt-4 text-body-lg text-text-secondary">{subtitle}</p>
              </div>
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((s) => {
                  const Icon = Icons[s.icon] || Icons.Wrench
                  return (
                    <Card key={s.slug} to={`/services/${s.slug}`} padding="md" className="flex h-full flex-col">
                      <div className="flex items-start justify-between">
                        <span className={`inline-flex h-11 w-11 items-center justify-center rounded-card ${s.isEmergency ? 'bg-emergency/10 text-emergency' : 'bg-primary-50 text-primary'}`}>
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        {s.isEmergency && <Badge variant="emergency" size="sm">24/7</Badge>}
                      </div>
                      <h3 className="mt-4 text-h4 text-text-primary">{s.name}</h3>
                      <p className="mt-2 flex-1 text-body-sm text-text-secondary">{s.tagline}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-accent-blue">
                        Learn more <Icons.ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Card>
                  )
                })}
              </div>
            </Container>
          </section>
        )
      })}

      <FinalCTABand />
    </>
  )
}
