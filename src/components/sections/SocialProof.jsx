import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import Card from '@/components/ui/Card.jsx'
import Badge from '@/components/ui/Badge.jsx'
import { business } from '@/config/business.js'
import { formatDate } from '@/lib/utils.js'
import reviews from '@/data/reviews.js'
import { getServiceBySlug } from '@/config/services.js'

/**
 * SocialProof — aggregate rating row + three testimonial cards.
 *
 * If business.trustSignals don’t carry verified Google/HomeStars values
 * yet (pre-launch placeholder), we render a neutral stat band so the
 * section still has a credibility anchor above the testimonials.
 */
export default function SocialProof() {
  const { google, homestars } = business.trustSignals
  const hasAggregate = (google?.rating && google?.reviewCount) || (homestars?.rating && homestars?.reviewCount)

  return (
    <section className="section bg-background" aria-labelledby="social-proof-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Real customers, real jobs</p>
          <h2 id="social-proof-heading" className="mt-3 text-h1 text-text-primary">
            What homeowners across the GTA say
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            We publish reviews only when we can point to the source. No invented quotes, no stock photos.
          </p>
        </div>

        {hasAggregate ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {google?.rating && google?.reviewCount && (
              <AggregateBadge label="Google" rating={google.rating} count={google.reviewCount} href={google.profileUrl} />
            )}
            {homestars?.rating && homestars?.reviewCount && (
              <AggregateBadge label="HomeStars" rating={homestars.rating} count={homestars.reviewCount} href={homestars.profileUrl} />
            )}
          </div>
        ) : (
          <DemoStatBand />
        )}

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => {
            const svc = getServiceBySlug(r.service)
            return (
              <Card key={r.id} variant="default" padding="md" className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <Stars rating={r.rating} />
                  {svc && <Badge variant="neutral" size="sm">{svc.shortName}</Badge>}
                </div>
                <blockquote className="mt-4 text-body text-text-secondary">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <footer className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <Avatar name={r.name} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-body-sm font-semibold text-text-primary">{r.name}</p>
                    <p className="truncate text-caption text-text-muted">{r.location}</p>
                  </div>
                  <p className="shrink-0 text-caption text-text-muted">{formatDate(r.date)}</p>
                </footer>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <Link to="/reviews" className="inline-flex items-center gap-1 text-body font-semibold text-accent-blue hover:text-accent-blue-hover">
            Read all reviews <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  )
}

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

function Avatar({ name = '' }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent-blue text-caption font-bold text-text-inverse shadow-card"
    >
      {initials || '—'}
    </span>
  )
}

/**
 * DemoStatBand — shown when no verified aggregate rating exists yet.
 * Pure narrative band so the page still anchors trust above testimonials.
 * Replace with real AggregateBadge once Google / HomeStars are verified.
 */
function DemoStatBand() {
  const stats = [
    { value: '200+', label: 'GTA jobs completed in 2025' },
    { value: '4.9★', label: 'Avg customer rating (demo)' },
    { value: '47 min', label: 'Median emergency response' },
    { value: '100%', label: 'Written workmanship guarantee' },
  ]
  return (
    <div className="mt-8 rounded-card border border-border bg-surface px-4 py-5 shadow-card sm:px-6">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-4 text-center md:grid-cols-4">
        {stats.map((s) => (
          <li key={s.label}>
            <p className="font-display text-h2 text-primary">{s.value}</p>
            <p className="mt-1 text-caption text-text-muted">{s.label}</p>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-center text-caption text-text-muted">
        Demo figures — swap with verified Google / HomeStars aggregates before launch.
      </p>
    </div>
  )
}

function AggregateBadge({ label, rating, count, href }) {
  const inner = (
    <div className="flex items-center gap-3">
      <Stars rating={rating} />
      <div className="text-left">
        <p className="text-body font-semibold text-text-primary">{rating.toFixed(1)} on {label}</p>
        <p className="text-caption text-text-muted">{count.toLocaleString('en-CA')} reviews</p>
      </div>
    </div>
  )
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="rounded-btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
        {inner}
      </a>
    )
  }
  return inner
}
