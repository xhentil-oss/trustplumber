import * as Icons from 'lucide-react'
import Container from '@/components/layout/Container.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import Badge from '@/components/ui/Badge.jsx'

/**
 * PageHero — flexible hero used by Service, Location, and Service-in-City pages.
 *
 * Props:
 *  - eyebrow:  small label above H1 (e.g. "Drain Cleaning" or "Service in Mississauga")
 *  - title:    H1 string
 *  - subtitle: supporting paragraph
 *  - icon:     lucide-react icon name (rendered in a tile)
 *  - emergency: when true, renders the red emergency variant
 *  - features: optional string[] shown as a bullet list under the subtitle
 *  - aside:    optional ReactNode rendered in the right column (e.g. quick-info card)
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  icon = 'Wrench',
  emergency = false,
  features = [],
  aside,
}) {
  const Icon = Icons[icon] || Icons.Wrench
  const bg = emergency ? 'bg-emergency text-text-inverse' : 'bg-background'
  const eyebrowColor = emergency ? 'text-white/85' : 'text-accent-blue'
  const titleColor = emergency ? 'text-text-inverse' : 'text-text-primary'
  const subColor = emergency ? 'text-white/90' : 'text-text-secondary'
  const tileBg = emergency ? 'bg-white/10 text-text-inverse' : 'bg-primary-50 text-primary'

  return (
    <section className={`relative overflow-hidden ${bg} pt-14 pb-section md:pt-20`} aria-labelledby="hero-heading">
      {/* Decorative blobs */}
      {!emergency ? (
        <>
          <div aria-hidden="true" className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-accent-blue/12 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-[-10%] h-[360px] w-[360px] rounded-full bg-accent-teal/12 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-dot-grid opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        </>
      ) : (
        <>
          <div aria-hidden="true" className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-[-10%] h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl" />
        </>
      )}
      <Container>
        <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-card ${tileBg}`}>
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            {eyebrow && (
              <p className={`mt-5 text-caption font-semibold uppercase tracking-wider ${eyebrowColor}`}>
                {eyebrow}
              </p>
            )}
            <h1 id="hero-heading" className={`mt-3 text-display-lg ${titleColor}`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`mt-5 max-w-2xl text-body-lg ${subColor}`}>{subtitle}</p>
            )}
            {features.length > 0 && (
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-body ${subColor}`}>
                    <Icons.Check className={`mt-0.5 h-5 w-5 flex-shrink-0 ${emergency ? 'text-text-inverse' : 'text-accent-teal'}`} aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneButton
                variant={emergency ? 'primary' : 'emergency'}
                emergency={!emergency}
                size="lg"
                label={emergency ? 'Call now' : 'Call 24/7'}
                className={emergency ? 'bg-text-inverse !text-emergency hover:bg-primary-50' : ''}
              />
              <Button
                to="/request-service"
                variant={emergency ? 'ghost' : 'primary'}
                size="lg"
                className={emergency ? 'border-white/40 !text-text-inverse hover:bg-white/10' : ''}
              >
                Request Service
              </Button>
            </div>
            {emergency && (
              <p className="mt-4 inline-flex items-center gap-2 text-body-sm text-white/90">
                <Badge variant="neutral" size="sm" className="bg-white/15 text-text-inverse">24/7</Badge>
                Real dispatcher answers — no voicemail tree.
              </p>
            )}
          </div>

          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
      </Container>
    </section>
  )
}
