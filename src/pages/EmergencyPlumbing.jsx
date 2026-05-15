import { AlertTriangle, Clock, ShieldCheck, Phone } from 'lucide-react'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import PageHero from '@/components/sections/PageHero.jsx'
import CoverageGrid from '@/components/sections/CoverageGrid.jsx'
import ProcessSteps from '@/components/sections/ProcessSteps.jsx'
import FAQAccordion from '@/components/sections/FAQAccordion.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'

const scenarios = [
  { icon: AlertTriangle, title: 'Burst or leaking pipe', body: 'Water actively running where it shouldn’t be. Shut off the main if you can, then call.' },
  { icon: AlertTriangle, title: 'Sewer backup', body: 'Drains backing up into tubs, sinks, or floor drains. Stop running water and call immediately.' },
  { icon: AlertTriangle, title: 'No hot water (winter)', body: 'A failed tank or tankless in winter is an emergency. We carry common replacements on the truck.' },
  { icon: AlertTriangle, title: 'Sump pump failure', body: 'Pump not running during a storm. We’ll swap it out the same visit when stock allows.' },
  { icon: AlertTriangle, title: 'Toilet overflow', body: 'Shut the supply valve at the wall, then call. We’ll clear the line and check for the root cause.' },
  { icon: AlertTriangle, title: 'Gas-line concern', body: 'Smell gas? Leave the building and call your utility first. Then call us for the repair.' },
]

const emergencyFaqs = [
  {
    q: 'How fast can you actually get here?',
    a: 'During business hours, typically under 60 minutes in core GTA areas. After hours, we’ll quote you an honest ETA on the phone before dispatch — never a promise we can’t keep.',
  },
  {
    q: 'Will I pay an emergency surcharge?',
    a: 'There is a higher rate for after-hours and weekend calls. We’ll quote it on the phone before the truck rolls. No hidden trip fees.',
  },
  {
    q: 'Do you work on apartments and condos?',
    a: 'Yes — including coordinating with building management when shut-offs require their approval.',
  },
  {
    q: 'Can you get water shut off if I can’t find the valve?',
    a: 'Yes. Walk us through what you’re seeing and we’ll talk you through the shut-off until we arrive.',
  },
]

export default function EmergencyPlumbing() {
  useDocumentMeta({
    title: `24/7 Emergency Plumber in ${business.primaryRegion} | ${business.name}`,
    description: `Burst pipe, sewer backup, no hot water? Call ${business.name} \u2014 licensed emergency plumbers across ${business.primaryRegionLong}, 24 hours a day.`,
    canonical: `${business.url}/emergency-plumbing`,
  })

  return (
    <>
      <div className="bg-emergency pt-6">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Emergency Plumbing' }]} className="text-white/80 [&_a:hover]:text-white [&_[aria-current=page]]:text-white" />
        </Container>
      </div>

      <PageHero
        emergency
        eyebrow="24/7 emergency response"
        title="Emergency plumber in the GTA. Calls answered now."
        subtitle={`Burst pipes, sewer backups, no hot water in winter \u2014 these don\u2019t wait for office hours. Neither do we. Real dispatchers, licensed plumbers, honest pricing quoted before dispatch.`}
        icon="Siren"
        features={[
          'Live dispatcher 24/7 — no voicemail',
          'Licensed plumbers, fully insured',
          'Honest ETA before the truck rolls',
          'Written quote before the work starts',
        ]}
      />

      <section className="section bg-background" aria-labelledby="emg-when">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">When to call now</p>
            <h2 id="emg-when" className="mt-3 text-h1 text-text-primary">
              If it&rsquo;s any of these, don&rsquo;t wait.
            </h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              The longer water keeps running, the worse the damage and the bigger the bill.
              Call first &mdash; we&rsquo;ll talk you through immediate steps on the line.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {scenarios.map((s) => (
              <Card key={s.title} padding="md" className="border-l-4 border-emergency">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-card bg-emergency/10 text-emergency">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-h4 text-text-primary">{s.title}</h3>
                <p className="mt-2 text-body-sm text-text-secondary">{s.body}</p>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-2xl">
            <Card padding="lg" className="bg-emergency text-text-inverse text-center">
              <Phone className="mx-auto h-8 w-8" aria-hidden="true" />
              <h3 className="mt-4 text-h2 text-text-inverse">Stop reading. Call us.</h3>
              <p className="mt-3 text-body text-white/90">
                Real human on the line, 24 hours a day. We&rsquo;ll triage on the phone and
                dispatch the right tech.
              </p>
              <div className="mt-6 flex justify-center">
                <PhoneButton variant="primary" size="lg" label="Call now" className="bg-text-inverse !text-emergency hover:bg-primary-50" />
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <ProcessSteps />

      <section className="section bg-surface" aria-labelledby="emg-promise">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Our emergency promise</p>
            <h2 id="emg-promise" className="mt-3 text-h1 text-text-primary">
              Three things you&rsquo;ll always get from us.
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            <Card padding="lg" className="text-center">
              <Clock className="mx-auto h-8 w-8 text-emergency" aria-hidden="true" />
              <h3 className="mt-4 text-h4 text-text-primary">An honest ETA</h3>
              <p className="mt-2 text-body-sm text-text-secondary">
                We tell you when we&rsquo;ll actually be there. Not the time it takes to win the booking.
              </p>
            </Card>
            <Card padding="lg" className="text-center">
              <ShieldCheck className="mx-auto h-8 w-8 text-emergency" aria-hidden="true" />
              <h3 className="mt-4 text-h4 text-text-primary">A licensed plumber</h3>
              <p className="mt-2 text-body-sm text-text-secondary">
                Not an apprentice subcontractor. Every emergency call is staffed by a licensed tech.
              </p>
            </Card>
            <Card padding="lg" className="text-center">
              <AlertTriangle className="mx-auto h-8 w-8 text-emergency" aria-hidden="true" />
              <h3 className="mt-4 text-h4 text-text-primary">A written quote</h3>
              <p className="mt-2 text-body-sm text-text-secondary">
                Before any tool comes out of the bag. No surprise charges, no upsells under pressure.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <CoverageGrid />

      <FAQAccordion items={emergencyFaqs} title="Emergency plumbing FAQ" />

      <FinalCTABand
        variant="emergency"
        eyebrow={'Don\u2019t wait it out'}
        heading={'Water won\u2019t stop until you call.'}
        body={'Real dispatchers, real plumbers, real prices. Call now and we\u2019ll get someone moving.'}
      />
    </>
  )
}
