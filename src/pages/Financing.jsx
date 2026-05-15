import { CreditCard, FileText, CheckCircle2, Info } from 'lucide-react'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import FAQAccordion from '@/components/sections/FAQAccordion.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'

const steps = [
  { n: '01', title: 'Get a written quote', body: 'We diagnose the job and put the price in writing. No application before you see the number.' },
  { n: '02', title: 'Apply with our partner', body: 'A short online application with our financing partner. Decisions are typically returned within minutes.' },
  { n: '03', title: 'We schedule the work', body: 'On approval, we book the job. You pay the financing partner on the agreed monthly schedule.' },
]

const financingFaqs = [
  { q: 'What financing partner do you use?', a: 'We\u2019re finalizing our financing partner. Call us for the current options before you apply \u2014 we will not refer you to a partner we haven\u2019t vetted.' },
  { q: 'Does applying affect my credit score?', a: 'Most partners offer a soft-pull pre-qualification that does not affect your credit. A hard inquiry is only run if you formally accept the offer.' },
  { q: 'What jobs qualify for financing?', a: 'Typically larger jobs \u2014 water heater replacements, drain line repairs, sump pump systems, and whole-home repipes. Minimums vary by partner.' },
  { q: 'Can I pay it off early?', a: 'Most plans allow early payoff without penalty. Confirm the specific terms with the financing partner before signing.' },
]

export default function Financing() {
  useDocumentMeta({
    title: `Plumbing Financing Options | ${business.name}`,
    description: `Spread the cost of larger plumbing jobs. Honest financing referrals through ${business.name}\u2019s vetted partners.`,
    canonical: `${business.url}/financing`,
  })

  return (
    <>
      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Financing' }]} />
        </Container>
      </div>

      <section className="bg-background py-section" aria-labelledby="fi-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow">Financing options</p>
              <h1 id="fi-heading" className="mt-3 text-display-lg text-text-primary">
                Big plumbing job? Spread the cost.
              </h1>
              <p className="mt-5 text-body-lg text-text-secondary">
                Water heaters, sewer line replacements, and whole-home repipes don&rsquo;t come
                cheap. We work with vetted financing partners so you don&rsquo;t have to put a
                necessary repair on a high-interest credit card.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/request-service" variant="primary" size="lg">Get a written quote</Button>
                <PhoneButton variant="ghost" size="lg" label="Ask about financing" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <Card padding="lg" className="bg-primary-50">
                <CreditCard className="h-8 w-8 text-primary" aria-hidden="true" />
                <p className="mt-4 text-h4 text-text-primary">The honest version</p>
                <ul className="mt-4 space-y-3 text-body-sm text-text-secondary">
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-teal" aria-hidden="true" /><span>We&rsquo;re finalizing our financing partner.</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-teal" aria-hidden="true" /><span>You apply directly with the lender, not with us.</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-teal" aria-hidden="true" /><span>We earn nothing from the application.</span></li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-teal" aria-hidden="true" /><span>Approval and rate are between you and the lender.</span></li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-surface" aria-labelledby="fi-how">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">How it works</p>
            <h2 id="fi-how" className="mt-3 text-h1 text-text-primary">
              Three steps. No surprises.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <Card key={s.n} padding="lg">
                <p className="text-display-sm font-bold text-primary-200">{s.n}</p>
                <h3 className="mt-3 text-h3 text-text-primary">{s.title}</h3>
                <p className="mt-3 text-body text-text-secondary">{s.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-background" aria-labelledby="fi-note">
        <Container>
          <Card padding="lg" className="mx-auto max-w-3xl border-l-4 border-accent-blue">
            <div className="flex gap-4">
              <Info className="h-6 w-6 flex-shrink-0 text-accent-blue" aria-hidden="true" />
              <div>
                <p className="text-h4 text-text-primary">A note on financing claims</p>
                <p className="mt-2 text-body text-text-secondary">
                  We won&rsquo;t advertise rates, terms, or approval odds we can&rsquo;t verify.
                  Call us and we&rsquo;ll tell you exactly what the current partner offers, in
                  plain English, before you apply. If financing doesn&rsquo;t make sense for the
                  job, we&rsquo;ll say so.
                </p>
                <p className="mt-3 text-body-sm text-text-muted">
                  <FileText className="mr-1 inline-block h-4 w-4 align-text-bottom" aria-hidden="true" />
                  Financing is offered through an independent third party. Approval and final terms are determined by the lender, not by {business.name}.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <FAQAccordion items={financingFaqs} eyebrow="Financing FAQ" heading="Common financing questions." />

      <FinalCTABand />
    </>
  )
}
