import { Phone } from 'lucide-react'
import Button from './Button.jsx'
import { business } from '@/config/business.js'
import { cn } from '@/lib/utils'

/**
 * PhoneButton — the ONLY place phone numbers should be rendered as buttons.
 *
 * Centralising this means:
 *  - One place to wire call tracking later (CallRail, CallTrackingMetrics)
 *  - Consistent accessible labels
 *  - tel: href always built correctly
 *  - Easy A/B testing of CTA copy
 *
 * Variants:
 *  - emergency: red, large, for emergency contexts
 *  - primary:   navy, standard CTA
 *  - inline:    small text-link style
 */
export default function PhoneButton({
  variant = 'primary',
  size = 'md',
  label = 'Call',
  showIcon = true,
  emergency = false,
  className,
  ...rest
}) {
  // Use emergency number if flagged, else primary
  const phoneData = emergency ? business.emergencyPhone : business.phone

  const buttonVariant = emergency ? 'emergency' : variant
  const ariaLabel = `${label} ${business.name} at ${phoneData.display}`

  // Special inline variant — renders as a styled link, not a button
  if (variant === 'inline') {
    return (
      <a
        href={`tel:${phoneData.href}`}
        className={cn(
          'inline-flex items-center gap-1.5 font-semibold text-primary hover:text-accent-blue transition-colors',
          className,
        )}
        aria-label={ariaLabel}
        {...rest}
      >
        {showIcon && <Phone className="h-4 w-4" aria-hidden="true" />}
        <span>{phoneData.display}</span>
      </a>
    )
  }

  return (
    <Button
      href={`tel:${phoneData.href}`}
      variant={buttonVariant}
      size={size}
      leftIcon={showIcon ? <Phone className="h-5 w-5" aria-hidden="true" /> : null}
      aria-label={ariaLabel}
      className={className}
      {...rest}
    >
      {label} {phoneData.display}
    </Button>
  )
}
