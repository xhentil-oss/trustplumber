import { Link } from 'react-router-dom'
import { Star, ExternalLink } from 'lucide-react'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import { formatDate } from '@/lib/utils.js'
import reviews from '@/data/reviews.js'
import { getServiceBySlug } from '@/config/services.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import Badge from '@/components/ui/Badge.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'

function Stars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.round(rating) ? 'fill-warning text-warning' : 'text-border-strong'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function AggregateBadge({ label, rating, count, href }) {
  const inner = (
    <Card padding="md" className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-card bg-primary-50">
        <Star className="h-6 w-6 fill-warning text-warning" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="text-caption font-semibold uppercase tracking-wider text-text-muted">{label}</p>
        <p className="mt-1 text-h4 text-text-primary">
          {rating.toFixed(1)} <span className="text-body-sm font-normal text-text-muted">/ 5</span>
        </p>
        <p className="text-body-sm text-text-secondary">
          {count.toLocaleString('en-CA')} reviews
        </p>
      </div>
      {href && (
        <span className="ml-auto text-accent-blue">
          <ExternalLink className="h-5 w-5" aria-hidden="true" />
        </span>
      )}
    </Card>
  )
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-card">
        {inner}
      </a>
    )
  }
  return inner
}

export default function Reviews() {
  useDocumentMeta({
    title: `Customer Reviews | ${business.name}`,
    description: `Real reviews from real ${business.primaryRegion} homeowners. Every review on this page is sourced from a verifiable platform.`,
    canonical: `${business.url}/reviews`,
  })

  const { google, homestars } = business.trustSignals
  const hasAggregate = (google?.rating && google?.reviewCount) || (homestars?.rating && homestars?.reviewCount)

  return (
    <>
      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Reviews' }]} />
        </Container>
      </div>

      <section className="bg-background py-section" aria-labelledby="rv-heading">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Customer reviews</p>
            <h1 id="rv-heading" className="mt-3 text-display-lg text-text-primary">
              What our customers actually say.
            </h1>
            <p className="mt-4 text-body-lg text-text-secondary">
              We don&rsquo;t invent testimonials. Every review below comes from a real customer
              on a verifiable platform &mdash; or signed off for direct publication.
            </p>
          </div>

          {hasAggregate && (
            <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
              {google?.rating && google?.reviewCount && (
                <AggregateBadge label="Google" rating={google.rating} count={google.reviewCount} href={google.profileUrl} />
              )}
              {homestars?.rating && homestars?.reviewCount && (
                <AggregateBadge label="HomeStars" rating={homestars.rating} count={homestars.reviewCount} href={homestars.profileUrl} />
              )}
            </div>
          )}
        </Container>
      </section>

      <section className="section bg-surface" aria-labelledby="rv-list">
        <Container>
          <h2 id="rv-list" className="sr-only">All reviews</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => {
              const svc = getServiceBySlug(r.service)
              return (
                <Card key={r.id} padding="md" className="flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <Stars rating={r.rating} />
                    {svc && <Badge variant="neutral" size="sm">{svc.shortName}</Badge>}
                  </div>
                  <blockquote className="mt-4 flex-1 text-body text-text-secondary">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <p className="text-body-sm font-semibold text-text-primary">{r.name}</p>
                      <p className="text-caption text-text-muted">{r.location}</p>
                    </div>
                    <p className="text-caption text-text-muted">{formatDate(r.date)}</p>
                  </footer>
                </Card>
              )
            })}
          </div>

          <div className="mx-auto mt-12 max-w-2xl text-center">
            <Card padding="lg" className="bg-background">
              <h3 className="text-h3 text-text-primary">Worked with us?</h3>
              <p className="mt-3 text-body text-text-secondary">
                A quick honest review helps another homeowner find a plumber they can trust.
                It also keeps us honest.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                {google?.profileUrl ? (
                  <Button href={google.profileUrl} variant="primary" size="md">
                    Leave a Google review
                  </Button>
                ) : (
                  <PhoneButton variant="primary" size="md" label="Call to share feedback" />
                )}
                <Button to="/contact" variant="ghost" size="md">Email us instead</Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <FinalCTABand />
    </>
  )
}
