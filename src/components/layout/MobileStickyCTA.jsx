import { useLocation } from 'react-router-dom'
import { Phone, MessageSquare } from 'lucide-react'
import { business } from '@/config/business.js'

/**
 * MobileStickyCTA — pinned to the bottom of the viewport on mobile.
 *
 * Two equal-width actions: emergency call and request service.
 * Hides on the /request-service page once the form is on screen.
 */
export default function MobileStickyCTA() {
  const { pathname } = useLocation()
  // Don't render on the form page itself or thank-you confirmation
  if (pathname === '/request-service' || pathname === '/thank-you') return null

  const phone = business.emergencyPhone

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[40] border-t border-border bg-surface shadow-sticky-cta md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      role="region"
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-2">
        <a
          href={`tel:${phone.href}`}
          className="flex items-center justify-center gap-2 bg-emergency py-3 text-body font-semibold text-text-inverse hover:bg-emergency-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-inset"
          aria-label={`Call ${business.name} at ${phone.display}`}
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          <span>Call now</span>
        </a>
        <a
          href="/request-service"
          className="flex items-center justify-center gap-2 bg-primary py-3 text-body font-semibold text-text-inverse hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-inset"
        >
          <MessageSquare className="h-5 w-5" aria-hidden="true" />
          <span>Request service</span>
        </a>
      </div>
    </div>
  )
}
