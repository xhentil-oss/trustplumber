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
          {/* connector line on desktop */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-px bg-border lg:block" />
          {processSteps.map((s) => {
            const Icon = Icons[s.icon] || Icons.Check
            return (
              <li key={s.number} className="relative flex flex-col items-start rounded-card border border-border bg-surface p-5 lg:items-center lg:text-center">
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-text-inverse shadow-card">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="mt-3 text-caption font-semibold uppercase tracking-wider text-accent-teal">
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
