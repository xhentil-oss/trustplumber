import { Link, useLocation } from 'react-router-dom'
import { CheckCircle2, Clock, Phone, ArrowRight } from 'lucide-react'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import Container from '@/components/layout/Container.jsx'
import Card from '@/components/ui/Card.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import { getFeaturedServices } from '@/config/services.js'

/**
 * ThankYou — /thank-you
 * Lands here after a successful form submit. Reads `state.name`/`state.urgency`
 * for personalization when available.
 */
export default function ThankYou() {
  const { state } = useLocation()
  const name = state?.name
  const isEmergency = state?.urgency === 'emergency'

  useDocumentMeta({
    title: `Thanks \u2014 we\u2019ll be in touch | ${business.name}`,
    description: 'Your request was received. We\u2019ll be in touch within minutes.',
  })

  return (
    <>
      <section className="bg-background py-section-lg" aria-labelledby="ty-heading">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent-teal/10 text-accent-teal">
              <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
            </span>
            <p className="eyebrow mt-6">Request received</p>
            <h1 id="ty-heading" className="mt-3 text-display-lg text-text-primary">
              {name ? `Thanks, ${name}.` : 'Thanks — we got it.'}
            </h1>
            <p className="mt-4 text-body-lg text-text-secondary">
              {isEmergency
                ? 'Our dispatcher is reviewing your request right now. Expect a call within minutes.'
                : 'A real human will get back to you shortly with next steps and a quote.'}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PhoneButton variant="emergency" emergency size="lg" label="Or call us now" />
              <Button to="/" variant="ghost" size="lg">Back to homepage</Button>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            <Card padding="md" className="text-center">
              <Clock className="mx-auto h-6 w-6 text-accent-blue" aria-hidden="true" />
              <p className="mt-3 text-h4 text-text-primary">Within minutes</p>
              <p className="mt-1 text-body-sm text-text-secondary">
                Typical callback time during business hours.
              </p>
            </Card>
            <Card padding="md" className="text-center">
              <Phone className="mx-auto h-6 w-6 text-accent-blue" aria-hidden="true" />
              <p className="mt-3 text-h4 text-text-primary">From a real plumber</p>
              <p className="mt-1 text-body-sm text-text-secondary">
                Not a call centre. The dispatcher knows the trade.
              </p>
            </Card>
            <Card padding="md" className="text-center">
              <CheckCircle2 className="mx-auto h-6 w-6 text-accent-blue" aria-hidden="true" />
              <p className="mt-3 text-h4 text-text-primary">Written quote first</p>
              <p className="mt-1 text-body-sm text-text-secondary">
                Honest scope and price before any work begins.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="section bg-surface" aria-labelledby="ty-explore">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="ty-explore" className="text-h1 text-text-primary">While you wait…</h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              Have a look around. Most homeowners read up on the service before we arrive.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {getFeaturedServices().slice(0, 6).map((s) => (
              <Card key={s.slug} to={`/services/${s.slug}`} padding="md" className="flex h-full flex-col">
                <h3 className="text-h4 text-text-primary">{s.name}</h3>
                <p className="mt-2 flex-1 text-body-sm text-text-secondary">{s.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-accent-blue">
                  Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-body-sm text-text-muted">
            <Link to="/services" className="font-semibold text-accent-blue hover:text-accent-blue-hover">
              See all services
            </Link>
          </p>
        </Container>
      </section>
    </>
  )
}
