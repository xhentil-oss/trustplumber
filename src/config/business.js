/**
 * ═══════════════════════════════════════════════════════════════════
 * BUSINESS CONFIGURATION — SINGLE SOURCE OF TRUTH
 * ═══════════════════════════════════════════════════════════════════
 *
 * This file is the ONLY place where business data lives.
 * Change a phone number? Update it here, it changes everywhere on the site.
 *
 * Fields marked with `// TODO:` need verified data before production launch.
 * DO NOT publish the site with TODO placeholders visible to users.
 *
 * Rule: never invent numbers, awards, or certifications.
 * If you don't have a real value, leave it as `null` and the UI will hide it.
 */

export const business = {
  // ─── IDENTITY ────────────────────────────────────────────────────
  name: 'Trust Plumber',
  legalName: 'Trust Plumber',
  tagline: 'Plumbing problems, solved properly the first time.',
  shortTagline: 'Licensed plumbing across the GTA',

  // ─── CONTACT ─────────────────────────────────────────────────────
  // TODO: Replace with verified Canadian phone number (+1) before launch.
  // Current value is a placeholder — Canadian customers will not call
  // an international number, and Google will not verify this as a local business.
  phone: {
    display: '+355 68 202 0488',           // What users see
    href: '+355682020488',                  // What tel: link uses
    isPlaceholder: true,                    // Flag for dev warnings
  },

  // Same number for emergencies for now — split when you get a 24/7 line
  emergencyPhone: {
    display: '+355 68 202 0488',
    href: '+355682020488',
    isPlaceholder: true,
  },

  email: {
    primary: 'info@bos.al',                 // TODO: replace with info@trustplumber.ca when domain email is set up
    leads: 'info@bos.al',
  },

  // ─── LOCATION ────────────────────────────────────────────────────
  address: {
    street: '509 Bloor St W',
    city: 'Toronto',
    province: 'ON',
    provinceFull: 'Ontario',
    postalCode: 'M5S 1Y2',
    country: 'CA',
    countryFull: 'Canada',
    // For schema.org and map embeds
    latitude: 43.6655,
    longitude: -79.4109,
    // Public-facing formatted version
    formatted: '509 Bloor St W, Toronto, ON M5S 1Y2',
    googleMapsUrl: 'https://maps.app.goo.gl/qpVRuDYTk1jcQq829',
  },

  // ─── HOURS ───────────────────────────────────────────────────────
  hours: {
    label: '24/7 Emergency Service',
    isAlwaysOpen: true,
    // For schema.org openingHours
    schema: 'Mo-Su 00:00-23:59',
    // Display variants
    standardOffice: 'Mon–Fri: 8:00 AM – 6:00 PM',
    emergency: '24 hours a day, 7 days a week',
  },

  // ─── DOMAIN ──────────────────────────────────────────────────────
  domain: 'trustplumber.ca',
  url: 'https://trustplumber.ca',

  // ─── LICENSING & INSURANCE ───────────────────────────────────────
  // TODO: Add real license number from the Ontario plumbing licensing body
  // (College of Trades / Skilled Trades Ontario) before launch.
  licensing: {
    licenseNumber: null,                    // e.g. 'P.UMB-XXXXX' — leave null until verified
    licenseAuthority: 'Ontario',
    insurance: {
      hasInsurance: true,
      coverageAmount: null,                 // e.g. '$2,000,000' — leave null until verified
      coverageDisplay: 'Fully insured',
    },
    workmanshipGuarantee: {
      hasGuarantee: true,
      duration: null,                       // e.g. '2 years' — leave null until policy is finalized
      durationDisplay: 'Written workmanship guarantee',
    },
  },

  // ─── TRUST SIGNALS ───────────────────────────────────────────────
  // Display these ONLY if they are real, verifiable, and verifiable on the
  // platform itself. UI components check for null and hide the block if absent.
  // TODO: Verify these numbers reflect Trust Plumber specifically (not another business).
  trustSignals: {
    google: {
      rating: null,                         // e.g. 5.0 — leave null until verified for this business
      reviewCount: null,                    // e.g. 500 — leave null until verified
      profileUrl: null,                     // Link to Google Business profile
    },
    homestars: {
      rating: null,                         // e.g. 5.0
      reviewCount: null,
      profileUrl: null,
    },
    bbb: {
      rating: null,                         // e.g. 'A+'
      profileUrl: null,
    },
  },

  // ─── COMPANY STATS ───────────────────────────────────────────────
  // TODO: Verify these reflect Trust Plumber. Do not display unverified figures.
  stats: {
    yearsInBusiness: null,                  // e.g. 20
    technicianCount: null,                  // e.g. 30
    foundedYear: null,                      // e.g. 2004
  },

  // ─── SOCIAL ──────────────────────────────────────────────────────
  // Only include real, active profiles. Empty values hide the icon.
  social: {
    facebook: null,
    instagram: null,
    youtube: null,
    linkedin: null,
    google: null,
    homestars: null,
  },

  // ─── BRANDING ────────────────────────────────────────────────────
  branding: {
    logoLight: '/logo.svg',                 // Used on light backgrounds
    logoDark: '/logo-white.svg',            // Used on navy/dark backgrounds
    favicon: '/favicon.svg',
    // OG image for social sharing — 1200x630
    ogImage: '/og-default.jpg',
  },

  // ─── SERVICE AREA ────────────────────────────────────────────────
  primaryRegion: 'Toronto & the GTA',
  primaryRegionLong: 'Toronto and the Greater Toronto Area',
  province: 'Ontario',
  provinceCode: 'ON',
}

/**
 * Helper: returns true if any TODO placeholders are still visible.
 * Use in dev to console.warn so we don't ship with fake data.
 */
export function hasPlaceholderData() {
  return business.phone.isPlaceholder ||
    business.licensing.licenseNumber === null ||
    business.licensing.insurance.coverageAmount === null
}

export default business
