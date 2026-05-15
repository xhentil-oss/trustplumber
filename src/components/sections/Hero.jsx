import { ShieldCheck, Clock, BadgeCheck, FileSignature } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '@/components/layout/Container.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import { business } from '@/config/business.js'

/**
 * Hero — homepage hero. Two-column on lg+: copy left, callback card right.
 *
 * Above-the-fold content must remain readable without JS and the LCP
 * element is the H1 (no background image is loaded synchronously).
 */
export default function Hero() {
  return (
    <section className="hero-surface relative overflow-hidden bg-background pt-10 pb-12 lg:pt-16 lg:pb-20">
      {/* Soft decorative blobs — bumped opacity for visible depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-accent-blue/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[-10%] h-[420px] w-[420px] rounded-full bg-accent-teal/15 blur-3xl"
      />
      {/* Faint dotted grid for texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-dot-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* ─── Copy column ─── */}
          <div className="lg:col-span-7">
            <p className="eyebrow">{business.primaryRegionLong}</p>
            <h1 className="mt-3 text-display-lg text-text-primary">
              Plumbing problems, solved properly the first time.
            </h1>
            <p className="mt-5 max-w-xl text-body-lg text-text-secondary">
              Licensed, insured plumbing across Toronto and the GTA — with the same dispatcher answering nights, weekends, and statutory holidays.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button to="/request-service" variant="primary" size="lg">
                Request Service
              </Button>
              <PhoneButton variant="emergency" size="lg" emergency label="Call 24/7" />
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-body-sm text-text-secondary">
              <li className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-accent-teal" aria-hidden="true" />
                Ontario-licensed
              </li>
              <li className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent-teal" aria-hidden="true" />
                Insured
              </li>
              <li className="inline-flex items-center gap-1.5">
                <FileSignature className="h-4 w-4 text-accent-teal" aria-hidden="true" />
                Written workmanship
              </li>
              <li className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-accent-teal" aria-hidden="true" />
                Same-day across the GTA
              </li>
            </ul>
          </div>

          {/* ─── Callback card (desktop primary, optional on mobile) ─── */}
          <div className="lg:col-span-5">
            <CallbackCard />
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * Inline callback card — short, low-friction. Submits to /request-service
 * for now with pre-filled query params; will wire to the lead pipeline
 * in Phase 5.
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
          <h2 className="text-h3 text-text-primary">Tell us what&rsquo;s happening</h2>
          <p className="mt-1 text-body-sm text-text-muted">
            We&rsquo;ll call you back. Usually within 15 minutes during business hours.
          </p>
        </div>
        <span className="ml-3 inline-flex items-center rounded-full bg-accent-teal/10 px-2.5 py-1 text-caption font-semibold text-accent-teal ring-1 ring-inset ring-accent-teal/20">
          24/7
        </span>
      </div>

      <form className="mt-5 grid gap-3" onSubmit={handleSubmit}>
        <Field name="name" label="Full name" autoComplete="name" required />
        <div className="grid gap-3 sm:grid-cols-2">
          <Field name="phone" label="Phone" type="tel" autoComplete="tel" required />
          <Field name="postal" label="Postal code" autoComplete="postal-code" />
        </div>
        <div>
          <label htmlFor="urgency" className="text-body-sm font-medium text-text-secondary">When?</label>
          <select
            id="urgency"
            name="urgency"
            className="mt-1 w-full rounded-btn border border-border bg-surface px-3 py-2.5 text-body text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
          >
            <option value="now">Now — it&rsquo;s an emergency</option>
            <option value="today">Today, if possible</option>
            <option value="this-week">This week</option>
            <option value="planning">Just planning ahead</option>
          </select>
        </div>
        <Button type="submit" variant="primary" size="md" fullWidth>
          Request callback
        </Button>
        <p className="text-caption text-text-muted">
          By submitting, you agree to be contacted about your request. See our{' '}
          <Link to="/privacy-policy" className="underline">privacy policy</Link>.
        </p>
      </form>
    </div>
  )
}

function Field({ name, label, type = 'text', required, autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className="text-body-sm font-medium text-text-secondary">
        {label}{required && <span aria-hidden="true" className="ml-0.5 text-emergency">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1 w-full rounded-btn border border-border bg-surface px-3 py-2.5 text-body text-text-primary placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
      />
    </div>
  )
}
