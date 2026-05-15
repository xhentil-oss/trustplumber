import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import problems from '@/data/problems.js'

/**
 * ProblemSection — frames the service grid in symptom language.
 * Each card links to the service that solves it.
 */
export default function ProblemSection() {
  return (
    <section className="section bg-background" aria-labelledby="problems-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Problems we solve</p>
          <h2 id="problems-heading" className="mt-3 text-h1 text-text-primary">
            If any of this sounds like your day, we can help.
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Plumbing problems present as symptoms, not service names. Tell us what you&rsquo;re seeing and we&rsquo;ll handle the diagnosis.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => {
            const Icon = Icons[p.icon] || Icons.AlertCircle
            return (
              <Link
                key={p.title}
                to={`/services/${p.service}`}
                className="group flex flex-col rounded-card border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-btn bg-primary-50 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-h4 text-text-primary">{p.title}</h3>
                <p className="mt-2 flex-1 text-body-sm text-text-secondary">{p.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-body-sm font-semibold text-accent-blue">
                  How we fix it <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
