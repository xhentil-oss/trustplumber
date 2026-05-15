import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import { getPrimaryLocations } from '@/config/locations.js'

/**
 * ServiceCoverage — chip grid of GTA cities. Each chip deep-links to
 * /locations/:city/:service, generating geo-targeted internal links.
 */
export default function ServiceCoverage({ serviceSlug, serviceName }) {
  const cities = getPrimaryLocations()

  return (
    <section className="section bg-background" aria-labelledby="coverage-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Service area</p>
          <h2 id="coverage-heading" className="mt-3 text-h1 text-text-primary">
            {serviceName} across the GTA.
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Tap your city for response times, neighbourhoods served, and local pricing notes.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link
                to={`/locations/${city.slug}/${serviceSlug}`}
                className="group inline-flex items-center gap-1.5 rounded-full border border-border-DEFAULT bg-surface px-4 py-2 text-body-sm font-medium text-text-primary transition hover:border-accent-blue hover:bg-accent-blue/5 hover:text-accent-blue"
              >
                {city.name}
                <ArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-body-sm text-text-muted">
          Don’t see your city?{' '}
          <Link to="/contact" className="font-semibold text-accent-blue hover:text-accent-blue-hover">
            Ask if we cover it
          </Link>
          .
        </p>
      </Container>
    </section>
  )
}
