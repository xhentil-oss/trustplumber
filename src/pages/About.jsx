import * as Icons from 'lucide-react'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import PageHero from '@/components/sections/PageHero.jsx'
import TrustStrip from '@/components/sections/TrustStrip.jsx'
import WhyChooseUs from '@/components/sections/WhyChooseUs.jsx'
import SocialProof from '@/components/sections/SocialProof.jsx'
import FinalCTABand from '@/components/sections/FinalCTABand.jsx'

const values = [
  {
    icon: 'ShieldCheck',
    title: 'Honest first, fast second.',
    body: 'We diagnose before we quote, and we put the quote in writing. If the cheaper fix is good enough, we recommend the cheaper fix.',
  },
  {
    icon: 'Award',
    title: 'Licensed trade, not a sales floor.',
    body: 'Every job is done by a licensed plumber. No commission-based upsells, no fear-tactic pricing, no scripted call-centre.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Your home is not a project.',
    body: 'We clean as we go, respect your time window, and explain the work so you understand what you paid for.',
  },
  {
    icon: 'Repeat',
    title: 'We stand behind the work.',
    body: 'Workmanship is written on every invoice. If something we did fails, we come back and make it right.',
  },
]

export default function About() {
  useDocumentMeta({
    title: `About ${business.name} | Licensed Plumbers in the GTA`,
    description: `${business.name} is a licensed plumbing company serving ${business.primaryRegionLong}. Honest scope, honest price, honest work.`,
    canonical: `${business.url}/about`,
  })

  return (
    <>
      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
        </Container>
      </div>

      <PageHero
        eyebrow="About us"
        title={`The plumber GTA homeowners actually recommend.`}
        subtitle={`${business.name} is a licensed plumbing company built on the idea that a good trade doesn\u2019t need a hard sell. We diagnose, we quote in writing, and we fix it properly the first time.`}
        icon="Wrench"
      />

      <TrustStrip />

      <section className="section bg-surface" aria-labelledby="story-heading">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow text-center">Our story</p>
            <h2 id="story-heading" className="mt-3 text-center text-h1 text-text-primary">
              Built for homeowners who&rsquo;ve been burned before.
            </h2>
            <div className="prose-column mx-auto mt-8 space-y-5 text-body-lg text-text-secondary">
              <p>
                We started {business.name} because we kept being called in to fix what
                the last plumber did wrong &mdash; or to honour quotes that doubled once the work
                had started. Homeowners told us the same thing: &ldquo;I just want someone who
                tells me the truth and shows up when they said they would.&rdquo;
              </p>
              <p>
                That&rsquo;s the company. Licensed, insured, on-time, and on a written quote.
                No call-centre, no commission pressure, no surprise add-ons. Just the work,
                done properly, with the paperwork to back it up.
              </p>
              <p>
                Today we serve homes and businesses across {business.primaryRegionLong} &mdash;
                from late-night burst pipes in Toronto to planned bathroom renovations in
                Oakville. Same trades. Same standards. Same fair pricing.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-background" aria-labelledby="values-heading">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">What we believe</p>
            <h2 id="values-heading" className="mt-3 text-h1 text-text-primary">
              Four principles, on every job.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {values.map((v) => {
              const Icon = Icons[v.icon] || Icons.Check
              return (
                <Card key={v.title} padding="lg">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-card bg-primary-50 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-h3 text-text-primary">{v.title}</h3>
                  <p className="mt-2 text-body text-text-secondary">{v.body}</p>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      <WhyChooseUs />

      <SocialProof />

      <section className="section bg-background" aria-labelledby="licensing-heading">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow text-center">Licensing &amp; insurance</p>
            <h2 id="licensing-heading" className="mt-3 text-center text-h1 text-text-primary">
              Real credentials, real paperwork.
            </h2>
            <Card padding="lg" className="mt-8">
              <ul className="space-y-4 text-body text-text-secondary">
                <li className="flex items-start gap-3">
                  <Icons.ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-teal" aria-hidden="true" />
                  <span>
                    <strong className="text-text-primary">Licensed in {business.province}.</strong>{' '}
                    Every plumber on the truck holds a valid trade licence. We&rsquo;ll show
                    you the certificate on request.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-teal" aria-hidden="true" />
                  <span>
                    <strong className="text-text-primary">Fully insured.</strong>{' '}
                    General liability and workers&rsquo; compensation in place. Certificate
                    of insurance available on request for commercial clients.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Icons.MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-teal" aria-hidden="true" />
                  <span>
                    <strong className="text-text-primary">Local to the GTA.</strong>{' '}
                    Our office is at {business.address.formatted}. We&rsquo;re a real
                    company at a real address &mdash; not a lead-broker forwarding your call.
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <FinalCTABand />
    </>
  )
}
