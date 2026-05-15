import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import Container from './Container.jsx'
import Button from '@/components/ui/Button.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import { business } from '@/config/business.js'
import { services, getFeaturedServices } from '@/config/services.js'
import { getPrimaryLocations } from '@/config/locations.js'
import { cn } from '@/lib/utils'

/**
 * Header — sticky, accessible site navigation.
 *
 * Mobile: hamburger drawer.
 * Desktop: inline nav with two hover/focus mega-menus (Services, Locations)
 * plus a pinned phone CTA on the right.
 *
 * The header is the single source of nav truth; do not duplicate menus
 * elsewhere in the site.
 */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(null) // 'services' | 'locations' | null
  const { pathname } = useLocation()

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [pathname])

  // Close mega-menu on Escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const primaryServices = getFeaturedServices()
  const primaryLocations = getPrimaryLocations()

  return (
    <header
      className="sticky top-0 z-[50] border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          {/* ─── Logo ─── */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-h3 font-display font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-btn"
            aria-label={`${business.name} \u2014 home`}
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-btn bg-primary text-text-inverse">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5c3 3.5 5 6.5 5 9.5a5 5 0 1 1-10 0c0-3 2-6 5-9.5Z" />
              </svg>
            </span>
            <span>{business.name}</span>
          </Link>

          {/* ─── Desktop nav ─── */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <MegaMenuTrigger
              label="Services"
              isOpen={openMenu === 'services'}
              onOpen={() => setOpenMenu('services')}
            />
            <MegaMenuTrigger
              label="Locations"
              isOpen={openMenu === 'locations'}
              onOpen={() => setOpenMenu('locations')}
            />
            <TopLink to="/commercial">Commercial</TopLink>
            <TopLink to="/emergency-plumbing" emergency>Emergency</TopLink>
            <TopLink to="/blogs">Blog</TopLink>
            <TopLink to="/about">About</TopLink>
            <TopLink to="/contact">Contact</TopLink>
          </nav>

          {/* ─── Right rail ─── */}
          <div className="flex items-center gap-2">
            <PhoneButton
              variant="inline"
              className="hidden md:inline-flex"
              label=""
            />
            <Button
              to="/request-service"
              variant="primary"
              size="sm"
              className="hidden md:inline-flex"
            >
              Request Service
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-btn text-primary hover:bg-primary-50 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* ─── Mega-menus (desktop) ─── */}
      {openMenu === 'services' && (
        <MegaMenu onClose={() => setOpenMenu(null)}>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="rounded-btn px-3 py-2 text-body-sm text-text-secondary hover:bg-primary-50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                {s.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <p className="text-body-sm text-text-muted">
              {services.length} services across the GTA.
            </p>
            <Link to="/services" className="text-body-sm font-semibold text-accent-blue hover:text-accent-blue-hover">
              See all services →
            </Link>
          </div>
        </MegaMenu>
      )}

      {openMenu === 'locations' && (
        <MegaMenu onClose={() => setOpenMenu(null)}>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-4">
            {primaryLocations.map((l) => (
              <Link
                key={l.slug}
                to={`/locations/${l.slug}`}
                className="rounded-btn px-3 py-2 text-body-sm text-text-secondary hover:bg-primary-50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
              >
                {l.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <p className="text-body-sm text-text-muted">
              Serving Toronto and the wider GTA.
            </p>
            <Link to="/locations" className="text-body-sm font-semibold text-accent-blue hover:text-accent-blue-hover">
              See all locations →
            </Link>
          </div>
        </MegaMenu>
      )}

      {/* ─── Mobile drawer ─── */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="border-t border-border bg-surface">
            <Container>
              <nav className="flex flex-col py-4" aria-label="Mobile">
                <MobileGroup label="Services" items={primaryServices.map((s) => ({ to: `/services/${s.slug}`, label: s.name }))} seeAll={{ to: '/services', label: 'See all services' }} />
                <MobileGroup label="Locations" items={primaryLocations.slice(0, 8).map((l) => ({ to: `/locations/${l.slug}`, label: l.name }))} seeAll={{ to: '/locations', label: 'See all locations' }} />
                <MobileLink to="/commercial">Commercial</MobileLink>
                <MobileLink to="/emergency-plumbing" emergency>Emergency Plumbing</MobileLink>
                <MobileLink to="/blogs">Blog</MobileLink>
                <MobileLink to="/about">About</MobileLink>
                <MobileLink to="/contact">Contact</MobileLink>
                <MobileLink to="/reviews">Reviews</MobileLink>
                <MobileLink to="/financing">Financing</MobileLink>

                <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4 pb-2">
                  <Button to="/request-service" variant="primary" size="md" fullWidth>
                    Request Service
                  </Button>
                  <PhoneButton variant="primary" size="md" fullWidth label="Call" />
                </div>
              </nav>
            </Container>
          </div>
        </div>
      )}
    </header>
  )
}

/* ─── Internal sub-components ───────────────────────────────────── */

function TopLink({ to, children, emergency = false }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'inline-flex items-center rounded-btn px-3 py-2 text-body-sm font-medium transition-colors',
          'hover:bg-primary-50 hover:text-primary',
          isActive ? 'text-primary' : 'text-text-secondary',
          emergency && 'text-emergency hover:bg-emergency/10 hover:text-emergency',
        )
      }
    >
      {children}
    </NavLink>
  )
}

function MegaMenuTrigger({ label, isOpen, onOpen }) {
  return (
    <button
      type="button"
      onMouseEnter={onOpen}
      onFocus={onOpen}
      onClick={onOpen}
      aria-expanded={isOpen}
      aria-haspopup="true"
      className={cn(
        'inline-flex items-center gap-1 rounded-btn px-3 py-2 text-body-sm font-medium text-text-secondary transition-colors',
        'hover:bg-primary-50 hover:text-primary',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue',
        isOpen && 'bg-primary-50 text-primary',
      )}
    >
      {label}
      <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} aria-hidden="true" />
    </button>
  )
}

function MegaMenu({ children, onClose }) {
  return (
    <div className="absolute left-0 right-0 top-full hidden border-t border-border bg-surface shadow-elevated lg:block">
      <Container>
        <div className="py-6">{children}</div>
      </Container>
      {/* invisible escape hatch — click anywhere outside */}
      <button
        type="button"
        aria-label="Close menu"
        className="sr-only"
        onClick={onClose}
      />
    </div>
  )
}

function MobileLink({ to, children, emergency = false }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'block rounded-btn px-3 py-3 text-body font-medium transition-colors',
          'hover:bg-primary-50',
          isActive ? 'text-primary' : 'text-text-secondary',
          emergency && 'text-emergency',
        )
      }
    >
      {children}
    </NavLink>
  )
}

function MobileGroup({ label, items, seeAll }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-btn px-3 py-3 text-body font-medium text-text-secondary hover:bg-primary-50"
      >
        <span>{label}</span>
        <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>
      {open && (
        <div className="pb-2 pl-3">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="block rounded-btn px-3 py-2 text-body-sm text-text-secondary hover:bg-primary-50 hover:text-primary"
            >
              {it.label}
            </Link>
          ))}
          {seeAll && (
            <Link
              to={seeAll.to}
              className="block rounded-btn px-3 py-2 text-body-sm font-semibold text-accent-blue hover:text-accent-blue-hover"
            >
              {seeAll.label} →
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
