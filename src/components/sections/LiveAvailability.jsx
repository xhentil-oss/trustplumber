import { Activity, Clock3, MapPin } from 'lucide-react'
import Container from '@/components/layout/Container.jsx'

/**
 * LiveAvailability — slim status band shown immediately after the Hero.
 *
 * Demo values for now \u2014 wire to a real dispatcher feed later.
 * The point is to give visitors a real-time \"why now\" signal:
 * how many same-day slots are open, where the last job was, and
 * the rolling average response time.
 */
export default function LiveAvailability({
  slotsRemaining = 3,
  lastJobCity = 'Etobicoke',
  lastJobMinutesAgo = 14,
  avgResponseMinutes = 47,
}) {
  return (
    <section aria-label="Live availability" className="border-y border-border bg-primary text-text-inverse">
      <Container>
        <div className="grid gap-4 py-4 md:grid-cols-3 md:items-center md:py-3">
          <Stat
            icon={Activity}
            iconClass="text-success"
            label="Same-day slots"
            value={`${slotsRemaining} remaining today`}
            pulse
          />
          <Stat
            icon={MapPin}
            iconClass="text-accent-teal"
            label="Last booked"
            value={`${lastJobCity} \u00b7 ${lastJobMinutesAgo} min ago`}
          />
          <Stat
            icon={Clock3}
            iconClass="text-warning"
            label="Avg response"
            value={`${avgResponseMinutes} min across the GTA`}
          />
        </div>
      </Container>
    </section>
  )
}

function Stat({ icon: Icon, iconClass, label, value, pulse }) {
  return (
    <div className="flex items-center gap-3">
      <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-inset ring-white/15">
        <Icon className={`h-4 w-4 ${iconClass}`} aria-hidden="true" />
        {pulse && (
          <span aria-hidden="true" className="absolute -right-0.5 -top-0.5 inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
          </span>
        )}
      </span>
      <div className="min-w-0">
        <p className="text-caption uppercase tracking-wider text-white/60">{label}</p>
        <p className="truncate text-body-sm font-semibold text-text-inverse">{value}</p>
      </div>
    </div>
  )
}
