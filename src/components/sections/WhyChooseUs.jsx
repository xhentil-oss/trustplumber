import * as Icons from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import whyChooseUs from '@/data/whyChooseUs.js'

/**
 * WhyChooseUs — 4-column proof pillars.
 * Specific and concrete; no slogans, no superlatives.
 */
export default function WhyChooseUs() {
  return (
    <section className="section bg-surface" aria-labelledby="why-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <p className="eyebrow">Why choose us</p>
            <h2 id="why-heading" className="mt-3 text-h1 text-text-primary">
              The standard a careful homeowner would set.
            </h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              We&rsquo;d rather earn one fair review than chase one cheap job. Here&rsquo;s what that looks like in practice.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {whyChooseUs.map((p) => {
              const Icon = Icons[p.icon] || Icons.Check
              return (
                <li key={p.title} className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-btn bg-accent-teal/10 text-accent-teal">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-h4 text-text-primary">{p.title}</h3>
                    <p className="mt-1 text-body text-text-secondary">{p.body}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
