import { Link } from 'react-router-dom'
import { Mail, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'
import Container from './Container.jsx'
import PhoneButton from '@/components/ui/PhoneButton.jsx'
import { business } from '@/config/business.js'
import { services, getFeaturedServices } from '@/config/services.js'
import { getPrimaryLocations } from '@/config/locations.js'

/**
 * Footer — matrix-style footer with the four nav columns, address,
 * licensing block, and legal row. Renders consistently on every route.
 */
export default function Footer() {
  const year = new Date().getFullYear()
  const topServices = getFeaturedServices().slice(0, 8)
  const topLocations = getPrimaryLocations().slice(0, 8)
  const licence = business.licensing.licenseNumber
  const insurance = business.licensing.insurance.coverageDisplay

  return (
    <footer className="mt-section bg-primary text-text-inverse">
      <Container>
        <div className="grid gap-10 py-section lg:grid-cols-12">
          {/* ─── Brand + contact ─── */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2 text-h3 font-display font-bold text-text-inverse">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-btn bg-text-inverse text-primary">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2.5c3 3.5 5 6.5 5 9.5a5 5 0 1 1-10 0c0-3 2-6 5-9.5Z" />
                </svg>
              </span>
              <span>{business.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-body-sm text-primary-100">
              {business.tagline} Licensed plumbing across {business.primaryRegionLong}.
            </p>

            <ul className="mt-6 space-y-3 text-body-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-200" aria-hidden="true" />
                <a
                  href={business.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-100 hover:text-text-inverse"
                >
                  {business.address.formatted}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-200" aria-hidden="true" />
                <a href={`mailto:${business.email.primary}`} className="text-primary-100 hover:text-text-inverse">
                  {business.email.primary}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-200" aria-hidden="true" />
                <span className="text-primary-100">{business.hours.emergency}</span>
              </li>
            </ul>

            <div className="mt-6">
              <PhoneButton variant="primary" size="md" className="bg-text-inverse !text-primary hover:bg-primary-50" />
            </div>

            <SocialLinks social={business.social} />
          </div>

          {/* ─── Services column ─── */}
          <FooterColumn label="Services" className="lg:col-span-3">
            {topServices.map((s) => (
              <FooterLink key={s.slug} to={`/services/${s.slug}`}>{s.name}</FooterLink>
            ))}
            <FooterLink to="/services" muted>All services →</FooterLink>
          </FooterColumn>

          {/* ─── Locations column ─── */}
          <FooterColumn label="Service areas" className="lg:col-span-3">
            {topLocations.map((l) => (
              <FooterLink key={l.slug} to={`/locations/${l.slug}`}>{l.name}</FooterLink>
            ))}
            <FooterLink to="/locations" muted>All locations →</FooterLink>
          </FooterColumn>

          {/* ─── Company column ─── */}
          <FooterColumn label="Company" className="lg:col-span-2">
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/reviews">Reviews</FooterLink>
            <FooterLink to="/offers">Offers</FooterLink>
            <FooterLink to="/financing">Financing</FooterLink>
            <FooterLink to="/commercial">Commercial</FooterLink>
            <FooterLink to="/emergency-plumbing">Emergency</FooterLink>
            <FooterLink to="/blogs">Blog</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterColumn>
        </div>

        {/* ─── Licensing strip ─── */}
        <div className="border-t border-primary-500/40 py-6 text-body-sm text-primary-100">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {licence ? (
              <span>Ontario plumbing licence: <span className="font-semibold text-text-inverse">{licence}</span></span>
            ) : (
              <span className="text-primary-200">Licensing details available on request</span>
            )}
            <span>{insurance}</span>
            <span>{services.length} services</span>
            <span>Serving {topLocations.length}+ cities across the GTA</span>
          </div>
        </div>

        {/* ─── Legal row ─── */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-primary-500/40 py-6 text-body-sm text-primary-200 md:flex-row md:items-center">
          <p>© {year} {business.legalName}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-text-inverse">Privacy</Link>
            <Link to="/terms" className="hover:text-text-inverse">Terms</Link>
            <Link to="/accessibility" className="hover:text-text-inverse">Accessibility</Link>
          </nav>
        </div>
      </Container>
    </footer>
  )
}

/* ─── Internal pieces ───────────────────────────────────────────── */

function FooterColumn({ label, children, className }) {
  return (
    <div className={className}>
      <h2 className="text-caption font-semibold uppercase tracking-wider text-primary-200">{label}</h2>
      <ul className="mt-4 space-y-2">{children}</ul>
    </div>
  )
}

function FooterLink({ to, children, muted = false }) {
  return (
    <li>
      <Link
        to={to}
        className={`block rounded-btn py-1 text-body-sm transition-colors hover:text-text-inverse ${muted ? 'mt-2 text-primary-200' : 'text-primary-100'}`}
      >
        {children}
      </Link>
    </li>
  )
}

function SocialLinks({ social }) {
  const items = [
    { key: 'facebook', href: social.facebook, Icon: Facebook, label: 'Facebook' },
    { key: 'instagram', href: social.instagram, Icon: Instagram, label: 'Instagram' },
    { key: 'youtube', href: social.youtube, Icon: Youtube, label: 'YouTube' },
    { key: 'linkedin', href: social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
  ].filter((i) => i.href)
  if (items.length === 0) return null
  return (
    <ul className="mt-6 flex items-center gap-3">
      {items.map(({ key, href, Icon, label }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-btn border border-primary-500/40 text-primary-100 transition-colors hover:bg-primary-700 hover:text-text-inverse"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}
