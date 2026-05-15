import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Calendar, Clock3, Gauge } from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import Badge from '@/components/ui/Badge.jsx'
import caseStudies from '@/data/caseStudies.js'

const typeVariant = {
  emergency: 'emergency',
  commercial: 'primary',
  'major-repair': 'accent',
  residential: 'neutral',
}

const FILTERS = [
  { id: 'all', label: 'All work' },
  { id: 'emergency', label: 'Emergency' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'major-repair', label: 'Major repair' },
]

/**
 * CasePortfolio \u2014 magazine-style portfolio of recent jobs.
 *
 * Layout:
 *   - Filter chip rail (client-side filter on `type`)
 *   - One featured case (image + content split)
 *   - Three-up grid of the remaining filtered cases
 *
 * All KPIs, images and case copy are demo-ready and replaceable from
 * `src/data/caseStudies.js`.
 */
export default function CasePortfolio() {
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return caseStudies
    return caseStudies.filter((c) => c.type === filter)
  }, [filter])

  const featured = filtered.find((c) => c.featured) || filtered[0]
  const rest = filtered.filter((c) => c.id !== featured?.id).slice(0, 3)

  return (
    <section className="section bg-background" aria-labelledby="portfolio-heading">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Portfolio</p>
            <h2 id="portfolio-heading" className="mt-3 text-h1 text-text-primary">
              Case studies from real GTA jobs
            </h2>
            <p className="mt-3 text-body-lg text-text-secondary">
              Each one is documented in writing &mdash; the problem, what we did, what it cost, and what we left behind.
            </p>
          </div>

          <Link
            to="/case-studies"
            className="hidden items-center gap-1 text-body-sm font-semibold text-accent-blue hover:text-accent-blue-hover md:inline-flex"
          >
            Browse all case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Filter chips */}
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter case studies by type">
          {FILTERS.map((f) => {
            const active = filter === f.id
            return (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.id)}
                className={[
                  'rounded-full border px-4 py-1.5 text-body-sm font-semibold transition',
                  active
                    ? 'border-primary bg-primary text-text-inverse shadow-card'
                    : 'border-border bg-surface text-text-secondary hover:border-accent-blue hover:text-accent-blue',
                ].join(' ')}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 rounded-card border border-border bg-surface px-6 py-8 text-center text-body text-text-muted">
            No published case studies in that category yet. Check back soon &mdash; or{' '}
            <Link to="/request-service" className="font-semibold text-accent-blue hover:underline">request a similar service</Link>.
          </p>
        ) : (
          <>
            {/* Featured case */}
            {featured && <FeaturedCase c={featured} />}

            {/* Grid of additional cases */}
            {rest.length > 0 && (
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((c) => (
                  <CaseCard key={c.id} c={c} />
                ))}
              </div>
            )}
          </>
        )}

        <p className="mt-6 text-caption text-text-muted">
          Demo photos &mdash; replace with release-cleared job-site imagery before launch.
        </p>

        <div className="mt-4 md:hidden">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1 text-body-sm font-semibold text-accent-blue hover:text-accent-blue-hover"
          >
            Browse all case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

function FeaturedCase({ c }) {
  return (
    <article className="mt-8 overflow-hidden rounded-card border border-border bg-surface shadow-elevated">
      <div className="grid lg:grid-cols-12">
        {/* Image */}
        <div className="relative aspect-[16/10] lg:col-span-7 lg:aspect-auto">
          <img
            src={c.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
            <Badge variant={typeVariant[c.type] || 'neutral'} size="sm">{c.typeLabel}</Badge>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-caption font-semibold text-primary shadow-card backdrop-blur">
              Featured case
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 p-6 lg:col-span-5 lg:p-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-caption font-semibold uppercase tracking-wide text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent-teal" aria-hidden="true" />
              {c.neighbourhood ? `${c.neighbourhood}, ` : ''}{c.city}
            </span>
            {c.year && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-accent-teal" aria-hidden="true" />
                {c.year}
              </span>
            )}
            {c.duration && (
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5 text-accent-teal" aria-hidden="true" />
                {c.duration}
              </span>
            )}
          </div>

          <h3 className="text-h2 text-text-primary">{c.title}</h3>
          <p className="text-body text-text-secondary">{c.summary}</p>

          {(c.challenge || c.solution || c.outcome) && (
            <dl className="grid gap-3 rounded-btn border border-border bg-surface-alt p-4 text-body-sm">
              {c.challenge && (
                <div>
                  <dt className="font-semibold text-primary">Challenge</dt>
                  <dd className="mt-0.5 text-text-secondary">{c.challenge}</dd>
                </div>
              )}
              {c.solution && (
                <div>
                  <dt className="font-semibold text-primary">Solution</dt>
                  <dd className="mt-0.5 text-text-secondary">{c.solution}</dd>
                </div>
              )}
              {c.outcome && (
                <div>
                  <dt className="font-semibold text-primary">Outcome</dt>
                  <dd className="mt-0.5 text-text-secondary">{c.outcome}</dd>
                </div>
              )}
            </dl>
          )}

          {c.kpis?.length > 0 && (
            <ul className="grid grid-cols-3 gap-3">
              {c.kpis.slice(0, 3).map((k) => (
                <li key={k.label} className="rounded-btn border border-border bg-surface p-3 text-center">
                  <p className="inline-flex items-center justify-center gap-1 text-caption font-semibold uppercase tracking-wide text-text-muted">
                    <Gauge className="h-3 w-3 text-accent-blue" aria-hidden="true" />
                    {k.label}
                  </p>
                  <p className="mt-1 font-display text-h4 text-primary">{k.value}</p>
                </li>
              ))}
            </ul>
          )}

          <Link
            to={`/services/${c.service}`}
            className="inline-flex w-fit items-center gap-1 text-body-sm font-semibold text-accent-blue hover:text-accent-blue-hover"
          >
            Related service <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}

function CaseCard({ c }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt">
        <img
          src={c.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <Badge variant={typeVariant[c.type] || 'neutral'} size="sm">{c.typeLabel}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="inline-flex items-center gap-x-3 text-caption font-semibold uppercase tracking-wide text-text-muted">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3 text-accent-teal" aria-hidden="true" />
            {c.neighbourhood || c.city}
          </span>
          {c.year && <span>{c.year}</span>}
        </div>
        <h3 className="mt-2 text-h4 text-text-primary">{c.title}</h3>
        <p className="mt-2 flex-1 text-body-sm text-text-secondary">{c.summary}</p>

        {c.kpis?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {c.kpis.slice(0, 2).map((k) => (
              <li
                key={k.label}
                className="inline-flex items-baseline gap-1 rounded-full bg-surface-alt px-2.5 py-1 text-caption text-text-secondary ring-1 ring-inset ring-border"
              >
                <span className="font-semibold text-primary">{k.value}</span>
                <span className="text-text-muted">{k.label}</span>
              </li>
            ))}
          </ul>
        )}

        <Link
          to={`/services/${c.service}`}
          className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-accent-blue hover:text-accent-blue-hover"
        >
          Related service <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
