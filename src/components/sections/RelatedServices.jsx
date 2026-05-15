import * as Icons from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import Card from '@/components/ui/Card.jsx'
import { services as allServices } from '@/config/services.js'

/**
 * RelatedServices — picks N services from the same category, excluding
 * the current one. Falls back to featured services if the category yields none.
 */
export default function RelatedServices({ currentSlug, category, limit = 3 }) {
  let candidates = allServices.filter(
    (s) => s.slug !== currentSlug && (category ? s.category === category : true),
  )
  if (candidates.length < limit) {
    const extras = allServices.filter(
      (s) => s.slug !== currentSlug && s.isFeatured && !candidates.includes(s),
    )
    candidates = [...candidates, ...extras]
  }
  const items = candidates.slice(0, limit)
  if (items.length === 0) return null

  return (
    <section className="section bg-surface" aria-labelledby="related-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Related services</p>
          <h2 id="related-heading" className="mt-3 text-h1 text-text-primary">
            We also handle these.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((s) => {
            const Icon = Icons[s.icon] || Icons.Wrench
            return (
              <Card key={s.slug} to={`/services/${s.slug}`} padding="md" className="flex h-full flex-col">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-card bg-primary-50 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
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
}
