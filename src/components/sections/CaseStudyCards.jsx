import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import Card from '@/components/ui/Card.jsx'
import Badge from '@/components/ui/Badge.jsx'
import caseStudies from '@/data/caseStudies.js'

const typeVariant = {
  emergency: 'emergency',
  commercial: 'primary',
  'major-repair': 'accent',
}

/**
 * CaseStudyCards — three real jobs framed as trust depth, not marketing.
 * Renders without a hero image when an entry's image is null.
 */
export default function CaseStudyCards() {
  return (
    <section className="section bg-background" aria-labelledby="cases-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Recent work</p>
          <h2 id="cases-heading" className="mt-3 text-h1 text-text-primary">
            A few recent jobs across the GTA.
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Real properties, real homeowners. Photos appear here only when we have a signed release.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {caseStudies.map((c) => (
            <Card key={c.id} padding="none" className="flex h-full flex-col overflow-hidden">
              {c.image ? (
                <img src={c.image} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              ) : (
                <div className="relative flex aspect-[4/3] w-full items-center justify-center bg-primary-50 text-primary">
                  <span className="inline-flex items-center gap-2 text-body-sm font-medium">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-teal" />
                    {c.city}
                  </span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2">
                  <Badge variant={typeVariant[c.type] || 'neutral'} size="sm">{c.typeLabel}</Badge>
                  <span className="text-caption text-text-muted">{c.city}</span>
                </div>
                <h3 className="mt-3 text-h4 text-text-primary">{c.title}</h3>
                <p className="mt-2 flex-1 text-body-sm text-text-secondary">{c.summary}</p>
                <Link
                  to={`/services/${c.service}`}
                  className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-accent-blue hover:text-accent-blue-hover"
                >
                  Related service <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
