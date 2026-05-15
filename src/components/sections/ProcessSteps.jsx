import * as Icons from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import processSteps from '@/data/processSteps.js'

/**
 * ProcessSteps — 4-step "how it works" row.
 * Numbered. Connected by a thin guide line on lg+.
 */
export default function ProcessSteps() {
  return (
    <section className="section bg-surface" aria-labelledby="process-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">How it works</p>
          <h2 id="process-heading" className="mt-3 text-h1 text-text-primary">
            Four steps. No surprises.
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            The same process whether it&rsquo;s a midnight emergency or a planned installation.
          </p>
        </div>

        <ol className="relative mt-12 grid gap-6 lg:grid-cols-4">
          {/* horizontal connector on desktop */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent lg:block" />
          {processSteps.map((s, idx) => {
            const Icon = Icons[s.icon] || Icons.Check
            const isLast = idx === processSteps.length - 1
            return (
              <li key={s.number} className="relative flex flex-col items-start rounded-card border border-border bg-surface p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-card-hover lg:items-center lg:text-center">
                {/* vertical connector on mobile/tablet */}
                {!isLast && (
                  <div aria-hidden="true" className="absolute left-9 top-full h-6 w-px bg-border-strong lg:hidden" />
                )}
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent-blue text-text-inverse shadow-elevated ring-4 ring-surface">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="absolute -bottom-1.5 -right-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-teal text-caption font-bold text-text-inverse ring-2 ring-surface">
                    {s.number}
                  </span>
                </span>
                <span className="mt-4 text-caption font-semibold uppercase tracking-wider text-accent-teal">
                  Step {s.number}
                </span>
                <h3 className="mt-1 text-h4 text-text-primary">{s.title}</h3>
                <p className="mt-2 text-body-sm text-text-secondary">{s.body}</p>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
