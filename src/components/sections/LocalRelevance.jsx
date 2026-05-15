import { MapPin } from 'lucide-react'
import Container from '@/components/layout/Container.jsx'

/**
 * LocalRelevance — neighbourhoods served block. Demonstrates real local
 * coverage (good for SEO, even better for trust) without inventing data.
 */
export default function LocalRelevance({ city, serviceName }) {
  if (!city?.neighborhoods?.length) return null

  return (
    <section className="section bg-surface" aria-labelledby="local-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">On the ground in {city.name}</p>
            <h2 id="local-heading" className="mt-3 text-h1 text-text-primary">
              {serviceName ? `${serviceName} in ${city.name} neighbourhoods.` : `Neighbourhoods we serve in ${city.name}.`}
            </h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              We work across {city.name} and respond fastest in the areas below. If your street isn’t listed, call us — it likely is.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-2 sm:grid-cols-2">
              {city.neighborhoods.map((n) => (
                <li key={n} className="flex items-center gap-2 rounded-btn border border-border-DEFAULT bg-background px-3 py-2 text-body-sm text-text-primary">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-accent-teal" aria-hidden="true" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
