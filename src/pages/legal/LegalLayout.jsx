import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'

/**
 * LegalLayout — shared layout for /privacy-policy, /terms, /accessibility.
 * Long-form prose page with breadcrumbs, header, and review-note callout.
 *
 * NOTE: Content on these pages is a template. It MUST be reviewed by a
 * Canadian lawyer before launch. Do not treat as legal advice.
 */
export default function LegalLayout({ crumb, title, lastUpdated, children }) {
  useDocumentMeta({
    title: `${title} | ${business.name}`,
    description: `${title} for ${business.name}.`,
    canonical: `${business.url}/${crumb.toLowerCase().replace(/\s+/g, '-')}`,
  })

  return (
    <>
      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: crumb }]} />
        </Container>
      </div>

      <section className="bg-background py-section" aria-labelledby="lg-heading">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Legal</p>
            <h1 id="lg-heading" className="mt-3 text-display-md text-text-primary">{title}</h1>
            {lastUpdated && (
              <p className="mt-3 text-body-sm text-text-muted">Last updated: {lastUpdated}</p>
            )}

            <Card padding="md" className="mt-6 border-l-4 border-warning bg-warning/5">
              <p className="text-body-sm text-text-secondary">
                <strong className="text-text-primary">Template notice:</strong>{' '}
                This page is a working template and has not been reviewed by Canadian counsel.
                Replace before production launch with content reviewed for your jurisdiction.
              </p>
            </Card>

            <div className="prose-column mt-8 space-y-5 text-body text-text-secondary
                            [&_h2]:mt-10 [&_h2]:text-h2 [&_h2]:text-text-primary
                            [&_h3]:mt-6 [&_h3]:text-h3 [&_h3]:text-text-primary
                            [&_p]:leading-relaxed
                            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
                            [&_a]:text-accent-blue [&_a]:underline hover:[&_a]:text-accent-blue-hover">
              {children}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
