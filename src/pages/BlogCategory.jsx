import { useParams, Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import { formatDate } from '@/lib/utils.js'
import { getCategoryBySlug, getPostsByCategory, categories } from '@/data/blogPosts.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import Badge from '@/components/ui/Badge.jsx'
import Button from '@/components/ui/Button.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd.jsx'
import NotFound from './NotFound.jsx'

export default function BlogCategory() {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)
  const posts = category ? getPostsByCategory(slug) : []

  useDocumentMeta({
    title: category ? `${category.name} | ${business.name} Blog` : `Not found | ${business.name}`,
    description: category?.description,
    canonical: category ? `${business.url}/blogs/category/${category.slug}` : undefined,
  })

  if (!category) return <NotFound />

  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blogs' },
    { label: category.name },
  ]

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs.map((c, i) => i === crumbs.length - 1 ? { ...c, to: `/blogs/category/${category.slug}` } : c))} />

      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs items={crumbs} />
        </Container>
      </div>

      <section className="bg-background py-section" aria-labelledby="bc-heading">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Category</p>
            <h1 id="bc-heading" className="mt-3 text-display-lg text-text-primary">
              {category.name}
            </h1>
            <p className="mt-4 text-body-lg text-text-secondary">{category.description}</p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={`/blogs/category/${c.slug}`}
                className={`inline-flex items-center rounded-full border px-4 py-2 text-body-sm font-medium ${
                  c.slug === category.slug
                    ? 'border-accent-blue bg-accent-blue text-text-inverse'
                    : 'border-border bg-surface text-text-primary hover:border-accent-blue hover:text-accent-blue'
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-surface" aria-labelledby="bc-list">
        <Container>
          <h2 id="bc-list" className="sr-only">Posts in {category.name}</h2>

          {posts.length === 0 ? (
            <Card padding="lg" className="mx-auto max-w-2xl text-center">
              <h3 className="text-h3 text-text-primary">Nothing here yet</h3>
              <p className="mt-3 text-body text-text-secondary">
                We&rsquo;re still working on this category. In the meantime, browse our other guides.
              </p>
              <div className="mt-6">
                <Button to="/blogs" variant="primary" size="md">All articles</Button>
              </div>
            </Card>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
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
          )}
        </Container>
      </section>

      <FinalCTABand />
    </>
  )
}
