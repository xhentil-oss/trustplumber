import { Link } from 'react-router-dom'
import { Home, Search } from 'lucide-react'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import Container from '@/components/layout/Container.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import { getFeaturedServices } from '@/config/services.js'

/**
 * NotFound — 404 page. Avoids a dead end with a phone CTA and links
 * to the highest-intent destinations.
 */
export default function NotFound() {
  useDocumentMeta({
    title: `Page not found | ${business.name}`,
    description: 'The page you\u2019re looking for doesn\u2019t exist. Browse our plumbing services or call us 24/7.',
  })

  const services = getFeaturedServices().slice(0, 6)

  return (
    <section className="bg-background py-section-lg" aria-labelledby="nf-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">404</p>
          <h1 id="nf-heading" className="mt-3 text-display-lg text-text-primary">
            We can’t find that page.
          </h1>
          <p className="mt-4 text-body-lg text-text-secondary">
            The link may be old or mistyped. If you have a plumbing emergency, call us — we answer 24/7.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PhoneButton variant="emergency" emergency size="lg" label="Call 24/7" />
            <Button to="/" variant="primary" size="lg">
              <Home className="mr-1 h-4 w-4" aria-hidden="true" /> Back to homepage
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <p className="text-center text-caption font-semibold uppercase tracking-wider text-text-muted">
            <Search className="mr-1 inline h-4 w-4" aria-hidden="true" />
            Or jump to a service
          </p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="inline-flex items-center rounded-full border border-border-DEFAULT bg-surface px-4 py-2 text-body-sm font-medium text-text-primary transition hover:border-accent-blue hover:bg-accent-blue/5 hover:text-accent-blue"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-body-sm text-text-muted">
            <Link to="/services" className="font-semibold text-accent-blue hover:text-accent-blue-hover">
              See all services
            </Link>{' '}
            ·{' '}
            <Link to="/locations" className="font-semibold text-accent-blue hover:text-accent-blue-hover">
              See all service areas
            </Link>
          </p>
        </div>
      </Container>
    </section>
  )
}
