import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import { formatDate } from '@/lib/utils.js'
import blogPosts, { categories } from '@/data/blogPosts.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import Badge from '@/components/ui/Badge.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd.jsx'

export default function Blog() {
  useDocumentMeta({
    title: `Plumbing Guides & Advice | ${business.name}`,
    description: `Plain-English plumbing guides for ${business.primaryRegion} homeowners \u2014 emergency how-tos, buying advice, seasonal maintenance.`,
    canonical: `${business.url}/blogs`,
  })

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blogs' }])} />

      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />
        </Container>
      </div>

      <section className="bg-background py-section" aria-labelledby="bl-heading">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Plumbing guides</p>
            <h1 id="bl-heading" className="mt-3 text-display-lg text-text-primary">
              Honest plumbing advice. No clickbait.
            </h1>
            <p className="mt-4 text-body-lg text-text-secondary">
              Written by licensed plumbers for {business.primaryRegion} homeowners. Practical,
              short, and free of upsell pressure.
            </p>
          </div>

          {/* Category chips */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={`/blogs/category/${c.slug}`}
                className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-body-sm font-medium text-text-primary hover:border-accent-blue hover:text-accent-blue"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-surface" aria-labelledby="bl-list">
        <Container>
          <h2 id="bl-list" className="sr-only">All articles</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((p) => (
              <Card key={p.slug} to={`/blogs/${p.slug}`} padding="md" className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <Badge variant="neutral" size="sm">{p.category}</Badge>
                  <span className="inline-flex items-center gap-1 text-caption text-text-muted">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {p.readMinutes} min
                  </span>
                </div>
                <h3 className="mt-4 text-h3 text-text-primary">{p.title}</h3>
                <p className="mt-2 flex-1 text-body-sm text-text-secondary">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <p className="text-caption text-text-muted">{formatDate(p.publishedAt)}</p>
                  <span className="inline-flex items-center gap-1 text-body-sm font-semibold text-accent-blue">
                    Read <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTABand />
    </>
  )
}
