import Container from '@/components/layout/Container.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'

/**
 * FinalCTABand — the closing band on most pages.
 *
 * Variants:
 *  - default:   navy background, dual CTA
 *  - emergency: red band, phone-first CTA
 */
export default function FinalCTABand({
  eyebrow = 'Still deciding?',
  heading,
  body,
  variant = 'default',
  primaryCta = { to: '/request-service', label: 'Request Service' },
}) {
  const isEmergency = variant === 'emergency'
  const bg = isEmergency ? 'bg-emergency' : 'bg-primary'
  const eyebrowColor = isEmergency ? 'text-white/80' : 'text-accent-teal'
  const bodyColor = isEmergency ? 'text-white/90' : 'text-primary-100'

  return (
    <section className={`relative overflow-hidden ${bg} text-text-inverse`} aria-labelledby="final-cta-heading">
      {/* Decorative blobs for depth */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dot-grid opacity-10" />
      <Container>
        <div className="relative grid items-center gap-8 py-section md:grid-cols-12">
          <div className="md:col-span-7">
            <p className={`eyebrow ${eyebrowColor}`}>{eyebrow}</p>
            <h2 id="final-cta-heading" className="mt-3 text-h1 text-text-inverse">
              {heading || 'Talk to the dispatcher — 90 seconds to diagnose.'}
            </h2>
            <p className={`mt-4 max-w-xl text-body-lg ${bodyColor}`}>
              {body || 'Tell us what’s happening on the phone. We’ll quote it honestly, book the next available slot, and put it in writing before any work starts.'}
            </p>
          </div>
          <div className="md:col-span-5 md:justify-self-end">
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <PhoneButton
                variant={isEmergency ? 'primary' : 'emergency'}
                emergency={!isEmergency}
                size="lg"
                label={isEmergency ? 'Call now' : 'Call 24/7'}
                className={isEmergency ? 'bg-text-inverse !text-emergency hover:bg-primary-50' : ''}
              />
              <Button
                to={primaryCta.to}
                variant={isEmergency ? 'ghost' : 'accent'}
                size="lg"
                className={isEmergency ? 'border-white/40 !text-text-inverse hover:bg-white/10' : ''}
              >
                {primaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
