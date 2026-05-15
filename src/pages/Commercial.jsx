import { Building2, FileCheck, Clock, Wrench, ShieldCheck, Users } from 'lucide-react'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import PageHero from '@/components/sections/PageHero.jsx'
import FAQAccordion from '@/components/sections/FAQAccordion.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'

const industries = [
  { name: 'Restaurants & cafés', detail: 'Grease line maintenance, kitchen drainage, hand-sink and dishwasher plumbing.' },
  { name: 'Property management', detail: 'Multi-unit response, scheduled maintenance, after-hours emergency cover.' },
  { name: 'Retail & offices', detail: 'Washroom fit-outs, fixture upgrades, leak response without disturbing the floor.' },
  { name: 'Medical & dental', detail: 'Backflow prevention testing and certification, specialty fixture installs.' },
  { name: 'Industrial & warehouses', detail: 'Floor drain maintenance, hose-bib repair, large-diameter line clearing.' },
  { name: 'Hotels & hospitality', detail: 'Discreet guest-floor response, in-room repair, scheduled preventative maintenance.' },
]

const services = [
  { icon: Wrench, title: 'Preventative maintenance', body: 'Scheduled flushes, camera inspections, and fixture servicing on a calendar that fits your operation.' },
  { icon: Clock, title: 'After-hours response', body: 'Live dispatch around the clock. We protect your morning open, not just our schedule.' },
  { icon: FileCheck, title: 'Backflow testing & reports', body: 'Annual backflow prevention testing with city-ready paperwork delivered the same week.' },
  { icon: Building2, title: 'Tenant fit-outs', body: 'Coordinated with your GC and landlord — plumbing rough-in, fixture install, sign-off.' },
  { icon: ShieldCheck, title: 'Compliance & permits', body: 'We pull permits in our name, deal with inspectors, and hand you the paperwork.' },
  { icon: Users, title: 'Account-managed service', body: 'A single point of contact for every property in your portfolio. No re-explaining each call.' },
]

const commercialFaqs = [
  { q: 'Do you carry commercial liability insurance?', a: 'Yes. Certificates of insurance can be issued to your property manager or general contractor on request.' },
  { q: 'Can you sign an NDA or vendor agreement?', a: 'Yes. We routinely sign NDAs, MSAs, and vendor onboarding packages before starting work.' },
  { q: 'Do you offer net-30 or PO billing?', a: 'For approved commercial accounts, yes. We\u2019ll set you up after the first job.' },
  { q: 'Can you work overnight or before opening?', a: 'Yes \u2014 we schedule a lot of commercial work outside business hours to avoid disturbing operations.' },
]

export default function Commercial() {
  useDocumentMeta({
    title: `Commercial Plumbing Services in ${business.primaryRegion} | ${business.name}`,
    description: `Licensed commercial plumbers for property managers, restaurants, offices, and industrial facilities across ${business.primaryRegionLong}.`,
    canonical: `${business.url}/commercial`,
  })

  return (
    <>
      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Commercial' }]} />
        </Container>
      </div>

      <PageHero
        eyebrow="Commercial plumbing"
        title="Commercial plumbing that respects your operating hours."
        subtitle={`From single-storefront restaurants to multi-property portfolios, ${business.name} keeps commercial plumbing predictable. Account-managed service, transparent paperwork, and after-hours response when downtime isn\u2019t an option.`}
        icon="Building2"
        features={[
          'Net-30 billing for approved accounts',
          'Certificates of insurance on request',
          'NDA and vendor onboarding ready',
          'After-hours and overnight scheduling',
        ]}
      />

      <section className="section bg-surface" aria-labelledby="com-services">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">What we cover</p>
            <h2 id="com-services" className="mt-3 text-h1 text-text-primary">
              The commercial work we&rsquo;re asked for most.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} padding="md">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-card bg-primary-50 text-primary">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-h4 text-text-primary">{s.title}</h3>
                <p className="mt-2 text-body-sm text-text-secondary">{s.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-background" aria-labelledby="com-industries">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Industries we serve</p>
            <h2 id="com-industries" className="mt-3 text-h1 text-text-primary">
              Trades and operations we know cold.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <Card key={i.name} padding="md">
                <h3 className="text-h4 text-text-primary">{i.name}</h3>
                <p className="mt-2 text-body-sm text-text-secondary">{i.detail}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-surface" aria-labelledby="com-contact">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Card padding="lg" className="text-center">
              <p className="eyebrow">Set up an account</p>
              <h2 id="com-contact" className="mt-3 text-h1 text-text-primary">
                Bring us in for a site walk.
              </h2>
              <p className="mt-4 text-body-lg text-text-secondary">
                We&rsquo;ll meet your facilities team, walk the property, and put a maintenance
                schedule (or one-time scope) in writing. No charge for the walkthrough.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button to="/contact" variant="primary" size="lg">Book a site walk</Button>
                <PhoneButton variant="emergency" emergency size="lg" label="Or call us" />
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <FAQAccordion items={commercialFaqs} eyebrow="Commercial FAQ" heading="What property managers and GCs ask us." />

      <FinalCTABand
        eyebrow="Commercial accounts"
        heading="One plumber, every property, fewer headaches."
        primaryCta={{ to: '/contact', label: 'Talk to commercial' }}
      />
    </>
  )
}
