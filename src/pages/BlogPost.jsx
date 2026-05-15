import { useParams, Link } from 'react-router-dom'
import { Clock, Calendar, ArrowRight, AlertTriangle } from 'lucide-react'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import { formatDate } from '@/lib/utils.js'
import { getPostBySlug, getRelatedPosts } from '@/data/blogPosts.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import Badge from '@/components/ui/Badge.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'
import JsonLd, { breadcrumbSchema, articleSchema } from '@/components/seo/JsonLd.jsx'
import NotFound from './NotFound.jsx'

/* ───── Body block renderer ───────────────────────────────────── */

function Block({ block }) {
  switch (block.type) {
    case 'p':
      return <p className="text-body-lg leading-relaxed text-text-secondary">{block.text}</p>
    case 'h2':
      return <h2 className="mt-10 text-h2 text-text-primary">{block.text}</h2>
    case 'h3':
      return <h3 className="mt-6 text-h3 text-text-primary">{block.text}</h3>
    case 'ul':
      return (
        <ul className="list-disc space-y-2 pl-6 text-body-lg text-text-secondary">
          {block.items.map((it, i) => <li key={i}>{it}</li>)}
        </ul>
      )
    case 'ol':
      return (
        <ol className="list-decimal space-y-2 pl-6 text-body-lg text-text-secondary">
          {block.items.map((it, i) => <li key={i}>{it}</li>)}
        </ol>
      )
    case 'callout':
      return (
        <Card padding="md" className="border-l-4 border-warning bg-warning/5">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-warning" aria-hidden="true" />
            <p className="text-body text-text-primary">{block.text}</p>
          </div>
        </Card>
      )
    case 'quote':
      return (
        <blockquote className="border-l-4 border-primary pl-5 text-body-lg italic text-text-secondary">
          {block.text}
        </blockquote>
      )
    default:
      return null
  }
}

/* ───── Page ──────────────────────────────────────────────────── */

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  const related = post ? getRelatedPosts(slug) : []

  useDocumentMeta({
    title: post ? `${post.title} | ${business.name}` : `Not found | ${business.name}`,
    description: post?.excerpt,
    canonical: post ? `${business.url}/blogs/${post.slug}` : undefined,
  })

  if (!post) return <NotFound />

  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Blog', to: '/blogs' },
    { label: post.category, to: `/blogs/category/${post.categorySlug}` },
    { label: post.title },
  ]

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema(
          crumbs.map((c, i) => (i === crumbs.length - 1 ? { ...c, to: `/blogs/${post.slug}` } : c)),
        )}
      />

      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs items={crumbs} />
        </Container>
      </div>

      <article className="bg-background py-section">
        <Container>
          <header className="mx-auto max-w-3xl">
            <Badge variant="neutral" size="sm">{post.category}</Badge>
            <h1 className="mt-4 text-display-md text-text-primary">{post.title}</h1>
            <p className="mt-4 text-body-lg text-text-secondary">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-body-sm text-text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {post.readMinutes} min read
              </span>
              <span>By {post.author}</span>
            </div>
          </header>

          <div className="mx-auto mt-12 max-w-3xl space-y-5">
            {post.body.map((block, i) => <Block key={i} block={block} />)}
          </div>

          {/* Inline mid-article CTA */}
          <Card padding="lg" className="mx-auto mt-12 max-w-3xl bg-primary text-text-inverse">
            <p className="text-caption font-semibold uppercase tracking-wider text-primary-200">
              Need a plumber?
            </p>
            <h2 className="mt-2 text-h2 text-text-inverse">Don&rsquo;t DIY a plumbing emergency.</h2>
            <p className="mt-3 text-body text-primary-100">
              If something doesn&rsquo;t feel right, call us. Real dispatchers, real plumbers, honest pricing in writing.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <PhoneButton variant="emergency" emergency size="md" label="Call now" />
              <Button to="/request-service" variant="ghost" size="md" className="border-white/40 !text-text-inverse hover:bg-white/10">
                Request a quote
              </Button>
            </div>
          </Card>

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="mx-auto mt-10 max-w-3xl border-t border-border pt-6">
              <p className="text-caption font-semibold uppercase tracking-wider text-text-muted">Tags</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <Badge key={t} variant="neutral" size="sm">{t}</Badge>
                ))}
              </div>
            </div>
          )}
        </Container>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="section bg-surface" aria-labelledby="bp-related">
          <Container>
            <h2 id="bp-related" className="text-h2 text-text-primary">Keep reading</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {related.map((p) => (
                <Card key={p.slug} to={`/blogs/${p.slug}`} padding="md" className="flex h-full flex-col">
                  <Badge variant="neutral" size="sm">{p.category}</Badge>
                  <h3 className="mt-3 text-h3 text-text-primary">{p.title}</h3>
                  <p className="mt-2 flex-1 text-body-sm text-text-secondary">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-accent-blue">
                    Read <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FinalCTABand />
    </>
  )
}
