import { ShieldCheck, BadgeCheck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/layout/Container.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import { business } from '@/config/business.js'

/**
 * Hero — homepage hero. Localized H1, two-column layout, slim
 * capture card on the right (phone + postal only).
 *
 * The inline trust signal list was removed: TrustStrip directly below
 * handles that signal and duplicating it inside the LCP element only
 * adds visual noise.
 */
export default function Hero() {
  return (
    <section className="hero-surface relative overflow-hidden bg-background pt-10 pb-12 lg:pt-16 lg:pb-20">
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-accent-blue/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[-10%] h-[420px] w-[420px] rounded-full bg-accent-teal/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-dot-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* ─── Copy column ─── */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-caption font-semibold text-primary shadow-card backdrop-blur">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Dispatcher answering now &mdash; {business.primaryRegion}
            </span>

            <h1 className="mt-5 text-display-lg text-text-primary">
              Toronto&rsquo;s plumber when the leak{' '}
              <span className="bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">doesn&rsquo;t wait.</span>
            </h1>
            <p className="mt-5 max-w-xl text-body-lg text-text-secondary">
              Licensed, insured plumbing across Toronto &amp; the GTA &mdash; with the same dispatcher answering nights, weekends, and statutory holidays. Same-day quotes in writing.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PhoneButton variant="emergency" size="lg" emergency label="Call 24/7" />
              <Button to="/request-service" variant="ghost" size="lg">
                Request Service
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-body-sm text-text-secondary">
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-accent-teal" aria-hidden="true" />
                Ontario-licensed
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent-teal" aria-hidden="true" />
                Insured &amp; bonded
              </span>
              <Link
                to="/reviews"
                className="inline-flex items-center gap-1 font-medium text-accent-blue hover:text-accent-blue-hover"
              >
                See reviews <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* ─── Callback card ─── */}
          <div className="lg:col-span-5">
            <CallbackCard />
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * Slimmed callback card — only two fields (phone + postal).
 * The full intake form lives at /request-service.
 */
function CallbackCard() {
  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const params = new URLSearchParams()
    for (const [k, v] of data.entries()) {
      if (v) params.set(k, v)
    }
    window.location.assign(`/request-service?${params.toString()}`)
  }

  return (
    <div className="relative overflow-hidden rounded-card border border-border bg-surface p-6 shadow-elevated sm:p-7">
      {/* Top accent bar */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-blue via-primary to-accent-teal" />
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-h3 text-text-primary">Get a callback in 15 min</h2>
          <p className="mt-1 text-body-sm text-text-muted">
            Two fields. Real dispatcher. No bots, no voicemail tree.
          </p>
        </div>
        <span className="ml-3 inline-flex shrink-0 items-center rounded-full bg-accent-teal/10 px-2.5 py-1 text-caption font-semibold text-accent-teal ring-1 ring-inset ring-accent-teal/20">
          24/7
        </span>
      </div>

      <form className="mt-5 grid gap-3" onSubmit={handleSubmit}>
        <Field name="phone" label="Phone number" type="tel" autoComplete="tel" required placeholder="(416) 555-0199" />
        <Field name="postal" label="Postal code" autoComplete="postal-code" placeholder="M5S 1Y2" />
        <Button type="submit" variant="primary" size="md" fullWidth>
          Request callback
        </Button>
        <p className="text-caption text-text-muted">
          By submitting, you agree to be contacted about your request. See our{' '}
          <Link to="/privacy-policy" className="underline underline-offset-2">privacy policy</Link>.
        </p>
      </form>
    </div>
  )
}

function Field({ name, label, type = 'text', required, autoComplete, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="text-body-sm font-semibold text-text-secondary">
        {label}{required && <span aria-hidden="true" className="ml-0.5 text-emergency">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-1 w-full rounded-btn border border-border bg-surface px-3 py-2.5 text-body text-text-primary placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
      />
    </div>
  )
}
