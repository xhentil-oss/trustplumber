import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import Card from '@/components/ui/Card.jsx'
import Badge from '@/components/ui/Badge.jsx'
import { getFeaturedServices } from '@/config/services.js'

/**
 * ServiceGrid — featured services on the homepage.
 *
 * Pulls from getFeaturedServices() so a single config edit
 * (services.js → isFeatured) changes what appears here.
 */
export default function ServiceGrid({
  heading = 'Plumbing services we deliver across the GTA',
  eyebrow = 'Core services',
  intro = 'Whether it\u2019s an emergency call at midnight or a planned installation, we work to the same standard \u2014 diagnose first, quote in writing, fix it properly.',
  limit,
}) {
  const items = typeof limit === 'number' ? getFeaturedServices().slice(0, limit) : getFeaturedServices()

  return (
    <section className="section bg-surface" aria-labelledby="services-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="services-heading" className="mt-3 text-h1 text-text-primary">{heading}</h2>
          <p className="mt-4 text-body-lg text-text-secondary">{intro}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => {
            const Icon = Icons[s.icon] || Icons.Wrench
            return (
              <Card
                key={s.slug}
                to={`/services/${s.slug}`}
                padding="md"
                className="group relative flex h-full flex-col overflow-hidden"
              >
                {/* Top accent bar on hover */}
                <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${s.isEmergency ? 'bg-emergency' : 'bg-gradient-to-r from-accent-blue to-accent-teal'}`} />
                <div className="flex items-center justify-between">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-card ring-1 ring-inset transition-colors ${s.isEmergency ? 'bg-emergency/10 text-emergency ring-emergency/15 group-hover:bg-emergency/15' : 'bg-primary-50 text-primary ring-primary-100 group-hover:bg-primary-100/70'}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  {s.isEmergency && <Badge variant="emergency" size="sm">24/7</Badge>}
                </div>
                <h3 className="mt-4 text-h3 text-text-primary">{s.name}</h3>
                <p className="mt-2 flex-1 text-body text-text-secondary">{s.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-accent-blue group-hover:text-accent-blue-hover">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
