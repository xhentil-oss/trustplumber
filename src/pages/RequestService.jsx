import { useEffect, useMemo } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Check, ShieldCheck, Clock, MessageSquare } from 'lucide-react'
import { services } from '@/config/services.js'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import { Input, Select, Textarea, RadioGroup } from '@/components/forms/FormPrimitives.jsx'

const postalRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/
const phoneRegex = /^[\d\s()+\-.]{10,20}$/

const schema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  phone: z.string().trim().regex(phoneRegex, 'Enter a valid phone number'),
  email: z.string().trim().email('Enter a valid email').optional().or(z.literal('')),
  postal: z.string().trim().regex(postalRegex, 'Enter a Canadian postal code (e.g. M5S 1Y2)'),
  address: z.string().trim().optional().or(z.literal('')),
  service: z.string().min(1, 'Choose a service'),
  urgency: z.enum(['emergency', 'today', 'this-week', 'planning'], {
    errorMap: () => ({ message: 'Choose how urgent this is' }),
  }),
  description: z.string().trim().min(10, 'A short description helps us help you faster').max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: 'Required to contact you' }) }),
})

const urgencyOptions = [
  { value: 'emergency', label: 'Emergency — right now', hint: 'Active leak, no water, sewage backup' },
  { value: 'today', label: 'Today, please', hint: 'Same-day if possible' },
  { value: 'this-week', label: 'This week', hint: 'Flexible on the day' },
  { value: 'planning', label: 'Just planning', hint: 'Researching a future job' },
]

/**
 * RequestService — /request-service
 * Main lead-capture form. Pre-fills from URL query (?name=&phone=&postal=&urgency=&service=).
 */
