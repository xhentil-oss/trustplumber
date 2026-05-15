import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { business } from '@/config/business.js'
import useDocumentMeta from '@/hooks/useDocumentMeta.js'
import Container from '@/components/layout/Container.jsx'
import Breadcrumbs from '@/components/layout/Breadcrumbs.jsx'
import Card from '@/components/ui/Card.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import { Input, Textarea } from '@/components/forms/FormPrimitives.jsx'
import { formatPhone } from '@/lib/utils.js'

const schema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  email: z.string().trim().email('Enter a valid email'),
  phone: z.string().trim().optional().or(z.literal('')),
  message: z.string().trim().min(10, 'A bit more detail helps').max(2000),
})

export default function Contact() {
  const navigate = useNavigate()

  useDocumentMeta({
    title: `Contact ${business.name} | Toronto & the GTA`,
    description: `Get in touch with ${business.name}. 24/7 emergency dispatch, written quotes, licensed plumbers across ${business.primaryRegion}.`,
    canonical: `${business.url}/contact`,
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema), mode: 'onBlur' })

  const onSubmit = async (data) => {
    if (typeof window !== 'undefined') console.info('[Trust Plumber] Contact submit (dev):', data)
    await new Promise((r) => setTimeout(r, 300))
    navigate('/thank-you', { state: { name: data.name } })
  }

  const contactItems = [
    {
      Icon: Phone,
      label: 'Phone',
      value: formatPhone(business.phone.display),
      href: `tel:${business.phone.href}`,
      hint: business.hours.emergency,
    },
    {
      Icon: Mail,
      label: 'Email',
      value: business.email.primary,
      href: `mailto:${business.email.primary}`,
      hint: 'We reply within one business day',
    },
    {
      Icon: MapPin,
      label: 'Office',
      value: business.address.formatted,
      href: business.address.googleMapsUrl,
      hint: `${business.address.city}, ${business.address.provinceFull}`,
    },
    {
      Icon: Clock,
      label: 'Hours',
      value: business.hours.standardOffice,
      hint: business.hours.label,
    },
  ]

  return (
    <>
      <div className="bg-background pt-6">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
        </Container>
      </div>

      <section className="bg-background py-section" aria-labelledby="ct-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            {/* Form column */}
            <div className="lg:col-span-7">
              <p className="eyebrow">Contact</p>
              <h1 id="ct-heading" className="mt-3 text-display-lg text-text-primary">
                Talk to a real plumber.
              </h1>
              <p className="mt-4 text-body-lg text-text-secondary">
                Quick question, second opinion, or a quote? Send a note and we&rsquo;ll get back
                to you. For active emergencies, please call.
              </p>

              <Card padding="lg" className="mt-8 bg-surface">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Input label="Your name" required autoComplete="name"
                      error={errors.name?.message} {...register('name')} />
                    <Input label="Email" required type="email" autoComplete="email"
                      error={errors.email?.message} {...register('email')} />
                  </div>
                  <Input label="Phone" type="tel" autoComplete="tel" hint="Optional"
                    error={errors.phone?.message} {...register('phone')} />
                  <Textarea label="How can we help?" required rows={6}
                    error={errors.message?.message} {...register('message')} />

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending…' : 'Send message'}
                    </Button>
                    <PhoneButton variant="emergency" emergency size="lg" label="Or call us" />
                  </div>
                </form>
              </Card>
            </div>

            {/* Contact details column */}
            <aside className="lg:col-span-5 lg:sticky lg:top-28">
              <Card padding="lg" className="bg-primary text-text-inverse">
                <p className="text-caption font-semibold uppercase tracking-wider text-primary-200">
                  Reach us directly
                </p>
                <ul className="mt-5 space-y-5">
                  {contactItems.map(({ Icon, label, value, href, hint }) => (
                    <li key={label} className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-card bg-white/10">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-caption uppercase tracking-wider text-primary-200">{label}</p>
                        {href ? (
                          <a href={href} className="mt-0.5 inline-block text-body font-medium text-text-inverse hover:underline">
                            {value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-body font-medium text-text-inverse">{value}</p>
                        )}
                        {hint && <p className="mt-0.5 text-body-sm text-primary-100">{hint}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card padding="md" className="mt-5">
                <p className="text-caption font-semibold uppercase tracking-wider text-text-muted">
                  Service area
                </p>
                <p className="mt-2 text-body text-text-primary">
                  We serve {business.primaryRegionLong} &mdash; from downtown Toronto to the surrounding GTA.
                </p>
              </Card>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
