import { Check } from 'lucide-react'
import Container from '@/components/layout/Container.jsx'

/**
 * ServiceInclusions — "What's included" + "Signs you need this" two-column block.
 *
 * Both columns are optional. Pass `included` and/or `signs` as string arrays.
 */
export default function ServiceInclusions({ serviceName, included = [], signs = [] }) {
  if (included.length === 0 && signs.length === 0) return null

  return (
    <section className="section bg-surface" aria-labelledby="inclusions-heading">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Scope of work</p>
          <h2 id="inclusions-heading" className="mt-3 text-h1 text-text-primary">
            What our {serviceName.toLowerCase()} service covers.
          </h2>
          <p className="mt-4 text-body-lg text-text-secondary">
            Honest scope upfront. No surprise add-ons after we arrive.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {included.length > 0 && (
            <div className="card-base p-6 lg:p-8">
              <h3 className="text-h3 text-text-primary">Included in the visit</h3>
              <ul className="mt-5 space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body text-text-secondary">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-teal/10 text-accent-teal">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {signs.length > 0 && (
            <div className="card-base p-6 lg:p-8">
              <h3 className="text-h3 text-text-primary">Signs you should call us</h3>
              <ul className="mt-5 space-y-3">
                {signs.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-body text-text-secondary">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emergency/10 text-emergency">
                      !
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