export default function RequestService() {
  const navigate = useNavigate()
  const [params] = useSearchParams()

  useDocumentMeta({
    title: `Request a Plumbing Service | ${business.name}`,
    description: `Tell us what\u2019s happening and we\u2019ll be in touch within minutes. Licensed plumbing across ${business.primaryRegion}.`,
    canonical: `${business.url}/request-service`,
  })

  const defaultValues = useMemo(
    () => ({
      name: params.get('name') || '',
      phone: params.get('phone') || '',
      email: '',
      postal: params.get('postal') || '',
      address: '',
      service: params.get('service') || '',
      urgency: ['emergency', 'today', 'this-week', 'planning'].includes(params.get('urgency'))
        ? params.get('urgency')
        : '',
      description: '',
      consent: false,
    }),
    [params],
  )

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
    mode: 'onBlur',
  })

  // Re-sync if user navigates here with new params
  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  const onSubmit = async (data) => {
    // No backend in Phase 4 — simulate submit and hand off to /thank-you.
    // Wire this to your endpoint or form service when ready.
    if (typeof window !== 'undefined' && window.console) {
      console.info('[Trust Plumber] Lead submitted (dev):', data)
    }
    await new Promise((r) => setTimeout(r, 350))
    navigate('/thank-you', {
      state: { name: data.name, urgency: data.urgency },
    })
  }

  return (
    <>
      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Request Service' }]} />
        </Container>
      </div>

      <section className="bg-background py-section" aria-labelledby="rs-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* ─── Form column ─────────────────────────────────────── */}
            <div className="lg:col-span-7">
              <p className="eyebrow">Request service</p>
              <h1 id="rs-heading" className="mt-3 text-display-lg text-text-primary">
                Tell us what&rsquo;s happening.
              </h1>
              <p className="mt-4 text-body-lg text-text-secondary">
                We&rsquo;ll get back to you within minutes during business hours, and dispatch
                immediately for emergencies. No bots, no call-centre script.
              </p>

              <Card padding="lg" className="mt-8 bg-surface">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input
                      label="Your name"
                      required
                      autoComplete="name"
                      placeholder="Jane Doe"
                      error={errors.name?.message}
                      {...register('name')}
                    />
                    <Input
                      label="Phone"
                      required
                      type="tel"
                      autoComplete="tel"
                      placeholder="(416) 555-0123"
                      error={errors.phone?.message}
                      {...register('phone')}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input
                      label="Email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      hint="Optional — for written quotes"
                      error={errors.email?.message}
                      {...register('email')}
                    />
                    <Input
                      label="Postal code"
                      required
                      autoComplete="postal-code"
                      placeholder="M5S 1Y2"
                      error={errors.postal?.message}
                      {...register('postal')}
                    />
                  </div>

                  <Input
                    label="Street address"
                    autoComplete="street-address"
                    placeholder="123 Main St"
                    hint="Optional — only if you want us to dispatch directly"
                    error={errors.address?.message}
                    {...register('address')}
                  />

                  <Select
                    label="What do you need?"
                    required
                    error={errors.service?.message}
                    defaultValue=""
                    {...register('service')}
                  >
                    <option value="" disabled>Select a service…</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.name}
                      </option>
                    ))}
                    <option value="other">Something else / not sure</option>
                  </Select>

                  <Controller
                    name="urgency"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        label="How urgent is it?"
                        name="urgency"
                        required
                        options={urgencyOptions}
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.urgency?.message}
                      />
                    )}
                  />

                  <Textarea
                    label="Describe the issue"
                    required
                    rows={5}
                    placeholder="What&rsquo;s going on? Any details about the fixture, symptoms, or how long it&rsquo;s been happening."
                    error={errors.description?.message}
                    {...register('description')}
                  />

                  <label className="flex items-start gap-3 text-body-sm text-text-secondary">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 accent-accent-blue"
                      {...register('consent')}
                    />
                    <span>
                      I agree to be contacted by {business.name} about my request. I understand
                      that submitting this form is not a contract for service.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-caption font-medium text-emergency" role="alert">
                      {errors.consent.message}
                    </p>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending…' : 'Send request'}
                    </Button>
                    <PhoneButton variant="emergency" emergency size="lg" label="Or call 24/7" />
                  </div>
                </form>
              </Card>
            </div>

            {/* ─── Reassurance column ──────────────────────────────── */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28">
              <Card padding="lg" className="bg-primary text-text-inverse">
                <p className="text-caption font-semibold uppercase tracking-wider text-primary-200">
                  What happens next
                </p>
                <ul className="mt-5 space-y-4">
                  {[
                    { Icon: MessageSquare, t: 'You hit send.', b: 'Form goes straight to our dispatcher — no funnel, no chatbot.' },
                    { Icon: Clock, t: 'We reply within minutes.', b: 'Most calls back within 10 minutes during business hours. Emergencies go to a plumber immediately.' },
                    { Icon: Check, t: 'We confirm scope and price.', b: 'You get a written quote before any work begins. No surprise add-ons.' },
                    { Icon: ShieldCheck, t: 'We do the work.', b: 'Licensed, insured, code-compliant. Workmanship written on the invoice.' },
                  ].map(({ Icon, t, b }, i) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-card bg-white/10">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-body font-semibold text-text-inverse">
                          {i + 1}. {t}
                        </p>
                        <p className="mt-0.5 text-body-sm text-primary-100">{b}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card padding="md" className="mt-5 bg-emergency text-text-inverse">
                <p className="text-caption font-semibold uppercase tracking-wider text-white/80">
                  Active emergency?
                </p>
                <p className="mt-2 text-h4 text-text-inverse">Skip the form — call us.</p>
                <p className="mt-1 text-body-sm text-white/90">
                  Burst pipe, sewer backup, or no water? A real dispatcher is faster than any form.
                </p>
                <div className="mt-4">
                  <PhoneButton
                    variant="primary"
                    size="md"
                    label="Call 24/7 dispatch"
                    className="bg-text-inverse !text-emergency hover:bg-primary-50"
                  />
                </div>
              </Card>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
