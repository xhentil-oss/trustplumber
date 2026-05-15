import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import Card from '@/components/ui/Card.jsx'
import Badge from '@/components/ui/Badge.jsx'
import { formatDate } from '@/lib/utils.js'
import blogPreview from '@/data/blogPreview.js'

/**
 * BlogCards — three latest posts on the homepage.
 * The full blog index lives at /blogs.
 */
export default function BlogCards() {
  return (
    <section className="section bg-surface" aria-labelledby="blog-heading">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Expert advice</p>
            <h2 id="blog-heading" className="mt-3 text-h1 text-text-primary">
              Plain-English plumbing guides for GTA homeowners.
            </h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              Seasonal maintenance, honest cost explainers, and what to do in the first ten minutes when something goes wrong.
            </p>
          </div>
          <Link to="/blogs" className="inline-flex items-center gap-1 text-body font-semibold text-accent-blue hover:text-accent-blue-hover">
            All articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {blogPreview.map((p) => (
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
              <p className="mt-4 text-caption text-text-muted">{formatDate(p.publishedAt)}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
