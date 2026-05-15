import { Tag, Info } from 'lucide-react'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import { getActiveOffers } from '@/data/offers.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'

export default function Offers() {
  const active = getActiveOffers()

  useDocumentMeta({
    title: `Plumbing Offers & Discounts | ${business.name}`,
    description: `Current promotions from ${business.name}. Honest discounts, plain-English terms, no fine-print tricks.`,
    canonical: `${business.url}/offers`,
  })

  return (
    <>
      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Offers' }]} />
        </Container>
      </div>

      <section className="bg-background py-section" aria-labelledby="of-heading">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Current offers</p>
            <h1 id="of-heading" className="mt-3 text-display-lg text-text-primary">
              Real discounts. Plain-English terms.
            </h1>
            <p className="mt-4 text-body-lg text-text-secondary">
              We don&rsquo;t do bait-and-switch coupons or vague &ldquo;up to&rdquo; discounts.
              Every offer below has the terms written out next to it.
            </p>
          </div>
        </Container>
      </section>

      <section className="section bg-surface" aria-labelledby="of-list">
        <Container>
          <h2 id="of-list" className="sr-only">Active offers</h2>

          {active.length === 0 ? (
            <Card padding="lg" className="mx-auto max-w-2xl text-center">
              <Info className="mx-auto h-8 w-8 text-accent-blue" aria-hidden="true" />
              <h3 className="mt-4 text-h3 text-text-primary">No active offers right now</h3>
              <p className="mt-3 text-body text-text-secondary">
                We&rsquo;re between promotions. Our regular pricing is honest and quoted in writing
                before the work starts &mdash; no offer code required.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button to="/request-service" variant="primary" size="md">Request a quote</Button>
                <PhoneButton variant="ghost" size="md" label="Or call us" />
              </div>
            </Card>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {active.map((o) => (
                <Card key={o.id} padding="lg" className="flex h-full flex-col">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-card bg-accent-teal/10 text-accent-teal">
                    <Tag className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-display-sm font-bold text-primary">{o.discount}</p>
                  <h3 className="mt-2 text-h3 text-text-primary">{o.title}</h3>
                  <p className="mt-3 text-body text-text-secondary">{o.body}</p>
                  <p className="mt-4 border-t border-border pt-4 text-caption text-text-muted">
                    <strong className="font-semibold text-text-secondary">Terms:</strong>{' '}
                    {o.terms}
                  </p>
                  {o.expiresOn && (
                    <p className="mt-2 text-caption text-text-muted">
                      Valid until {new Date(o.expiresOn).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  )}
                  <div className="mt-6">
                    <Button to={o.cta.to} variant="primary" size="md" fullWidth>
                      {o.cta.label}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <p className="mx-auto mt-10 max-w-2xl text-center text-body-sm text-text-muted">
            Mention the offer when you book. Offers cannot be applied retroactively to completed work.
          </p>
        </Container>
      </section>

      <FinalCTABand />
    </>
  )
}
