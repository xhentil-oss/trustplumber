import { useRef } from 'react'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import Container from '@/components/layout/Container.jsx'

/**
 * RecentWork \u2014 horizontal photo slider of recent jobs.
 *
 * Native CSS scroll-snap on the rail keeps it accessible and free of
 * heavy JS. Arrow buttons scroll programmatically; on mobile users
 * can swipe. Each card carries a service tag + neighbourhood pill so
 * the slider doubles as a coverage/expertise signal.
 *
 * Replace the picsum seed URLs with real job photos before launch.
 */
const DEMO_JOBS = [
  {
    id: 'j1',
    service: 'Tank water heater',
    location: 'Etobicoke, ON',
    summary: '40-gal natural gas swap-out, same-day install with code-compliant venting.',
    img: 'https://picsum.photos/seed/tp-water-heater/800/600',
    accent: 'bg-emergency/90',
  },
  {
    id: 'j2',
    service: 'Drain auger',
    location: 'High Park, Toronto',
    summary: 'Mainline rooter + camera inspection on a 1920s clay sewer lateral.',
    img: 'https://picsum.photos/seed/tp-drain/800/600',
    accent: 'bg-accent-blue/90',
  },
  {
    id: 'j3',
    service: 'Burst pipe repair',
    location: 'North York',
    summary: 'Frozen copper riser, mid-winter overnight call. Heat-traced and re-insulated.',
    img: 'https://picsum.photos/seed/tp-pipes/800/600',
    accent: 'bg-warning/90 text-text-primary',
  },
  {
    id: 'j4',
    service: 'Fixture replacement',
    location: 'Mississauga',
    summary: 'Powder-room vanity faucet + angle stops upgraded to quarter-turn.',
    img: 'https://picsum.photos/seed/tp-fixture/800/600',
    accent: 'bg-accent-teal/90',
  },
  {
    id: 'j5',
    service: 'Sump pump',
    location: 'Scarborough',
    summary: 'Primary pump + battery backup ahead of spring melt. 5-year warranty.',
    img: 'https://picsum.photos/seed/tp-sump/800/600',
    accent: 'bg-primary/90',
  },
  {
    id: 'j6',
    service: 'Kitchen rough-in',
    location: 'Vaughan',
    summary: 'Island sink relocation with vented loop \u2014 inspected and signed off.',
    img: 'https://picsum.photos/seed/tp-kitchen/800/600',
    accent: 'bg-accent-blue/90',
  },
]

export default function RecentWork({ jobs = DEMO_JOBS }) {
  const railRef = useRef(null)

  function scrollByCards(direction) {
    const rail = railRef.current
    if (!rail) return
    const card = rail.querySelector('[data-card]')
    const step = card ? card.getBoundingClientRect().width + 16 : 320
    rail.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <section className="section bg-surface-alt" aria-labelledby="recent-work-heading">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">From the truck</p>
            <h2 id="recent-work-heading" className="mt-3 text-h1 text-text-primary">
              Recent jobs across the GTA
            </h2>
            <p className="mt-3 text-body-lg text-text-secondary">
              A peek at this month&rsquo;s service calls &mdash; what we touched, where, and what we left behind in writing.
            </p>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <ArrowBtn label="Previous jobs" onClick={() => scrollByCards(-1)}>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </ArrowBtn>
            <ArrowBtn label="Next jobs" onClick={() => scrollByCards(1)}>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </ArrowBtn>
          </div>
        </div>

        <div className="relative mt-8">
          {/* Edge fades */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-surface-alt to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-surface-alt to-transparent" />

          <ul
            ref={railRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:thin]"
          >
            {jobs.map((job) => (
              <li
                key={job.id}
                data-card
                className="snap-start shrink-0 basis-[80%] sm:basis-[55%] lg:basis-[32%]"
              >
                <article className="group h-full overflow-hidden rounded-card border border-border bg-surface shadow-card transition hover:-translate-y-0.5 hover:shadow-elevated">
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt">
                    <img
                      src={job.img}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <span className={`absolute left-3 top-3 inline-flex items-center rounded-full px-2.5 py-1 text-caption font-semibold text-text-inverse shadow-card ${job.accent}`}>
                      {job.service}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="inline-flex items-center gap-1.5 text-caption font-semibold uppercase tracking-wide text-text-muted">
                      <MapPin className="h-3.5 w-3.5 text-accent-teal" aria-hidden="true" />
                      {job.location}
                    </div>
                    <p className="mt-2 text-body text-text-secondary">
                      {job.summary}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {/* Mobile arrows under rail */}
          <div className="mt-2 flex items-center justify-center gap-2 md:hidden">
            <ArrowBtn label="Previous jobs" onClick={() => scrollByCards(-1)}>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </ArrowBtn>
            <ArrowBtn label="Next jobs" onClick={() => scrollByCards(1)}>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </ArrowBtn>
          </div>
        </div>

        <p className="mt-4 text-caption text-text-muted">
          Demo photos &mdash; replace with real job site imagery (with homeowner consent) before launch.
        </p>
      </Container>
    </section>
  )
}

function ArrowBtn({ children, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-primary shadow-card transition hover:-translate-y-0.5 hover:border-accent-blue hover:text-accent-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
    >
      {children}
    </button>
  )
}
